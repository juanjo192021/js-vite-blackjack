import _ from 'underscore';

import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML, cambiarEstadoBtn, limpiarData } from './usecases';

/*
2c = trebol
2d = diamantes
2h = corazones
2s = espada
*/ 

let deck =[];
const especiales = ['A','J','Q','K'];
const tipos = ['C','D','H','S'];
let puntosJugador = 0,
    puntosComputadora = 0;;
    
    //Referencias del html
    
const btnNuevo = document.querySelector('#btnNuevo');
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

deck = crearDeck(tipos, especiales);

//Eventos

btnPedir.addEventListener('click',() => {

    const carta = pedirCarta( deck );

    puntosJugador += valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = crearCartaHTML( carta );
    divCartasJugador.append( imgCarta );
    
    if(puntosJugador > 21) {

        //console.warn('Lo siento mucho, perdiste');
        cambiarEstadoBtn(true);
        turnoComputadora(puntosJugador, puntosHTML[1],divCartasComputadora, deck);

    }else if(puntosJugador === 21){

        //console.warn('21, genial');
        cambiarEstadoBtn(true);
        turnoComputadora(puntosJugador, puntosHTML[1],divCartasComputadora, deck);               
    }
});

btnDetener.addEventListener('click', ()=>{
    
    cambiarEstadoBtn(true);
    turnoComputadora(puntosJugador, puntosHTML[1],divCartasComputadora, deck);
})

btnNuevo.addEventListener('click', () => {

    //console.clear();
    deck = [];
    deck = crearDeck(tipos, especiales);

    puntosJugador = 0;
    puntosComputadora = 0;
    limpiarData(puntosHTML,divCartasJugador, divCartasComputadora);
});
