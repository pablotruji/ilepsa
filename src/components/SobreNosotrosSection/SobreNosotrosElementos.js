import styled from 'styled-components'
import backgroundDesktop from '../../images/Background_SobreNosotros.jpg'
import backgroundMovil from '../../images/Background_Oscuro_Movil_6.jpg'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'



export const ContenedorPaginasSobreNosotros = styled.div`
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: row-reverse;
    justify-content:space-evenly;
    align-items: center;
    background-image:url(${backgroundMovil});
    @media screen and (min-width: 640px) {
        
    }
    @media screen and (min-width: 769px) {
        align-items:center;
        background-image: url(${backgroundDesktop});
    }
    @media screen and (min-width: 1024px) {
    }
`

export const ContenedorSobreNosotros = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content:space-evenly;
    height: 100%;
   
`
export const ContenidoSobreNosotros = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 300px;
    height: 500px;
    margin-top: 10px;
    max-width: 1200px;
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

export const ImgTraguito2 = styled.img`
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

export const SobreNosotrosh2 = styled.h2`
    text-align:center;
    font-size: 30px;
    color: #fff;
` 
export const PropuestaValor = styled.p`
    font-size: 18px;
    text-align: center;
    color: #FCC013;
    @media screen and (min-width: 480px) {
        font-size: 20px;
    }

    @media screen and (min-width: 640px) {
        font-size: 22px;
    }
    @media screen and (min-width: 768px) {
        font-size: 25px;
    }
    @media screen and (min-width: 1024px) {
    }
`

export const SaberMas = styled.p`
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

export const BotonSaberMas = styled.a`
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

export const FlechaAdelante = styled(MdArrowForward)`

`

export const FlechaDerecha = styled(MdKeyboardArrowRight)`
`