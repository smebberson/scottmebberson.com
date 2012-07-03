title: My first attempt at Haxe
date: 2012-07-02
teaser: I've finally given Haxe a shot, I wish I didn't wait so long!
status: published
template: post.jade

I've been aware of [Haxe](http://haxe.org/) for some time. Up until now, I've mostly wanted to target Flash so I just didn't bother with it. Recently, I've been looking into ways to target iOS and Android from the one code base and stumbled across [NME](http://haxenme.org/).

NME is a framework built on top of Haxe. It enables you to target Flash, iOS, Android, JavaScript and even HTML5; all from the one source. Sounds too good to be true, so I decided to give it shot.

I wrote a quick script that randomly outputs squares on the stage, just something simple.

## The source

<script src="https://gist.github.com/3033231.js"> </script>

You should be able to get it to build cleanly with any of the following:

	nme test project.nmml flash
	nme test project.nmml html5
	nme test project.nmml ios -simulator

## SWF output

<script src="http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js"></script>
<script src="./js/embed.js"></script>
<div id="haxe:flash" style="background-color: #FFFFFF; height: 280px">iOS devices won't show this version :)</div>

<h2>HTML5 output</h2>

<div id="haxe:jeash" style="background-color: #ffffff; height: 280px; overflow: hidden; position: relative !important;" data-framerate="30"></div>
<script type="text/javascript" src="./js/Squares.js"></script>