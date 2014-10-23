#! /usr/bin/env node

var watch = require('watch');
var exec = require('child_process').exec;
var program = require('commander');

program
  .option('-w, --watch <f>', 'Script or directory to watch')
  .option('-s, --script <s>', 'Script to execute e.g. path_to_enlightenment.rb')
  .option('-i, --interpreter <i>', 'Interpreter to use')
  .parse(process.argv);

var command = program.interpreter + ' ' + program.script;
var dashes = new Array(80).join('-');

function onChange(file, curr, prev) {
  exec(command, {timeout: 300}, function(err, stdout, stderr) {
    if (stderr) {
      console.log(stderr);
      console.log(dashes);
    } else {
      console.log(stdout);
      console.log(dashes);
    }
  });
}

watch.createMonitor(
  program.watch,
  {ignoreDotFiles: true},
  function(monitor) {
    monitor.on('changed', onChange);
  }
);
