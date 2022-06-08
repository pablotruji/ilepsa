import React from 'react';
import {
    BarraInferiorContenedor, 
    BarraInferiorWrapper,
    BarraInferiorContenido,
    BarraInferiorp,
    BarraInferiorBoton,
    BarraInferiorBotonWp,
    BarraInferiorpspan,
    IcoWs,
    IcoPlay,
    IcoJugar
} 
from './BarraInferiorElementos';

const BarraInferior = () => {
    return (
        <BarraInferiorContenedor>
            <BarraInferiorWrapper>
                
                <BarraInferiorContenido>
                    <BarraInferiorp>
                        DO YOU WANT TO DISTRIBUTE <BarraInferiorpspan> OUR PRODUCTS?</BarraInferiorpspan>
                    </BarraInferiorp>
                    <BarraInferiorBotonWp href=" https://wa.me/593983001791?text=Hello%20ILEPSA,%20please%20help%20me%20with:" target="_blank">
                        WHATSAPP<IcoWs/>
                    </BarraInferiorBotonWp>
                    
                </BarraInferiorContenido>
                <BarraInferiorContenido>
                    <BarraInferiorp>
                        ¿NO SERÁ DE TOMAR <BarraInferiorpspan> UN TRAGUITO?</BarraInferiorpspan>
                    </BarraInferiorp>
                    <BarraInferiorBoton to="play"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-10}>
                        PLAY <IcoJugar/>
                    </BarraInferiorBoton>
                </BarraInferiorContenido>

                <BarraInferiorContenido>
                    <BarraInferiorp>
                        LISTEN TO <BarraInferiorpspan> THE HITS OF THE MOMENT!</BarraInferiorpspan>
                    </BarraInferiorp>
                    <BarraInferiorBoton to="play"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-10}>
                        LISTEN <IcoPlay/>
                    </BarraInferiorBoton>

                </BarraInferiorContenido>
            </BarraInferiorWrapper>
        </BarraInferiorContenedor>
    )
}

export default BarraInferior;
