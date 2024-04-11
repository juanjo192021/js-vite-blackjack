/**
 * Esta funcion permite tomar una carta
 * @param {Array<String>} deck Ejemplo: ['AC','JD','QH','KS']
 * @returns {String} Retorna una carta
 */

export const pedirCarta = (deck) =>{
    if(!deck ||deck.length === 0)  
        throw Error('No hay cartas en el deck');

    return deck.pop();
}