import styled from 'styled-components'
import backgroundDesktop from '../../images/Background_AmbientalYSocial.jpg'
import backgroundMovil from '../../images/Background_Oscuro_Movil_6.jpg'

export const SocialYAmbientalPagina = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${backgroundMovil});
    background-size:cover;
    background-color: #000;
    @media screen and (min-width: 640px) {
    }
    @media screen and (min-width: 769px) {
    }
    @media screen and (min-width: 960px) {
        background-image: url(${backgroundDesktop});
    }
    @media screen and (min-width: 1024px) {
    }
`

export const SocialYAmbientalContenedor = styled.div`
    width: 95%;
    height: 80%;
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;

        h2{
            text-align: center;
            color: #fff;
            font-size: 28px;
            padding: 0.1em;
        }

    @media screen and (min-width: 640px) {
        height: 90%;

        h2{
            text-align: center;
            color: #fff;
            font-size: 40px;
        }
    }
    @media screen and (min-width: 769px) {
    }
    @media screen and (min-width: 960px) {
    }
    @media screen and (min-width: 1024px) {
    }
`

export const ContenedorTarjetas = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 95%;
    height: 80%;
`

export const ContenedorImagen = styled.div`

    background-image: url(${({backgroundAmbiente})=>backgroundAmbiente});
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 20px;
    filter: brightness(90%);

`

export const Tarjeta = styled.div`
    
    position: relative;
    z-index: 10;
    color: #fff;
    width: 250px;
    height: 80%;
    border-radius: 20px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    transition: all 300ms ease-in-out;
  

    

    p{
        text-align: center;
        font-size: 18px;
        text-shadow: 0 0 13px #000, 0 0 15px #000;
        padding: 10px 12px;
    }

    @media screen and (min-width: 640px) {
        width: 300px;
        height: 80%;

        p{
            text-align: center;
            font-size: 20px;

        }
    }
    @media screen and (min-width: 769px) {
        width: 350px;
    }
    @media screen and (min-width: 960px) {
        &:hover{
        transform: scale(1.1);
        }
    }
    @media screen and (min-width: 1024px) {
    }
`


