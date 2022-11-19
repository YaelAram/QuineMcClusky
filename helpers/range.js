/**
 * 
 * @param { Number } inicio 
 * @param { Number } fin 
 */
export const range = function* ( inicio = 0, fin = 10 ) {
    for( let i = inicio ; i < fin ; i++ ) yield i;
};
