import React, {useRef, useEffect, useCallback} from 'react'
import {useSpring, animated } from 'react-spring'
import Video1 from '../../../videos/Pina-Colada.mp4'
import Acordeon from '../../Acordeon/AcordeonEn/AcordeonPinaColada'
import { useMediaQuery } from 'react-responsive'

import { 
    Background,
    ModalWrapper,
    ModalVideo,
    ModalContent,
    CloseModalBoton
        

} from './ModalElementos';

const Modal2 = ({showModal8, setShowModal8}) => {

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
        opacity:showModal8 ? 1 :0,
        transform:showModal8 ? `translateY(0%)` :`translateY(-100%)`

    })

    const closeModal = e =>{
        if(modalRef.current === e.target){
            setShowModal8(false)
        }
    }
    return (
        <>
            {showModal8 ? (
                 <Background ref={modalRef} onClick={closeModal}>
                     <animated.div style={animation}>
                        <ModalWrapper showModal8={showModal8}>
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
                                <h1>PIÑA COLADA COLD'S</h1>
                                <Acordeon/>
                            </ModalContent>
                            <CloseModalBoton aria-label='Close modal' onClick={() => setShowModal8 (prev => !prev)}></CloseModalBoton>
                        </ModalWrapper>
                    </animated.div>
                 </Background>
            ): null}
        </>
    )
}

export default Modal2

