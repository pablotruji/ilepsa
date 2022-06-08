import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonWhisky = () => {
    const [active, setActive] = useState("NEW COMBINATIONS")
    return (
        <div>
            <NuevoAcordeon 
                title="NEW COMBINATIONS" 
                active={active} 
                setActive={setActive}
            >   <b>Spiced Coffee</b> <br/>
                An Expresso with Cold’s Whisky & cream.
           </NuevoAcordeon> 
            <NuevoAcordeon 
                title="TRES LECHES" 
                active={active} 
                setActive={setActive}
            >
               Vanilla sponge cake, topped with cream milk, evaporated milk, 
               condensed milk and Cold’s Whiskey, cover with meringue.
            </NuevoAcordeon>
            <NuevoAcordeon 
                title="SMOOTHIE"
                active={active} 
                setActive={setActive}
            >
                Vanilla Ice Cream <br/>
                + Cold’s Whisky  <br/>
                + a bit of coffee<br/>
                + whipped cream.<br/>
            </NuevoAcordeon>
        </div>
    )
}


export default AcordeonWhisky
