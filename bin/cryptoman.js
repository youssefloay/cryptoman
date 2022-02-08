#!/usr/bin/env node

const program = require('commander');
const pkg=require ('../package.json'); 

program
.version('1.0.0')
.command('key','Manage API KEY -- https://nomics.com')
.command('check','check coin price')
.parse (process.argv);


