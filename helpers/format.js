const letraA = 65;

/**
 * 
 * @param { string } singularidad
 * @returns { string[] }
 */
export const format = ( singularidad ) => {
    let termino = '';
    singularidad.split( '' ).forEach( ( variable, index ) => {
        const letra = String.fromCharCode( letraA + index );
        termino = termino.concat( 
            ( variable === '0' ) ? 
                `¬${ letra }` : 
                ( variable === '1' ) ?
                    `${ letra }` :
                    '' );
    } );
    termino = `( ${ termino } )`;
    return termino;
};
