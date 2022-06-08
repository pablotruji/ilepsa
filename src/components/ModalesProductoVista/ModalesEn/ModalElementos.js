import styled from 'styled-components'
import ReactPlayer from "react-player";
import {MdClose} from 'react-icons/md'

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalWrapper = styled.div`
    display: relative;
    width: 300px;
    height: auto;
    min-height: 450px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background: linear-gradient(0deg, rgba(90,90,90,1) 0%, rgba(120,120,120,1) 50%, rgba(170,170,170,1) 100%);
    color:#000;
    display: flex;
    flex-direction: row-reverse;
    position: relative;
    align-items: center;
    border-radius:10px;
    justify-content: center;
    padding: 10px;
    
    @media screen and (min-width: 640px) {
        width: 450px;
        padding: 20px;
        height: 500px;
    }
    @media screen and (min-width: 769px) {
        width: 500px;
        
    }
    @media screen and (min-width: 960px) {
        width: 1000px;
        height: 500px;
        padding: 0;
    }
    @media screen and (min-width: 1024px) {
    }
`

export const ModalVideo = styled(ReactPlayer)`
    display: none;
    width: 50px;
    height: 100%;
    background: linear-gradient(0deg, rgba(90,90,90,1) 0%, rgba(120,120,120,1) 50%, rgba(170,170,170,1) 100%);
    border: 0;
    overflow: hidden;
    z-index: 1;
    @media screen and (min-width: 640px) {
    }
    @media screen and (min-width: 769px) {
    }
    @media screen and (min-width: 960px) {
        display: initial;
    }
    @media screen and (min-width: 1024px) {
    }
`

export const ModalContent =styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:#141414;

    h1{
        
        font-size:24px;
        color:#fff;
    }

    button {
        padding:10px 24px;
        background:#141414;
        color:#fff;
        border:none;
    }
    @media screen and (min-width: 640px) {
        h1{
            font-size:30px;
        }
    }
    @media screen and (min-width: 769px) {
        h1{
            font-size:35px;
        }
    }
    @media screen and (min-width: 960px) {
    }
    @media screen and (min-width: 1024px) {
    }
`

export const CloseModalBoton = styled(MdClose)`
    cursor:pointer;
    position: absolute;
    top: 10px;
    left: 10px;
    width:40px;
    height:40px;
    padding: 5px;
    z-index: 10;
    background: red;
    border-radius: 100px;
    background: #2B2C36;
    color: #fff;

    @media screen and (min-width: 640px) {
        width:40px;
        height:40px;
        padding: 5px;
    }
    @media screen and (min-width: 769px) {
        top: 20px;
        left: 20px;
    }
    @media screen and (min-width: 960px) {
        width:50px;
        height:50px;
        padding:10px;
    }
    @media screen and (min-width: 1024px) {
    }
`

