import React, {useRef, useEffect, useCallback} from 'react'
import {useSpring, animated } from 'react-spring'
import Video1 from '../../videos/Triple-Sec.mp4'
import Acordeon from '../Acordeon/AcordeonTripeSec'
import { useMediaQuery } from 'react-responsive'

import { 
    Background,
    ModalWrapper,
    ModalVideo,
    ModalContent,
    CloseModalBoton
        

} from './ModalElementos';

const Modal2 = ({showModal11, setShowModal11}) => {

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
        opacity:showModal11 ? 1 :0,
        transform:showModal11 ? `translateY(0%)` :`translateY(-100%)`

    })

    const closeModal = e =>{
        if(modalRef.current === e.target){
            setShowModal11(false)
        }
    }
    return (
        <>
            {showModal11 ? (
                 <Background ref={modalRef} onClick={closeModal}>
                     <animated.div style={animation}>
                        <ModalWrapper showModal11={showModal11}>
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
                                <h1>TRIPLE SEC Cold's</h1>
                                <Acordeon/>
                            </ModalContent>
                            <CloseModalBoton aria-label='Close modal' onClick={() => setShowModal11 (prev => !prev)}></CloseModalBoton>
                        </ModalWrapper>
                    </animated.div>
                 </Background>
            ): null}
        </>
    )
}

export default Modal2

