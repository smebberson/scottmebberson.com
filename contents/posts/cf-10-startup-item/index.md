---
title: ColdFusion 10 Startup Item on Mac
date: 2012-08-29
teaser: Just a quick note regarding the location of the ColdFusion 10 Startup Item on Mac OS X.
status: published
template: post.jade
---

Just a quick note, because I struggled to find this anywhere else on Google. When I installed ColdFusion 10 (on my Mac, 10.7), I ticked the 'start ColdFusion on startup option'. A few computer restarts later, I've decided to turn that off (my Mac was taking forever to become useable).

It wasn't easy to find the location of the start up script however, and Google didn't really give many insights.

If you want to stop ColdFusion automatically starting on startup, just remove the folder at ```/Library/StartupItems/ColdFusion10```

And if you ever wanted to have ColdFusion automatically start again, you can grab ```cf-standalone-startup``` and ```StartupParameters.plist``` from ```/Applications/ColdFusion10/cfusion/bin``` and put them in a folder in ```/Library/StartupItems/	```.

For convience, here are some other commands you can run to control ColdFusion over the command line on Mac OS X.

## View the status of ColdFusion:
```
/Applications/ColdFusion10/cfusion/bin/coldfusion status
```

## Stop ColdFusion:
```
/Applications/ColdFusion10/cfusion/bin/coldfusion stop
```

## Start ColdFusion:
```
/Applications/ColdFusion10/cfusion/bin/coldfusion start
```

## Restart ColdFusion:
```
/Applications/ColdFusion10/cfusion/bin/coldfusion restart
```