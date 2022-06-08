import React, {useRef} from 'react'
import {useSpring, animated } from 'react-spring'
import {
        ContenedorModalDesc,
        ContenedorDescripcionModal,
        DescripcionWrapper,
        BotonCerrar
        
 } from './DescModalElementos'
import Descripcion from '../DescripcionProducto/TraguitoDesc'

const TraguitoDescModal = ({showModalMovil1, setShowModalMovil1}) => {

    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration:250
        },
        opacity:showModalMovil1 ? 1 :0,
        transform:showModalMovil1 ? `translateY(0%)` :`translateY(-100%)`

    })

    const closeModal = e =>{
        if(modalRef.current === e.target){
            setShowModalMovil1(false)
        }
    }

    return (
        <>
            { showModalMovil1 ? (
            <ContenedorModalDesc ref={modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                    <ContenedorDescripcionModal showModalMovil1={showModalMovil1}>
                        
                            <h2 style={{color:"#fff"}}>TRAGUITO</h2>
                            <DescripcionWrapper>
                                <Descripcion/>
                            </DescripcionWrapper>
                        <BotonCerrar aria-label='Close modal' onClick={() => setShowModalMovil1 (prev => !prev)}/>
                    </ContenedorDescripcionModal>
                </animated.div>
            </ContenedorModalDesc>
            ):null}
        </>
    )
}

export default TraguitoDescModal 
