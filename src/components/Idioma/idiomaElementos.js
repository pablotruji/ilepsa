import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import backgroundMovil from '../../images/Background_Oscuro_Movil_1.jpg'
import backgroundDesktop from '../../images/Background_Oscuro_Desktop_1.jpg'

export const ContenedorPaginaIdioma = styled.div`
    display: flex;
    justify-content:space-around;
    background-image: url(${backgroundMovil});
    background-position: center;
    background-size: cover;
    background-color:#000;
    height: 100vh;
    position: relative;
    @media screen and (min-width: 640px) {
    
    }
    @media screen and (min-width: 769px) {
        align-items:center;
        background-image: url(${backgroundDesktop});
    }
    @media screen and (min-width: 1024px) {
    }
`
export const ContenedorIdioma = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    width: 100%;
    max-width: 700px;
    height:200px;

    @media screen and (min-width: 640px) {
        width: 550px;
        height:300px;
    }
    @media screen and (min-width: 769px) {
        width: 600px;
        margin-top: initial;
    }
    @media screen and (min-width: 1024px) {
    }
`
export const ContenedorImagen = styled.div`
    display: none;
    @media screen and (min-width: 640px) {
        
    }
    @media screen and (min-width: 769px) {
        display: block;
    }
    @media screen and (min-width: 1024px) {
       
    }
`
export const ImgTraguito = styled.img`
    width: 45vh;
    max-width: 1000px;
`  
export const Idiomah2 = styled.h2`
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    @media screen and (min-width: 640px) {
        font-size: 40px;
    }
    @media screen and (min-width: 769px) {
        font-size: 40px;
    }
    @media screen and (min-width: 1024px) {
    }
`
export const IdiomaSpan = styled.span`
    color: #fff;
    font-weight: 600;
`
export const IdiomaBotonesContenedor = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
    @media screen and (min-width: 640px) {
        margin-top: 50px;
    }
    @media screen and (min-width: 769px) {
        margin-top: 50px;
    }
    @media screen and (min-width: 1024px) {
    }
`
export const IdiomaBoton = styled(LinkR)`
    color: #EC1D25;
    font-size: 18px;
    font-weight: 800;
    background: #FCC013;
    padding: 5px 30px;
    border-radius: 100px;
    cursor: pointer;
    display: inline-block;
    transition: 0.3s ease-in-out;
    text-decoration: none;

&:hover{
    color: #FCC013;
    background: #EC1D25;
    transition: 0.3s ease-in-out;
    }

    @media screen and (min-width: 640px) {
        font-size: 25px;
        padding: 10px 50px;
    }
    @media screen and (min-width: 769px) {
        font-size: 30px;
        padding: 10px 70px;
    }
    @media screen and (min-width: 1024px) {
    }
`;
export const ImgIlepsa = styled.img`
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: 120px;

    @media screen and (min-width: 640px) {
        width: 200px;
        bottom: 30px;
        left: 30px;
    }
    @media screen and (min-width: 769px) {
        width: 220px;
        right: 50px;
        left: initial;
        bottom: 50px;
    }
    @media screen and (min-width: 1024px) {
    }
`


