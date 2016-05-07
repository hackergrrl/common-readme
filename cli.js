#!/usr/bin/env node

var spawn = require('child_process').spawn

var repo

var pkg = require('./package.json')
if (pkg && pkg.name) {
  repo = pkg.name
}

if (process.argv.length === 3) {
  repo = process.argv[2]
}

if (!repo && process.argv.length !== 3) {
  console.log('USAGE: generate-readme [repo-name]')
  process.exit(0)
}

var cmd = 'cat ' + __dirname + '/template.md | sed "s/REPO/' + repo + '/g"'
var s = spawn('sh', ['-c', cmd])
s.stdout.pipe(process.stdout)
