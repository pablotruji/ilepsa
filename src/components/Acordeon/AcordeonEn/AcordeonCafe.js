import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonCafe = () => {
    const [active, setActive] = useState("DESSERTS ")
    return (
        <div> 
            <NuevoAcordeon 
                title="DESSERTS " 
                active={active} 
                setActive={setActive}
            >
                <b>Coffee Flan</b> <br/> 
                Evaporated milk, condensed milk, eggs, Cold’s Coffee, cornstarch.
            </NuevoAcordeon>
        </div>
    )
}


export default AcordeonCafe
