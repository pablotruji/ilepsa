import styled from 'styled-components'
import backgroundMovil from '../../images/Background_Oscuro_Movil_6.jpg'
import backgroundDesktop from '../../images/Background_Oscuro_21.jpg'
import {Link as LinkR} from 'react-router-dom';

export const ContenedorErrorPagina = styled.div`
    background-image: url(${backgroundMovil});
    background-position: center;
    background-size: cover;
    background-color: #000;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (min-width:360px){
    }
    @media screen and (min-width:480px){
    }
    @media screen and (min-width: 640px){
    }
    @media screen and (min-width: 769px){
    }
    @media screen and (min-width: 960px){
        background-image: url(${backgroundDesktop});
    }
    @media screen and (min-width: 1024px){
    }
`

export const ContenedorPagina = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Contenido = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    h2{
        color: #fff;
        font-size: 50px;
        text-align:center
    }

    h3{
        color: #fff;
        font-size: 25px;
        font-weight: 200;
        text-align:center;
    }

    @media screen and (min-width:360px){
    }
    @media screen and (min-width:480px){
    }
    @media screen and (min-width: 640px){
        h2{
            font-size: 70px;
        }
    }
    @media screen and (min-width: 769px){
    }
    @media screen and (min-width: 960px){
        h2{
            font-size: 100px;
        }

        h3{

            font-size: 35px;
        }
    }
    @media screen and (min-width: 1024px){
    }
`

export const ContenedorBotones = styled.div`
    width: 400px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

`

export const BotonProductos = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    color: #EC1D25;
    font-size: 24px;
    font-weight: 800;
    background: #FCC013;
    padding:0.2rem 1.4rem;
    border-radius: 100px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    text-align:center;
    width:200px;
    height: 50px;
    &:hover{
        color: #FCC013;
        background: #EC1D25;
        transition: 0.3s ease-in-out;
    }

    @media screen and (min-width: 640px) {
       
    }
    @media screen and (min-width: 768px) {
        font-size: 28px;
    }
    @media screen and (min-width: 1024px) {
    }
`

export const ContenedorImagen = styled.div`
    width: 200px;
    margin-top: 100px;
   

`

export const ImagenLink = styled(LinkR)`

    img{
        width: 100%;
    }
`
