import React, {useState} from 'react'

import { 
    ContenedorPaginaHome,
    ContenedorHome, 
    HomeBotonContenedor,
    HomeBotonProductos, 
    HomeBotonVentas, 
    FlechaAdelante, 
    FlechaDerecha,
    ImgLeyenda,
    Img50anhos
} from './HomeElements'

import Leyenda from '../../images/No-sera-de-tomar-plateado-blanco.png'
import Anhos from '../../images/Anhos_Blanco.png'

const HomeSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <ContenedorPaginaHome>
            <ContenedorHome>
                <ImgLeyenda src={Leyenda}/>
                <Img50anhos src={Anhos}/>
                <HomeBotonContenedor>
                    <HomeBotonProductos to="/productos" onMouseEnter={onHover} onMouseLeave={onHover}>
                        VER TODOS LOS PRODUCTOS {hover ? <FlechaAdelante/>: <FlechaDerecha/>}
                    </HomeBotonProductos>
                    <HomeBotonVentas 
                    to="mapa"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-50}
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}>
                        VISITA NUESTRO PUNTO DE VENTA{hover ? <FlechaAdelante/>: <FlechaDerecha/>}
                    </HomeBotonVentas>
                </HomeBotonContenedor>
            </ContenedorHome>
        </ContenedorPaginaHome>
    )
}
export default HomeSection
