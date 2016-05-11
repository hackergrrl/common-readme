# the art of readme

## node IS its modules

the node ecosystem thrives on and is powered by its modules -- the vast majority
of which are hosted on [npm][]. in the course of a week, node developers
evaluate potentially dozens of modules for inclusion in their projects. however,
the quality bar across modules varies wildly. as a result, developers must
gradually build up a personal heuristic for quickly identifying quality modules.

[substack][] has written about this, and this idea also spurred the creation of
[node-modules][], a npm search replacement that leverages your github social
graph.

## to write node is to find modules

one such strong signal is the module's readme. the lack of any readme is a
powerful red flag, but even a lengthy readme is not indicative of there being
high quality. an ideal readme is as short as it can be without being any
shorter.

once a readme is located the hypothetical developer must scan it to discern if
it matches the developer's needs. this becomes essentially a series of pattern
matching problems to solve, where each step takes me deeper into the module and
its details:

1. *Name* -- ideally the module name is self-evident. [`sorted-array`]() sounds
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

## what other good practices are there?

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

11. if your module provides a CLI (command line interface) insted of (or in
    addition to) a programmatic API, show usage examples as command invocations
    and their output. if you create or modify a file, `cat` it to demonstrate
    the change before and after

## some further wisdom from the perl community

from `perlmodstyle`:
> The level of detail in Perl module documentation generally goes from
> less detailed to more detailed.  Your SYNOPSIS section should
> contain a minimal example of use (perhaps as little as one line of
> code; skip the unusual use cases or anything not needed by most
> users); the DESCRIPTION should describe your module in broad terms,
> generally in just a few paragraphs; more detail of the module's
> routines or methods, lengthy code examples, or other in-depth
> material should be given in subsequent sections.
>
> Ideally, someone who's slightly familiar with your module should be
> able to refresh their memory without hitting "page down".  As your
> reader continues through the document, they should receive a
> progressively greater amount of knowledge.

from http://mathforum.org/ken/perl_modules.html#document:
> Your documentation is complete when someone can use your module without ever
> having to look at its code. This is very important. This makes it possible for
> you to separate your module's documented interface from its internal
> implementation (guts). This is good because it means that you are free to
> change the module's internals as long as the interface remains the same.
>
> Remember: the documentation, not the code, defines what a module does.
