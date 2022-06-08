import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonRonPlata = () => {
    const [active, setActive] = useState("MOJITO CON FRAMBUESA")
    return (
        <div>
            <NuevoAcordeon 
                title="MOJITO CON FRAMBUESA"
                active={active} 
                setActive={setActive}
               > 
               <b>Ron</b><br/>
                + limón <br/>
                + hierba buena <br/>
                + menta <br/>
                + pulpa de frambuesa <br/>
                + refresco <br/>
                + hielo <br/>
            </NuevoAcordeon>

            <NuevoAcordeon 
                title="DAIQUIRI"
                active={active} 
                setActive={setActive}
               > 
               <b>Ron</b><br/>
                + limón <br/>
                + jarabe de frutas (fresa, piña) <br/>
            </NuevoAcordeon>
        </div>
    )
}


export default AcordeonRonPlata
