const fs = require('fs')
var log = '{\n'
var issuelog = '  "message": "#### Syntax Issues\\n\\n Name | Entry\\n----|----------------------\\n'

var file = fs.readFileSync(process.argv[2], 'utf8')
entryErrorCheck(file)

function entryErrorCheck (md) {
  var namepatt = /\*\s\[(.*?)\]/
  var entries = split(md)
  var totalFail = 0
  var totalPass = 0
  var total = 0
  var entryArray = []
  for (var i = 0, len = entries.length; i < len; i++) {
    entryArray[i] = new Object;
    entryArray[i].raw = entries[i]
    if (entryFilter(entries[i]) === true) {
      total += 1
      entryArray[i].name = namepatt.exec(entries[i])[1]
      entryArray[i].pass = findPattern(entries[i])
      if (entryArray[i].pass === true) {
        totalPass += 1
      } else {
        console.log(entryArray[i].name + 'Failed.')
        // entryArray[i].error = findError(entries[i]) //WIP
        totalFail += 1
        issuelog += entryArray[i].name + ' | ' + entries[i] + '\\n'
      }
    }
  }
  if (totalFail > 0) {
    console.log(totalFail + ' Failed, ' + totalPass + ' Passed, of ' + total)
    log += '  "error": true,\n  "title": "Found ' + totalFail + ' entries with syntax error(s).",\n'
    fs.writeFileSync('syntaxcheck.json', log + issuelog + '"\n}')
    process.exit(1)
  } else {
    console.log(totalFail + ' Failed, ' + totalPass + ' Passed, of ' + total + '\n')
    log += '  "error": false\n}'
    fs.writeFileSync('syntaxcheck.json', log)
    process.exit(0)
  }
};

function entryFilter (md) {
  var linepatt = /^\s{0,4}\*\s\[.*`/
  return linepatt.test(md)
}

function split (text) {
  return text.split(/\r?\n/)
}

// function parseMD(md) {
  // return split(md).filter(entryFilter);
// }

function findPattern (text) {
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
// WIP
function findError (entry) {
  var fixedEntry = entry
  if (/\s{0,4}\*\s\[.*?\]\(http.*?\)/.test(entry) === false) { // Fix * site name/URL
    console.log('marker2')
    entry.replace(/^(\s*)\**\s*\[*([^()\[\]]*?)\]*\s*\(*(https*:\/\/[^ )]{1,})(\)*\s*`*⚠`*\s*-*\s*|\)*\s*-*\s*)(.*)/gi, function (match, p1, p2, p3, p4, p5) {
      console.log('Error in [Name](URL)')
      if (/⚠/.test(entry) === true) {
        fixedEntry = p1 + '* [' + p2 + '](' + p3 + ') `⚠` - ' + p5
      } else {
        fixedEntry = p1 + '* [' + p2 + '](' + p3 + ') - ' + p5
      }
      console.log('Fixed: ' + fixedEntry)
    })
  }
  if (/\s-\s/.test(entry) === false) {
    console.log('marker3')
    entry.replace(/(\s{0,3}\*\s\[.*?\]\(.*?\))(\s*`*⚠`*\s*-*\s*|\s*`*⚠`*\s*-*|`*⚠`*\s*-*\s*|`*⚠`*-*|\s*|\s*-*\s*|\s*-*|-*\s*|-*|\s*)(.{0,249}?\.)(.*)/gi, function (match, p1, p2, p3, p4) { // Fix space - space between link and descrition
      console.log('Missing ` - ` between Site link and description.')
      if (/⚠/.test(entry) === true) {
        fixedEntry = p1 + ' `⚠` - ' + p3 + p4
      } else {
        fixedEntry = p1 + ' - ' + p3 + p4
      }
      console.log('Fixed: ' + fixedEntry)
    })
  }
  if (/^\s{0,4}\*\s\[.*?\]\(.*?\).*?(\s\.|\)\)\s)`.*?`\s`.*?`/.test(entry) === false) {
    console.log('marker4')
    entry.replace(/^(\s*\*\s.*?\)\)|.*?\s\-\s.*?\.)(\s*`*\s*)(.*?)(\s*`\s*`\s*|\s*`\s*`*\s*|\s*`*\s*`\s*|\s)(.*?)`/gi, function (match, p1, p2, p3, p4, p5) { // Fix License and Language
      console.log('Issue in Language or License')
      fixedEntry = p1 + ' `' + p3 + '` `' + p5 + '`'
      console.log('Fixed: ' + fixedEntry)
    })
  } else if (/demo/i.test(entry) === true) {

  } else if (/source/i.test(entry) === true) {

  }
  console.log(findPattern(fixedEntry))
  // if (findPattern(fixedEntry) === false) {
    // findError(fixedEntry) // If it's not fixed let's try again.
  // }
}

// else if (/source/i.test(entry) === true && /demo/i.test(entry) === true) {
