import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom';
import bacKground from "../../images/Background_JuegoMusica.jpg"

export const ContenedorElegirJuegoPagina = styled.div`
    background-image: url(${bacKground});
    background-size:cover;
    display: flex;
    justify-content: center;
    align-items: center;

    height:100vh;
    width:100%;
`

export const ContenedorElegirJuego = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 250px;
    height: 350px;
    background: rgba(0,0,0,.2);
    border-radius: 50px;
    line-height: 1em;

    h2{ 
        text-align: center;
        font-size: 28px;
        color:#fff;
        font-weight: 400;
        line-height: 1em;
        span{
            font-weight:600;
            font-size: 30px;
        }
    }

    @media screen and (min-width: 420px) {
        width: 350px;
    }

    @media screen and (min-width: 640px) {
        width: 600px;
        height: 400px;
        h2{
            font-size: 40px;
        span{
            font-size: 50px;
            }
        }
    }
    @media screen and (min-width: 769px) {
        border-radius: 100px;
        height: 500px;
        h2{
            font-size: 40px;
        span{
            font-size: 50px;
            }
        }
    }
    @media screen and (min-width: 1024px) {
        width: 900px;
    }
`

export const ContenedorBotones = styled.div`
    width: 60%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    a{
        color: #EC1D25;
        font-size: 25px;
        font-weight: 800;
        background: #FCC013;
        padding: 0.7em 1.5em;
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
    }

    @media screen and (min-width: 640px) {
            height: 30%;
            flex-direction: row;
            justify-content: space-around;
    }
    @media screen and (min-width: 769px) {
        a{
            font-size: 35px;
        }
    }
    @media screen and (min-width: 1024px) {
    }
`

export const BotonFuerte = styled(LinkR)`
    transform: scale(1);
    transition:  0.3s ease;
    &:hover{
        transform: scale(1.1);
        transition:  0.3s ease;
    }
`

export const BotonSuave = styled(LinkR)`
    transform: scale(1);
    transition:  0.3s ease;
    &:hover{
        transform: scale(1.1);
        transition:  0.3s ease;
    }
`

export const BotonRegresar = styled(LinkR)`
    font-size: 20px;
    transition: 0.3s ease-in-out;
    &:hover{
        color:#fff;
        transition: 0.3s ease-in-out;
    }
`

