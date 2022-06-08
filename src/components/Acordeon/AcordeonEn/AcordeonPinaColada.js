import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonPinaColada = () => {
    const [active, setActive] = useState("DESSERTS")
    return (
        <div> 
            <NuevoAcordeon 
                title="DESSERTS" 
                active={active} 
                setActive={setActive}
            >
                <b>Piña Colada Cup</b><br/>
                Refrigerate pineapple chunks mixed with condensed milk and Cold’s Piña Colada.
                Decorate with whipped cream and grated coconut.
            </NuevoAcordeon>
            <NuevoAcordeon 
                title="COCKTAILS"
                active={active}
                setActive={setActive}
            >   
                <b>Mango Piña Colada</b><br/>
                  Chopped mango<br/>
                + Mango and pineapple juice <br/>
                + Cold’s Piña Colada <br/>
                + crushed ice.
            </NuevoAcordeon>
        </div>
    )
}


export default AcordeonPinaColada
