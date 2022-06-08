import styled from 'styled-components'
import { MdPhonelinkRing } from "react-icons/md"
import { MdPhone } from "react-icons/md"
import { IoMdMail } from "react-icons/io"
import  {IoLogoWhatsapp} from 'react-icons/io'
import background_desktop from '../../images/Background_Contactanos.jpg';
import backgroundMovil from '../../images/Background_Oscuro_Movil_6.jpg'

export const ContenedorPaginaContactanos = styled.div`
    background-image: url(${backgroundMovil});
    background-size: cover;
    background-position: center;
    background-repeat:no-repeat;
    background-color: #000;
    width: 100%;
    height:100%;
    @media screen and (min-width: 640px) {
    }
    @media screen and (min-width: 769px) {
    }
    @media screen and (min-width: 960px) {
        background-image: url(${background_desktop});
        background-position:initial;
    }
    @media screen and (min-width: 1024px) {
    }
`

export const ContenedorContactanos = styled.div`
    display:grid;
    justify-items:center;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto 45px 1fr auto;
    gap: 10px;
    width: 100%;
    height: 100%;
    justify-content: center;
    
    @media screen and (min-width: 640px) {
        gap: 30px;
    }
    @media screen and (min-width: 769px) {
        grid-template-rows: auto 60px 1fr auto;
    }
    @media screen and (min-width: 960px) {
        gap: 40px;
    }
    @media screen and (min-width: 1024px) {
    }
`

export const ContenedorContactos = styled.div `
    display: grid;
    
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas: "area1 area1 area1 area2 area2 area2"
                        ". area3 area3 area3 area3 .";
    align-content: flex-start;
    gap: 10px;
    width:100%;   
    margin-top: 50px;
    max-width: 1200px;
    color:#fff;
    height:100%;

    @media screen and (min-width: 640px) {
        
    }
    @media screen and (min-width: 768px) {
        grid-template-areas: "area1 area1 area2 area2 area3 area3";
    }
    @media screen and (min-width: 1024px) {
    }
    
`

export const ContactosInformacion = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    min-height: 200px;
    :nth-last-child(3){
        grid-area: area1;
    }
    :nth-last-child(2){
        grid-area: area2;
    }
    :nth-last-child(1){
        grid-area: area3;
    }
    @media screen and (min-width:360px){
    }
    @media screen and (min-width:480px){
    }
    @media screen and (min-width: 640px){
    }
    @media screen and (min-width: 769px){
        justify-content: flex-start;
    }
    @media screen and (min-width: 960px){
    }
    @media screen and (min-width: 1024px){
    }
`

export const Contactanosh2 = styled.h2`
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-bottom: 20px;
    @media screen and (min-width: 640px) {
        font-size: 25px;
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1024px) {
        font-size: 32px;
    }
`

export const IcoCelular = styled(MdPhonelinkRing)`
    font-size: 40px;
    margin-right: 1rem;
`

export const IcoTelef = styled(MdPhone)`
    font-size: 40px;
    margin-right: 1rem;
`

export const IcoMail = styled(IoMdMail)`
    font-size: 40px;
    margin-right: 1rem;
`

export const ContactanosPnumeros = styled.p`
    font-size: 18px;
    @media screen and (min-width: 640px) {
        font-size: 20px;
    }
    @media screen and (min-width: 769px) {
    }
    @media screen and (min-width: 960px) {
        font-size: 25px;
    }
    @media screen and (min-width: 1024px) {
    }
`

export const BotonWs = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    color: #EC1D25;
    font-size: 20px;
    font-weight: 800;
    background: #FCC013;
    padding: 0 1.5em;
    border-radius: 100px;
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
        font-size: 25px;
    }
    @media screen and (min-width: 960px) {
    }
    @media screen and (min-width: 1024px) {
    }
`

export const IcoWs = styled(IoLogoWhatsapp)`
    font-size: 24px;
    margin-left: 15px;

    @media screen and (min-width: 640px) {
        font-size: 40px;
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1024px) {
    }
`