import React, {useRef, useEffect, useCallback} from 'react'
import {useSpring, animated } from 'react-spring'
import Video1 from '../../videos/Traguito.mp4'
import Acordeon from '../Acordeon/AcordeonTraguitoCana'

import { 
    Background,
    ModalWrapper,
    ModalVideo,
    ModalContent,
    CloseModalBoton
        

} from './ModalElementos';

const Modal2 = ({showModal2, setShowModal2}) => {

    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration:250
        },
        opacity:showModal2 ? 1 :0,
        transform:showModal2 ? `translateY(0%)` :`translateY(-100%)`

    })

    const closeModal = e =>{
        if(modalRef.current === e.target){
            setShowModal2(false)
        }
    }
    return (
        <>
            {showModal2 ? (
                 <Background ref={modalRef} onClick={closeModal}>
                     <animated.div style={animation}>
                        <ModalWrapper showModal2={showModal2}>
                            <ModalContent>
                                <h1>TRAGUITO CAÑA</h1>
                                <Acordeon/>
                            </ModalContent>
                            <CloseModalBoton aria-label='Close modal' onClick={() => setShowModal2 (prev => !prev)}></CloseModalBoton>
                        </ModalWrapper>
                    </animated.div>
                 </Background>
            ): null}
        </>
    )
}

export default Modal2

