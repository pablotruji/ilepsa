import React, {useRef, useEffect, useCallback} from 'react'
import {useSpring, animated } from 'react-spring'
import Acordeon from '../../Acordeon/AcordeonEn/AcordeonTraguitoSinAzucar'

import { 
    Background,
    ModalWrapper,
    ModalContent,
    CloseModalBoton
        
} from './ModalElementos';

const Modal2 = ({showModal3, setShowModal3}) => {

    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration:250
        },
        opacity:showModal3 ? 1 :0,
        transform:showModal3 ? `translateY(0%)` :`translateY(-100%)`

    })

    const closeModal = e =>{
        if(modalRef.current === e.target){
            setShowModal3(false)
        }
    }
    return (
        <>
            {showModal3 ? (
                 <Background ref={modalRef} onClick={closeModal}>
                     <animated.div style={animation}>
                        <ModalWrapper showModal3={showModal3}>
                            <ModalContent>
                                <h1>TRAGUITO SIN AZUCAR</h1>
                                <Acordeon/>
                            </ModalContent>
                            <CloseModalBoton aria-label='Close modal' onClick={() => setShowModal3 (prev => !prev)}></CloseModalBoton>
                        </ModalWrapper>
                    </animated.div>
                 </Background>
            ): null}
        </>
    )
}

export default Modal2

