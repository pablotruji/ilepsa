import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonMenta = () => {
    const [active, setActive] = useState("DESSERTS")
    return (
        <div> 
            <NuevoAcordeon 
                title="DESSERTS" 
                active={active} 
                setActive={setActive}
            >
               Widely used in mousse, sauces, cakes, cheescake, it 
               combines very well with chocolates such as the famous After Eight®.
            </NuevoAcordeon>
            <NuevoAcordeon 
                title="COCKTAILS"
                active={active} 
                setActive={setActive}
            >
                <b>- Grass </b> (Mint liqueur, Cocoa cream, milk, Chocolate syrup.)<br/>
                <b>- Frozen Andes Mint </b> (Cold’s Mint, Coffee liqueur, Cocoa cream, Whiskey cream, Milk and vanilla ice cream.)<br/>
            </NuevoAcordeon>
        </div>
    )
}


export default AcordeonMenta
