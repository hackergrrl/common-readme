<h1 align="center">
  <font color="#f3f3f3">Α</font>
  *common readme*
  <font color="#f3f3f3">Ω</font>
</h1>

<h4>*Module authors!*</h4> Tired of inventing your readme format every time you write it?
Have your own ad-hoc readme generator but uninterested in maintaining it?

<h4>*Module consumers!*</h4> Love how each module seems to have its own made up README,
and how each module you visit has chosen something different? Maybe they've
chosen to omit important sections like `API` or `Usage` entirely?

What if there was a common format for producers and consumers of modules? A
*common readme* for Node.

common-readme saves module writers and module searchers time in 4 ways:

- **No buy-in.** No technical locking in to other formats or tooling; run
  `common-readme` once and operate on vanilla markdown.
- **Cognitive funnelling.** A good README starts with its most general
  information at the top -- like its name and usage -- and, as the reader
  continues to be interested, narrows down to specific details -- like API and
  concrete installation instructions. This makes it quick to "short circuit" and
  abandon a prospective module early without delving too deeply into its
  innards.
- **Dodge [bikesheds](https://en.wikipedia.org/wiki/Law_of_triviality).** Impose
  informed opinion, but don't push personal views that preclude others from
  having theirs.
- **package.json is truth.** Pull as many details out of `package.json` -- like
  name, description, and license -- as possible.
- **Consistent.** Your brain can scan a README much faster when it can learn to
  anticipate its structure.

## But why!?

This actually isn't a crazy new idea. Many other ecosystems have been benefiting
from a common readme format for years, like Perl and
[CPAN](http://perldoc.perl.org/perlmodstyle.html).

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

## Usage

The `common-readme` command writes a brand new README to standard out. You can
direct this to `README.md` and use it as a basis for your new module after
setting up your `package.json`:

    $ common-readme > README.md

It will automatically be populated with values from `package.json`, such as
`name`, `description`, and `license`.

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install -g common-readme
```

You can now execute the `common-readme` command.

## Acknowledgments

A standard readme format for the Node community isn't a new idea. Inspiration
came from many conversations and standard-readme efforts in the community:

 - https://github.com/feross/standard/issues/141
 - [richardlitt/standard-readme](https://github.com/RichardLitt/readme-standard)
 - [zwei/standard-readme](https://github.com/zcei/standard-readme)

as well as my own experiences evaluating hundreds of node modules by their
READMEs.

The brave audacity of making a claim as grandious as being **the** common readme
for a whole community was drawn from the honey-don't-care efforts of
[feross/standard](https://github.com/feross/standard).

I also did a great deal of Perl archeaology -- it turns out the monks of the
Perl community already did much of the hard work of [figuring out great
READMEs](http://perldoc.perl.org/perlmodstyle.html) and the wisdom around small
module development well over a decade ago.

Thanks to @mafintosh, @andrewosh, and @feross for many long conversations about
readmes and Node.

## See Also

READMEs love [`readme`](https://www.npmjs.com/package/readme)!

## License

ISC
