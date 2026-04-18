export default dynamicImport;
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
declare function dynamicImport(importFn: Function, loadedFn?: Function): Function;
