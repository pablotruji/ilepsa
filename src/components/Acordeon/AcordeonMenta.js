import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonMenta = () => {
    const [active, setActive] = useState("POSTRES")
    return (
        <div> 
            <NuevoAcordeon 
                title="POSTRES" 
                active={active} 
                setActive={setActive}
            >
                Muy usada en mousse, salsas, tortas, cheescake, 
                combina muy bien con chocolate como el famoso After Eigt.
            </NuevoAcordeon>
            <NuevoAcordeon 
                title="COCTELES"
                active={active} 
                setActive={setActive}
            >
                <b>- Césped </b> (Licor de menta, crema de cacao, leche, jarabe de chocolate)<br/>
                <b>- Frozen Andes Mint </b> (Licor de menta, licor de café, crema de cacao, crema de whisky, leche y helado de vainilla)<br/>
            </NuevoAcordeon>
        </div>
    )
}


export default AcordeonMenta
