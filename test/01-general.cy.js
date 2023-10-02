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



}) // describe


