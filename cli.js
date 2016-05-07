#!/usr/bin/env node

var spawn = require('child_process').spawn

var repo = process.argv[2] || require('./package.json').name
if (!repo && process.argv.length !== 3) {
  console.log('USAGE: generate-readme REPO')
  process.exit(0)
}

var cmd = 'cat ' + __dirname + '/template.md | sed "s/REPO/' + repo + '/g"'
var s = spawn('sh', ['-c', cmd])
s.stdout.pipe(process.stdout)
