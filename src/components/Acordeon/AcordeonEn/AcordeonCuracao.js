import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonCuracao = () => {
    const [active, setActive] = useState("COCKTAILS")
    return (
        <div>
            <NuevoAcordeon 
                title="COCKTAILS" 
                active={active} 
                setActive={setActive}
            >
                <b>- Sapphire blue </b> ( Cold’s Blue Curacao, Cranberry juice , Ice),<br/>
                <b>- Blue Hawaiian </b> ( Rum, Cold’s Blue Curacao, Pineapple juice, Coconut cream)
           </NuevoAcordeon> 
            <NuevoAcordeon 
                title="GASTRONOMY"
                active={active} 
                setActive={setActive}
            >
                Curacao is used to flavour, and to prepare dishes such as duck with orange.            
            </NuevoAcordeon>
        </div>
    )
}


export default AcordeonCuracao
