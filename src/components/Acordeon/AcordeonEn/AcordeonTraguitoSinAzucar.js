import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonTraguitoSinAzucar = () => {
    const [active, setActive] = useState("DESSERTS")
    return (
        <div>
            <NuevoAcordeon 
                title="DESSERTS" 
                active={active} 
                setActive={setActive}
            >
                Anise donuts, anise and orange biscuit, anise cookies, sweet bread.
           </NuevoAcordeon> 
            <NuevoAcordeon 
                title="HOT DRINKS" 
                active={active} 
                setActive={setActive}
            >
               
            </NuevoAcordeon>
            <NuevoAcordeon 
                title="ENGLISH TEA"
                active={active} 
                setActive={setActive}
            >
                + Traguito sin azúcar<br/>
                + Cappuccino Coffee

            </NuevoAcordeon>
        </div>
    )
}


export default AcordeonTraguitoSinAzucar
