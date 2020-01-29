// Accepts input of any filename, ie. node test.js README.md

const fs = require('fs');
var colors = require('colors/safe');

let fails = ''
const file = fs.readFileSync(process.argv[2], 'utf8'); // Reads argv into var file

function entryFilter(md) { // Function to find lines with entries
  const linepatt = /^\s{0,2}-\s\[.*`/;
  return linepatt.test(md);
}

function split(text) { // Function to split lines into array
  return text.split(/\r?\n/);
}

function findPattern(text) { // All entries should match this pattern.  If matches pattern returns true.
  const patt = /^\s{0,2}-\s\[.*?\]\(.*?\) (`⚠` )?- .{0,249}?\.( \(\[(Demo|Source Code|Clients)\]\([^)]*\)(, \[(Source Code|Clients)\]\([^)]*\))?(, \[(Source Code|Clients)\]\([^)]*\))*\))? \`.*?\` \`.*?\`$/;
  if (patt.test(text) === true) {
    return true;
  } 
  return false;
}
function findError(text) {
  let testA = /(^ {0,2}- \[.*?\]\(.*\))(?=.?-? ?\w)/;
  const testA1 = /(- \[.*?\]?\(?.*?\)?)( .*$)/;
  let testB = /( - .*\. )(?:(\(?\[?|\`))/;
  //const testB1 = /(^ {0,2}- \[.*?\]\(.*?\))(?: -)/;
  const testB2 = /((\(\[|\`).*$)/;
  let testC = text.search(/\(\[|\)\,|\)\)/);
  let testD = /(?<=\w. )(\(\[(Demo|Source Code|Clients)\]\([^)]*\)(, \[(Source Code|Clients)\]\([^)]*\))?(, \[(Source Code|Clients)\]\([^)]*\))*\))(?= \`?)/;
  const testD1 = /(^.*\.)(?= )/;
  const testD2 = /(\`.*\` \`.*\`$)/;
  let testE = testD2.test(text);
  const testE1 = /(^[^`]*)/;
  let res
  if (testA.test(text) === false) {
    let a1 = testA1.exec(text)[2];
    res = colors.red.underline(text.replace(a1, ''))
  } else {
    res = colors.green(testA.exec(text)[1])
  }
  if (testB.test(text) === false) {
    let b1 = testA1.exec(text)[1];
    let b2 = testB2.exec(text)[1];
    res += colors.red.underline(text.replace(b1, '').replace(b2, ''))
  } else {
    res += colors.green(testB.exec(text)[1])
  }
  if ((testC > -1) && (testD.test(text) === false)) {
      let d1 = testD1.exec(text)[1];
      let d2 = testD2.exec(text)[1];
      res += colors.red.underline(text.replace(d1+' ', '').replace(d2, ''))
  } else if (testC > -1) {
    res += colors.green(testD.exec(text)[1])
  }
  if (testE === false) {
    let e1 = testE1.exec(text)[1];
    res += colors.red.underline(text.replace(e1, ''))
  } else {
    res += colors.green(testD2.exec(text)[1])
  }
  return res + `\n`
}

function entryErrorCheck(md) {
  const entries = split(md); // Inserts each line into the entries array
  let totalFail = 0;
  let totalPass = 0;
  let total = 0;
  const entryArray = [];
  let failed = [];
  if (entries[0] === "") {
    console.log(colors.red("0 Entries"))
    process.exit(0)
  }
  for (let i = 0, len = entries.length; i < len; i += 1) { // Loop to create array of objects
    entryArray[i] = new Object;
    entryArray[i].raw = entries[i];
    if (entryFilter(entries[i]) === true) { // filter out lines that don't start with * [)
      total += 1;
      entryArray[i].pass = findPattern(entries[i]); // Tests against known patterns

      if (entryArray[i].pass === true) { // If entry passes increment totalPass counter
        totalPass += 1;
      } else {

          failed.push(findError(entries[i]))
          totalFail += 1; // If entry fails increment totalFail counter and append error to issuelog
          fails += `${entries[i]} \n\n`;
      }
    }
  }
  if (totalFail > 0) {
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
