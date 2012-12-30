---
title: Sick of Apache config?
subtitle: Looking for a really simple way to serve the contents of a directory over HTTP?
date: 2013-01-02
teaser: For serving quick and simple prototypes, there are better ways...
status: published
template: post.jade
---

For work, I do a lot of prototyping and exploration. I run an Apache setup on my Mac for local development and as a result, my Apache config is full of vhosts that I'll probably never use again. I'm moving on.

I've decided to use node.js to instantly create a static web server when prototyping code and wanting to preview it in the browser. There are dozens of modules out there to create static web servers, but I wanted to show you the [node-static][staticnpm] module. [You can use easily use it within your own node.js projects][staticboilerplate], but it also has a really useful command line interface.

To get started with node-static, install it as a global module:

```
npm install node-static -g
```

To serve the current directory over HTTP:

```
static
```

That's it. The current directory will now be available over HTTP (assuming you have nothing else listening on that port), view it in your browser at http://localhost:8080/.

To change the port, pass the port number via the ```-p``` argument:

```
static -p 8001
```

To serve a directory other than the current directory:

```
static public
```

```node-static``` will start serving the contents of the ```public``` directory, via HTTP at http://localhost:8080/.

A very handy utility!

[staticboilerplate]: http://scottmebberson.com/examples/quick-static-webserver-in-node/
[staticnpm]: https://npmjs.org/package/node-static