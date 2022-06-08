import styled from 'styled-components'
import backgroundDesktop from '../../images/Background_SaberMas.jpg'
import backgroundMovil from '../../images/Background_Oscuro_Movil_6.jpg'
import { MdKeyboardArrowLeft, MdArrowBack } from 'react-icons/md'


export const ContenedorSaberMasPagina = styled.div`
    position: fixed;
    z-index: 30;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image:url(${backgroundMovil});
    background-position: center;
    background-size: cover;
    background-color:#000;
    display: flex;
    justify-content:center;

    transition:0.8s ease-in-out;
    opacity: ${({isOpenInf}) => (isOpenInf ? '100%' : '0')};
    top: ${({isOpenInf}) => (isOpenInf ? '0' : '-100%')};

    @media screen and (min-width: 640px) {
    
    }
    @media screen and (min-width: 769px) {
        align-items:center;
        background-image: url(${backgroundDesktop});
    }
    @media screen and (min-width: 1024px) {
    }
`

export const ContenedorSaberMas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: auto;
    @media screen and (min-width: 640px) {
        width: 600px;
        margin-top: 50px;
        height: 80%;
    }
    @media screen and (min-width: 769px) {
        width: 700px;
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

export const ImgTraguito3 = styled.img`
    width: 95%;

    @media screen and (min-width: 640px) {

    }
    @media screen and (min-width: 769px) {
        width: 70%;
    }
    @media screen and (min-width: 1024px) {
        width: 100%;
    }
`

export const Historia = styled.p`
    font-size: 16px;
    text-align: center;
    color: #FCC013;
    padding: 1em;

    @media screen and (min-width: 640px) {
        font-size: 17px;
    }
    @media screen and (min-width: 769px) {
        font-size: 19px;
    }
    @media screen and (min-width: 1024px) {
        font-size: 22px;
    }
`

export const Regresar = styled.p`
    display: flex;
    width: 250px;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    color: #fff;

    @media screen and (min-width: 640px) {
        font-size: 20px;
        width: 400px;
    }
    @media screen and (min-width: 769px) {
        font-size: 27px;
        width: 500px;
    }
    @media screen and (min-width: 1024px) {
    }
`

export const BotonRegresar = styled.a`
    display: flex;
    background:#FCC013 ;
    color:#EC1D25;
    font-size: 30px;
    padding: 0.3rem 1rem;
    border-radius: 50px;
    
    cursor: pointer;
    &:hover{
        color: #FCC013;
        background: #EC1D25;
        transition: 0.3s ease-in-out;
    }
    @media screen and (min-width: 640px) {
        
    }
    @media screen and (min-width: 769px) {

    }
    @media screen and (min-width: 1024px) {
    }
`

export const FlechaIzquierda = styled(MdKeyboardArrowLeft)``

export const FlechaAtras = styled(MdArrowBack)``
