import styled from 'styled-components';


export const ContenedorFormulario = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height:100%;
    max-width: 1200px;
    margin-bottom: 20px;
`

export const TituloFormulario = styled.h2`
    font-size: 15px;
    text-align: center;
    font-weight: 500;
    margin-bottom: 10px;
    margin-top: 10px;
    color:#fff;
    @media screen and (min-width: 640px) {
    }
    @media screen and (min-width: 768px) {
        font-size: 30px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    @media screen and (min-width: 1024px) {
    }
`

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    max-width: 800px;
    
    @media screen and (min-width: 640px) {
    }
    @media screen and (min-width: 768px) {

    }
    @media screen and (min-width: 1024px) {
    }
`

export const FormName = styled.input`
    width:100%;
    background:none;
    font-size: 15px;
    outline: none;
    border: 1px solid #ccc;
    padding: 1rem 1rem;
    color: #fff;
    border-radius:30px;
    margin-bottom: 20px;
    ::-webkit-input-placeholder { color:#F1F1ED ; } 

    :-moz-placeholder { /* Firefox 18- */ color: #F1F1ED; } 

    ::-moz-placeholder { /* Firefox 19+ */ color: #F1F1ED; } 

    :-ms-input-placeholder { color: #F1F1ED; }
    @media screen and (min-width: 640px) {
    }
    @media screen and (min-width: 768px) {
        font-size: 18px;
    }
    @media screen and (min-width: 1024px) {
    }
`

export const FormMail = styled.input`
    width:100%;
    background:none;
    font-size: 15px;
    outline: none;
    border: 1px solid #ccc;
    padding: 1rem 1rem;
    color: #fff;
    border-radius:40px;
    margin-bottom: 20px;
    ::-webkit-input-placeholder { color:#F1F1ED ; } 

    :-moz-placeholder { /* Firefox 18- */ color: #F1F1ED; } 

    ::-moz-placeholder { /* Firefox 19+ */ color: #F1F1ED; } 

    :-ms-input-placeholder { color: #F1F1ED; }
    @media screen and (min-width: 640px) {
    }
    @media screen and (min-width: 768px) {
        font-size: 18px;
    }
    @media screen and (min-width: 1024px) {
    }
`

export const FormText = styled.textarea`
    width:100%;
    height:200px;
    background:none;
    margin-bottom: 20px;
    box-sizing: border-box;
    outline: none;
    border: 1px solid #ccc;
    padding: 1rem 1rem;
    color: #fff;
    font-size: 15px;
    border-radius:40px;
    resize: none;
    ::-webkit-input-placeholder { color:#F1F1ED ; } 

    :-moz-placeholder { /* Firefox 18- */ color: #F1F1ED; } 

    ::-moz-placeholder { /* Firefox 19+ */ color: #F1F1ED; } 

    :-ms-input-placeholder { color: #F1F1ED; }

    @media screen and (min-width: 640px) {
    }
    @media screen and (min-width: 768px) {
        font-size: 18px;
    }
    @media screen and (min-width: 1024px) {
    }
` 

export const BotonEnviar = styled.input`
    background: #FCC013;
    color: #EC1D25;
    font-weight: 600;
    border: none;
    outline: none;
    border-radius: 40px;
    font-size:18px;
    padding: 0.3rem 2rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    margin-top: 0.5em;
    width: 50%;
    &:hover{
        color: #FCC013;
        background: #EC1D25;
        transition: 0.3s ease-in-out;
    }
    @media screen and (min-width: 640px) {
    }
    @media screen and (min-width: 768px) {
        width: 15%;
    }
    @media screen and (min-width: 1024px) {
    }
`

export const MensajeError = styled.a`
    color: red;
    font-size: 13px;
    font-weight:400;
    background: #EC1D25;
    color: #fff;
    border-radius: 2px;
    padding: 0.3em 1em;
    margin-bottom:10px;
    margin-top: -4px;
    @media screen and (min-width: 640px) {
        font-size: 16px;
    }
    @media screen and (min-width: 769px) {
    }
    @media screen and (min-width: 960px) {
    }
    @media screen and (min-width: 1024px) {
    }
`
