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
                Rum Isla del Tesoro®<br/>
                + pineapple juice <br/>
                + Curacao <br/>
                + coconut milk <br/>
                + ice

            </NuevoAcordeon>
            <NuevoAcordeon 
                title="BANANA COLADA"
                active={active} 
                setActive={setActive}
            >
                Rum Isla del Tesoro®<br/>
                + coconut milk<br/>
                + banana<br/>
                + pineapple juice<br/>
                + ice<br/>
                + whipped cream.

            </NuevoAcordeon>
        </div>
    )
}


export default AcordeonRonOro
