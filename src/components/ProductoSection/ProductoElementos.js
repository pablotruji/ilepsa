import styled from 'styled-components'
import { IoCaretForwardOutline } from 'react-icons/io5'
import  {IoLogoWhatsapp} from 'react-icons/io'


export const ContenedorProductoPagina = styled.div`
    background-color: #000;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContenedorProducto = styled.div`
    background-image: url(${({backgroundDesktop2})=>backgroundDesktop2});
    background-size:cover;
    background-position: center;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 640px) {
        
    }
    @media screen and (min-width: 769px) {

    }
    @media screen and (min-width: 1024px) {
    }

`

export const ContenedorProductoInformacion = styled.div`
    color:#fff;
    display: none;
    flex-direction:column;
    justify-content: space-around;
    width: 250px;
    height: 450px;
    @media screen and (min-width: 640px) {
        
    }
    @media screen and (min-width: 769px) {

    }
    @media screen and (min-width: 960px) {
        display: flex;
        height:550px;
    }


    @media screen and (min-width: 1024px) {
        width: 750px;
    }
`

export const ContenedorTitulos = styled.div`
    
`

export const TituloProducto = styled.h2`
    font-size: 20px;
    color: ${({colorTitulo})=>colorTitulo};
    line-height: 1em;

    @media screen and (min-width: 640px) {
        font-size: 50px;
    }
    @media screen and (min-width: 769px) {


    }
    @media screen and (min-width: 1024px) {
    }
`

export const SubtituloProducto = styled.h3`
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
`

export const DescripcionProducto = styled.div`
    display: none;
    font-size: 16px;
    font-weight: 100;
    color: #fff;
    @media screen and (min-width: 640px) {
        font-size: 22px;
    }
    @media screen and (min-width: 769px) {

    }
    @media screen and (min-width: 960px) {
        display: flex;
        font-size: 25px;
    }
    @media screen and (min-width: 1024px) {
    }
`

export const ContenedorImg = styled.img`
    width: 65vh;
    margin-right: -50%;
    transition:0.2s ease-in-out;
    cursor: pointer;
    @media screen and (min-width: 640px) {
    
    }
    @media screen and (min-width: 769px) {

    }

    @media screen and (min-width: 960px) {
        margin-right: initial;
        &:hover{
        transition: 0.2s ease-in-out;  
        transform: scale(1.1); 
        }
    }   

    @media screen and (min-width: 1024px) {
    }
`

export const ContenedorCajasInformacion = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 600px;
    height: 110px;
    padding: 4px;

    div{
        width: 190px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        background: #2B2C36;
    }

    div h3{
        text-align:center;
    }

    div p {
        text-align: center;
        font-size: 18px;
    }

    @media screen and (min-width: 640px) {
        
    }
    @media screen and (min-width: 769px) {
        flex-direction: row;

    }
    @media screen and (min-width: 1024px) {
    }
`

export const Comunicatep = styled.p`
    font-size: 22px;
`

export const ContenedorInfo2 = styled.div`
    width: 50%;
    height: auto;
    color: #fff;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    left:0;
    h2{
        text-align:center;
        color: #FCC013;
        font-size: 30px;
        line-height: 1em;
        width: 100%;
        margin-bottom: 0.4em;
    }
    h3{
        text-align:center;
        width: 100%;
        line-height:1em;
        max-width:150px;
    }

    @media screen and (min-width: 480px){
        h2{
            margin-bottom: 1em;
        }

        h3{
            margin-bottom: 1em;
        }
    }

    @media screen and (min-width: 640px) {
        
        h2{font-size: 60px;
        }
        h3{
            font-size: 30px;
            margin-bottom: 1em;
        }
    }
    @media screen and (min-width: 769px) {
        
        max-width:250px;
    }
    @media screen and (min-width: 960px) {
        display:none;
    }
    @media screen and (min-width: 1024px) {
    }
`

export const ContenedorCajasInformacion2 = styled.div`
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0.2em 0;

    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #2B2C36;
        padding: 0.6em;
        margin: 0.1em;
        max-width: 170px;
        
    }

    div h3{
        text-align:center;
        font-size:18px;
    }

    div p {
        text-align: center;
        font-size: 17px;
    
    }

    @media screen and (min-width: 640px) {

        div{
            width: 60%;
            padding: 0.9em;
            margin: 0.5em;
        }
        div h3{
            font-size:30px;
        }
        div p{
            font-size: 25px;
        }
    }
    @media screen and (min-width: 769px) {
        

    }
    @media screen and (min-width: 960px) {
        display:none;
    }
    @media screen and (min-width: 1024px) {
    }

`

export const BotonVerMas = styled.div`
    width: 30%;
    display: none;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom:100px;
    right: 10%;
    transition:  0.3s ease;

    a{
        color:#fff;
        font-size: 25px;
        width:80%;
        padding: 10px;
        cursor: pointer;
        transform: scale(1);
        transition:  0.3s ease;
            span{
                color:#FCC013;
                font-weight: 600;
            }
    }

    @media screen and (min-width: 640px) {
    }
    @media screen and (min-width: 769px) {
    }
    @media screen and (min-width: 960px) {
        &:hover{
            transform: scale(1.2);
            transition:  0.3s ease;
        }
        display: flex;
    }
    @media screen and (min-width: 1024px) {
    }
`

export const VerMasMovil = styled.a`
    color:#fff;
    margin: 0.2em auto;
    border-bottom: 1px solid #fff;
    padding: 0.2em 0.5em;
    font-size: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (min-width: 640px) {
    }
    @media screen and (min-width: 768px) {
        font-size: 26px;
    }
    @media screen and (min-width: 960px) {
    }
    @media screen and (min-width: 1024px) {
    }

    &:hover{
        background: rgba(255, 255, 255, 0.3);
    }
`

export const UsosyRecetasMovil = styled.a`
    color:#fff;
    margin: 0.2em auto;
    border-bottom: 1px solid #fff;
    padding: 0.2em 0.5em;
    font-size: 18px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (min-width: 420px){
        font-size: 20px;
    }

    @media screen and (min-width: 640px) {
    }
    @media screen and (min-width: 768px) {
        font-size: 26px;
    }
    @media screen and (min-width: 960px) {
    }
    @media screen and (min-width: 1024px) {
    }
`

export const IcoAdelante = styled(IoCaretForwardOutline)`
    color:#FCC013 ;
`

export const VentanaModalMovil = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 100;
    color:#fff;
    font-size: 20px;
    background: #000;
`


