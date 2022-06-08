import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonRompope = () => {
    const [active, setActive] = useState("3 LECHES DE ROMPOPE")
    return (
        <div>
            <NuevoAcordeon 
                title="3 LECHES DE ROMPOPE"
                active={active} 
                setActive={setActive}
                >
                    <b>1 Biscocho de vainilla</b> <br/>
                    <b>1 Lata de leche condensada</b> <br/>
                    <b>1 Lata de leche evaporada</b> <br/>
                    <b>½ Taza de Rompope Cold's</b> <br/>
                    <b>2 Tazas de crema batida</b> <br/>
                    <b>Cerezas para decorar</b> <br/><br/>

                    Picar el biscocho con un tenedor. Mezclar la leche condensada, 
                    evaporada y el rompope Cold´s y remojar el biscocho. <br/>
                    Decorar con la crema batida y las cerezas.


            </NuevoAcordeon>

        </div>
    )
}


export default AcordeonRompope
