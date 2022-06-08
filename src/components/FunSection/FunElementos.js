import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom';
import background_desktop from '../../images/Background_JuegoMusica.jpg'
import { RiGameFill } from "react-icons/ri";

export const ContenedorPaginaFun = styled.div`
    height: 100vh;
    width:100%;
    background-image: url(${background_desktop});
    background-position: center;
    background-size: cover;
    background-color: #FB7103;
    display: flex;
    justify-content: center;
`

export const ContenedorFun = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    max-width: 1400px;
    @media screen and (min-width: 640px) {
       
    }
    @media screen and (min-width: 768px) {
        
    }
    @media screen and (min-width: 1024px) {
        flex-direction: row;
    }
`

export const ContenedorFunJuego = styled.div`
    height:40%;
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 640px) {
       
    }
    @media screen and (min-width: 768px) {
        width: 75%;
        height:70%;
    }
    @media screen and (min-width: 1024px) {
        width: 45%;
    }
`

export const ContenedorFunMusica = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    height: 35%;
    max-height: 500px;
    width: 85%;
    @media screen and (min-width: 640px) {
       
    }
    @media screen and (min-width: 768px) {
        font-size: 18px;
        height: 25%;
        
    }
    @media screen and (min-width: 1024px) {
        width: 45%;
        height: 70%;
    }
`

export const TituloJuegoh2 = styled.h2`
    color:#fff;
    font-weight: 400;
    font-size: 25px;
    display: inline;
    line-height: 1.3em;
    text-align:center;
    @media screen and (min-width:360px){
        font-size: 32px;
    }

    @media screen and (min-width: 480px) {
    }

    @media screen and (min-width: 640px) {
        font-size: 35px;
    }
    @media screen and (min-width: 768px) {
        display: inline;
        
        margin-bottom: -60px;
        line-height: 1.2em;
    }
    @media screen and (min-width: 1024px) {
        width: 100%;
    }
`
export const Span = styled.span`
    font-weight: 800;
    font-size: 40px;
    @media screen and (min-width: 480px) {
    }

    @media screen and (min-width: 640px) {
    }
    @media screen and (min-width: 768px) {
    
    }
    @media screen and (min-width: 1024px) {
    }
`

export const TituloMusicah2 = styled.h2`
    color:#fff;
    line-height: 3rem;
    font-size: 30px;
    display: none;
    font-weight:400;
    
    @media screen and (min-width: 640px) {
       
    }
    @media screen and (min-width: 768px) {
        
    }
    @media screen and (min-width: 1024px) {
        display: inline;
    }
`

export const BotonJugar = styled(LinkR)`
    margin-top:0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    color: #EC1D25;
    font-size: 18px;
    font-weight: 800;
    background: #FCC013;
    padding:0.3rem 1.5rem;
    border-radius: 100px;
    margin-left: 0.5rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    &:hover{
        color: #FCC013;
        background: #EC1D25;
        transition: 0.3s ease-in-out;
    }

    @media screen and (min-width: 640px) {
       
    }
    @media screen and (min-width: 768px) {
        font-size: 27px;
    }
    @media screen and (min-width: 1024px) {
    }
`
export const IcoJugar = styled(RiGameFill)`
    margin-left: 0.5rem;
`

export const ImgRuleta = styled.img`
    width:150px;
    @media screen and (min-width:360px){
        width:210px;
    }
    @media screen and (min-width: 420px) {

        width:240px;
    }
    @media screen and (min-width: 640px) {
        width:370px;
    }
    @media screen and (min-width: 769px) {
    }
    @media screen and (min-width: 960px) {
        width:450px;
    }
    @media screen and (min-width: 1024px) {
    }
`

export const ImgEtiqueta = styled.img`
    width: 100px;
    @media screen and (min-width:360px){
        width: 150px;
    }
    @media screen and (min-width:480px){
        width: 175px;
    }
    @media screen and (min-width: 640px){
        width: 200px;
    }
    @media screen and (min-width: 769px){
    }
    @media screen and (min-width: 960px){
    }
    @media screen and (min-width: 1024px){
    }
`

