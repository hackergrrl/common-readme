# the art of readme

## what's a readme?

TODO: read up on the etymology of readme and relate it to the content


## who

This article is written for module creators, because as a builder of modules,
your job is to create something that will last.

What if it isn't? If you don't care about having your work be useful to anyone
(yourself included -- wait for 6 months to pass) then by all means don't bother
writing documentation. In fact, do us all a service and don't bother publishing
it to npm either, so nobody has to spend time digging through your source code
to deduce what on earth it is that your module does. Thank you.

This article is also written for module consumers, because virtually every node
module author is also a module consumer. The world of node has a very healthy
degree of interdependency: in node, no one lives at the bottom of the dependency
tree.

Looking at the subject of the README from both angles gives a healthy
perspective on the subject from both sides.


## what's the problem? (a massive pile of good and bad things)

The node ecosystem is powered by its modules. Each module is a superpower. If
node was a train, it's npm taht arranges them into a string of boxcars, and puts
a driving locomotive behind all of it.

This train of superpowers runs on schedule at [npm](https://npmjs.org). In the
course of a week, node developers evaluate potentially dozens of modules for
inclusion in their projects. This is a great deal of power being churned out in
a daily basis, ripe for the plucking as fast as you can write `npm install`.

Like any ecosystem that is extremely accessible, the quality bar varies. npm may
pack away all of the modules and let them roam the countryside, but each boxcar
is packed full of tools: some shining and new, others broken and rusty.

However, the quality bar across modules varies wildly. Some modules have
inaccurate or unhelpful names (any guesses what `fudge-sundae` does?). Some
modules have no documentation -- no README even. Some modules don't have tests.

Some modules don't even have a maintainer. And without a human readily on hand
to answer questions and explain what a module does, and no remnants of
documentation left behind, a module becomes a bizarre alien artifact, unusable
and incomprehensible by the archeologist-developers of tomorrow.

Some modules do have documentation, but once again, the quality bar varies.
Maybe it's just a one-liner description. Maybe it's just an example. All of
these things are improvements, but ultimately result in the worst-case scenario
for a modern day module hunter: the need to dig into the source code and try to
understand how the module actually works. Writing excellent documentation is all
about keeping the users out of the source code and providing instructions
sufficient to enjoy the abstraction that your module brings.

Node has a "wide" ecosystem: it's largely made up of a very long list of
independent modules under no flag but its own. There are [exceptions](lodash),
but despite these fiefdoms, the do-one-thing-well commoners, in their numbers,
rule the node kingdom.

This has a natural consequence: it can be hard to find *quality* modules that do
what you want.

It's worth emphasizing that this is *okay*. A low bar to entry and a
discoverability problem is infinitely better than a culture problem, where only
the privileged few may participate.


## a body of solutions

Node developers have responded to this in different ways.

[Curated lists](https://github.com/sindresorhus/awesome-node) have also
appeared, by using the wisdom of experienced node developers to highlight
quality modules amongst different categories.

How about the social graph? This idea spurred the creation of
[node-modules.com](http://node-modules.com/), a npm search replacement that
leverages your github social graph to find modules your friends like or have
made.

Many will gradually build up a personal heuristic for quickly identifying
quality modules. This often happens unconsciously, over the process of perusing
hundreds of modules over weeks or months. Others have [written about
this](http://substack.net/finding_modules) heuristic-building process, and the
criteria that the brain starts to look for.

No matter your approach, you will still ultimately find yourself on npmjs.org or
github.com or somewhere else, staring at a README. What then?


## professional module spelunkying

### readme

A README is a module consumer's first (and maybe only) look into your creation.
The consumer wants a module to fulfill their need, so you need to explain
exactly what need your module fills, and how effectively it does so.

Your job is to

1. tell them what it is (/w or /wo context)
2. tell them what it looks like in action
3. tell them how they use it
4. tell them any other relevant details

This is your job, again, because of the width of the ecosystem and its resultant
varying quality bar. Your README is your external, public-facing measure of
where your work lies on that quality spectrum.


### no readme => abstraction broken

The strongest signal when looking at a module is its README.

The lack of any readme is a powerful red flag, but even a lengthy readme is not
indicative of there being high quality. The ideal readme is as short as it can
be without being any shorter. Detailed documentation is good -- make a separate
page for it -- but keep your README succinct.

No README means you need to delve into the code to understand it. The wise monks
[Perl community](http://mathforum.org/ken/perl_modules.html#document) bring
wisdom on this:
> Your documentation is complete when someone can use your module without ever
> having to look at its code. This is very important. This makes it possible for
> you to separate your module's documented interface from its internal
> implementation (guts). This is good because it means that you are free to
> change the module's internals as long as the interface remains the same.
>
> Remember: the documentation, not the code, defines what a module does.


### key elements

once a readme is located the hypothetical developer must scan it to discern if
it matches the developer's needs. this becomes essentially a series of pattern
matching problems to solve, where each step takes me deeper into the module and
its details:

1. *Name* -- ideally the module name is self-evident.
   [`sorted-array`](https://github.com/javascript/sorted-array) sounds
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
   example JS fits the desired style and problem. People have lots of opinions
   on things like promises/callbacks and ES6. if it does fit the bill, then I
   can proceed to greater detail. if it does, then I can proceed to greater
   detail.

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


## cognitive funneling, economy of scale

The ordering of the above was not chosen at random.

Module consumers use many modules, and need to look at many modules.

Once you've looked at hundreds of modules you begin to notice that the mind
benefits from predictable patterns.

You also start to build out your own personal heuristic for what information you
want, and what red flags disqualify modules quickly.

Thus, it follows that in a readme it is desirable to have:

1. a predictable format
2. certain key elements present

Once again, the Perl monks have wisdom to share on the subject:
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
> progressively greater amount of knowledge. -- from `perlmodstyle`



## enable short-circuiting, mindest, altruism

Awesome; the ordering of these key elements should be decided by how quickly
  they let someone 'short circuit' and bail on your module.

But this sounds bleak, doesn't it? Your job, when you're doing it optimally
altruisticly, isn't to "sell" people on your work. it's to let them evaluate
what your creation does as objectively as possible, and decide whether it meets
their needs or not. not to, say, maximize your downloads or userbase.

This mindset doesn't appeal to everyone; it requires checking your ego at the
door and letting the work speak for itself as much as possible. Your only job is
to describe its promise as succinctly as you can.

You don't need to use *this* format, but try to be consistent to save your users
precious cognitive cycles.

The ordering presented here is lovingly referred to as "cognitive funneling",
and can be imagined as a funnel held upright, where the widest end contains the
broadest more pertinent details, and moving deeper down into the funnel presents
more specific details that are pertinent for only a reader who is interested
enough in your work to have reached that deeply in the document. finally, the
bottom can be reserved for details that only those intrigued by the deeper
context of the work (background, credits, biblio, ...)

Not coincidentally, this is also the format used by
[**common-readme**](https://github.com/noffle/common-readme), a set of README
guidelines and handy command-line generator. If you like what's written here,
you may save some time writing READMEs with `common-readme`.


## bonus section: what other good practices are there?

Outside of the key points of the article, there are other practices you can
follow (or not follow) to raise your README's quality bar even further, and
maximize its usefulness to others.

1. Consider including a **Background** section if your module depends on
   important but not widely known abstractions or other ecosystems. The function
   of [`bisecting-between`](https://github.com/noffle/bisecting-between) is not
   immediately obvious from its name, so it has a detailed *Background* section
   to define and link to the big concepts and abstractions one needs to
   understand to use and grok it. This is also a great place to explain the
   module's motivation if similar modules already exist on npm.

2. This leads into my favourite lesson: aggressively linkify! If you talk about
   other modules, ideas, or people, you might as well make that reference text a
   link so that visitors can more easily grok your module and the ideas it
   builds upon. Few modules exist in a vacuum: all work comes from other work,
   so it pays to help users follow your module's history and inspiration
   backwards through time.

3. That said, also consider providing links in *Background* to authors who
   inspired you or that you got ideas from (or to research papers, websites,
   etc) -- aggressively linkify to help readers follow your great ideas
   backwards through time!

4. Include information on types of arguments and return parameters if it's not
   obvious. Prefer convention where ever possible (`cb` probably means callback
   function, `num` probably means a `Number`).

5. Include the JS in **Usage** as a file in your repo called `example.js` --
   it's great to have readme code that users can actually run if they clone the
   repository.

6. Don't be shy about having additional sections in the README to explain
   concepts in the module that are complicated or have unexpected edge
   behaviour.

7. Be extremely judicious in your use of badges. They're easy to
   [overuse](https://github.com/angular/angular). They can also be a bikeshed;
   avoid falling into pointless debate on them. They add visual noise to your
   README, and generally only function if the user reading your markdown in a
   browser online, since the images are generally hosted elsewhere on the
   internet. For each badge, consider: "what real value is this badge providing
   to the typical viewer of this readme"? Have a CI badge to show build/test
   status? this signal would better reach important parties by emailing
   maintainers or automatically creating an issue -- always consider the
   audience of the data in your readme and ask yourself if there's a flow for
   that data that can better reach its intended audience. (If you absolutely
   must have a badge, make sure it's wrapped in a link that points to further
   contextual information.)

8. API formatting is highly bikesheddable. Use whatever format you think is most
   clear, but make sure your format expresses important subtleties:

   a. which parameters are optional, and their defaults
   b. mention type information where it is not obvious from convention
   c. for `opts` object parameters, detail all keys and values that are accepted
   d. don't shy away from providing a tiny example of an API function's use if
      their use is not obvious or fully covered in the **Usage** section.
      However, this can also be a strong signal that the function is too complex
      and needs to be refactored, broken into smaller functions, or removed
      altogether
   e. aggressively linkify specialized terminology! in markdown you can keep
      [footnotes](https://daringfireball.net/projects/markdown/syntax#link) at
      the bottom of your document, so referring to them several times throughout
      becomes cheap. some of my personal preferences on api formatting can be
      found [here](api_formatting.md)

9. If your module is a small collection of stateless functions, having a
   **Usage** section as a [node REPL
   session](https://github.com/noffle/bisecting-between#example) of function
   calls and results might communicate usage more clearly than a source code
   file to run.

10. If your module provides a CLI (command line interface) insted of (or in
    addition to) a programmatic API, show usage examples as command invocations
    and their output. if you create or modify a file, `cat` it to demonstrate
    the change before and after.

11. Don't forget to use `package.json` keywords to direct module hunters to your
    doorstep. (TODO: link to this page on npm)

12. The more you change your API, the more work you need to exert updating
    documentation -- the implication here is that you should keep your APIs
    small and concretely defined early on. Requirements change over time, but
    instead of front-loading assumptions into the APIs of your modules, load
    them up one level of abstraction: the module set itself. If the requirements
    *do* change and 'do-one-concrete-thing' no longer makes sense, then simply
    write a new module that does the thing you need. 'do-one-concrete-thing'
    remains a valid and valuable module for the npm ecosystem, and your course
    correction cost you nothing but a simple substitution of one module for
    another.

13. Your git repository and its README will outlive your repository host and any
    of the crap you link to, especially images, so inline anything that is
    essential to grokking the module.

