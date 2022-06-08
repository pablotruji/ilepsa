import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonRonOro = () => {
    const [active, setActive] = useState("BLUE HAWAIIAN")
    return (
        <div>
            <NuevoAcordeon 
                title="BLUE HAWAIIAN"
                active={active} 
                setActive={setActive}
            >
                Ron, zumo de piña, Curacao, leche de coco, hielo
            </NuevoAcordeon>
            <NuevoAcordeon 
                title="BANANA COLADA"
                active={active} 
                setActive={setActive}
            >
                Ron, leche de coco, banana, zumo de piña, hielo, crema batida.
            </NuevoAcordeon>
        </div>
    )
}


export default AcordeonRonOro
