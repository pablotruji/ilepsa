import styled from "styled-components"
import { BsBackspace } from "react-icons/bs";



export const Overlay = styled.div`
    width: 100vw;
    height:100vh;
    position: fixed;
    top: 0;
    left:0;
    background: rgba(0,0,0,.5);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    
`

export const ContenedorModalPenitencia = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    min-height: 100px;
    width: 600px;
    position: relative;
    border-radius: 5px;
    box-shadow:rgba(100,100,111,0.2) 0px 7 29px 0px;
    padding: 20px;
`

export const ModalPenitenciah2 = styled.h2`
    text-align: center;
    font-size: 25px;
    color: #EC1D25;

    @media screen and (min-width: 640px) {
        font-size: 40px;
    }
    @media screen and (min-width: 769px) {
    }
    @media screen and (min-width: 1024px) {
    }
`

export const BotonCerrar = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position:absolute;
    top:20px;
    right:20px;
    width:30px;
    height:30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #1766dc;

    &:hover{
        background: #f2f2f2;
    }
`
export const IcoCerrar = styled(BsBackspace)`
    font-size: 20px;
`

export const BotonAceptar = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width:100px;
    height:30px;
    border: none;
    background: #1766dc;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;

    &:hover{
        background: #ccc;
        color:#1766dc ;
    }
    @media screen and (min-width: 640px) {
        width:140px;
        height:50px;
        font-size: 20px;
    }
    @media screen and (min-width: 769px) {
    }
    @media screen and (min-width: 1024px) {
    }
`