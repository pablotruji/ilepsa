import styled from "styled-components";
import  {IoLogoWhatsapp} from 'react-icons/io'

export const ContenedorBotones = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
export const BotonSolicitaElProducto = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    color: #EC1D25;
    font-size: 14px;
    font-weight: 800;
    background: #FCC013;
    padding:0.4rem 0.5rem;
    border-radius: 100px;
    margin-left: 10px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    &:hover{
        color: #FCC013;
        background: #EC1D25;
        transition: 0.3s ease-in-out;
    }

    @media screen and (min-width: 640px) {
        padding:0.4rem 2rem;
        font-size: 22px;
    }
    @media screen and (min-width: 769px) {

    }
    @media screen and (min-width: 1024px) {
        font-size: 26px;
    }
`

export const IcoWs = styled(IoLogoWhatsapp)`
    font-size: 20px;
    margin-left: 0.4em;

    @media screen and (min-width: 640px) {
        font-size: 30px;
    }
    @media screen and (min-width: 769px) {

    }
    @media screen and (min-width: 1024px) {
    
    }
`