import React, {useRef, useEffect, useCallback} from 'react'
import {useSpring, animated } from 'react-spring'
import Video1 from '../../../videos/Traguito.mp4'
import Acordeon from '../../Acordeon/AcordeonEn/AcordeonTraguito'
import { useMediaQuery } from 'react-responsive'

import { 
    Background,
    ModalWrapper,
    ModalVideo,
    ModalContent,
    CloseModalBoton
        
} from './ModalElementos';

const Modal1 = ({showModal1, setShowModal1}) => {

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
        opacity:showModal1 ? 1 :0,
        transform:showModal1 ? `translateY(0%)` :`translateY(-100%)`

    })

    const closeModal = e =>{
        if(modalRef.current === e.target){
            setShowModal1(false)
        }
    }
    return (
        <>
            {showModal1 ? (
                 <Background ref={modalRef} onClick={closeModal}>
                     <animated.div style={animation}>
                        <ModalWrapper showModal1={showModal1}>
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
                                <h1>TRAGUITO</h1>
                                <Acordeon/>
                            </ModalContent>
                            <CloseModalBoton aria-label='Close modal' onClick={() => setShowModal1 (prev => !prev)}></CloseModalBoton>
                        </ModalWrapper>
                    </animated.div>
                 </Background>
            ): null}
        </>
    )
}

export default Modal1
