#!/usr/bin/env node

var spawn = require('child_process').spawn
var fs = require('fs')
var path = require('path')
var camel = require('camelcase')
var args = require('minimist')(process.argv)

if (args.h || args.help) {
  usage()
  console.error()
  console.error('Generate a readme for your node module.')
  process.exit(1)
}

function usage () {
  console.error()
  console.log('USAGE: common-readme [-r|--repo REPO-NAME] [-l|--license LICENSE]')
}

var checkPkg = fs.existsSync(path.join(process.cwd(), 'package.json')) || args.l || args.license || args.r || args.repo || null

if (!checkPkg) {
  console.error('no package.json found and no license and repo name set!')
  usage()
  process.exit(1)
}

var pkg = require(path.join(process.cwd(), 'package.json')) 

// one liner
var oneliner = pkg.description || 'one-liner description of the module'

// license
var license = args.l || args.license || pkg.license || null
if (!license) {
  console.error('no license set or found in package.json!')
  usage()
  process.exit(1)
}

// repo name
var repo = args.r || args.repo || pkg.name || null
if (!repo) {
  console.error('no repo name set or found in package.json!')
  usage()
  process.exit(1)
}
var repoCamel = camel(repo)

// example.js
var example = getExampleJs()
function getExampleJs () {
  try {
    return fs.readFileSync(path.join(__dirname, 'example.js'))
  } catch (e) {
    return "var $$$rePo = require('$$$REPO')\n\nconsole.log('hello world')"
  }
}

// read the template and regex match templated vars
fs.readFileSync(path.join(__dirname, 'template.md')).toString().split('\n')
  .forEach(function (line) {
    console.log(processLine(line))
  })

function processLine (line) {
  line = line.replace(/\$\$EXAMPLE/, example)
  line = line.replace(/\$\$REPO/, repo)
  line = line.replace(/\$\$rePo/, repoCamel)
  line = line.replace(/\$\$1LINER/, oneliner)
  line = line.replace(/\$\$ZEE_LICENSE/, license)
  line = line.replace(/\$\$r/, repo.charAt(0).toLowerCase())
  return line
}
