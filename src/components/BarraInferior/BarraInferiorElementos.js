import styled from 'styled-components';
import  {IoLogoWhatsapp} from 'react-icons/io'
import  {IoPlayCircleSharp} from 'react-icons/io5'
import { RiGameFill } from "react-icons/ri";
import {Link as LinkS} from 'react-scroll';

export const BarraInferiorContenedor = styled.div`
    
    height: 180px;
    margin-top: -180px;
    position:relative;
    bottom: 0;
    z-index: 10;

    @media screen and (min-width: 640px) {
        
    }
    @media screen and (min-width: 768px) {
        
    }
    @media screen and (min-width: 1024px) {
        grid-template-areas: "area1 area2 area3";
        height: 80px;
        margin-top: -80px;
    }
`

export const BarraInferiorWrapper = styled.div`

    display: grid;
    gap: 10px;
    align-items: center;
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas: "area1"
                         "area2"
                         "area3";
    width: 100%;
    height: 100%;
    max-width: 1300px;
    margin: 0 auto;
    @media screen and (min-width: 640px) {
        grid-template-columns: repeat(6, 1fr);
        grid-template-areas: "area1 area1 area1 area1 area1 area1"
                            "area2 area2 area2 area3 area3 area3";
    }
    @media screen and (min-width: 768px) {
        
    }
    @media screen and (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-areas: "area1 area2 area3";
    }
`
export const BarraInferiorContenido = styled.div`
background: rgba(43,44,54,.5);
    display: flex;
    align-items: center;
    width: 100%;
    height:100%;
    transform: scale(1);
    transition:  0.3s ease;
    :nth-last-child(3){
        grid-area: area1;
    }
    :nth-last-child(2){
        grid-area: area2;
    }
    :nth-last-child(1){
        grid-area: area3;
    }
    @media screen and (min-width: 768px) {
        justify-content:center;
    }
    @media screen and (min-width: 1024px) {
        &:hover{
        transform: scale(1.2);
        transition: 0.3s ease-in-out;
        z-index:999;
        background: rgba(43,44,54,1);
    }
    }
` 
export const BarraInferiorp = styled.p`
    color: #fff;    
    font-size: 18px;
    line-height: 1.2rem;
    width: auto;
    margin-left: 15px;
    @media screen and (min-width: 640px) {
    }
    @media screen and (min-width: 768px) {
        font-size: 19px;
    }
    @media screen and (min-width: 1024px) {
        font-size: 20px;
        line-height: 1.7rem;
        width: 80%;
    }
`
export const BarraInferiorpspan = styled.span`
    font-size: 20px;
    font-weight: 600;
    @media screen and (min-width: 640px) {
       
    }
    @media screen and (min-width: 768px) {
        font-size: 25px;
    }
    @media screen and (min-width: 1024px) {
    }
`

export const BarraInferiorBoton = styled(LinkS)`
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    color: #EC1D25;
    font-size: 16px;
    font-weight: 800;
    background: #FCC013;
    padding:0.2rem 1.4rem;
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
       
    }
    @media screen and (min-width: 768px) {
        font-size: 18px;
    }
    @media screen and (min-width: 1024px) {
    }
`

export const BarraInferiorBotonWp = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    color: #EC1D25;
    font-size: 16px;
    font-weight: 800;
    background: #FCC013;
    padding:0.2rem 1.4rem;
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
       
    }
    @media screen and (min-width: 768px) {
        font-size: 18px;
    }
    @media screen and (min-width: 1024px) {
    }
`

export const IcoWs = styled(IoLogoWhatsapp)`
    font-size: 20px;
    margin-left: 10px;
`

export const IcoPlay = styled(IoPlayCircleSharp)`
    font-size: 20px;
    margin-left: 10px;
`

export const IcoJugar = styled(RiGameFill)`
    font-size: 20px;
    margin-left: 10px;
`