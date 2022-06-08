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
                CHOOSE YOUR FAVORITE <span><br/>AND HAVE FUN WITH ILEPSA</span>
            </h2>
            <ContenedorBotones>
                <BotonSuave to="/game/light">LIGHT</BotonSuave>
                <BotonFuerte to="/game/heavy">HEAVY</BotonFuerte>
            </ContenedorBotones>
            <BotonRegresar to="/homeen">GO BACK</BotonRegresar>
            </ContenedorElegirJuego>
        </ContenedorElegirJuegoPagina>
    )
}

export default index
