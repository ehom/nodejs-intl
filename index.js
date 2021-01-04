#!/usr/bin/env node

const fs = require('fs');

// get List of Intl objects supported

let tableOfNames = {
  "Intl.js": Object.getOwnPropertyNames(Intl),
  "Node.js": {
    version: process.version,
    date: new Date().toISOString()
  }
};

console.debug(tableOfNames);

const content = JSON.stringify(tableOfNames, null, 2);

fs.writeFileSync('./intljs.json', content, 'utf-8');
