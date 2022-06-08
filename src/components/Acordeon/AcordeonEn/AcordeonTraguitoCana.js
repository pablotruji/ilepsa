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
                        <li> + Lemon juice.</li>
                        <li> + Orange juice.</li>
                        <li> + 1 tablespoon of sugar.</li>
                        <li> + 1 lightly beaten egg white.</li>
                        <li> + Cinnamon powder.</li>
                    </ul>
            </NuevoAcordeon>
        </div>
    )
}


export default AcordeonTraguitoCana
