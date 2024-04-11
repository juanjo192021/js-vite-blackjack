import _ from 'underscore';

// Exportación individual
//export const miNombre = "Juan José";

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['A','J','Q','K']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['C','D','H','S']
 * @returns {Array<String>} Retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if (!tiposDeCarta || tiposDeCarta.length === 0)
        throw new Error('tiposDeCarta es obligatorio como un arreglo de string');

    if (!tiposDeCarta || tiposDeCarta.length === 0)
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }
    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    deck = _.shuffle(deck);
    return deck;
}

// Exportación por defecto
//export default crearDeck;