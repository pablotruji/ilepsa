import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonAmaretto = () => {
    const [active, setActive] = useState("TRADICIONAL CAFÉ AMARETTO")
    return (
        <div>
            <NuevoAcordeon 
                title="TRADICIONAL CAFÉ AMARETTO" 
                active={active} 
                setActive={setActive}
            >
                Se hace con un café expreso, licor de Amaretto, nata fresca montada y 
                sin azúcar. Se puede acompañar con galletas italianas de Amaretto.
           </NuevoAcordeon> 
            <NuevoAcordeon 
                title="POSTRES" 
                active={active} 
                setActive={setActive}
            >
                Va bien en recetas de repostería como el Tiramisú, Macarrones, 
                chocolates y helado.
            </NuevoAcordeon>
            <NuevoAcordeon 
                title="COCTELES"
                active={active} 
                setActive={setActive}
            >
                <b>- El clásico Amaretto Sour</b> Amaretto con jugo de naranja y granadina.<br/>
                <b>- Miles Davis</b> preparado con Amaretto, vodka, chocolate y refresco de cola.<br/>
                <b>- Flor de Almendro</b>, una mezcla de Amaretto, Cognac y crema de leche.
            </NuevoAcordeon>
        </div>
    )
}


export default AcordeonAmaretto
