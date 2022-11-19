import { crearMinterminos, crearTablaQuineMcClusky, quineMcClusky, format } from './helpers';
import './style.css';

const numeroVariablesInput = document.querySelector( '#numero-variables' );
const minterminosInput = document.querySelector( '#minterminos' );
const formula = document.querySelector( '.formula' );

let minterminos = undefined;
let numeroVariables = 0;
let tablaQuineMcClusky = undefined;

document.querySelector( 'form' ).addEventListener( 'submit', ( evt ) => {
    evt.preventDefault();
    numeroVariables = Number.parseInt( numeroVariablesInput.value );
    minterminos = crearMinterminos( minterminosInput.value, numeroVariables );
    tablaQuineMcClusky = crearTablaQuineMcClusky( minterminos );
    const singularidades = quineMcClusky( tablaQuineMcClusky );
    formula.innerText = `F = ${ singularidades.map( ( singularidad ) => format( singularidad ) ).toString().replaceAll( ',', ' + ' ) }`;
} );
