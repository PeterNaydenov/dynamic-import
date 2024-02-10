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



## Credits
'@peter.naydenov/dynamic-import' was created and supported by Peter Naydenov.



## License
'@peter.naydenov/dynamic-import' is released under the [MIT License](http://opensource.org/licenses/MIT).