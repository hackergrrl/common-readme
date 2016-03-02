#!/usr/bin/env node

var spawn = require('child_process').spawn

var s = spawn('cat', [__dirname + '/' + 'template.md', '|', 'sed', '"s/REPO/${1}/g"'])
s.stdout.pipe(process.stdout)
