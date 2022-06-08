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
                <Filtroh2>TO VISIT THIS SITE YOU MUST HAVE</Filtroh2>
                <Filtroh2><FiltroSpan>MORE THAN 18 YEARS</FiltroSpan></Filtroh2>
                <FiltroForm>
                    <FiltroEdad type="number" placeholder="18 years old"></FiltroEdad>
                </FiltroForm>
                <FiltroBotonContenedor>
                    <FiltroBoton to="/homeen">ENTER</FiltroBoton>
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
