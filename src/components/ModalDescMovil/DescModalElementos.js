import styled from 'styled-components'
import {MdClose} from 'react-icons/md'

export const ContenedorModalDesc = styled.div`
    position: absolute;
    width: 100%;
    height:100%;
    background:rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center ;
    
    @media screen and (min-width: 640px) {
    }
    @media screen and (min-width: 769px) {
    }
    @media screen and (min-width: 960px) {
        display: none;
    }
    @media screen and (min-width: 1024px) {
    }
`

export const ContenedorDescripcionModal = styled.div`
    width:250px;
    height:380px;
    background: linear-gradient(0deg, rgba(90,90,90,1) 0%, rgba(120,120,120,1) 50%, rgba(170,170,170,1) 100%);
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 10px;
    border-radius:10px;
    
    h2{
        font-size: 30px;
        text-align:center;
    }

    
    @media screen and (min-width: 640px) {
        width:450px;
        h2{
            font-size: 50px;
        }
    }
    @media screen and (min-width: 769px) {
    }
    @media screen and (min-width: 960px) {
    }
    @media screen and (min-width: 1024px) {
    }
` 
export const DescripcionWrapper = styled.div`
    font-size: 20px;
    text-align:center;
    color: #fff;

    @media screen and (min-width: 640px) {
        font-size: 30px;
    }
    @media screen and (min-width: 769px) {
        font-size: 35px;
    }
    @media screen and (min-width: 960px) {
    }
    @media screen and (min-width: 1024px) {
    }

`

export const BotonCerrar = styled(MdClose)`
    position: absolute;
    top: 8px;
    left: 8px;
    width:35px;
    height:35px;
    padding: 6px;
    z-index: 10;
    background: red;
    border-radius: 100px;
    background: #2B2C36;
    color: #fff;
`

