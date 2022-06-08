import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonTripleSec = () => {
    const [active, setActive] = useState("IDEAL FOR FLAMBED")
    return (
        <div>
            <NuevoAcordeon 
                title="IDEAL FOR FLAMBED"
                active={active} 
                setActive={setActive}
                >
                    Flambé technique is the art of making flames or setting 
                    fire to salty or sweet preparations.
            </NuevoAcordeon>
            <NuevoAcordeon 
                title="DESSERTS" 
                active={active} 
                setActive={setActive}
                >
                    Crépe Suzette, sweet butter crepe, sugar, squeezed mandarin or 
                    orange juice flambéed with Triple Sec.
            </NuevoAcordeon>
            <NuevoAcordeon 
                title="FLAMING COCKTAILS " 
                active={active} 
                setActive={setActive}
                >
                        - <b>Cockroach</b> (Tequila + Cold’s Triple Sec + Coffee liqueur)<br/>           
                        - <b>Purgatory</b> (Tequila + Cold’s Triple Sec + Tabasco sauce)<br/>
            </NuevoAcordeon>

        </div>
    )
}


export default AcordeonTripleSec
