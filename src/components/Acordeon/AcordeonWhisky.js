import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonWhisky = () => {
    const [active, setActive] = useState("NUEVAS COMBINACIONES")
    return (
        <div>
            <NuevoAcordeon 
                title="NUEVAS COMBINACIONES" 
                active={active} 
                setActive={setActive}
            >   <b>Café cortado</b> <br/>
                Expresso con Crema de Whisky y espuma de leche.
           </NuevoAcordeon> 
            <NuevoAcordeon 
                title="TRES LECHES" 
                active={active} 
                setActive={setActive}
            >
                    Biscocho de vainilla, bañar con crema de leches, 
                    leche evaporada, leche condensada y Crema de Whisky, cubrir con merengue.
            </NuevoAcordeon>
            <NuevoAcordeon 
                title="SMOOTHIE"
                active={active} 
                setActive={setActive}
            >
                Helado de vainilla <br/>
                + Crema de Whisky <br/>
                + un poco de café<br/>
                + crema batida.<br/>
            </NuevoAcordeon>
        </div>
    )
}


export default AcordeonWhisky
