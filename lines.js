var fs = require('fs');
var through = require('through2');
var split = require('split');
var line = 1;


var tr = through(function(buffer, _, next) {
    buffer = buffer.toString();
    if (line % 2 === 0) {
        this.push(buffer.toUpperCase() + '\n');
       
    }
    else {
        this.push(buffer.toLowerCase() + '\n');
       
    }
    line++;
    next();


});

process.stdin
  .pipe(split())
  .pipe(tr)
  .pipe(process.stdout);

  