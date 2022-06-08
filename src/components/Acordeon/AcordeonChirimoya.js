import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonChirimoya = () => {
    const [active, setActive] = useState("CHIRIMOYA SOUER")
    return (
        <div>
            <NuevoAcordeon 
                title="CHIRIMOYA SOUER"
                active={active} 
                setActive={setActive}
                >
                    <b>1 Limón</b> <br/>
                    <b>300 gr. De pulpa congelada de chirimoya</b> <br/>
                    <b>300 gr. De Cold's Chirimoya</b> <br/><br/>

                    Incorpora todo los ingredientes <br/>
                    Servir de inmediato hielo frappé.


            </NuevoAcordeon>

        </div>
    )
}


export default AcordeonChirimoya
