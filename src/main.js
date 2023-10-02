function dynamicImport ( importFn ) {
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


