#!/usr/bin/env node

'use strict';
var repreprep = require('..')
  , path = require('path')
  , log = require('../lib/log')
  , fs = require('fs');
  
var dirToWatch = process.argv[2];
if (dirToWatch && (!fs.existsSync(dirToWatch) || !fs.lstatSync(dirToWatch).isDirectory())){
	log.error("'" + dirToWatch + "'" +  ' is invalid. Provide an existing directory, please');
	process.exit();
}

var root = process.argv.length > 2 ? path.resolve(process.argv[2]) : null;

repreprep(root);
