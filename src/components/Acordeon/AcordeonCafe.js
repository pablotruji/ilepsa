import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonCafe = () => {
    const [active, setActive] = useState("COCTELERÍA")
    return (
        <div> 
            <NuevoAcordeon 
                title="COCTELERÍA" 
                active={active} 
                setActive={setActive}
            >
                <b>White Cuban Ron</b> <br/> 
                licor de café, leche condensada, hielo.
            </NuevoAcordeon>
            <NuevoAcordeon 
                title="BEBIDAS CALIENTES" 
                active={active} 
                setActive={setActive}
            >
                Monte Cristo, licor de naranja, licor de café, café caliente y crema batida.
            </NuevoAcordeon>
            <NuevoAcordeon 
                title="POSTRES" 
                active={active} 
                setActive={setActive}
            >
                <b>Flan de Café</b> <br/> 
                leche evaporada, leche condensada, huevos, licor de café, fécula de maíz. 
            </NuevoAcordeon>
        </div>
    )
}


export default AcordeonCafe
