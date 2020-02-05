// Accepts input of any filename, ie. node test.js README.md

const fs = require('fs');
var colors = require('colors/safe');
let licenses = new Set();
const pr = process.env.TRAVIS_PULL_REQUEST

let fails = ''
// Reads argv into var file
const file = fs.readFileSync(process.argv[2], 'utf8'); 

// Function to find lines with entries
function entryFilter(md) { 
  const linepatt = /^\s{0,2}-\s\[.*`/;
  return linepatt.test(md);
}

// Function to find lines with licenses
function licenseFilter(md) {
  const linepatt = /^- `.*` - .*/;
  return linepatt.test(md)
}

// Function to split lines into array
function split(text) { 
  return text.split(/\r?\n/);
}

// All entries should match this pattern.  If matches pattern returns true.
function findPattern(text) { 
  const patt = /^\s{0,2}-\s\[.*?\]\(.*?\) (`⚠` )?- .{0,249}?\.( \(\[(Demo|Source Code|Clients)\]\([^)]*\)(, \[(Source Code|Clients)\]\([^)]*\))?(, \[(Source Code|Clients)\]\([^)]*\))*\))? \`.*?\` \`.*?\`$/;
  if (patt.test(text) === true) {
    return true;
  } 
  return false;
}

// Parses SPDX identifiers from list of licenses
function parseLicense(md) {
  const patt = /^- `(.*)` - .*/
  return patt.exec(md)[1]
}

//Tests '- [Name](http://homepage/)'
function testMainLink(text) { 
  let testA = /(^ {0,2}- \[.*?\]\(.*\))(?=.?-? ?\w)/;
  const testA1 = /(- \[.*?\]?\(?.*?\)?)( .*$)/;
    if (testA.test(text) === false) {
    let a1 = testA1.exec(text)[2];
    return colors.red.underline(text.replace(a1, ''))
  }
  return colors.green(testA.exec(text)[1])
}

//Tests  '`⚠` - Short description, less than 250 characters.'
function testDescription(text) { 
  const testB = /( - .*\. )(?:(\(?\[?|\`))/;
  const testA1 = /(- \[.*?\]?\(?.*?\)?)( .*$)/;
  const testB2 = /((\(\[|\`).*$)/;
  if (testB.test(text) === false) {
    let b1 = testA1.exec(text)[1];
    let b2 = testB2.exec(text)[1];
    return colors.red.underline(text.replace(b1, '').replace(b2, ''))
  } 
  return colors.green(testB.exec(text)[1])
}

//If present, tests '([Demo](http://url.to/demo), [Source Code](http://url.of/source/code), [Clients](https://url.to/list/of/related/clients-or-apps))'
function testSrcDemCli(text) { 
  let testC = text.search(/\(\[|\)\,|\)\)/);
  let testD = /(?<=\w. )(\(\[(Demo|Source Code|Clients)\]\([^)]*\)(, \[(Source Code|Clients)\]\([^)]*\))?(, \[(Source Code|Clients)\]\([^)]*\))*\))(?= \`?)/;
  const testD1 = /(^.*\.)(?= )/;
  const testD2 = /(\`.*\` \`.*\`$)/;
  if ((testC > -1) && (testD.test(text) === false)) {
    let d1 = testD1.exec(text)[1];
    let d2 = testD2.exec(text)[1];
    return colors.red.underline(text.replace(d1+' ', '').replace(d2, ''))
} else if (testC > -1) {
  return colors.green(testD.exec(text)[1])
}
return ""
}

// Tests '`License` `Language`'
function testLangLic(text) { 
  const testD2 = /(\`.*\` \`.*\`$)/;
  let testE = testD2.test(text);
  const testE1 = /(^[^`]*)/;
  if (testE === false) {
    let e1 = testE1.exec(text)[1];
    return colors.red.underline(text.replace(e1, ''))
  }
  return colors.green(testD2.exec(text)[1])
}

//Runs all the syntax tests...
function findError(text) {
  let res
  res = testMainLink(text)
  res += testDescription(text)
  res += testSrcDemCli(text)
  res += testLangLic(text)
  return res + `\n`
}
//Check if license is in the list of licenses.
function testLicense(md) {
  const regex = /.*\`(.*)\` \`.*\`$/;
  return licenses.has(regex.exec(md)[1])
}

//Parses name from entry
function parseName(md) {
  const regex = /^\W*(.*?)\W/
  return regex.exec(md)[1]
}

//Returns line number if this is not a PR
function isPr(l) {
  if (pr === 'false') {
    return `Line ${l}: `
  }
  return ''
}

function entryErrorCheck(md) {
  const lines = split(md); // Inserts each line into the entries array
  let totalFail = 0;
  let totalPass = 0;
  let total = 0;
  let failed = [];
  let entries = [];
  if (lines[0] === "") {
    console.log(colors.red("0 Entries Found"))
    process.exit(0)
  }
  for (let i = 0; i < lines.length; i ++) { // Loop through array of lines
    if (entryFilter(lines[i]) === true) { // filter out lines that don't start with * [)
      total += 1;
      e = {};
      e.raw = lines[i];
      e.line = i
      entries.push(e);
/*       if (findPattern(lines[i])) { // If entry passes increment totalPass counter
        totalPass += 1;
      } else {

          failed.push(findError(lines[i]))
          totalFail += 1; // If entry fails increment totalFail counter and append error to issuelog
          fails += `${lines[i]} \n\n`;
      } */
    } else if (licenseFilter(lines[i]) === true) {
      licenses.add(parseLicense(lines[i]))
    }
  }
  for (let e of entries) {
    e.pass = true
    e.name = parseName(e.raw)
    if (!findPattern(e.raw)) {
      e.highlight = findError(e.raw);
      e.pass = false;
      console.log(`${colors.yellow(isPr(e.line))}${e.highlight}`)
    }
    e.licenseTest = testLicense(e.raw);
    if (e.licenseTest === false) {
      e.pass = false;
      console.log(colors.yellow(`${isPr(e.line)}${e.name}'s license is not on License list.`))
    }
    if (e.pass) {
      totalPass++
    } else {
      totalFail++
    }
  }
  

  if (totalFail > 0) {
    console.log(colors.blue(`\n-----------------------------\n`))
    console.log(colors.green("The portion of the entry with an error ") + colors.underline.red("will be underlined and RED") + `\n`)
    for (let i = 0; i < failed.length; i++) {
      console.log(failed[i])
    }
    console.log(colors.blue(`\n-----------------------------\n`))
    console.log(colors.red(`${totalFail} Failed, `) + colors.green(`${totalPass} Passed, `) + colors.blue(`of ${total}`))
    console.log(colors.blue(`\n-----------------------------\n`))
    process.exit(1);
  } else {
    console.log(colors.blue(`\n-----------------------------\n`))
    console.log(colors.green(`${totalPass} Passed of ${total}`))
    console.log(colors.blue(`\n-----------------------------\n`))
    process.exit(0)
  }

  
}

entryErrorCheck(file);
