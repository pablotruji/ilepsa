import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonCocadaBelga = () => {
    const [active, setActive] = useState("BEACHE PARADISE")
    return (
        <div>
            <NuevoAcordeon 
                title="BEACHE PARADISE"
                active={active} 
                setActive={setActive}
                >
                    <b>20 ml de Cocada Belga</b> <br/>
                    <b>10 ml Ron Oro Isla del Tesoro</b> <br/>
                    <b>100 gr. Helado de Coco</b> <br/><br/>

                    Batir todos los ingredientes en una licuadora, verter el 
                    cóctel terminado en un vaso alto. Adorne con cáscara de naranja 
                    o rodajas de piña.

                    Pendiente

            </NuevoAcordeon>

        </div>
    )
}

export default AcordeonCocadaBelga;