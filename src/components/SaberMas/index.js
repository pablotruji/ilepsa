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
                <Historia>Industria Licorera Embotelladora de Pichincha S.A. ILEPSA 
                            fundada en 1959, fue una de las primeras compañías en producir
                            y comercializar aguardiente en el país. <br/>
                            En el transcurso de los últimos años y en la actualidad, la empresa 
                            ha ido incorporando nuevos productos, lanzando al mercado una línea 
                            completa de Cremas Dulces, Cremas Lácteas y Ron bajo diferentes 
                            marcas: Cold’s, Caribbean’s Island e Isla del Tesoro. <br/> 
                            Es de orgullo para la empresa mencionar que todas nuestras líneas 
                            tienen un alto porcentaje de materias primas nacionales. <br/>
                            Es nuestro compromiso, el aportar con un conocimiento licorero 
                            valioso, que permita a nuestros clientes y consumidores un innovador 
                            y adecuado uso de nuestros productos en el campo de la coctelería, 
                            pastelería y gastronomía. 
                </Historia>
                <Regresar> REGRESAR
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
