import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonTraguitoCana = () => {
    const [active, setActive] = useState("CINNAMON")
    return (
        <div>
            
            <NuevoAcordeon 
                title="CINNAMON"
                active={active} 
                setActive={setActive}
            >
                <b>- Cinnamon</b> 
                    <ul>
                        <li> + Sip Caña®</li>
                        <li> + Naranjilla</li>
                        <li> + Panela</li>
                    </ul>
            </NuevoAcordeon>

            <NuevoAcordeon 
                title="SOUR BRANDY"
                active={active} 
                setActive={setActive}
            >
                <b>- Sour brandy </b> 
                    <ul>
                        <li> + Sip Caña®</li>
                        <li> + Jugo de limón</li>
                        <li> + Jugo de naranja</li>
                        <li> + 1 cucharada de azúcar.</li>
                        <li> + 1 clara de huevo ligeramente batida.</li>
                        <li> + Canela en polvo.</li>
                    </ul>
            </NuevoAcordeon>
        </div>
    )
}


export default AcordeonTraguitoCana
