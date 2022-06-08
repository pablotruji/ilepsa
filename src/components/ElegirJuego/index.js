import React from 'react'

import {
    ContenedorElegirJuegoPagina,
    ContenedorElegirJuego,
    ContenedorBotones,
    BotonFuerte,
    BotonSuave,
    BotonRegresar
    } from './ElegirJuegoElementos'

const index = () => {
    return (
        <ContenedorElegirJuegoPagina>
            <ContenedorElegirJuego>
            <h2>
                ELIGE TU PREFERIDO Y <span><br/>DIVIÉRTETE CON ILEPSA</span>
            </h2>
            <ContenedorBotones>
                <BotonSuave to="/juego/light">LIGHT</BotonSuave>
                <BotonFuerte to="/juego/heavy">HEAVY</BotonFuerte>
            </ContenedorBotones>
            <BotonRegresar to="/home">REGRESAR</BotonRegresar>
            </ContenedorElegirJuego>
        </ContenedorElegirJuegoPagina>
    )
}

export default index
