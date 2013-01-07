---
title: HTML parser written in PEG.
date: 2013-01-07
teaser: An example HTML parser, to demonstrate writing nested expressions in PEG.
status: published
template: examples.jade
---

I've been introducing myself and experimenting with the concept of creating my own programming language. Not a real one of course, but something more like CoffeeScript or SASS which compiles down to another language.

Rather than using [Jison][jison] (which [CoffeeScript][coffeescript] was built using) I've decided to settle for something called [Canopy][canopy]. [Canopy][canopy] is a JavaScript [PEG][peg] parser compiler and differs from [Jison][jison] in that it doesn't actually handle the processing of a resulting tree, it just spits out the tree. I really like the concept of separating the expressions from the types.

I threw together a quick example to demonstrate how to write a nested expression using PEG. I settled on a really basic HTML parser, [which you can check out on GitHub][peghtmlparser]. I've only taken it as far as the tree, I haven't written any JavaScript to manipulate the resulting tree as yet.

[jison]: http://zaach.github.com/jison/
[coffeescript]: http://coffeescript.org/
[canopy]: http://canopy.jcoglan.com/
[peg]: http://en.wikipedia.org/wiki/Parsing_expression_grammar
[peghtmlparser]: https://github.com/smebberson/peg-html-parser

Here is the PEG grammar, which Canopy takes and turns into a JavaScript file which you can run in Node (or Rhino) or the browser.

```
grammar HTML
	document          <-   (doctype / text / tag)*
	tag               <-   open_tag (text / tag)* close_tag
	open_tag          <-   "<" [0-9a-zA-Z \"'=-]+ ">"
	close_tag         <-   "</" [0-9a-zA-Z]+ ">"
	doctype           <-   "<!DOCTYPE " [0-9a-zA-Z]+ ">"
	text              <-   [^<]+
```