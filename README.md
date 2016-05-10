<h4 align="center">
  <img src="http://tmp.stephenwhitmore.com/common-readme.png">
</h4>
<br>

<b>*Module consumers!*</b> Frustrated by each module having its own wildly
unique README format? Annoyed by modules that omit critical sections like
**API** or **Examples**? Stuck scrolling through API docs before you *even know
what the module does*?

<b>*Module authors!*</b> Tired of making up your readme format every time you
write it? Do you just want consistent readmes pre-populated with your module's
name, description and license without worrying about the structure every time?

---

What if there was a common format for the benefit of producers and consumers?

A *common readme* for node modules.

This can save everybody time by adhering to 4 principles:

1. **No lock in.** No special formats or tooling; run `common-readme` once for
   pure vanilla markdown.
2. **No surprises.** Pull as many details out of `package.json` -- like name,
   description, and license -- as possible. No time wasted on configuration.
3. **Cognitive funnelling.** Start with the most general information at the top
   (Name, Description, Examples) and if the reader maintains interest, narrow
   down to specifics (API, Installation). This makes it easy for readers to
   "short circuit" and continue the hunt for the right module elsewhere without
   wasting time delving into unnecessary details.
4. **Be consistent.** Your brain can scan a document much faster when it can
   anticipate its structure.

## Usage

See a README generated with `common-readme`!

With [npm](https://npmjs.org/) installed, run

    $ npm install -g common-readme

`common-readme` is a command line program. When run, a brand new README is
generated and written to your terminal. You can redirect this to `README.md` and
use it as a basis for your new module after setting up your `package.json`:

    $ common-readme > README.md

A brand new readme will be created; automatically populated with values from
`package.json` such as `name`, `description`, and `license`. Stub sections will
be created for everything else.

## Why?

This isn't a crazy new idea. Many other ecosystems have been benefiting from a
common readme format for years, like [Perl and
CPAN](http://perldoc.perl.org/perlmodstyle.html).

1. The node community is powered by 1) people, and 2) their modules. So long as
   (1) is *humans* then communication -- not code -- is our most powerful tool
   for connecting us together.

2. There is much wisdom to be found from the many developers who have written
   many many modules. It would be swell to distill that experience into a common
   format that stands to benefit us all.

3. It'd be great as a module writer to save time writing up the same boilerplate
   that every README is going to need.

4. Examining modules for project inclusion is a part of every node developer's
   regular cycle. Having a consistent format helps the brain focus on content
   instead of structure.

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install -g common-readme
```

You can now execute the `common-readme` command.

## Acknowledgments

A standard readme format for the Node community isn't a new idea. Inspiration
came from many conversations and unrealized efforts in the community:

 - https://github.com/feross/standard/issues/141
 - [richardlitt/standard-readme](https://github.com/RichardLitt/readme-standard)
 - [zwei/standard-readme](https://github.com/zcei/standard-readme)

This, in addition to my own experiences evaluating hundreds of node modules and
their READMEs.

I was partly inspired by the audacity of the honey-badger-don't-care efforts of
[feross/standard](https://github.com/feross/standard).

I also did a great deal of Perl archaeology -- it turns out the monks of the
Perl community already did much of the hard work of [figuring out great
READMEs](http://perldoc.perl.org/perlmodstyle.html) and the wisdom around small
module development well over a decade ago.

Thanks to @mafintosh, @andrewosh, and @feross for many long conversations about
readmes and Node.

## See Also

READMEs love [`readme`](https://www.npmjs.com/package/readme)!

## License

ISC
