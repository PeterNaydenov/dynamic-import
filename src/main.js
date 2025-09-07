'use strict'

const defaultLoadedFn = ( x ) => x ? x.default : null

/**
 * @param {Function} importFn - 'import-pattern' function. (required)
 * @param {Function} loadedFn - function that executes when module is loaded (optional)
 * @returns {Function} requestList - function that expect list of modules
 */
function dynamicImport ( importFn, loadedFn=defaultLoadedFn ) {
/**
 * Function that expect list of modules
 * @param {Array.<string|Object>} list - Data argument for 'import-pattern' function
 * @returns {Promise} - promise that resolve to array of modules
 */
return function requestList ( list ) {
        const promises = [];
        list.forEach ( src =>  promises.push ( 
                                            importFn ( src )
                                                    .then ( loadedFn )
                                                    .catch ( err => null )   
                                    ))
        return Promise.all ( promises )
}} // dynamicImport func.



export default dynamicImport


