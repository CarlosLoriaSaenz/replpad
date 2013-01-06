// miscellaneous commands

'use strict';
var fs = require('fs')
  , state = require('../state')
  , log = require('../log');

module.exports = function commands(repl) {
  repl.defineCommand('comp', {
      help: 'Toggles if code is compacted before being sourced in the repl. [Default off]'
    , action: function (toggle) { 
        switch(toggle.toLowerCase()) {
          case '': 
          case 'on': 
            state.format.compact = true; 
            log.info('Compact code on.');
            break;
          case 'off': 
            state.format.compact = false; 
            log.info('Compact code off.');
            break;
          default:
            log.error('Need to supply on or off as argument. Example: .comp on');
        }
        repl.displayPrompt();
      }
  });

  repl.defineCommand('syntax', {
      help: 'Toggles if code is printed syntax highighted before being sourced in the repl. [Default on]'
    , action: function (toggle) { 
        switch(toggle.toLowerCase()) {
          case '': 
          case 'on': 
            state.highlight = true; 
            log.info('Syntax highlight code on.');
            break;
          case 'off': 
            state.highlight = false; 
            log.info('Syntax highlight code off.');
            break;
          default:
            log.error('Need to supply on or off as argument. Example: .syntax on');
        }
        repl.displayPrompt();
      }
  });
};