import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom';

export const ContenedorPaginaJuego = styled.div`
    height: 100vh;
    background: red;
`

export const Juegoh1 = styled.h2`
    font-size: 20px;
    color: #000;
`

export const BotonRegresar = styled(LinkR)`
    font-size: 20px;
    transition: 0.3s ease-in-out;
    &:hover{
        color:#fff;
        transition: 0.3s ease-in-out;
    }
`