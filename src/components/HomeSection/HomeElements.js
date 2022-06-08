import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'
import {Link as LinkR} from 'react-router-dom';
import { EffectCoverflow } from 'swiper'
/*import background_movil from '../../images/Background_Home_Movil_1.jpg';*/
/*import background_desktop from '../../images/Background_Home.jpg';*/

export const ContenedorPaginaHome = styled.div `
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    background-size: cover;
    background-position:center;
    background-repeat:no-repeat;
    background-color: #000;
    height: 100vh;
    width: 100%;
    background: none;
    @media screen and (min-width: 800px){

       /* margin-top: 5px;*/
    }
`

export const ContenedorHome = styled.div`
    display: none;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    max-width: 700px;
    height:60%;
    @media screen and (min-width: 640px) {
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1024px) {
        display: flex;
    }
` 

export const ImgLeyenda = styled.img`
    width: 80%;
    max-width: 400px;

    @media screen and (min-width: 640px) {
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1024px) {
        max-width: 500px;
    }
    
`
export const Img50anhos = styled.img`
    width: 200px;
`

export const HomeBotonContenedor = styled.div`
    display: flex;
    justify-content: center;
` 

export const HomeBotonProductos = styled(LinkR)`
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    color: #EC1D25;
    font-size: 22px;
    font-weight: 800;
    background: #FCC013;
    padding:10px 30px;
    border-radius: 100px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    transform: scale(1);
    transition:  0.3s ease;
    &:hover{
        color: #FCC013;
        background: #EC1D25;
        transform: scale(1.1);
        transition: 0.3s ease-in-out;
    }
` 

export const FlechaAdelante = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 30px;
`

export const FlechaDerecha = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 30px;
`