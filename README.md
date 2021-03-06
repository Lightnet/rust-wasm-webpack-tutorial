# rust-wasm-webpack-template

# Last updated: [2018-04-23]

# Packages:
 * webpack 4.6.0
 * webpack-cli 2.0.15
 * rust-wasm-loader 0.1.2
 * [rust language](https://www.rust-lang.org/en-US/) 1.25.0

# Notes:
 * Fixed export functions tmp. It seem to be missing add functions rust to javascript for exporting.
 * File size loading warning.
 * You might need to install rust night build depend on which config is it. wasm32-unknown-unknown / wasm32-unknown-emscripten
 

 

Small template for compiling Rust to WebAssembly with webpack and live reloading.

Based on [rust-wasm-webpack-tutorial](https://github.com/ianjsikes/rust-wasm-webpack-tutorial). Differences:
- uses `webpack-dev-server` to automatically recompile and reload the browser window on file changes during development
- optimized production build (see below)

[Live Demo](https://bwasty.github.io/rust-wasm-webpack-template/)

## Usage
* set up Rust and Emscripten for compiling to WebAssembly, for example using the beginning of [this](https://medium.com/@ianjsikes/get-started-with-rust-webassembly-and-webpack-58d28e219635) guide.
* `npm install`
* `npm run start` (builds, starts dev server and opens http://localhost:8080)
* change the Rust or JavaScript code and watch the browser reload after a few seconds

### Production build
Use `npm run build` to generate an optimized build in the `dist` folder (compiling the Rust code in release mode and using UglifyJS for minifying the JavaScript code). To deploy to GitHub pages use `npm run deploy`.
