<h4 align="center">
  <img src="http://tmp.stephenwhitmore.com/common-readme.png">
</h4>
<br>

*Module consumers!* Frustrated by each module having its own ad-hoc README
format? How each is wildly different from the last? Annoyed by modules that have
chosen to omit important sections like `API` or `Usage` altogether?

*Module authors!* Tired of make up your readme format every time you write one?
Have your own hacked together generation script but don't want to maintain it?

---

What if there was a common format for the benefit of both producers and
consumers of modules? A *common readme* for node modules.

common readme saves everybody time by adhering to 5 principles:

- **No buy-in.** No technical lock-in to other formats or tooling; run
  `common-readme` once for vanilla markdown. Your readme will continue to
  function fine if you never use common readme again.
- **Cognitive funnelling.** A good README starts with its most general
  information at the top -- like its description and usage -- and, as the reader
  continues to be interested, narrows down to specific details -- like API and
  concrete installation instructions. This makes it quick to "short circuit" and
  abandon a prospective module early without delving too deeply into its
  innards.
- **Treat package.json as truth.** Pull as many details out of `package.json` --
  like name, description, and license -- as possible. No configuration.
- **Dodge [bikesheds](https://en.wikipedia.org/wiki/Law_of_triviality).** Impose
  informed opinion, but don't push personal views that preclude others from
  having theirs.
- **Be consistent.** Your brain can scan a README much faster when it can learn
  to anticipate its structure.

## Usage

See a README generated with `common-readme`!

With [npm](https://npmjs.org/) installed, run

    $ npm install -g common-readme

The `common-readme` command writes a brand new README to standard out. You can
direct this to `README.md` and use it as a basis for your new module after
setting up your `package.json`:

    $ common-readme > README.md

Behold! A brand new, shiny README, reading to be impressed upon with your
brilliant ideas! It will automatically be populated with values from
`package.json`, such as `name`, `description`, and `license`.

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
