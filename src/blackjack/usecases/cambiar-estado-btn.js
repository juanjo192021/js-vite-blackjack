/**
 * Cambiar estado de los botones Pedir y Detener
 * @param {Boolean} status 
 */
export const cambiarEstadoBtn = (status) =>{
    btnPedir.disabled = status;
    btnDetener.disabled = status;
}