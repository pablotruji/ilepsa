import React, {useRef, useEffect, useCallback} from 'react'
import {useSpring, animated } from 'react-spring'
import Acordeon from '../Acordeon/AcordeonGoldenNut'

import { 
    Background,
    ModalWrapper,
    ModalContent,
    CloseModalBoton
        
} from './ModalElementos';

const Modal2 = ({showModal16, setShowModal16}) => {

    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration:250
        },
        opacity:showModal16 ? 1 :0,
        transform:showModal16 ? `translateY(0%)` :`translateY(-100%)`

    })

    const closeModal = e =>{
        if(modalRef.current === e.target){
            setShowModal16(false)
        }
    }
    return (
        <>
            {showModal16 ? (
                 <Background ref={modalRef} onClick={closeModal}>
                     <animated.div style={animation}>
                        <ModalWrapper showModal16={showModal16}>
                            <ModalContent>
                                <h1>GOLDEN NUT Cold's</h1>
                                <Acordeon/>
                            </ModalContent>
                            <CloseModalBoton aria-label='Close modal' onClick={() => setShowModal16 (prev => !prev)}></CloseModalBoton>
                        </ModalWrapper>
                    </animated.div>
                 </Background>
            ): null}
        </>
    )
}

export default Modal2

