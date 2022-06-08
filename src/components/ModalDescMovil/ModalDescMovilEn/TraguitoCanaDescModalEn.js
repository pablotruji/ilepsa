import React, {useRef} from 'react'
import {useSpring, animated } from 'react-spring'
import {
        ContenedorModalDesc,
        ContenedorDescripcionModal,
        DescripcionWrapper,
        BotonCerrar
        
 } from '../DescModalElementos'
import Descripcion from '../../DescripcionProducto/DescripcionIngles/TraguitoCanaDesc'

const TraguitoDescModal = ({showModalMovil2, setShowModalMovil2}) => {

    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration:250
        },
        opacity:showModalMovil2 ? 1 :0,
        transform:showModalMovil2 ? `translateY(0%)` :`translateY(-100%)`

    })

    const closeModal = e =>{
        if(modalRef.current === e.target){
            setShowModalMovil2(false)
        }
    }

    return (
        <>
            { showModalMovil2 ? (
            <ContenedorModalDesc ref={modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                    <ContenedorDescripcionModal showModalMovil2={showModalMovil2}>
                        
                            <h2 style={{color:"#fff"}}>TRAGUITO CAÑA</h2>
                            <DescripcionWrapper>
                                <Descripcion/>
                            </DescripcionWrapper>
                        <BotonCerrar aria-label='Close modal' onClick={() => setShowModalMovil2 (prev => !prev)}/>
                    </ContenedorDescripcionModal>
                </animated.div>
            </ContenedorModalDesc>
            ):null}
        </>
    )
}

export default TraguitoDescModal 
