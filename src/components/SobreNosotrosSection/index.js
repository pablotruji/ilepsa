import React, {useState} from 'react'
import {
    ContenedorPaginasSobreNosotros,
    ContenedorSobreNosotros,
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
import Traguito2 from '../../images/Traguito-2-difuminado.png';

const SobreNosotros = ({ toggleInf }) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <ContenedorPaginasSobreNosotros id="sobre-nosotros">
            <ContenedorSobreNosotros>
                <ContenidoSobreNosotros>
                    <SobreNosotrosh2>PROPUESTA DE VALOR</SobreNosotrosh2>
                    <PropuestaValor>ILEPSA es una empresa constituida hace más de 60 años generando 
                                    así responsabilidad y compromiso social sustentable, desarrollando un mercado 
                                    justo con el reconocimiento de un valor adecuado a nuestros proveedores,
                                    para obtener como resultado licores de Alta Calidad.  
                                    Nuestro estelar, el Aguardiente de Caña, es elaborado con la mejor 
                                    materia prima cultivada por las mejores manos de nuestros agricultores en 
                                    las faldas de la montaña del Corazón ubicado en la provincia del Cotopaxi.
                    </PropuestaValor>
                    <SaberMas>¿TE GUSTARÍA SABER MÁS?
                        <BotonSaberMas onClick={toggleInf} onMouseEnter={onHover} onMouseLeave={onHover}>
                            {hover ? <FlechaAdelante/>: <FlechaDerecha/>}
                        </BotonSaberMas>
                    </SaberMas>
                </ContenidoSobreNosotros> 
                <ContenedorImagen> 
                    <ImgTraguito2 src={Traguito2}/>
                </ContenedorImagen>
            </ContenedorSobreNosotros>
        </ContenedorPaginasSobreNosotros>
    )
}

export default SobreNosotros
