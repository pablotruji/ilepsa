import React from 'react'
import styled from 'styled-components'
import {RiFacebookBoxFill} from 'react-icons/ri'
import {RiInstagramFill} from 'react-icons/ri'

const ContenedorRedesSociales = styled.div`
    width: 50px;
    height: 100vh;
    position: absolute;
    top: 0;
    left:10px;
    display: flex;
    align-items: center;
    z-index: 100;
    @media screen and (min-width: 640px) {
       
    }
    @media screen and (min-width: 769px) {
    }
    @media screen and (min-width: 960px) {
    }
    @media screen and (min-width: 1024px) {
        position: sticky;
        margin-top: -100vh;
    }
`

const ContenedorIconos = styled.div`
    height: 125px;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media screen and (min-width:360px){
    }
    @media screen and (min-width:480px){
        height: 150px;
    }
    @media screen and (min-width: 640px){
    }
    @media screen and (min-width: 769px){
    }
    @media screen and (min-width: 960px){
    }
    @media screen and (min-width: 1024px){
    }
    
`

const Links = styled.a`
    width:100%;
    height:auto;
`

const IcoFacebook = styled(RiFacebookBoxFill)`
    font-size: 44px;
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


const IcoInstagram = styled(RiInstagramFill)`
    font-size: 44px;
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

const index = () => {
    return (
        <ContenedorRedesSociales>
            <ContenedorIconos>
                <Links href="https://www.facebook.com/traguitoec" target="_blank">
                    <IcoFacebook/>
                </Links>
                <Links href="https://instagram.com/traguitoec" target="_blank">
                    <IcoInstagram />
                </Links>
            </ContenedorIconos>
        </ContenedorRedesSociales>
    )
}

export default index
