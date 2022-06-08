import React, {useState} from 'react'
import {
    ContenedorPaginasSobreNosotros,
    ContenidoSobreNosotros,
    ContenedorImagen,
    ImgTraguito2,
    SobreNosotrosh2,
    PropuestaValor,
    SaberMas,
    BotonSaberMas,
    FlechaAdelante, 
    FlechaDerecha,

} from './SobreNosotrosElementos'

import {
    ContenedorSobreNosotrosEn
} from './SobreNosotrosEnElements'

import Traguito2 from '../../images/Traguito-2-difuminado.png';

const SobreNosotros = ({ toggleInf }) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <ContenedorPaginasSobreNosotros id="sobre-nosotros">
            <ContenedorSobreNosotrosEn>
                <ContenidoSobreNosotros>
                    <SobreNosotrosh2>OUR HISTORY</SobreNosotrosh2>
                    <PropuestaValor>Our company was established more than 60 years ago, 
                                    generating responsibility and sustainable social commitment 
                                    for decades, developing a fair market with the recognition of 
                                    an adequate value to our suppliers, to obtain High Quality 
                                    liquors as a result.
                                    Our stellar, Caña Aguardiente, is made with the best raw 
                                    materials grown by the expert hands of our farmers in the 
                                    foothills of the Corazón Mountain, located in Cotopaxi 
                                    province, Ecuador.

                    </PropuestaValor>
                    <SaberMas>WOULD YOU LIKE TO KNOW MORE?
                        <BotonSaberMas onClick={toggleInf} onMouseEnter={onHover} onMouseLeave={onHover}>
                            {hover ? <FlechaAdelante/>: <FlechaDerecha/>}
                        </BotonSaberMas>
                    </SaberMas>
                </ContenidoSobreNosotros> 
                <ContenedorImagen> 
                    <ImgTraguito2 src={Traguito2}/>
                </ContenedorImagen>
            </ContenedorSobreNosotrosEn>
        </ContenedorPaginasSobreNosotros>
    )
}

export default SobreNosotros
