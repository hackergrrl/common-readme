# REPO

> 1LINER

## Background

background details relevant to understanding what this module does

## Usage

Let's do X:

```js
var rePo = require('REPO')

```

This will output

```
```

## API

```js
var rePo = require('REPO')
```

### var repo = rePo(name, opts={})

Produces a new repo with name `name`. Valid `opts` keys include

- `db` (required) - uses the levelup instance `db`
- `count` (optional) - does the thing `count` times

### repo.work(hard, cb(err, res))

Puts `repo` to work. If `hard` is `true`, it'll even work pretty hard at it.
`cb` will be called with the result of the work.

### repo.pipe(stream)

REPO implements a readable stream

### stream.pipe(repo)

REPO implements a writeable stream

### repo.on('foo', cb(bar))

`repo` can raise an event named `'foo'` with the argument `bar`.

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install REPO
```

## License

ZEE_LICENSE
