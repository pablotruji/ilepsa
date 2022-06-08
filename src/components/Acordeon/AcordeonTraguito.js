import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonTraguito = () => {
    const [active, setActive] = useState("COCTELES")
    return (
        <div>
            <NuevoAcordeon 
                title="COCTELES" 
                active={active} 
                setActive={setActive}
            >
                <b>- Margarita de Mango</b> ( Jugo de mango, aguardiente de caña, Triple Sec, jugo de naranja, hielo picado )
           </NuevoAcordeon> 
            <NuevoAcordeon 
                title="CAFÉ MALICIA" 
                active={active} 
                setActive={setActive}
            >
                Café, Aguardiente y crema.
            </NuevoAcordeon>
        </div>
    )
}


export default AcordeonTraguito
