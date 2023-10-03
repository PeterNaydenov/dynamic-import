'use strict'
/**
 * @param {Function} importFn - 'import-pattern' function
 * @returns {Function} requestList - function that expect list of modules
 */
function dynamicImport ( importFn ) {
/**
 * Function that expect list of modules
 * @param {Array.<string|Object>} list - Data argument for 'import-pattern' function
 * @returns {Promise} - promise that resolve to array of modules
 */
return function requestList ( list ) {
        const promises = [];
        list.forEach ( src =>  promises.push ( 
                                            importFn ( src )
                                                    .then ( x => x ? x.default : null )
                                                    .catch ( err => null )   
                                    ))
        return Promise.all ( promises )
}} // dynamicImport func.



export default dynamicImport


