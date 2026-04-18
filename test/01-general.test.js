import { describe, it, expect } from 'vitest'
import dynamicImport from '../src/main.js'



describe ( 'Dynamic Loading of JS files', () => {



it ('general test', async () => {
      expect ( typeof dynamicImport ).toBe ( 'function' )
      let importPatternFn = name => import ( `./${name}-lib.js` );
      let importEngine = dynamicImport ( importPatternFn );

      expect ( typeof importEngine ).toBe ( 'function' )
      
      const ls = await importEngine ( [ 'test'] )
      const fn = ls[0].callme;
      expect ( typeof fn ).toBe ( 'function' )
      expect ( fn() ).toBe ( 'Hello!' )
}) // it general test



it ( 'Load a custom module name', async () => {
      const importPatternFn = req => {
                                    let
                                          file
                                        , name = 'default'
                                        ;
                                    if (req.includes ( ':') )    [ file, name ] = req.split ( ':' )
                                    else                          file = req;
                                    return import ( `./${file}-02.js` ).then ( module => module[name] )
                              } // importPatternFn func.

      let importEngine = dynamicImport ( importPatternFn );
      const ls = await importEngine ( [ 'test:other' ] )
      const fn = ls[0].callme;
      expect ( typeof fn ).toBe ( 'function' )
      expect ( fn() ).toBe ( 'Goodbye!' )
}) // it Load a custom module name



}) // describe