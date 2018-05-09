# learn-react
My educational project to learn React, Redux, NPM, Webpack, Babel etc.

## Setup local environment
```
git clone https://github.com/avkom/learn-react.git
cd learn-react
npm install
```

## Build in development mode
Run `webpack` to build and then open `dist\index.html` in browser.
Run `webpack` to rebuild and then refresh the page.

## Run in development mode and watch
Run `webpack -w` to build and then open `dist\index.html` in browser.
Just save a source file and refresh a page.
Press Ctrl+C in console to stop watching the files.

## Use webpack-dev-server
Run once `npm i -g webpack-dev-server` to install webpack-dev-server globally.
Run 'webpack-dev-server'.
Just save a source file and refresh a page.
Press Ctrl+C in console to stop watching the files.

## Make production build
Run `webpack -p` to build and then open `dist\index.html` in browser.

## Run tests
Run `npm test`