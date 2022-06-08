import React from 'react';
import {
    ContenedorPaginaIdioma, 
    ContenedorIdioma, 
    ContenedorImagen,
    Idiomah2, 
    IdiomaSpan,
    IdiomaBotonesContenedor, 
    IdiomaBoton,
    ImgTraguito,
    ImgIlepsa

} from './idiomaElementos';

import Traguito from '../../images/Traguito-difuminado.png';
import Ilepsa from '../../images/Logo_ILEPSA_Blanco.png';

const Idioma = () => {
    return (
        <ContenedorPaginaIdioma>
            <ContenedorIdioma>
                <Idiomah2>POR FAVOR ELIGE UN <IdiomaSpan>IDIOMA</IdiomaSpan></Idiomah2>
                <Idiomah2>PLEASE CHOOSE A <IdiomaSpan>LANGUAGE</IdiomaSpan></Idiomah2>
                <IdiomaBotonesContenedor>
                    <IdiomaBoton to="/espanol">ESPAÑOL</IdiomaBoton>
                    <IdiomaBoton to="/english">ENGLISH</IdiomaBoton>
                </IdiomaBotonesContenedor>
            </ContenedorIdioma>
            <ContenedorImagen>
                <ImgTraguito src={Traguito} />
            </ContenedorImagen>
            <ImgIlepsa src={Ilepsa} />
        </ContenedorPaginaIdioma>
    )
}

export default Idioma;
