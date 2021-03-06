# Xen Orchestra Web

XO-Web is part of [Xen Orchestra](https://github.com/vatesfr/xo), a web interface for XenServer or XAPI enabled hosts.

It is a web client for [XO-Server](https://github.com/vatesfr/xo-server).

[![Dependency Status](https://david-dm.org/vatesfr/xo-web.svg?theme=shields.io)](https://david-dm.org/vatesfr/xo-web)
[![devDependency Status](https://david-dm.org/vatesfr/xo-web/dev-status.svg?theme=shields.io)](https://david-dm.org/vatesfr/xo-web#info=devDependencies)

___

## Installation

XOA or manual install procedure is [available here](https://github.com/vatesfr/xo/blob/master/doc/installation/README.md)

## How to report a bug?

If you are certain the bug is exclusively related to XO-Web, you may use the [bugtracker of this repository](https://github.com/vatesfr/xo-web/issues).

Otherwise, please consider using the [bugtracker of the general repository](https://github.com/vatesfr/xo/issues).

## Process for new release

```bash
# Switch to the master branch.
git checkout master

# Merge changes of the next-release branch.
git merge next-release

# Increment the version (patch, minor or major).
npm version minor

# Go back to the next-release branch.
git checkout next-release

# Fetches the last changes (the merge and version bump) from master to
# next-release.
git pull --fast-forward master

# Push the changes on git.
git push origin master:master next-release:next-release

# Publish this release to npm.
npm publish
```
