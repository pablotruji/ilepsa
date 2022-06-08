import React from 'react'
import ImagenRuleta  from '../../images/Recorte_Ruleta.png';
import ImgEtiquetaTraguito from '../../images/Etiqueta_Traguito.png';

import {
    ContenedorPaginaFun,
    ContenedorFun,
    ContenedorFunJuego,
    ContenedorFunMusica,
    TituloJuegoh2,
    TituloMusicah2,
    BotonJugar,
    IcoJugar,
    Span,
    ImgRuleta,
    ImgEtiqueta
} from './FunElementos';

const FunSection = () => {

    return (
        <ContenedorPaginaFun id="play">
            <ContenedorFun>
                <ContenedorFunJuego>
                    <TituloJuegoh2>
                        <b>NO SERÁ DE TOMAR UN</b> <br/> 
                        <ImgEtiqueta src={ImgEtiquetaTraguito}/>
                    </TituloJuegoh2>
                    <ImgRuleta src={ImagenRuleta}/>
                    <BotonJugar to="/select">
                        PLAY <IcoJugar/>
                    </BotonJugar>
                </ContenedorFunJuego>
                <ContenedorFunMusica>
                <iframe src="https://open.spotify.com/embed/playlist/0hDFSh6FJrjjEMvvNi5vH0?utm_source=generator&theme=0" 
                        width="100%" 
                        height="380" 
                        frameBorder="0" 
                        allowfullscreen="" 
                        allow="autoplay; 
                        clipboard-write; 
                        encrypted-media; 
                        fullscreen; 
                        picture-in-picture">
                    </iframe>
                    <TituloMusicah2>
                        LISTEN TO THE<Span> SUCCESSES OF THE MOMENT </Span> 
                        <br/> WHITH <Span>ILEPSA PLAYLIST!</Span>
                    </TituloMusicah2>
                </ContenedorFunMusica>
            </ContenedorFun>
        </ContenedorPaginaFun>
    )
}

export default FunSection
