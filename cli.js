#!/usr/bin/env node

var spawn = require('child_process').spawn
var fs = require('fs')
var path = require('path')
var camel = require('camelcase')
var args = require('minimist')(process.argv)

var pkg = require('./package.json') || {}

// one liner
var oneliner = pkg.description || 'one-liner description of the module'

// license
var license = args.l || args.license || pkg.license || null
if (!license) {
  console.error('no license set or found in package.json!')
  console.error()
  console.log('USAGE: generate-readme [-r|--repo REPO-NAME] [-l|--license LICENSE]')
  process.exit(1)
}

// repo name
var repo = args.r || args.repo || pkg.repo || null
if (!repo) {
  console.error('no repo name set or found in package.json!')
  console.error()
  console.error('USAGE: generate-readme [-r|--repo REPO-NAME] [-l|--license LICENSE]')
  process.exit(1)
}
var repoCamel = camel(repo)

// read the template and regex match templated vars
fs.readFileSync(path.join(__dirname, 'template.md')).toString().split('\n')
  .forEach(function (line) {
    line = line.replace(/\$\$REPO/, repo)
    line = line.replace(/\$\$rePo/, repoCamel)
    line = line.replace(/\$\$1LINER/, oneliner)
    line = line.replace(/\$\$ZEE_LICENSE/, license)
    line = line.replace(/\$\$r/, repo.charAt(0).toLowerCase())
    console.log(line)
  })
