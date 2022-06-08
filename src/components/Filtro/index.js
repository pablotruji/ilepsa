import React from 'react'
import { 
    ContenedorPaginaFiltro, 
    ContenedorFiltro,
    ContenedorImagen,
    ImgTraguito,
    Filtroh2,
    FiltroBotonContenedor,
    FiltroSpan,
    FiltroForm,
    FiltroEdad,
    FiltroBoton,
    ImgIlepsa
} from './filtroElementos'

import Traguito from '../../images/Traguito-difuminado.png';
import Ilepsa from '../../images/Logo_ILEPSA_Blanco.png';

const Filtro = () => {
    return (
        <ContenedorPaginaFiltro>
            <ContenedorFiltro>
                <Filtroh2>PARA VISITAR ESTE SITIO DEBES TENER</Filtroh2>
                <Filtroh2><FiltroSpan>MAS DE 18 AÑOS</FiltroSpan></Filtroh2>
                <FiltroForm>
                    <FiltroEdad type="number" placeholder="18 años"></FiltroEdad>
                </FiltroForm>
                <FiltroBotonContenedor>
                    <FiltroBoton to="/home">ENTRAR</FiltroBoton>
                </FiltroBotonContenedor>
            </ContenedorFiltro>
            <ContenedorImagen>
                <ImgTraguito src={Traguito} />
            </ContenedorImagen>
            <ImgIlepsa src={Ilepsa} />
        </ContenedorPaginaFiltro>
    )
}

export default Filtro
