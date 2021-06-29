// USAGE:
// node test.js -r README.md  (Checks whole file)
// node test.js -r README.md -d temp.md  (Checks just the diff)

const fs = require('fs');
const chalk = require('chalk');
let licenses = new Set();
let pr = false;
let readme;
let diff;
let mdOutput = [];

//Parse the command options and set the pr var
function parseArgs(args) {
  if ( args.indexOf('-r', 2) > 0 ) {
    readme = fs.readFileSync(args[args.indexOf('-r', 2)+1], 'utf8')
  }
  if (args.indexOf('-d', 2) > 0) {
    pr = true;
    diff = fs.readFileSync(args[args.indexOf('-d', 2)+1], 'utf8');
  }
  if ( pr === true) {
    console.log(chalk.blue(`Running on PR. README.md: ${args[args.indexOf('-r', 2)+1]} diff: ${args[args.indexOf('-d', 2)+1]}`))
  }
}

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
  const patt = /^\s{0,2}-\s\[.*?\]\(.*?\) (`⚠` )?- .{0,249}?\.( \(\[(Demo|Source Code|Clients)\]\([^)\]]*\)(, \[(Source Code|Clients)\]\([^)\]]*\))?(, \[(Source Code|Clients)\]\([^)\]]*\))*\))? \`.*?\` \`.*?\`$/m;
  if (patt.test(text) === true) {
    return true;
  } 
  console.log("Failed: "+text)
  return false;
}

// Parses SPDX identifiers from list of licenses
function parseLicense(md) {
  const patt = /^- `(.*)` - .*/
  return patt.exec(md)[1]
}

//Test '- [Name](http://homepage/)'
function testMainLink(text) { 
  let testA = /(^ {0,2}- \[.*?\]\([^)]*\.[^)]*?\))(?=\ ?\-?\ ?\w)/ // /(^ {0,2}- \[.*?\]\(.*\))(?=.?-? ?\w)/;
  const testA1 = /(- \W?\w*\W{0,2}.*?\)?)( .*$)/;
    if (!testA.test(text)) {
    let a1 = testA1.exec(text)[2];
    return [chalk.red(text.replace(a1, '')), '🢂' + text.replace(a1, '') + '🢀']
  }
  return [chalk.green(testA.exec(text)[1]), testA.exec(text)[1]]
}

//Test  '`⚠` - Short description, less than 250 characters.'
function testDescription(text) { 
  const testB = /( - .*\. )(?:(\(?\[?|\`))/;
  const testA1 = /(- \W?\w*\W{0,2}.*?\)?)( .*$)/;
  const testB2 = /((\(\[|\`).*$)/;
  if (!testB.test(text)) {
    let b1 = testA1.exec(text)[1];
    let b2 = testB2.exec(text)[1];
    return [chalk.red(text.replace(b1, '').replace(b2, '')), '🢂' + text.replace(b1, '').replace(b2, '') + '🢀' ]
  } 
  return [chalk.green(testB.exec(text)[1]), testB.exec(text)[1]]
}

//If present, tests '([Demo](http://url.to/demo), [Source Code](http://url.of/source/code), [Clients](https://url.to/list/of/related/clients-or-apps))'
function testSrcDemCli(text) { 
  let testC = text.search(/\.\ \(|\.\ \[|\ \(\[[sSdDcC]/); //    /\(\[|\)\,|\)\)/);
  let testD = /(?<=\w. )(\(\[(Demo|Source Code|Clients)\]\([^)\]]*\)(, \[(Source Code|Clients)\]\([^)\]]*\))?(, \[(Source Code|Clients)\]\([^)\]]*\))*\) )(?=\`?)/;
  const testD1 = /(^- \W[a-zA-Z0-9-_ .]*\W{0,2}http[^\[]*)(?<= )/;
  const testD2 = /\ ?(\`.*\` \`.*\`$)/;
  if ((testC > -1) && (!testD.test(text))) {
    let d1 = testD1.exec(text)[1];
    let d2 = testD2.exec(text)[1];
    return [chalk.red(text.replace(d1, '').replace(d2, '')), '🢂' + text.replace(d1, '').replace(d2, '') + '🢀']
} else if (testC > -1) {
  return [chalk.green(testD.exec(text)[1]), testD.exec(text)[1]]
}
return ""
}

// Tests '`License` `Language`'
function testLangLic(text) { 
  const testD2 = /(\`.*\` \`.*\`$)/;
  let testE = testD2.test(text);
  const testE1 = /(^[^`]*)/;
  if (!testE) {
    let e1 = testE1.exec(text)[1];
    return [chalk.red(text.replace(e1, '')), '🢂' + text.replace(e1, '') + '🢀']
  }
  return [chalk.green(testD2.exec(text)[1]), + testD2.exec(text)[1]]
}

