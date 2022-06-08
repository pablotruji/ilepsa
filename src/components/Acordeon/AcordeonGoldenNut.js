import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonGoldenNut = () => {
    const [active, setActive] = useState("CANDY KISS")
    return (
        <div>
            <NuevoAcordeon 
                title="CANDY KISS"
                active={active} 
                setActive={setActive}
                >
                    <b>2 Bolas de helado de manjar</b> <br/>
                    <b>1 oz de licor de café</b> <br/>
                    <b>2 oz de Cold's Golden Nut</b> <br/><br/>

                    Mezcla todos los ingredientes y sirve en una copa ancha

            </NuevoAcordeon>

        </div>
    )
}


export default AcordeonGoldenNut
