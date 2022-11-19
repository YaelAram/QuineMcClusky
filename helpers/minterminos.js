import { range } from "./";

/**
 * 
 * @param { number } mintermino 
 * @param { number } tam
 * @returns { string }
 */
const convertirBinario = ( mintermino, tam ) => mintermino.toString( 2 ).padStart( tam, '0' );

/**
 * 
 * @param { string } input 
 * @param { number } tam
 * @returns { string[] }
 */
export const crearMinterminos = ( input, tam ) => {
    let minterminos = input.split( ',' );
    minterminos = minterminos.flatMap( ( mintermino ) => {
        mintermino = mintermino.trim();
        if( mintermino.includes( '-' ) ) {
            const [ inicio, fin ] = mintermino.split( '-' );
            const aux = [];
            for( const index of range( Number.parseInt( inicio ), Number.parseInt( fin ) + 1 ) ) 
                aux.push( convertirBinario( index, tam ) );
            return aux;
        }
        else return convertirBinario( Number.parseInt( mintermino ), tam );
    } )

    return minterminos;
};

/**
 * 
 * @param { string } mintermino 
 * @returns { number }
 */
const obtenerCantidadUnos = ( mintermino ) => {
    return mintermino.split( '' ).reduce( ( prev, current ) => {
        let valor = ( current !== '*' ) ? Number.parseInt( current ) : 0;
        return valor + prev;
    }, 0 );
};

/**
 * 
 * @param { string[] } minterminos 
 * @returns { Array }
 */
export const crearTablaQuineMcClusky = ( minterminos ) => {
    const tablaQuineMcClusky = [];
    minterminos.forEach( ( mintermino ) => {
        const cantidadUnos = obtenerCantidadUnos( mintermino );
        if( tablaQuineMcClusky.at( cantidadUnos ) ) 
            tablaQuineMcClusky.at( cantidadUnos ).push( { mintermino, combinado: false } );
        else tablaQuineMcClusky[ cantidadUnos ] = [ { mintermino, combinado: false } ];
    } );
    return tablaQuineMcClusky.filter( ( seccion ) => seccion !== undefined );
};
