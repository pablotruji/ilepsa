import React, {useRef} from 'react'
import {useSpring, animated } from 'react-spring'
import {
        ContenedorModalDesc,
        ContenedorDescripcionModal,
        DescripcionWrapper,
        BotonCerrar
        
 } from '../DescModalElementos'
import Descripcion from '../../DescripcionProducto/DescripcionIngles/RompopeDesc'

const TraguitoDescModal = ({showModalMovil17, setShowModalMovil17}) => {

    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration:250
        },
        opacity:showModalMovil17 ? 1 :0,
        transform:showModalMovil17 ? `translateY(0%)` :`translateY(-100%)`

    })

    const closeModal = e =>{
        if(modalRef.current === e.target){
            setShowModalMovil17(false)
        }
    }

    return (
        <>
            { showModalMovil17 ? (
            <ContenedorModalDesc ref={modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                    <ContenedorDescripcionModal showModalMovil17={showModalMovil17}>
                        
                            <h2 style={{color:"#fff"}}>ROMPOPE Cold's</h2>
                            <DescripcionWrapper>
                                <Descripcion/>
                            </DescripcionWrapper>
                        <BotonCerrar aria-label='Close modal' onClick={() => setShowModalMovil17 (prev => !prev)}/>
                    </ContenedorDescripcionModal>
                </animated.div>
            </ContenedorModalDesc>
            ):null}
        </>
    )
}

export default TraguitoDescModal 
