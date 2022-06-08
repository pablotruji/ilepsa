import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonCacao = () => {
    const [active, setActive] = useState("CACAO")
    return (
        <div>
            <NuevoAcordeon 
                title="CACAO" 
                active={active} 
                setActive={setActive}
              >
            </NuevoAcordeon>
        </div>
    )
}


export default AcordeonCacao
