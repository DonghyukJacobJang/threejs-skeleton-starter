# Threejs Skeleton Starter

A starter pack to build JavaScript applications using standards from ES2015, ES2016 & ES2017. It uses webpack, Babel and webpack-dev-server to compile and serve. It is fully compatible with Async/Await as it uses the Babel polyfill.

### Version
1.1.0

## Usage

### Dependencies
- babel
- scss
- eslint
- webpack
- threejs
- glslify
- stats-js
- dat.gui
- query-string

### Folder Structure
```bash
src/app.js            // entry point
src/app.scss            // temp global style sheet
src/webgl/*           // all core threejs init files
src/assets/*            // all kind of assets
src/data/*            // keep data files
src/lib/*           // 3rd party library
src/objects/*           // threejs objects
src/util/*            // custom util files
```

### Installation

Install the dependencies

```sh
$ npm install
```

### Serve
To serve in the browser  - Runs webpack-dev-server

```sh
$ npm start
```
```
http://localhost:8080/
http://localhost:8080/?stats
http://localhost:8080/?stats&helpers
```

### Build
Compile and build

```sh
$ npm run build
```

## More Info

### TODO
- Assets handler

### Author

Donghyuk(Jacob) Jang

### License

This project is licensed under the MIT License
