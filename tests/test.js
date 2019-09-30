// Accepts input of any filename, ie. node test.js README.md

const fs = require('fs');

let log = '{\n';
let issuelog = '  "message": "#### Syntax Issues\\n\\n Name | Entry\\n----|----------------------\\n';
let fails = ''
const file = fs.readFileSync(process.argv[2], 'utf8'); // Reads argv into var file

function entryFilter(md) { // Function to find lines with entries
  const linepatt = /^\s{0,2}-\s\[.*`/;
  return linepatt.test(md);
}

function split(text) { // Function to split lines into array
  return text.split(/\r?\n/);
}

function findPattern(text) { // Test entries against 8 patterns.  If matches pattern returns true
  const nodnospatt = /^\s{0,2}-\s\[.*?\]\(.*?\) - .{0,249}?\. `.*?` `.*?`/; // Regex for entries with no demo and no source code
  const slpatt = /^\s{0,2}-\s\[.*?\]\(.*?\) - .{0,249}?\. \(\[Demo\b\]\(.*?\), \[Source Code\b\]\(.*?\)\) `.*?` `.*?`/; // Regex for entries with demo and source code
  const nodpatt = /^\s{0,2}-\s\[.*?\]\(.*?\) - .{0,249}?\. \(\[Source Code\]\(.*?\)\) `.*?` `.*?`/; // Regex for entries with no demo
  const nospatt = /^\s{0,2}-\s\[.*?\]\(.*?\) - .{0,249}?\. \(\[Demo\]\(.*?\)\) `.*?` `.*?`/; // Regex for entries with no source code
  const pnodnospatt = /^\s{0,2}-\s\[.*?\]\(.*?\) `⚠` - .{0,249}?\. `.*?` `.*?`/; // Regex for entries with proprietary with no demo and no source code
  const pslpatt = /^\s{0,2}-\s\[.*?\]\(.*?\) `⚠` - .{0,249}?\. \(\[Demo\b\]\(.*?\), \[Source Code\b\]\(.*?\)\) `.*?` `.*?`/; // Regex for entries with proprietary with demo and source code
  const pnodpatt = /^\s{0,2}-\s\[.*?\]\(.*?\) `⚠` - .{0,249}?\. \(\[Source Code\]\(.*?\)\) `.*?` `.*?`/; // Regex for entries with proprietary with no demo
  const pnospatt = /^\s{0,2}-\s\[.*?\]\(.*?\) `⚠` - .{0,249}?\. \(\[Demo\]\(.*?\)\) `.*?` `.*?`/; // Regex for entries with proprietary with no source code
  if (nodnospatt.test(text) === true) {
    return true;
  } else if (slpatt.test(text) === true) {
    return true;
  } else if (nodpatt.test(text) === true) {
    return true;
  } else if (nospatt.test(text) === true) {
    return true;
  } else if (pnodnospatt.test(text) === true) {
    return true;
  } else if (pslpatt.test(text) === true) {
    return true;
  } else if (pnodpatt.test(text) === true) {
    return true;
  } else if (pnospatt.test(text) === true) {
    return true;
  }
  return false;
}

function entryErrorCheck(md) {
  const namepatt = /^\s{0,2}-\s\[(.*?)\]/; // regex pattern to find name of entryArray
  const entries = split(md); // Inserts each line into the entries array
  let totalFail = 0;
  let totalPass = 0;
  let total = 0;
  const entryArray = [];
  if (entries[0] === "") {
    console.log("0 Entries")
    process.exit(0)
  }
  for (let i = 0, len = entries.length; i < len; i += 1) { // Loop to create array of objects
    entryArray[i] = new Object;
    entryArray[i].raw = entries[i];
    if (entryFilter(entries[i]) === true) { // filter out lines that don't with * [)
      total += 1;
      entryArray[i].name = namepatt.exec(entries[i])[1]; // Parses name of entry
      entryArray[i].pass = findPattern(entries[i]); // Tests against known patterns
      if (entryArray[i].pass === true) { // If entry passes increment totalPass counter
        totalPass += 1;
      } else {
        console.log(`${entryArray[i].name} Failed.`); // If entry fails increment totalFail counter and append error to issuelog
        // entryArray[i].error = findError(entries[i]) //WIP
        totalFail += 1;
        issuelog += `${entryArray[i].name} | ${entries[i]} \\n`;
        fails += `${entries[i]} \n\n`;
      }
    }
  }
  if (totalFail > 0) { // Logs # passed & failed to console, and failures to syntaxcheck.json
    console.log(`${totalFail} Failed, ${totalPass} Passed, of ${total}\n-----------------------------`);
    console.log(fails)
    log += ` "error": true,\n  "title": "Found ${totalFail} entries with syntax error(s).",\n`;
    fs.writeFileSync('syntaxcheck.json', `${log} ${issuelog} "\n}`);
    process.exit(1);
  } else { // Logs # of entries passed to console and error: false to syntaxcheck.json
    console.log(`${totalFail} Failed, ${totalPass} Passed, of ${total} \n`);
    log += '  "error": false\n}';
    fs.writeFileSync('syntaxcheck.json', log);
    process.exit(0);
  }
}

entryErrorCheck(file);
