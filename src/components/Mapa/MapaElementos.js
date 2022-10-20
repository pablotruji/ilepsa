import styled from 'styled-components';
import {IoLocationSharp} from 'react-icons/io5'
import {GiFactory} from "react-icons/gi";

export const ContenedorMapa = styled.div`
    width: 100%;

`
export const Mapah2 = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    @media screen and (min-width: 640px) {
    
    }
    @media screen and (min-width: 769px) {
        font-size: 30px;
    }
    @media screen and (min-width: 1024px) {
    }
`

export const IcoUbicacion = styled(IoLocationSharp)`
    font-size: 50px;
    padding: 0.2rem;
    @media screen and (min-width: 640px) {
    
    }
    @media screen and (min-width: 769px) {
        font-size: 80px;
        padding: 1rem;
    }
    @media screen and (min-width: 1024px) {
    }
`

export const Ventah2 = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    @media screen and (min-width: 640px) {
    
    }
    @media screen and (min-width: 769px) {
        font-size: 30px;
    }
    @media screen and (min-width: 1024px) {
    }
`

export const IcoVenta = styled(GiFactory)`
    font-size: 50px;
    padding: 0.2rem;
    @media screen and (min-width: 640px) {
    
    }
    @media screen and (min-width: 769px) {
        font-size: 80px;
        padding: 1rem;
    }
    @media screen and (min-width: 1024px) {
    }
`

export const GoogleMaps = styled.iframe`
    width:100%; 
    height:250px; 
    border:0;
`