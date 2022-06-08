import React, {useRef} from 'react'
import {useSpring, animated } from 'react-spring'
import {
        ContenedorModalDesc,
        ContenedorDescripcionModal,
        DescripcionWrapper,
        BotonCerrar
        
 } from './DescModalElementos'
import Descripcion from '../DescripcionProducto/TripleSecDesc'

const TraguitoDescModal = ({showModalMovil11, setShowModalMovil11}) => {

    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration:250
        },
        opacity:showModalMovil11 ? 1 :0,
        transform:showModalMovil11 ? `translateY(0%)` :`translateY(-100%)`

    })

    const closeModal = e =>{
        if(modalRef.current === e.target){
            setShowModalMovil11(false)
        }
    }

    return (
        <>
            { showModalMovil11 ? (
            <ContenedorModalDesc ref={modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                    <ContenedorDescripcionModal showModalMovil11={showModalMovil11}>
                        
                            <h2 style={{color:"#fff"}}>TRIPLE SEC Cold's</h2>
                            <DescripcionWrapper>
                                <Descripcion/>
                            </DescripcionWrapper>
                        <BotonCerrar aria-label='Close modal' onClick={() => setShowModalMovil11 (prev => !prev)}/>
                    </ContenedorDescripcionModal>
                </animated.div>
            </ContenedorModalDesc>
            ):null}
        </>
    )
}

export default TraguitoDescModal 
