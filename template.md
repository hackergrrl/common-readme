# $$REPO

> $$1LINER

## Background

background details relevant to understanding what this module does

## Usage

Let's do X:

```js
$$EXAMPLE
```

This will output

```
hello warld
```

## API

```js
var $$rePo = require('$$REPO')
```

### var $$r = $$rePo(name, opts={})

Produces a new $$REPO with name `name`. Valid `opts` keys include

- `db` (required) - uses the levelup instance `db`
- `count` (optional) - does the thing `count` times

### $$r.work(hard, cb(err, res))

Puts `$$r` to work. If `hard` is `true`, it'll even work pretty hard at it. `cb`
will be called with the result of the work.

### $$r.pipe(stream)

$$r implements a readable stream

### stream.pipe($$r)

$$r implements a writeable stream

### $$r.on('foo', cb(bar))

`$$r` can raise an event named `'foo'` with the argument `bar`.

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install $$REPO
```

## Acknowledgments

$$REPO was greatly inspired by ...

## See Also

[noffle/common-readme](https://github.com/noffle/common-readme), ...

## License

$$ZEE_LICENSE
