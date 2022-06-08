import styled from "styled-components";
import backgroundDesktop from "../../images/Background_Productos.jpg"
import backgroundMovil from "../../images/Background_Oscuro_Movil_6.jpg"
import {Link as LinkR} from 'react-router-dom';

export const ContenedorProductosPagina = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${backgroundMovil});
    background-size: cover;
    background-color: #000;
    color:#fff;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 640px) {
    }
    @media screen and (min-width: 769px) {
    }
    @media screen and (min-width: 960px) {
        background-image: url(${backgroundDesktop});
    }
    @media screen and (min-width: 1024px) {
    }
`

export const ContenedorProductos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    height: 95%;
`

export const Productosh2 = styled.h2`
    font-size: 40px;
    color:#FCC013;
`

export const WrapperProductos = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const ContenedorProductosContenido = styled.div`

    h2{
        font-size:30px;
        color: #FCC013;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:90%;
    height: auto;
    max-width: 350px;
    
    @media screen and (min-width: 640px) {
        justify-content: center;
        
        h2{
        font-size:45px;
        
        }
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1024px) {
    }
`

export const ImgProductos = styled.img`
    width: 70%;
    outline: 3px solid #fff;
    transition: .3s ease-in-out;
    &:hover{
        
        transform: scale(1.3);
    }

`
export const TituloProducto = styled.h3`
    font-size: 25px;
    font-weight:400;
    text-align: center;

    @media screen and (min-width: 640px) {
        font-size: 40px;
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1024px) {
    }
`

export const BotonVerMas = styled(LinkR)`
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
    text-align: center;

    &:hover{
    color: #FCC013;
    background: #EC1D25;
    transition: 0.3s ease-in-out;
    }
`