import { range, crearTablaQuineMcClusky, crearTabla, limpiarCubos } from "./";

/**
 * 
 * @param { string } mintermino1 
 * @param { string } mintermino2 
 * @returns { number }
 */
const compararMinterminos = ( mintermino1, mintermino2 ) => {
    let posicionDiferente = [];
    for( const index of range( 0, mintermino1.length ) ) {
        if( mintermino1.at( index ) !== mintermino2.at( index ) ) posicionDiferente.push( index );
        if( posicionDiferente.length > 1 ) break;
    }
    if( posicionDiferente.length > 1 ) return -1;

    return posicionDiferente.at( 0 );
};

/**
 * 
 * @param { Object[] } seccion1 
 * @param { Object[] } seccion2
 * @returns { Object } 
 */
const compararSecciones = ( seccion1, seccion2 ) => {
    const cuboNuevo = new Set();
    const singularidades = [];
    seccion1.forEach( ( mintermino1 ) => {
        seccion2.forEach( ( mintermino2 ) => {
            const posicion = compararMinterminos( mintermino1.mintermino, mintermino2.mintermino );
            if( posicion !== -1 ) {
                let minterminoNuevo = mintermino1.mintermino.split( '' );
                minterminoNuevo.splice( posicion, 1, '*' )
                minterminoNuevo = minterminoNuevo.reduce( ( prev, current ) => prev.concat( current ), '' );
                cuboNuevo.add( minterminoNuevo );
                mintermino1.combinado = true;
                mintermino2.combinado = true;
            }
        } );
        if( !mintermino1.combinado ) singularidades.push( mintermino1.mintermino );
    } );

    return { cuboNuevo: Array.from( cuboNuevo ), singularidades };
};

/**
 * 
 * @param { Array } seccion 
 * @returns { Array }
 */
const verificarUltimaSeccion = ( seccion ) => {
    return seccion.filter( ( { combinado } ) => !combinado ).map( ( { mintermino } ) => mintermino );
};

/**
 * 
 * @param { Object[] } tabla 
 * @returns { string[] }
 */
export const quineMcClusky = ( tabla ) => {
    limpiarCubos();

    const singularidadesGlobales = [];

    while( true ) {
        const minterminosCuboNuevo = [];
        for( const index of range( 0, ( tabla.length - 1 ) ) ){
            const { cuboNuevo, singularidades } = compararSecciones( tabla.at( index ), tabla.at( index + 1 ) );
            singularidadesGlobales.push( ...singularidades );
            minterminosCuboNuevo.push( ...cuboNuevo );
        }
        singularidadesGlobales.push( ...( verificarUltimaSeccion( tabla.at( -1 ) ) ) );

        crearTabla( tabla );

        tabla = crearTablaQuineMcClusky( minterminosCuboNuevo );
        if( tabla.length === 1 || minterminosCuboNuevo.length < 2 ) {
            crearTabla( tabla );
            singularidadesGlobales.push( ...Array.from( new Set( minterminosCuboNuevo ) ) );
            break;
        }
    }

    return singularidadesGlobales;
};
