import React from 'react'
import {ContenedorMapa,
        Mapah2,
        Ventah2,
        IcoUbicacion,
        IcoVenta,
        GoogleMaps
} from './MapaElementos'

const Mapa = () => {
    return (
        <ContenedorMapa id="mapa">
            <Mapah2><IcoUbicacion/>avenue EL INCA E1-44 &#38; 10 DE AGOSTO</Mapah2>
            <Ventah2><IcoVenta/>POINT OF SALE</Ventah2>
            <GoogleMaps src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1265.8156849965658!2d-78.48542357154493!3d-0.15984771302274914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x78d210bfd3dfdfe!2sILEPSA!5e0!3m2!1ses!2sec!4v1638820706162!5m2!1ses!2sec" allowfullscreen="" loading="lazy"></GoogleMaps>
        </ContenedorMapa>
    )
}

export default Mapa;
