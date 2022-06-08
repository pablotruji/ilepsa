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
                        ¿QUIERES DISTRIBUIR <BarraInferiorpspan> NUESTROS PRODUCTOS?</BarraInferiorpspan>
                    </BarraInferiorp>
                    <BarraInferiorBotonWp href="https://api.whatsapp.com/send?phone=593983001791&text=Hola%2C%20quisiera%20tomar%20un%20TRAGUITO%2C%20me%20ayudas%20%F0%9F%A5%83" target="_blank">
                        WHATSAPP<IcoWs/>
                    </BarraInferiorBotonWp>
                    
                </BarraInferiorContenido>
                <BarraInferiorContenido>
                    <BarraInferiorp>
                        ¿NO SERÁ DE TOMAR<BarraInferiorpspan> UN TRAGUITO?</BarraInferiorpspan>
                    </BarraInferiorp>
                    <BarraInferiorBoton to="play"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-50}
                        >JUGAR <IcoJugar/>
                    </BarraInferiorBoton>
                </BarraInferiorContenido>

                <BarraInferiorContenido>
                    <BarraInferiorp>
                        ¡ESCUCHA LOS <BarraInferiorpspan> ÉXITOS DEL MOMENTO!</BarraInferiorpspan>
                    </BarraInferiorp>
                    <BarraInferiorBoton to="play"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-50}>
                        ESCUCHAR <IcoPlay/>
                    </BarraInferiorBoton>

                </BarraInferiorContenido>
            </BarraInferiorWrapper>
        </BarraInferiorContenedor>
    )
}

export default BarraInferior;
