import React, {useRef} from 'react'
import {useSpring, animated } from 'react-spring'
import Video1 from '../../../videos/Cafe.mp4'
import Acordeon from '../../Acordeon/AcordeonEn/AcordeonCafe'
import { useMediaQuery } from 'react-responsive'

import { 
    Background,
    ModalWrapper,
    ModalVideo,
    ModalContent,
    CloseModalBoton
} from './ModalElementos';

const Modal2 = ({showModal5, setShowModal5}) => {

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
        opacity:showModal5 ? 1 :0,
        transform:showModal5 ? `translateY(0%)` :`translateY(-100%)`

    })

    const closeModal = e =>{
        if(modalRef.current === e.target){
            setShowModal5(false)
        }
    }
    return (
        <>
            {showModal5 ? (
                 <Background ref={modalRef} onClick={closeModal}>
                     <animated.div style={animation}>
                        <ModalWrapper showModal5={showModal5}>
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
                                <h1>CAFÉ COLD'S</h1>
                                <Acordeon/>
                            </ModalContent>
                            <CloseModalBoton aria-label='Close modal' onClick={() => setShowModal5 (prev => !prev)}></CloseModalBoton>
                        </ModalWrapper>
                    </animated.div>
                 </Background>
            ): null}
        </>
    )
}

export default Modal2

