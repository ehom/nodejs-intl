#!/usr/bin/env node

const fs = require('fs');

// get List of Intl objects supported
const supportedObjects = new Set(Object.getOwnPropertyNames(Intl));

let tableOfNames = {
  'DateTimeFormat': false,
  'RelativeTimeFormat': false,
  'NumberFormat': false,
  'Collator': false,
  'PluralRules': false,
  'ListFormat': false,
  'Locale': false,
  'getCanonicalLocales': false
};

// console.debug(tableOfNames);
// console.debug(supportedObjects);

for (const name of Object.keys(tableOfNames)) {
  tableOfNames[name] = supportedObjects.has(name);
}

tableOfNames['Node.js'] = {version: process.version, date: new Date().toISOString()};

console.debug(tableOfNames);

const content = JSON.stringify(tableOfNames, null, 2);

fs.writeFileSync('./nodejs.json', content, 'utf-8');
