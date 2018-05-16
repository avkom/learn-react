# learn-react
My educational project to learn React, Redux, NPM, Webpack, Babel etc.

## Setup local environment

- Install `git`.
- Install `Node.js`.
- `git clone https://github.com/avkom/learn-react.git`
- `cd learn-react`
- `npm install`

## Run Webpack development server
- Run `npm i -g webpack webpack-cli webpack-dev-server` once to install webpack-dev-server globally. 
- Run `npm start`.
- Open `http://localhost:8080/` in a browser.
- Make changes in the source files and save. Webpack will build the changed sources and then update the page in the browser automatically.
- Press Ctrl+C in console to stop the development server.

## Make production build
- Run `npm i webpack webpack-cli -g` once to install webpack command line interface globally.
- Run `npm prod-build`. The results of the build will be in `dist` folder.

## Run tests
- Run `npm test`.