import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonTraguitoSinAzucar = () => {
    const [active, setActive] = useState("POSTRES")
    return (
        <div>
            <NuevoAcordeon 
                title="POSTRES" 
                active={active} 
                setActive={setActive}
            >
                Rosquillas de anís, bizcocho de anís y naranja, bizcochos de anís, pan dulce.
           </NuevoAcordeon> 
            <NuevoAcordeon 
                title="BEBIDAS CALIENTES" 
                active={active} 
                setActive={setActive}
            >
               
            </NuevoAcordeon>
            <NuevoAcordeon 
                title="TÉ INGLÉS"
                active={active} 
                setActive={setActive}
            >
                + Traguito sin azúcar<br/>
                + Café Cappuccino

            </NuevoAcordeon>
        </div>
    )
}


export default AcordeonTraguitoSinAzucar
