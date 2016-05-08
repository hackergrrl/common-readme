# common-readme

> generate and lint a great readme for nodejs

## Why do this?

1. the node community is powered by people and their modules. communication --
   not code -- is our most powerful tool for connecting us together

2. the brain does pattern matching best when the flow stays the same; then it
   can focus on the content instead of the structure

3. tl;dr  feelings *and* efficiency

## But what's wrong with READMEs today?

I'm glad you asked.

### node IS its modules

the node ecosystem thrives on and is powered by its modules -- the vast majority
of which are hosted on [npm][]. in the course of a week, node developers
evaluate potentially dozens of modules for inclusion in their projects. however,
the quality bar across modules varies wildly. as a result, developers must
gradually build up a personal heuristic for quickly identifying quality modules.

[substack][] has written about this, and this idea also spurred the creation of
[node-modules][], a npm search replacement that leverages your github social
graph.

### to node is to search for modules

one such strong signal is the module's readme. the lack of any readme is a
powerful red flag, but even a lengthy readme is not indicative of there being
high quality. an ideal readme is as short as it can be without being any
shorter.

once a readme is located the hypothetical developer must scan it to discern if
it matches the developer's needs. this becomes essentially a series of pattern
matching problems to solve, where each step takes me deeper into the module and
its details:

1. *Name* -- ideally the module name is self-evident. `sorted-array` sounds
   promising if I'm looking for an array that maintains a sort order on itself.
   if the name sounds too vague or unrelated, I can move on.

2. *One liner* -- having a one-liner that describes the module is useful for
   getting an idea of what the module does in slightly greater detail.
   `sorted-array` says

> An implementation of John von Neumann's sorted arrays in JavaScript.
> Implements insertion sort and binary search for fast insertion and deletion.

a bit wordy, but the second sentence makes it very clear that it does what I
want. Excellent! Now I need to gauge how well it'd fit into my code.

3. *Usage* -- rather than starting to delve into the API docs, it'd be great to
   see what the module looks like in action. I can quickly determine whether the
   example JS fits the desired style and problem. People have [lots of
   opinions][] on things like promises/callbacks and ES6. if it does fit the
   bill, then I can proceed to greater detail. if it does, then I can proceed to
   greater detail.

4. *API* -- the name, description, and usage of this module all sound appealing
   to me. I'm probably very likely to use this module at this point. I just need
   to scan the actual API to make sure it does exactly what I need and doesn't
   have any unexpected caveats. The API section oight to detail the module's
   objects and functions, their signatures, return types, callbacks, and events
   in good detail. Types should be included where they aren't obvious. Caveats
   should be made clear.

5. *Installation* -- if I've read this far down then I'm sold on trying out the
   module. If there are nonstandard installation notes, here's where they'd go,
   but even if it's just a regular `npm install` I'd like to have that listed
   too. New users start using Node all the time, so having a link to npmjs.org
   and an install command helps that user with resources to figure out how node
   modules work.

6. *License* -- most modules put this at the very bottom, but this might
   actually be better to have higher up; you're likely to exclude a module VERY
   quickly if it has an incompatible license to your work. I generally stick to
   the MIT/BSD/X11/ISC flavours. if you have a non-permissive license, stick it
   at the very top of the module to prevent any confusion

### what other good practices are there?

1. include a **background** section if your module depends on important
   abstractions or ecosystems that it exposes. [`hyper-array`][] provides an
   array data structure over a [`hyperlog`][], so you had better define or link
   to what the heck a hyperlog is. often the **background** is a great way to
   explain the module's motivation if similar modules already exist on npm.

2. aggressively linkify! if you talk about any other modules or ideas or
   frameworks, you might as well make their name a link so that visitors can
   more easily grok your module and the ideas it builds upon. few modules exist
   in a vacuum.

3. also consider providing links in **background** to authors who inspired you
   or that you got ideas from (or to research papers, websites, etc) --
   aggressively linkify to help readers follow your great ideas backwards
   through time!

4. include information on types of arguments and return parameters if it's not
   obvious. prefer convention where ever possible (`cb` probably means callback,
   `num` probably means a `Number`

5. include the JS included in **Usage** as a file in your repo called
   `example.js` -- it's great to have readme code that you can actually run!

6. don't be shy about having additional sections in the readme to explain
   concepts in the module that are complicated or have unexpected edge behaviour

7. don't be shy about using diagrams. if actual drawing isn't your forte, there
   are many [ascii diagram programs][]

8. avoid [badges][] where ever possible -- or don't. they are a bikeshed; avoid
   falling into pointless debate on them. they add noise to your readme, and
   generally only function if the user reading your markdown is online. for each
   badge, consider: "what real value is this badge providing to the typical
   viewer of this readme"? have a CI badge to show build/test status? this
   signal would better reach important parties by emailing maintainers or
   automatically creating an issue -- always consider the audience of the data
   in your readme and ask yourself if there's a flow for that data that can
   better reach its intended audience

9. API formatting is highly bikesheddable. Use whatever format you think is most
   clear, but make sure your format expressing important subtleties:
   a. which parameters are optional, and their defaults
   b. mention type information where it is not obvious from convention
   c. for `opts` object parameters, detail all keys and values that are accepted
   d. don't shy away from providing a tiny example of an API function's use if
   their use is not obvious or fully covered in the **Usage** section. however,
   this can also be a strong signal that the function is too complex and needs
   to be refactored, broken into smaller functions, or removed altogether
   e. aggressively linkify specialized terminology! in markdown you can keep
   [footnotes][] at the bottom of your document, so referring to them several
   times throughout becomes cheap

10. if your module is a small collection of stateless functions, having a
    **Usage** section as a a node REPL session of function calls and results can
    communicate usage more clearly than a JS file to execute


### what about CLI modules?

[some][] [node][] [modules][] provide a CLI (command line interface) insted of a
a programmatic API. some provide both. what are the best practices here?

- show usage examples as command invocations and their output
  - if you create or modify a file, `cat` it to demonstrate the change before
    and after

## Background

This is a style that's worked well for me, and was synthesized from both the
making of my own modules and from reading the READMEs of many dozens more.

This also acts as a linter, ensuring that key sections are present.

## Usage

The `common-readme` command writes a brand new README to standard out. You can
direct this to `README.md` and use it as a basis for your new module.

    $ common-readme > README.md

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install -g common-readme
```

to be able to execute the `common-readme` command.

## Acknowledgments

A standard readme format for the Node community isn't a new idea. Inspiration
came from many conversations and standard-readme efforts in the community:

 - https://github.com/feross/standard/issues/141
 - [richardlitt/standard-readme](https://github.com/RichardLitt/readme-standard)
 - [zwei/standard-readme](https://github.com/zcei/standard-readme)

Inspiration was drawn from the honey-badger-esque standardization of
[feross/standard](https://github.com/feross/standard).

Thanks to @mafintosh, @andrewosh, and @feross for many long conversations about
readmes and Node.

I also did a great deal of Perl archeaology -- it turns out the monks of the
Perl community already did much of the hard work of [figuring out great
READMEs](http://perldoc.perl.org/perlmodstyle.html) and the wisdom around small
module development well over a decade ago.

## See Also

READMEs work great with the [`readme`](https://www.npmjs.com/package/readme)
program!

## License

ISC

[zwei/standard-readme]: https://github.com/zwei/standard-readme
[richardlitt/standard-readme]: https://github.com/richardlitt/standard-readme
