# Hello, Typescript

A "Hello, World!" for typescript.

## Overview

This repo provides a sample backend written in typescript for new users of typescript. It is **not** intended to serve as a best practices example. I've tried to include searchable word **lesson** when there are toggleable actions that you can adjust & play with - or for areas I want to call out.

As with all things, please read the manual [the TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html).

## Pre-requisites

The start script will start the backend server using ts-node-dev. IF you wanted to build & deploy this app to production - you would want to transpile it using `tsc` and serve the dist folder. I've done minimalistic setup to support that using the `npm build-and-serve` script.

1. `npm install`
2. `npm start`

If you wish to change host & port information, please edit `env.ts` in the root folder.

## Known Issues

Currently, the build-and-serve script only builds & serves a default home page, the routing mechanisms are not functioning in the "production" build. That's beyond the scope/intent of this repo at this time.

## What Then?

After the dev server is running, go to http://localhost:8000/hello & http://localhost:8000/animals & start figuring out what's happening in **the code**.

## License

This isn't licensed. Do what you want. Have fun.
