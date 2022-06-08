import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import "./RuletaJuego.css";
import ModalPenitencia from '../ModalPenitencia';

import {
  BotonRegresar
}from './JuegoElementos'

const data = [
    { option: '1', style:{backgroundColor: '#FCC013'} },
    { option: '2', style:{backgroundColor: '#FEF8E1'} },
    { option: '3', style:{backgroundColor: '#FCC013' } },
    { option: '4', style:{backgroundColor: '#FEF8E1' } },
    { option: '5', style:{backgroundColor: '#FCC013'} },
    { option: '6', style:{backgroundColor: '#FEF8E1' } },
    { option: '7', style:{backgroundColor: '#FCC013'}},
    { option: '8', style:{backgroundColor: '#FEF8E1'}},
    { option: '9', style:{backgroundColor: '#FCC013'}},
    { option: '10', style:{backgroundColor: '#FEF8E1'}},
    { option: '11', style:{backgroundColor: '#FCC013'}},
    { option: '12', style:{backgroundColor: '#FEF8E1'}},
  ]

  export default () => {
    
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [stopSpinning, onStopSpinning] = useState(false)

    const [estadoModal, cambiarEstadoModal] = useState(true)
  
    const handleSpinClick = () => {
      const newPrizeNumber = Math.floor(Math.random() * data.length)
      setPrizeNumber(newPrizeNumber)
      setMustSpin(true)
      onStopSpinning(true)
    
    }

    const result = !mustSpin && stopSpinning && data[prizeNumber].option;

    return (
        <>
          <div className="container-roulette-page"> 
            <div className="container-roulette">
                <img />
                <img alt="roulette-static-e"/>
                <Wheel
                  mustStartSpinning={mustSpin}
                  onStopSpinning = {stopSpinning}
                  prizeNumber={prizeNumber}
                  data={data}
                  fontSize={20}
                  radiusLineWidth={0}
                  innerRadius={10}
                  innerBorderWidth={0}
                  outerBorderWidth={0}
                  onStopSpinning={ () => {
                    setMustSpin(false);
                    cambiarEstadoModal(true);
                  }}
                  
                />
              <a className="botton-roulette" onClick={handleSpinClick}>JUGAR</a>
            </div>
            <div className="container-roulette-text">
              <div className="container-rulers">
                        <h2 className="tituloJuego">LIGHT</h2>
                        <h2>
                          REGLAS DEL JUEGO:
                        </h2>
                            <p>- &nbsp;Ten tu botella de traguito alado </p>
                            <p>- &nbsp;Llenamos los vasos 🍻</p>
                            <p>- &nbsp;Nos preparamos psicológicamente 😎</p> 
                            <p>- &nbsp;Nos disculpamos luego con los vecinos 😀 😎</p> 
                            <p>- &nbsp;Ten tu complejo B listo  🦾</p>
                            <p>- &nbsp;Juega con la mejor compañía y ¡disfruta de tu traguito!</p> 
                  </div>
              
                  
              <div className="prizes">
                        { 
                        result == 1 ? <ModalPenitencia 
                           estado={estadoModal}
                           cambiarEstado={cambiarEstadoModal} 
                        > <p> Todas las personas más viejas beban 3 shots</p></ModalPenitencia>:""
                        }
                        {
                        result == 2 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal} 
                            
                        > <p> La última persona que haya hecho deporte bebe un shot</p></ModalPenitencia>:""}
                        
                        {
                        result == 3 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p> Bebé 2 shots  si no has leído un libro este año </p></ModalPenitencia>:""
                        }
    
                        {
                        result == 4 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p> Todos, quien haya coqueteado por una aplicación beban 3 shots </p></ModalPenitencia>:""
                        }
                        {
                        result == 5 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p> Decide quién será el primero en casarse y dale 2 shots</p></ModalPenitencia>:""
                        }
                        {
                        result == 6 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p> Baila la Macarena si te equivocas bebes un shot </p></ModalPenitencia>:""
                        }
                        {
                        result == 7 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p>Si has llorado con una película/serie bebe 2 shots </p></ModalPenitencia>:""
                        }
                        {
                        result == 8 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p>Todos, si tu nombre empieza con vocal bebe un shot</p></ModalPenitencia>:""
                        }
                        {
                        result == 9 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p>Inicia un YO NUNCA y beban 3 shots si se equivocan</p></ModalPenitencia>:""
                        }
                        {
                        result == 10 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p>Elije quien es más cabeza de pollo y dale tres shots </p></ModalPenitencia>:""
                        }
                        {
                        result == 11 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p>Mi barquito viene cargado de …, él que se equivoca bebe un shot </p></ModalPenitencia>:""
                        }
                        {
                        result == 12 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p>El más velludo sirve 2 shots a cada uno</p></ModalPenitencia>:""
                        }       
                </div>  
              <BotonRegresar to="/seleccionar">REGRESAR</BotonRegresar>          
            </div>
          </div>
        </>
      )
}
