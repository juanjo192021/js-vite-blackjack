import { cambiarEstadoBtn } from "./cambiar-estado-btn";

/**
 * Limpiar data del aplicativo 
 * @param {HTMLSpanElement} puntosHTML 
 * @param {HTMLDivElement} divCartasJugador 
 * @param {HTMLDivElement} divCartasComputadora 
 */

export const limpiarData = (puntosHTML, divCartasJugador, divCartasComputadora) =>{

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;
    divCartasComputadora.innerText = '';
    divCartasJugador.innerText = '';
    cambiarEstadoBtn(false);
    
} 