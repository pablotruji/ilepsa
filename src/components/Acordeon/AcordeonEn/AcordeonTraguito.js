import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonTraguito = () => {
    const [active, setActive] = useState("COCKTAILS")
    return (
        <div>
            <NuevoAcordeon 
                title="COCKTAILS" 
                active={active} 
                setActive={setActive}
            >
                <b>- Mango margarita</b> ( Mango juice, Classic Traguito, Triple Sec, Orange juice, Crushed ice )
           </NuevoAcordeon> 
            <NuevoAcordeon 
                title="MALICE COFFE" 
                active={active} 
                setActive={setActive}
            >
                Coffee, Classic Traguito and Cream.
            </NuevoAcordeon>
        </div>
    )
}


export default AcordeonTraguito
