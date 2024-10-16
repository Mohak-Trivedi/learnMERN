// Just like Browser's Runtime Engine has access to Globals (w.g. window object),
// the NodeJS Runtime Engine also has access to Globals.

// __dirname: Current Directory Path
console.log(__dirname);

// __filename: Curent Directory Path along with the current file.
console.log(__filename);

// module: module object
console.log(module);
// Moduling is a mechanism using which you distribute your code in small reusable
// modules. It uses the module object to be able to expose variables, functions
// or classes from a file to other files.
// There are 2 moduling systems available: ES6 Moduling (New) and CommonJS Moduling (Legacy)
// Note: You can't have a ES6 moduling file in CommonJS moduling folder, but
// you can have a file following CommonJS in a ES6 Moduling project by mentioning
// .cjs extension for that one file, but you can't import this file anywhere.
// Also, some globals don't work in ES6 Moduling. e.g.from above, only process
// works in ES6 Modules.
// CommonJS is enabled by default.
// To enable ESM, you may use on of the below 3 ways:
// - .mjs file extensions
// - in package.json, for type property mention 'module' value.

// require: require function. Used for getting the variable, class or function
// that we exposed using the module from another files.

// process: process object
console.log(process); // Useful for process-level interactions.

// global: just like we have window object in browser.
console.log(global);
