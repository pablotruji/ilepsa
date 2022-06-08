import React, {useRef, useEffect, useCallback} from 'react'
import {useSpring, animated } from 'react-spring'
import Acordeon from '../Acordeon/AcordeonCocadaBelga'

import { 
    Background,
    ModalWrapper,
    ModalContent,
    CloseModalBoton
        

} from './ModalElementos';

const Modal2 = ({showModal15, setShowModal15}) => {

    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration:250
        },
        opacity:showModal15 ? 1 :0,
        transform:showModal15 ? `translateY(0%)` :`translateY(-100%)`

    })

    const closeModal = e =>{
        if(modalRef.current === e.target){
            setShowModal15(false)
        }
    }
    return (
        <>
            {showModal15 ? (
                 <Background ref={modalRef} onClick={closeModal}>
                     <animated.div style={animation}>
                        <ModalWrapper showModal2={showModal15}>
                            <ModalContent>
                                <h1>COCADA BELGA Cold's</h1>
                                <Acordeon/>
                            </ModalContent>
                            <CloseModalBoton aria-label='Close modal' onClick={() => setShowModal15 (prev => !prev)}></CloseModalBoton>
                        </ModalWrapper>
                    </animated.div>
                 </Background>
            ): null}
        </>
    )
}

export default Modal2

