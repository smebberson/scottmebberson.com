title: Implementing SMACSS
date: 2012-08-06
teaser: SMACSS stands for scalable and modular architecture for css, and I'm going to use it to refactor my css code for this site.
status: published
template: post.jade

When I decided to [rewrite my personal website](/posts/my-new-site/) I quickly threw the CSS together. I wanted to achieve a few key things:

*   I wanted a website, rather than perfect code.
*	I didn't care about IE (or Firefox) and wanted to use [CSS3 flexible box model](https://developer.mozilla.org/en-US/docs/CSS/Using_CSS_flexible_boxes) (everywhere).
*	I'd use [Kaizen](http://en.wikipedia.org/wiki/Kaizen) principals to refactor my website as I went.

So, I'm getting started on point 3.

I've been reading a book called [SMACSS by Jonathan Snook](http://smacss.com/). SMACSS stands for _scalable and modular architecture for CSS_. As described by Jonathan, it's not really a framework, but more of a style guide for implementing css. The book is well written and concepts are demonstrated through clear examples.

So while the [CSS output hasn't changed a lot](https://github.com/smebberson/scottmebberson.com/commits/f8bd2b8d7218e02780ff3b5a777708212bfab88d/build/css/styles-flexbox.css), my understanding of the code has improve dramatically. As has the readability of the code.

I'm using [SCSS](http://sass-lang.com/) and have separated my files like so:

*   styles-flexbox.scss (main file)
*	reset.css (eric myer's reset)
*	_base.scss
*	_layout.scss
*	_module.scss
*	_state.scss

I have no idea if Jonathan's intention was to split the files like I have (I'm still reading), but it has really helped me to pick up the concepts of the book.

Alright... I'm off now. I'm going to refactor my CSS a little more.