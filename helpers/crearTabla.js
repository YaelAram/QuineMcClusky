const cubosSection = document.querySelector( '.cubos-section' );

export const limpiarCubos = () => { cubosSection.innerHTML = '' };

/**
 * 
 * @param { Array } tabla 
 */
export const crearTabla = ( tabla ) => {
    const tablaHTML = document.createElement( 'table' );
    const theadHTML = document.createElement( 'thead' );
    const tbodyHTML = document.createElement( 'tbody' );

    tablaHTML.classList.add( 'tabla-verdad' );
    theadHTML.innerHTML = '<tr><th>Termino</th></tr>';
    tablaHTML.append( theadHTML );

    tabla.forEach( ( seccion ) => {
        seccion.forEach( ( { mintermino, combinado } ) => {
            const tr = document.createElement( 'tr' );
            tr.innerHTML = `<td class="${ ( combinado ) ? 'combinado' : 'no-combinado' }">${ mintermino }</td>`;
            tbodyHTML.append( tr );
        } );
    } );

    tablaHTML.append( tbodyHTML );
    cubosSection.append( tablaHTML );
};
