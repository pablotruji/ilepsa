import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import "../JuegoSection/RuletaJuego.css";
import ModalPenitencia from '../ModalPenitencia/indexEn';

import {
  BotonRegresar
}from '../JuegoSection/JuegoElementos'

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
              <a className="botton-roulette" onClick={handleSpinClick}>PLAY</a>
            </div>
            <div className="container-roulette-text">
              <div className="container-rulers">
                        <h2 className="tituloJuego">HEAVY</h2>
                        <h2>
                          GAME RULES:
                        </h2>
                            <p>- &nbsp;Have your bottle of traguito close by</p>
                            <p>- &nbsp;We fill the glasses 🍻</p>
                            <p>- &nbsp;We prepare ourselves psychologically😎</p> 
                            <p>- &nbsp;We apologize later to the neighbors 😀 😎</p> 
                            <p>- &nbsp;Have your B complex ready 🦾</p>
                            <p>- &nbsp;Play with the best company and enjoy your traguito</p> 
                  </div>
              
                  
              <div className="prizes">
                        { 
                        result == 1 ? <ModalPenitencia 
                           estado={estadoModal}
                           cambiarEstado={cambiarEstadoModal} 
                        > <p> Choose who drinks and give him 2 shots</p></ModalPenitencia>:""
                        }
                        {
                        result == 2 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal} 
                            
                        > <p> The last person to put their hand on the table drinks </p></ModalPenitencia>:""}

                        {
                        result == 3 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p> All men drink</p></ModalPenitencia>:""
                        }
    
                        {
                        result == 4 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p> All women drink</p></ModalPenitencia>:""
                        }
                        {
                        result == 5 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p> Mention a sentence and start a story, if you're wrong drink 3 shots</p></ModalPenitencia>:""
                        }
                        {
                        result == 6 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p> Start the alphabet with a word, if you make a mistake drink 2 shots</p></ModalPenitencia>:""
                        }
                        {
                        result == 7 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p>Imitate a scene from a movie or series</p></ModalPenitencia>:""
                        }
                        {
                        result == 8 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p>If you danced today get 2 shots</p></ModalPenitencia>:""
                        }
                        {
                        result == 9 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p>If you lied about your age to waver, take 2 shots</p></ModalPenitencia>:""
                        }
                        {
                        result == 10 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p>Take off a garment and drink a shot</p></ModalPenitencia>:""
                        }
                        {
                        result == 11 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p>Give three shots to the person you think is the smartest</p></ModalPenitencia>:""
                        }
                        {
                        result == 12 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p>Give 3 shots to the person you consider the most flirtatious</p></ModalPenitencia>:""
                        }       
                </div>  
              <BotonRegresar to="/select">GO BACK</BotonRegresar>          
            </div>
          </div>
        </>
      )
}
