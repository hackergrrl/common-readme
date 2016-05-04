# common-readme

> Writes a markdown readme for your node module to standard out.

## background

This is a style that's worked well for me, and was synthesized from both the
making of my own modules and from reading the READMEs of many dozens more.

## usage

    $ common-readme my-module
    # my-module

    > one-liner description

    ## background

    background details relevant to understanding what this module does

    ## example

    ```js
    var lib = require('my-module')

    ```

    ```shell
    $ node

    > var lib = require('my-module')

    > lib.foo()
    'example usage with output'
    ```

    ## api

    ### var obj = new lib()

    Returns an object ...

    ### obj.foo()

    Methods on `lib`

    ## install

    With [npm](https://npmjs.org/) installed, run

    ```
    $ npm install my-module
    ```

    ## license

    ISC

## install

With [npm](https://npmjs.org/) installed, run

```
$ npm install common-readme
```

## license

ISC
