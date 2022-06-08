import React,{useState} from 'react'
import NuevoAcordeon from './NuevoAcordeon'

const AcordeonTripleSec = () => {
    const [active, setActive] = useState("IDEAL PARA EL FLAMBEADO")
    return (
        <div>
            <NuevoAcordeon 
                title="IDEAL PARA EL FLAMBEADO"
                active={active} 
                setActive={setActive}
                >
                    La técnica del flambeado donde el fuego es el protagonista. 
                    Es el arte de hacer llamas o prender fuego a preparaciones de 
                    saladas o dulces.
            </NuevoAcordeon>
            <NuevoAcordeon 
                title="POSTRES" 
                active={active} 
                setActive={setActive}
                >
                    El clásico Crépe Suzette, crépe dulce de mantequilla, azúcar 
                    zumo exprimido de mandarina o naranja con Triple Sec que es 
                    Flambeado.
            </NuevoAcordeon>
            <NuevoAcordeon 
                title="GASTRONOMIA" 
                active={active} 
                setActive={setActive}
                >
                    Camarones con tocino flambeados.
            </NuevoAcordeon>
            <NuevoAcordeon 
                title="COCTELES EN LLAMAS" 
                active={active} 
                setActive={setActive}
                >
                        - <b>Cucaracha</b> (Tequila Triple Sec, Licor de café)<br/>           
                        - <b>Purgatorio</b> (Tequila, Triple Sec, Tabasca)<br/>
                        - <b>A Fuego Lento</b> (Grapa, Triple Sec, 1 terrón de azúcar)<br/>
                        - <b>Satanás</b> ( Ron, Whisky, Triple Sec, Granadina)<br/>
            </NuevoAcordeon>

        </div>
    )
}


export default AcordeonTripleSec
