---
title: Cloning a single branch in git
date: 2012-12-19
teaser: You can actually clone a single branch in git, and here's how to do it.
status: published
template: post.jade
---

If you have ```git``` 1.7.10 or greater, you can actually clone a single branch using ```git```. The following effectively clones a repository and then switches to a specific branch:

```
git clone git@github.com:repo/ongithub.git -b branch-name /path/to/repo
```

If you add the switch ```--single-branch```, you'll only get that specific branch:

```
git clone --single-branch git@github.com:repco/ongithub.git -b design /path/to/repo
```