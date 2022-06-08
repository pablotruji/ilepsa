import React, {useState} from 'react'

import { 
    ContenedorPaginaHome,
    ContenedorHome, 
    HomeBotonContenedor,
    HomeBotonProductos, 
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
                </HomeBotonContenedor>
            </ContenedorHome>
        </ContenedorPaginaHome>
    )
}
export default HomeSection
