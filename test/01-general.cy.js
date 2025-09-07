import dynamicImport from '../src/main.js'





describe ( 'Dynamic Loading of JS files', () => {



it ('general test', done => {
      expect ( dynamicImport ).to.be.a ( 'function' )
      let importPatternFn = name => import ( `./${name}-lib.js` );
      let importEngine = dynamicImport ( importPatternFn );

      expect ( importEngine ).to.be.a ( 'function' )
      
      importEngine ( [ 'test'] )
            .then ( ls => {
                      const fn = ls[0].callme;
                      expect ( fn ).to.be.a ( 'function' )
                      expect ( fn() ).to.be.equal ( 'Hello!' )
                      done ()
                })
}) // it general test



it ( 'Load a custom module name', done => {
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
      importEngine ( [ 'test:other' ] )
            .then ( ls  => {
                      const fn = ls[0].callme;
                      expect ( fn ).to.be.a ( 'function' )
                      expect ( fn() ).to.be.equal ( 'Goodbye!' )
                      done ()
                  })
}) // it Load a custom module name



}) // describe


