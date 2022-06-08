import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonPinaColada = () => {
    const [active, setActive] = useState("POSTRES")
    return (
        <div> 
            <NuevoAcordeon 
                title="POSTRES" 
                active={active} 
                setActive={setActive}
            >
                <b>Copa Piña Colada</b><br/>
                Refrigerar trozos de piña, leche condensada con licor de Piña Colada. 
                Decorar con crema chantilly y coco rallado.
            </NuevoAcordeon>
            <NuevoAcordeon 
                title="COCTEL"
                active={active} 
                setActive={setActive}
            >   
                <b>Piña Colada de Mango</b><br/>
                  Mango picado<br/>
                + Jugo de mango y piña <br/>
                + Licor de Piña Colada <br/>
                + hielo picado.
            </NuevoAcordeon>
        </div>
    )
}


export default AcordeonPinaColada
