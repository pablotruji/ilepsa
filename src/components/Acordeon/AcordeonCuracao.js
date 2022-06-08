import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonCuracao = () => {
    const [active, setActive] = useState("COCTELES")
    return (
        <div>
            <NuevoAcordeon 
                title="COCTELES" 
                active={active} 
                setActive={setActive}
            >
                <b>- Azul Zafiro </b> ( Blue Curacao, jugo de arándanos, hielo),<br/>
                <b>- Blue Hawaiian </b> ( Ron, Blue Curacao, Jugo de piña, crema de coco)
           </NuevoAcordeon> 
            <NuevoAcordeon 
                title="GASTRONOMÍA"
                active={active} 
                setActive={setActive}
            >
                El Curacao se emplea para aromatizar, y para prepara paltos como el pato a la naranja.
            </NuevoAcordeon>
        </div>
    )
}


export default AcordeonCuracao
