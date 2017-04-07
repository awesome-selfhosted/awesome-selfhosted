//Accepts input of any filename, ie. node test.js README.md

const fs = require('fs')
var log = '{\n' //Initializes log to be written to syntax.json
var issuelog = '  "message": "#### Syntax Issues\\n\\n Name | Entry\\n----|----------------------\\n' // Title and gh markdown table header to be appended to syntaxcheck.json

var file = fs.readFileSync(process.argv[2], 'utf8')  //Reads argv into var file
entryErrorCheck(file)  

function entryErrorCheck (md) {
  var namepatt = /\*\s\[(.*?)\]/ // regex pattern to find name of entryArray
  var entries = split(md) //Inserts each line into the entries array
  //initialize conuts to 0
  var totalFail = 0
  var totalPass = 0
  var total = 0

  var entryArray = []
  for (var i = 0, len = entries.length; i < len; i++) { // Loop through entries array to create array of objects
    entryArray[i] = new Object;
    entryArray[i].raw = entries[i]
    if (entryFilter(entries[i]) === true) {  //filter out lines that are not entries (Looks for lines starting with * [)
      total += 1
      entryArray[i].name = namepatt.exec(entries[i])[1] //Parses name of entry
      entryArray[i].pass = findPattern(entries[i]) //Tests against known patterns
      if (entryArray[i].pass === true) { //If entry passes increment totalPass counter
        totalPass += 1
      } else {
        console.log(entryArray[i].name + 'Failed.') //If entry fails increment totalFail counter and append error to issuelog
        totalFail += 1
        issuelog += entryArray[i].name + ' | ' + entries[i] + '\\n'
      }
    }
  }
  if (totalFail > 0) { //Logs # passed and failed to console, and entry failures to syntaxcheck.json
    console.log(totalFail + ' Failed, ' + totalPass + ' Passed, of ' + total)
    log += '  "error": true,\n  "title": "Found ' + totalFail + ' entries with syntax error(s).",\n'
    fs.writeFileSync('syntaxcheck.json', log + issuelog + '"\n}')
    process.exit(1)
  } else { //Logs # of entries passed to console and error: false to syntaxcheck.json
    console.log(totalFail + ' Failed, ' + totalPass + ' Passed, of ' + total + '\n')
    log += '  "error": false\n}'
    fs.writeFileSync('syntaxcheck.json', log)
    process.exit(0)
  }
};

function entryFilter (md) { //Function to find lines with entries
  var linepatt = /^\s{0,4}\*\s\[.*`/
  return linepatt.test(md)
}

function split (text) { //Function to split lines into array
  return text.split(/\r?\n/)
}


function findPattern (text) { //Function to test entries against 8 known acceptable patterns.  If entry matches regex pattern returns true
  var nodnospatt = /\s{0,4}\*\s\[(.*?)\]\((.*?)\)\s\-\s(.{0,249}?\.\s)`(.*?)`\s`(.*?)`/ // Regex for entries with no demo and no source code
  var slpatt = /\s{0,4}\*\s\[(.*?)\]\((.*?)\)\s\-\s(.{0,249}?\.\s)\(\[Demo\b\]\((.*?)\),\s\[Source Code\b\]\((.*?)\)\)\s`(.*?)`\s`(.*?)`/ // Regex for entries with demo and source code
  var nodpatt = /\s{0,4}\*\s\[(.*?)\]\((.*?)\)\s\-\s(.{0,249}?\.\s)\(\[Source Code\]\((.*?)\)\)\s`(.*?)`\s`(.*?)`/ // Regex for entries with no demo
  var nospatt = /\s{0,4}\*\s\[(.*?)\]\((.*?)\)\s\-\s(.{0,249}?\.\s)\(\[Demo\]\((.*?)\)\)\s`(.*?)`\s`(.*?)`/ // Regex for entries with no source code
  var pnodnospatt = /\s{0,4}\*\s\[(.*?)\]\((.*?)\)\s`(⚠)`\s\-\s(.{0,249}?\.\s)`(.*?)`\s`(.*?)`/ // Regex for entries with proprietary with no demo and no source code
  var pslpatt = /\s{0,4}\*\s\[(.*?)\]\((.*?)\)\s`(⚠)`\s\-\s(.{0,249}?\.\s)\(\[Demo\b\]\((.*?)\),\s\[Source Code\b\]\((.*?)\)\)\s`(.*?)`\s`(.*?)`/ // Regex for entries with proprietary with demo and source code
  var pnodpatt = /\s{0,4}\*\s\[(.*?)\]\((.*?)\)\s`(⚠)`\s\-\s(.{0,249}?\.\s)\(\[Source Code\]\((.*?)\)\)\s`(.*?)`\s`(.*?)`/ // Regex for entries with proprietary with no demo
  var pnospatt = /\s{0,4}\*\s\[(.*?)\]\((.*?)\)\s`(⚠)`\s\-\s(.{0,249}?\.\s)\(\[Demo\]\((.*?)\)\)\s`(.*?)`\s`(.*?)`/ // Regex for entries with proprietary with no source code
  if (nodnospatt.test(text) === true) {
    return true
  } else if (slpatt.test(text) === true) {
    return true
  } else if (nodpatt.test(text) === true) {
    return true
  } else if (nospatt.test(text) === true) {
    return true
  } else if (pnodnospatt.test(text) === true) {
    return true
  } else if (pslpatt.test(text) === true) {
    return true
  } else if (pnodpatt.test(text) === true) {
    return true
  } else if (pnospatt.test(text) === true) {
    return true
  } else {
    return false
  }
};