//Runs all the syntax tests...
function findError(text) {
  resMainLink = testMainLink(text)
  resDesc= testDescription(text)
  resSrcDemCli= testSrcDemCli(text)
  resLangLic= testLangLic(text)
  return [resMainLink[0] + resDesc[0] + resSrcDemCli[0] + resLangLic[0] + `\n`, '```' + resMainLink[1] + resDesc[1] + resSrcDemCli[1] + resLangLic[1] + '```']
}

//Check if license is in the list of licenses.
function testLicense(md) {
  let pass = true;
  let lFailed = []
  let lPassed = []
  const regex = /.*?\`([a-zA-Z0-9\-\./]*)\`.+$/;
  try {  
    for (l of regex.exec(md)[1].split("/")) {
      if (!licenses.has(l)) {
        pass = false;
        lPassed.push(l)
      }
      lFailed.push(l)
    }
  }
  catch(err) {
    console.log(chalk.yellow("Error in License syntax, license not checked against list."))
    return [false, "", ""]
  }
  return [pass, lFailed, lPassed]
}


//Parses name from entry
function parseName(md) {
  const regex = /^\W*(.*?)\W/
  return regex.exec(md)[1]
}

function entryErrorCheck() {
  const lines = split(readme); // Inserts each line into the entries array
  let totalFail = 0;
  let totalPass = 0;
  let total = 0;
  let entries = [];
  let diffEntries = [];

  if (lines[0] === "") {
    console.log(chalk.red("0 Entries Found, check your commandline arguments"))
    process.exit(0)
  }
  for (let i = 0; i < lines.length; i ++) { // Loop through array of lines
    if (entryFilter(lines[i]) === true) { // filter out lines that don't start with * [)
      e = {};
      e.raw = lines[i];
      e.line = i + 1
      entries.push(e);
    } else if (licenseFilter(lines[i]) === true) {
      licenses.add(parseLicense(lines[i]))
    }
  }

  if (pr === true) {
    console.log(chalk.cyan("Only testing the diff from the PR.\n"))
    const diffLines = split(diff); // Inserts each line of diff into an array
    for (let l of diffLines) {
      if (entryFilter(l) === true) { // filter out lines that don't start with * [)
      e = {};
      e.raw = l;
      diffEntries.push(e);
      } else if (licenseFilter(l) === true) {
        licenses.add(parseLicense(l))
      }
    }
    if (diffEntries.length === 0) {
      console.log("No entries changed in README.md, Exiting...")
      process.exit(0)
    }
    total = diffEntries.length
    for (let e of diffEntries) {
      e.pass = true
      e.name = parseName(e.raw)
      if (!findPattern(e.raw)) {
        errorRes = findError(e.raw);
        e.highlight = errorRes[0];
        e.pass = false;
        console.log(e.highlight)
      }
      e.licenseTest = testLicense(e.raw);
      if (!e.licenseTest) {
        e.pass = false;
        console.log(chalk.red(`${e.name}'s license is not on the License list.`))
      }
      if (e.pass) {
        totalPass++
      } else {
        totalFail++
      }
   }
   
  } else {
    console.log(chalk.cyan("Testing entire README.md\n"))
    total = entries.length
    for (let e of entries) {
      e.pass = true
      e.name = parseName(e.raw)
      if (!findPattern(e.raw)) {
        errorRes = findError(e.raw);
        e.highlight = errorRes[0];
        mdOutput.push("* [ ] Line: " + e.line + ": " + e.name + "\n" + errorRes[1]);
        e.pass = false;
        console.log(`${chalk.yellow(e.line + ": ")}${e.highlight}`);
        syntax = e.highlight;
      }
      e.licenseTest = testLicense(e.raw);
      if (!e.licenseTest[0]) {
        e.pass = false;
        console.log(chalk.yellow(e.line + ": ") + `${e.name}'s license ${chalk.red(`'${e.licenseTest[1]}'`)} is not on the License list.\n`)
        mdOutput.push("* [ ] Line: " + e.line + "\n" + e.name + "'s license is not on the License list.")
      }
      if (e.pass) {
        totalPass++
      } else {
        totalFail++
      }
    }
  }
  if (totalFail > 0) {
    console.log(chalk.blue(`\n-----------------------------\n`))
    console.log(chalk.red(`${totalFail} Failed, `) + chalk.green(`${totalPass} Passed, `) + chalk.blue(`of ${total}`))
    console.log(chalk.blue(`\n-----------------------------\n`))
    fs.writeFileSync('syntax_check.md', `--------------------\n### Syntax Checks\n#### ${totalFail} Failed, ${totalPass} Passed, of ${total}.\n`)
    mdOutput.forEach(element => {
      fs.appendFileSync('syntax_check.md', `${element}\n`)
    }); 
    process.exit(1);
  } else {
    console.log(chalk.blue(`\n-----------------------------\n`))
    console.log(chalk.green(`${totalPass} Passed of ${total}`))
    console.log(chalk.blue(`\n-----------------------------\n`))
    process.exit(0)
  }
}

parseArgs(process.argv)
entryErrorCheck();
