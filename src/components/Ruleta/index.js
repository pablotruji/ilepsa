import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

import "./Ruleta.css";

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

const Ruleta = () => {

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [stopSpinning, onStopSpinning] = useState(false)

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
    onStopSpinning(true)
  
  }

return (
    <>
      <div className="container-page"> 
        <div className="container-roulete">
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
              }}
            />
          <button className="botton-roulete" onClick={handleSpinClick}>JUGAR</button>
        </div>
      </div>
    </>
  )
}

export default Ruleta
