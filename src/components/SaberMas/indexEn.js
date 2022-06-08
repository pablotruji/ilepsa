import React, {useState} from 'react'
import {
    ContenedorSaberMasPagina,
    ContenedorSaberMas,
    ContenedorImagen,
    ImgTraguito3,
    Historia,
    Regresar,
    BotonRegresar,
    FlechaDetras, 
    FlechaIzquierda,
    FlechaAtras,

} from './SaberMasElementos'
import Traguito3 from '../../images/Traguito-2-3.png';

const SobreNosotros = ({isOpenInf, toggleInf}) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <ContenedorSaberMasPagina isOpenInf={isOpenInf} onClick={toggleInf}>
           <ContenedorSaberMas>
                <Historia>
                    Industria Licorera Embotelladora de Pichincha S.A. ILEPSA founded in 
                    1959 is one of the first companies to produce and commercialize spirits 
                    in the country.
                    Over the last few years and today, the company has been incorporating 
                    new products, launching a complete line of Sweet Creams, Milk Creams and 
                    Rum to the market under different brands: Cold’s, Caribbean’s Island and 
                    Treasure Island.
                    The company is proud to mention that all our lines have a high percentage 
                    of national raw materials.
                    It is our commitment to provide valuable knowledge that allows our 
                    customers and consumers an innovative and appropriate use of our products 
                    in the field of cocktails, pastry and gastronomy.
 
                </Historia>
                <Regresar> GO BACK
                    <BotonRegresar onMouseEnter={onHover} onMouseLeave={onHover}>
                         {hover ? <FlechaIzquierda/>: <FlechaAtras/>}
                    </BotonRegresar>
                </Regresar>
            </ContenedorSaberMas> 
            <ContenedorImagen> 
                <ImgTraguito3 src={Traguito3}/>
            </ContenedorImagen>
        </ContenedorSaberMasPagina>
    )
}

export default SobreNosotros
