import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import background from '../../images/Background_Oscuro_Movil_6.jpg'
import {RiFacebookBoxFill} from 'react-icons/ri'
import {RiInstagramFill} from 'react-icons/ri'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-image: url(${background});
    background-position: center;
    background-size: cover;
    background-color:#000;
    display: grid;
    align-items:center;
    top: 0;
    left: 0;
    transition:0.8s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position:absolute;
    top: 1.2rem;
    right:1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor:pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarLinkProducts = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration:none;
    list-style:none;
    transition:0.2s ease-in-out;
    color: #fff;
    cursor:pointer;

    &:hover{
        color: #FCC013;
        transition: 0.2 ease-in-out;
        }
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows:repeat(6,80px);
    text-align:center;
        @media screen and (max-width: 480px){
            grid-template-rows: repeat(4,50px);
        }
`

export const SidebarRedes = styled.div`
    width: 100%;
    height:100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h2{
        text-align:center;
        font-size: 20px;
        font-weight: 200;
    }
`

export const ContenedorIconos = styled.div`
    display:flex;
    justify-content: center;
`

export const Links = styled.a`
    width:20%;
    height:auto;
    display: flex;
    justify-content: center;
`

export const IcoFacebook = styled(RiFacebookBoxFill)`
    font-size: 55px;
    cursor: pointer;
    color: #FCC013;
    transition: all 0.3s ease-in-out;

    &:hover{
        color:#EC1D25;
    }

    @media screen and (min-width: 640px) {
       
    }
    @media screen and (min-width: 769px) {
    }
    @media screen and (min-width: 960px) {
    }
    @media screen and (min-width: 1024px) {
        font-size: 50px;
    }
`


export const IcoInstagram = styled(RiInstagramFill)`
    font-size: 55px;
    cursor: pointer;
    color: #FCC013;
    transition: all 0.3s ease-in-out;
    &:hover{
        color:#EC1D25;
    }

    @media screen and (min-width: 640px) {
       
    }
    @media screen and (min-width: 769px) {
    }
    @media screen and (min-width: 960px) {
    }
    @media screen and (min-width: 1024px) {
        font-size: 50px;
    }
`

export const ContenedorLogo = styled.div`
    display: flex;
    justify-content: center;
`
export const LinkLogo = styled(LinkR)`
`

export const LogoIlepsa = styled.img`
    width: 150px;
    margin-top: 40px;
`
