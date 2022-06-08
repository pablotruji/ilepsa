import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonRonPlata = () => {
    const [active, setActive] = useState("RASPBERRY MOJITO")
    return (
        <div>
            <NuevoAcordeon 
                title="RASPBERRY MOJITO"
                active={active} 
                setActive={setActive}
               > 
               <b>Isla del Tesoro® Silver Rum</b><br/>
                + lemon <br/>
                + good grass<br/>
                + mint<br/>
                + raspberry pulp<br/>
                + soda<br/>
                + ice

            </NuevoAcordeon>

            <NuevoAcordeon 
                title="DAIQUIRI"
                active={active} 
                setActive={setActive}
               > 
               <b>Isla del Tesoro® Silver Rum</b><br/>
                + lemon <br/>
                + fruit syrup (strawberry, pineapple,) <br/>
            </NuevoAcordeon>
        </div>
    )
}


export default AcordeonRonPlata
