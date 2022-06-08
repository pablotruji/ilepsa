import React, {useRef} from 'react'
import {useSpring, animated } from 'react-spring'
import {
        ContenedorModalDesc,
        ContenedorDescripcionModal,
        DescripcionWrapper,
        BotonCerrar
        
 } from './DescModalElementos'
import Descripcion from '../DescripcionProducto/CuracaoDesc'

const TraguitoDescModal = ({showModalMovil6, setShowModalMovil6}) => {

    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration:250
        },
        opacity:showModalMovil6 ? 1 :0,
        transform:showModalMovil6 ? `translateY(0%)` :`translateY(-100%)`

    })

    const closeModal = e =>{
        if(modalRef.current === e.target){
            setShowModalMovil6(false)
        }
    }

    return (
        <>
            { showModalMovil6 ? (
            <ContenedorModalDesc ref={modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                    <ContenedorDescripcionModal showModalMovil6={showModalMovil6}>
                        
                            <h2 style={{color:"#fff"}}>CURACAO Cold's</h2>
                            <DescripcionWrapper>
                                <Descripcion/>
                            </DescripcionWrapper>
                        <BotonCerrar aria-label='Close modal' onClick={() => setShowModalMovil6 (prev => !prev)}/>
                    </ContenedorDescripcionModal>
                </animated.div>
            </ContenedorModalDesc>
            ):null}
        </>
    )
}

export default TraguitoDescModal 
