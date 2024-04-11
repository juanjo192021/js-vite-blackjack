import { pedirCarta , valorCarta, crearCartaHTML, definirGanador} from "./";

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos Puntos mínimos que la computadora necesita para ganar 
 * @param {HTMLElement} puntosHTML Elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora Elemento HTML para mostrar las cartas
 * @param {Array<String>} deck 
 */

export const turnoComputadora = (puntosMinimos,puntosHTML,divCartasComputadora, deck = []) =>{
    let puntosComputadora = 0;

    if (!puntosMinimos) throw new Error('Puntos mínimos son necesarios');
    if (!puntosHTML) throw new Error('Argumento puntosHTML es necesario');

    do{
        const carta = pedirCarta( deck );
        
        puntosComputadora += valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if( puntosMinimos > 21){
            break;
        }

    }while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

    definirGanador(puntosMinimos, puntosComputadora);

}