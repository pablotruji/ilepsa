import React, {useRef} from 'react'
import {useSpring, animated } from 'react-spring'
import Video1 from '../../../videos/Ron-peq.mp4'
import Acordeon from '../../Acordeon/AcordeonEn/AcordeonRonOro'
import { useMediaQuery } from 'react-responsive'

import { 
    Background,
    ModalWrapper,
    ModalVideo,
    ModalContent,
    CloseModalBoton
} from './ModalElementos';

const Modal2 = ({showModal12, setShowModal12}) => {

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
        opacity:showModal12 ? 1 :0,
        transform:showModal12 ? `translateY(0%)` :`translateY(-100%)`

    })

    const closeModal = e =>{
        if(modalRef.current === e.target){
            setShowModal12(false)
        }
    }
    return (
        <>
            {showModal12 ? (
                 <Background ref={modalRef} onClick={closeModal}>
                     <animated.div style={animation}>
                        <ModalWrapper showModal12={showModal12}>
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
                                <h1>RON ORO ISLA DEL TESORO</h1>
                                <Acordeon/>
                            </ModalContent>
                            <CloseModalBoton aria-label='Close modal' onClick={() => setShowModal12 (prev => !prev)}></CloseModalBoton>
                        </ModalWrapper>
                    </animated.div>
                 </Background>
            ): null}
        </>
    )
}

export default Modal2

