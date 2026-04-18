'use strict'

/** @param {any} x @returns {any} */
const defaultLoadedFn = ( x ) => x.default ?? x



/**
 * Creates a dynamic import engine for loading modules based on provided patterns.
 * @param {Function} importFn - A function that takes a module request (string or object) and returns a Promise that resolves to the imported module. (required)
 * @param {Function} [loadedFn=defaultLoadedFn] - Optional function to transform the loaded module (e.g., extract default export). 
 * @returns {Function} requestList - Function that accepts an array of module requests and returns a Promise resolving to an array of loaded modules.
 * @example
 * const importPatternFn = (name) => import(`./modules/${name}.js`);
 * const importEngine = dynamicImport(importPatternFn);
 * const modules = await importEngine(['utils', 'helpers']);
 * // modules = [utilsModule, helpersModule]
 */
function dynamicImport ( importFn, loadedFn=defaultLoadedFn ) {

/**
 * Loads multiple modules asynchronously based on the provided list.
 * @param {Array<string|Object>} list - Array of module requests (strings or objects with module info).
 * @returns {Promise<any[]>} Promise resolving to an array of loaded modules (null for failed loads).
 * @example
 * const modules = await requestList(['user', 'config']);
 */
return function requestList ( list ) {
        /** @type {Promise<any>[]} */
        const promises = [];
        list.forEach ( src =>  promises.push ( 
                                            importFn ( src )
                                                    .then ( loadedFn )
                                                    .catch ( err => null )   
                                    ))
        return Promise.all ( promises )
}} // dynamicImport func.



export default dynamicImport