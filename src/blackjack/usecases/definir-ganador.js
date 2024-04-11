/**
 * Definir el ganador del juego
 * @param {Number} puntosMinimos Puntos del jugador
 * @param {Number} puntosComputadora Puntos de la computadora
 */

export const definirGanador = (puntosMinimos, puntosComputadora) => {
    setTimeout(() =>{
        if(puntosComputadora === puntosMinimos){
            alert('Nadie gana , TERRIBLE') ; 
        } else if( puntosMinimos > 21 ){
            alert('La computadora gana');
        } else if(puntosComputadora > 21 ){
            alert('Jugador gana');
        } else{
            alert('Computadora gana');            
        }
    }, 10);
} 