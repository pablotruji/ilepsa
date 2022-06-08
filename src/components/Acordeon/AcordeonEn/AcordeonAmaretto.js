import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonAmaretto = () => {
    const [active, setActive] = useState("AMARETTO COFFEE")
    return (
        <div>
            <NuevoAcordeon 
                title="AMARETTO COFFEE" 
                active={active} 
                setActive={setActive}
            >
                It is prepared with espresso, Amaretto, fresh whipped cream and no sugar. 
                It can be served with Italian Amaretto cookies.
           </NuevoAcordeon> 
            <NuevoAcordeon 
                title="DESSERTS" 
                active={active} 
                setActive={setActive}
            >
                Perfect for pastries like Tiramisu, Macaroni, chocolates and ice cream.
            </NuevoAcordeon>
            <NuevoAcordeon 
                title="COCKTAILS"
                active={active} 
                setActive={setActive}
            >
                <b>- Amaretto Sour</b> Cold’s Amaretto + Orange and grenadine juice.<br/>
                <b>- Almond Blossom</b> Cold’s Amaretto + Cognac + Milk cream.
            </NuevoAcordeon>
        </div>
    )
}


export default AcordeonAmaretto
