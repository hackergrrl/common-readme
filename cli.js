#!/usr/bin/env node

var spawn = require('child_process').spawn
var fs = require('fs')
var path = require('path')

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

fs.readFileSync(path.join(__dirname, 'template.md')).toString().split('\n')
  .forEach(function (line) {
    line = line.replace(/REPO/, repo)
    console.log(line)
  })
