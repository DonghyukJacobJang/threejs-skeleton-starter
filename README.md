# Threejs Skeleton Starter

This Threejs Skeleton Starter(TSS) allows to build Webgl applications in a minute. It is using standards from ES2015, ES2016 & ES2017 along with Webpack, webpack-dev-server, Babel packages(including in Babel polyfill and Async/Await).

## Dependencies
- babel
- scss
- eslint
- webpack
- threejs
- glslify
- stats-js
- dat.gui
- query-string

## Usage

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

### Production folder Structure
```sh
public/assets/*
public/app.bundle.js
public/app.bundle.js.gz
public/commoms.js
public/app.bundle.css
public/index.html
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

### GLOBAL VARIABLES

Always make the root path to assets (image/videos..) a variable, store it in your global settings file, in both Javascript code and CSS

Because when the site goes live, those assets will come from a CDN and going in and changing all the paths the day before the site goes live is very annoying.

```scss
$ASSET_PATH: './assets/';
.background {
    background: url('#{$ASSET_PATH}/images/background.png')
}
```

```javascript
import { ASSET_PATH, IMAGE_PATH } from '[path]/util/constants';

const filePath1 = `${ASSET_PATH}images/[file-name].png`;
const filePath2 = `${IMAGE_PATH}[file-name].png`;
```

## More Info

### TODO
- Create Asset Manager

### Author

Donghyuk(Jacob) Jang

### License

This project is licensed under the MIT License
