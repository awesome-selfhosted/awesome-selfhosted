const fs = require('fs');
var testStatus;

var file = fs.readFileSync('README.md', 'utf8')
entryErrorCheck(file);
return testStatus;

function entryErrorCheck(md) {
    var namepatt = /\*\s\[(.*?)\]/;
    var entries = split(md);
    var totalFail = 0;
    var totalPass = 0;
    var total = 0;
    var entryArray = [];
    for (var i = 0, len = entries.length; i < len; i++) {
        entryArray[i] = new Object;
        entryArray[i].raw = entries[i];
        //console.log(entries[i]);
        //console.log(entryArray[i].raw);
        //console.log(entryFilter(entries[i]));
        if (entryFilter(entries[i]) === true){
            total += 1;
            entryArray[i].name = namepatt.exec(entries[i])[1];
            //console.log('name' + entryArray[i].name);
            //entryArray[i].error = "";
            entryArray[i].pass = findPattern(entries[i], i);
            if (entryArray[i].pass == true) {
                totalPass += 1;
                //console.log(i + 1 + ". Pass: " + entryArray[i].name);
            } else {
                console.log("Line #" + i + 1 + ". Fail: " + entryArray[i].name);
                //console.log(entries[i]);
                totalFail += 1;
            }
        }
    }
            if (totalFail > 0) {
                console.log(totalFail + " Failed, " + totalPass + " Passed, of " + total);
                process.exit(1);
            } else {
                console.log(totalFail + " Failed, " + totalPass + " Passed, of " + total);
                process.exit(0);      
            }
        //console.log(entries[i])
        //console.log(totalPass + "|" + totalFail);
    
};

function entryFilter(md) {
    var linepatt = /^\s{0,4}\*\s\[.*\`/;
    return linepatt.test(md);
}

function split(text){
        //cutOne = text.split("<!-- BEGIN SOFTWARE LIST -->");
        //cutTwo = cutOne[1].split("<!-- END SOFTWARE LIST -->");
        //cutThree = cutTwo[0].replace(/^\#.*$|^\_.*$|^See.*$|^Some.*$|^\*.*\*$|^\s\*.*\*$|^CMS.*$|^\*\*\[.*$/mg, "");
        return text.split(/\r?\n/);
}

function parseMD(md) {
    return split(md).filter(entryFilter);
    //console.log(entries);
    //console.log (entries.length);
    //console.log(entries[0]);
    //console.log(entries[entries.length - 1]);
}

function findPattern(text, i) {
    var nodnospatt = /\s{0,3}\*\s\[(.*?)\]\((.*?)\)\s\-\s(.{0,249}?\.\s)\`(.*?)\`\s\`(.*?)\`/; //Regex for entries with no demo and no source code
    var slpatt = /\s{0,3}\*\s\[(.*?)\]\((.*?)\)\s\-\s(.{0,249}?\.\s)\(\[Demo\b\]\((.*?)\)\,\s\[Source Code\b\]\((.*?)\)\)\s\`(.*?)\`\s\`(.*?)\`/; //Regex for entries with demo and source code
    var nodpatt = /\s{0,3}\*\s\[(.*?)\]\((.*?)\)\s\-\s(.{0,249}?\.\s)\(\[Source Code\]\((.*?)\)\)\s\`(.*?)\`\s\`(.*?)\`/; //Regex for entries with no demo
    var nospatt = /\s{0,3}\*\s\[(.*?)\]\((.*?)\)\s\-\s(.{0,249}?\.\s)\(\[Demo\]\((.*?)\)\)\s\`(.*?)\`\s\`(.*?)\`/; //Regex for entries with no source code
    var pnodnospatt = /\s{0,3}\*\s\[(.*?)\]\((.*?)\)\s\`(\⚠)\`\s\-\s(.{0,249}?\.\s)\`(.*?)\`\s\`(.*?)\`/; //Regex for entries with proprietary with no demo and no source code
    var pslpatt = /\s{0,3}\*\s\[(.*?)\]\((.*?)\)\s\`(\⚠)\`\s\-\s(.{0,249}?\.\s)\(\[Demo\b\]\((.*?)\)\,\s\[Source Code\b\]\((.*?)\)\)\s\`(.*?)\`\s\`(.*?)\`/; //Regex for entries with proprietary with demo and source code
    var pnodpatt = /\s{0,3}\*\s\[(.*?)\]\((.*?)\)\s\`(\⚠)\`\s\-\s(.{0,249}?\.\s)\(\[Source Code\]\((.*?)\)\)\s\`(.*?)\`\s\`(.*?)\`/; //Regex for entries with proprietary with no demo
    var pnospatt = /\s{0,3}\*\s\[(.*?)\]\((.*?)\)\s\`(\⚠)\`\s\-\s(.{0,249}?\.\s)\(\[Demo\]\((.*?)\)\)\s\`(.*?)\`\s\`(.*?)\`/; //Regex for entries with proprietary with no source code
    if (nodnospatt.test(text) == true) {
        return true;
    } else if (slpatt.test(text) == true) {
        return true;
    } else if (nodpatt.test(text) == true) {
        return true;
    } else if (nospatt.test(text) == true) {
        return true;
    } else if (pnodnospatt.test(text) == true) {
        return true;
    } else if (pslpatt.test(text) == true) {
        return true;
    } else if (pnodpatt.test(text) == true) {
        return true;
    } else if (pnospatt.test(text) == true) {
        return true;
    } else {
        //document.getElementById("alert").innerHTML = "Error(s) Found, check your syntax!";
        return false;
    }
};