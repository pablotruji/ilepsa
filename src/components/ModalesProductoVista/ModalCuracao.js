import React, {useRef, useEffect, useCallback} from 'react'
import {useSpring, animated } from 'react-spring'
import Video1 from '../../videos/Curacao.mp4'
import Acordeon from '../Acordeon/AcordeonCuracao'
import { useMediaQuery } from 'react-responsive'

import { 
    Background,
    ModalWrapper,
    ModalVideo,
    ModalContent,
    CloseModalBoton
        
} from './ModalElementos';

const Modal2 = ({showModal6, setShowModal6}) => {

    const isDesktopOrLaptop = useMediaQuery(
        { minDeviceWidth: 960 }
     )
    
    const isMovilTablet = useMediaQuery(
        {  maxDeviceWidth: 959 },
    )

    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration:250
        },
        opacity:showModal6 ? 1 :0,
        transform:showModal6 ? `translateY(0%)` :`translateY(-100%)`

    })

    const closeModal = e =>{
        if(modalRef.current === e.target){
            setShowModal6(false)
        }
    }
    return (
        <>
            {showModal6 ? (
                 <Background ref={modalRef} onClick={closeModal}>
                     <animated.div style={animation}>
                        <ModalWrapper showModal6={showModal6}>
                            { isDesktopOrLaptop &&
                            <ModalVideo
                                url={Video1}
                                loop
                                height="100%"
                                playing
                                muted
                                playsinline
                            />}
                            {
                            isMovilTablet &&
                            <span></span>
                            } 
                            <ModalContent>
                                <h1>CURACAO Cold's</h1>
                                <Acordeon/>
                            </ModalContent>
                            <CloseModalBoton aria-label='Close modal' onClick={() => setShowModal6 (prev => !prev)}></CloseModalBoton>
                        </ModalWrapper>
                    </animated.div>
                 </Background>
            ): null}
        </>
    )
}

export default Modal2

