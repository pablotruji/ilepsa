import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import "./RuletaJuego.css";
import ModalPenitencia from '../ModalPenitencia/indexEn';

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
              <a className="botton-roulette" onClick={handleSpinClick}>PLAY</a>
            </div>
            <div className="container-roulette-text">
              <div className="container-rulers">
                        <h2 className="tituloJuego">LIGHT</h2>
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
                        > <p> All the older people drink 3 shots </p></ModalPenitencia>:""
                        }
                        {
                        result == 2 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal} 
                            
                        > <p> The last person that played some sports, drinks a drink </p></ModalPenitencia>:""}
        
                        {
                        result == 3 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p> Drink 2 shots if you haven't read a book this year</p></ModalPenitencia>:""
                        }
    
                        {
                        result == 4 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p> Everyone who has flirted with an app drink 3 shots</p></ModalPenitencia>:""
                        }
                        {
                        result == 5 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p> Decide who will be the first to marry and give them 2 shots</p></ModalPenitencia>:""
                        }
                        {
                        result == 6 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p> Dance the Macarena if you're wrong, drink a shot</p></ModalPenitencia>:""
                        }
                        {
                        result == 7 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p>If you have cried with a movie / series baby 2 shots</p></ModalPenitencia>:""
                        }
                        {
                        result == 8 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p>Everyone, if your name start with a vowel drink a shot</p></ModalPenitencia>:""
                        }
                        {
                        result == 9 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p>Start a ME NEVER and drink three shots, if you're wrong</p></ModalPenitencia>:""
                        }
                        {
                        result == 10 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p>Pick the one who gets drunk the fastest and give him three shots</p></ModalPenitencia>:""
                        }
                        {
                        result == 11 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p>My little boat is loaded with ... he who makes a mistake drinks a shot</p></ModalPenitencia>:""
                        }
                        {
                        result == 12 ? <ModalPenitencia
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        ><p>The hairiest serves 2 shots each </p></ModalPenitencia>:""
                        }       
                </div>  
              <BotonRegresar to="/select">GO BACK</BotonRegresar>          
            </div>
          </div>
        </>
      )
}
