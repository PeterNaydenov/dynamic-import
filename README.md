# Dynamic Import (@peter.naydenov/dynamic-import)

![version](https://img.shields.io/github/package-json/v/peterNaydenov/dynamic-import)
![license](https://img.shields.io/github/license/peterNaydenov/dynamic-import)


Function that allows you to dynamically import ES modules in your project. Works in **Vite** projects.



## Installation

```bash
npm i @peter.naydenov/dynamic-import
```



## Usage

```js
// for es6 projects:
import dynamicImport from '@peter.naydenov/dynamic-import';

// for commonjs projects:
const dynamicImport = require('@peter.naydenov/dynamic-import');



// Provide first the import pattern function like this one:
const importPattern = (name) => import(`./modules/${name}.js`);
const importModules = dynamicImport ( importPattern );

// Then use it to import modules:
importList = ['module1', 'module2', 'module3'];
importModules ( importList )  // Expect string[] and returns a promise
            .then ( moduleList => {
                        // Do something with the moduleList
            })
```



If you want to load a custom module name you can do it like this:
```js
 import dynamicImport from '@peter.naydenov/dynamic-import';

 const importPattern = (req) => {
                                    let
                                          file
                                        , name = 'default'
                                        ;
                                    if (req.includes ( ':') )    [ file, name ] = req.split ( ':' )
                                    else                          file = req;
                                    // file 'test-02.js' has custom module names like [ 'one', 'other' ]
                                    return import ( `./${file}-02.js` ).then ( module => module[name] )
                        };

const importModules = dynamicImport ( importPattern );
// requesting just a name will load module.default, providing string with 'module:name' will load module[name]
importModules ( [ 'test:other' ] )
      .then ( ls => {
                const myModuleLoaded = ls[0];
                // Do something with myModuleLoaded
            })
```



If you have code that should be executed on each dynamic load there is an optional second argument to the `dynamicImport` function. It's chained after the `importPattern` function. Here is an example how to use it:

```js
const importPattern = (name) => import(`./modules/${name}.js`);
const importModules = dynamicImport ( importPattern );

// Then use it to import modules:
importList = ['module1', 'module2', 'module3'];
const loadedFn = ( list ) => {
                // ... Do some app updates using a module list
                return list // don't forget to return the list 
                // should be available for the custom promise resolver after the module loading
            } // loadedFn func.

importModules ( importList, loadedFn )  // Expect string[] and returns a promise
            .then ( moduleList => { // moduleList returned from loadedFn
                        // importPattern and loadedFn are already called
                        // Do something specific with the moduleList
                })

```



## Credits
'@peter.naydenov/dynamic-import' was created and supported by Peter Naydenov.



## License
'@peter.naydenov/dynamic-import' is released under the [MIT License](http://opensource.org/licenses/MIT).