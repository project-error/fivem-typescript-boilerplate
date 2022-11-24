<div align="center">
    <img href="https://projecterror.dev" width="150" src="https://i.tasoagc.dev/c1pD" alt="Material-UI logo" />
</div>
<h1 align="center">FiveM TypeScript Resource Boilerplate</h1>

<div align="center">
This is a simple boilerplate for getting started with TypeScript game-scripts, in FiveM.
</div>

<div align="center">

[![Depfu](https://badges.depfu.com/badges/d269ca2d36b5d4cf247e66c6400c216d/count.svg)](https://depfu.com/github/project-error/fivem-typescript-boilerplate?project_id=33035)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/project-error/pe-utils/master/LICENSE)
![Discord](https://img.shields.io/discord/791854454760013827?label=Our%20Discord)
</div>

This repository is a basic boilerplate for getting started
with TypeScript resources in FiveM. This boilerplate only comes with
development dependencies needed for FiveM-centered TypeScript transpilation, the rest
is up to you.

*Note: This boilerplate is targeting TypeScript in context of game-scripts,
if you wish to use TypeScript in NUI, take a look at our other [boilerplate](https://github.com/project-error/fivem-react-boilerplate-lua)*

## Foreword

This boilerplate was originally based off a previous popular TypeScript boilerplate,
made by [d0p3t](https://github.com/d0p3t/fivem-ts-boilerplate). He heartbeakingly passed
in 2021, leaving the original unmaintained. This boilerplate was an up-to-date alternative.

Since then, this boilerplate has been updated to take advantage of tooling progress made
in the greater NPM ecosystem.

## Requirements
* Node > v16
* Yarn

## Getting Started

First clone the repository or use the template option 
and place it within your `resources` folder

**Install Dependencies**

Navigate into the newly cloned folder and execute
the following command, to install dependencies.

```sh
npm i
```

## Development

### Hot Building

While developing your resource, this boilerplate offers 
a `watch` script that will automatically hot rebuild on any
change within the `client` or `server` directories.

```sh
npm run watch
```
*This script still requires you restart the resource for the
changes to be reflected in-game*

### Entry Points
**Client** - `./client/client.ts`

**Server** - `./server/server.ts`

## Production Build
Once you have completed the development phase of your resource,
you must create an optimized & minimized production build, using
the `build` script.

```sh
npm run build
```

## Version < 2.0.0

Version 2.0.0 introduced ESBuild as the primary bundler, removing
the option for automatic builds through the embedded FXServer webpack builder.

This documentation is preserved for legacy purposes.

### Automatic Builds (Optional)

*This is not recommended as the embedded version of yarn is 
ocassionally prone to performance and environment problems. We 
highly recomend, you manually run the build script*

If desired, the `fxmanifest.lua` can be setup to allow for
FXServer to automatically build on resource start. This utilizes
the embedded `yarn` & `webpack` default resources.

To enable this, add the following to your `fxmanifest.lua`

```lua
dependency {
    'yarn',
    'webpack'
}

webpack_config 'webpack.config.js'
```

### Additional Notes

Need further support? Join our [Discord](https://discord.com/invite/HYwBjTbAY5)!