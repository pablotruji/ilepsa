import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? 'rgba(43,44,54,.88)' : 'rgba(43,44,54,.28)')};
    height: 60px;
    margin-top: -60px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 600;
    position:sticky;
    top: 0;
    z-index:20;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display:flex;
    justify-content: space-between;
    height: 80px;
    z-index:1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`

export const NavLogo = styled(LinkR)`
    color:#fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    margin-left:1px;
    font-weight:bold;
    text-decoration:none;
    &:hover{
        color:#EC1D25;
    }
`

export const MobileIcon = styled.div`
    display:none;
    @media screen and (max-width: 768px){
        display:block;
        position: absolute;
        top:0;
        right: 0;
        transform: translate(-100%, 30%);
        font-size: 1.8rem;
        cursor: pointer;
        color:#fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style:none;
    text-align:center;
    margin-right: -22px; //pilas
    @media screen and (max-width: 768px){
        display:none;
    }
`

export const NavItem = styled.li`
    height: 80px;
   /* background: red;*/
    margin-left: 50px;
`

export const NavLinks = styled(LinkS)`
    color:#fff;
    display: flex;
    align-items: center;
    text-decoration:none;
    padding: 0 1rem;
    height:100%;
    cursor: pointer;
    transition: 0.2s all ease-in-out;

    &:hover{
        color: #EC1D25;
        transition: 0.2s all ease-in-out;
    }

    &.active{
        color: #FCC013;
    }
`

export const NavProducts = styled(LinkR)`
    color:#fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    text-decoration:none;
    height:100%;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    &:hover{
        color: #EC1D25;
        transition: 0.2s all ease-in-out;
    }
`