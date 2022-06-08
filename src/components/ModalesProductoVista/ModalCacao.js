import React, {useRef, useEffect, useCallback} from 'react'
import {useSpring, animated } from 'react-spring'
import Video1 from '../../videos/Cacao.mp4'
import Acordeon from '../Acordeon/AcordeonCacao'
import { useMediaQuery } from 'react-responsive'

import { 
    Background,
    ModalWrapper,
    ModalVideo,
    ModalContent,
    CloseModalBoton

} from './ModalElementos';

const Modal1 = ({showModal4, setShowModal4}) => {

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
        opacity:showModal4 ? 1 :0,
        transform:showModal4 ? `translateY(0%)` :`translateY(-100%)`

    })

    const closeModal = e =>{
        if(modalRef.current === e.target){
            setShowModal4(false)
        }
    }
    return (
        <>
            {showModal4 ? (
                 <Background ref={modalRef} onClick={closeModal}>
                     <animated.div style={animation}>
                        <ModalWrapper showModal4={showModal4}>
                            { isDesktopOrLaptop &&
                            <ModalVideo
                                url={Video1}
                                loop
                                height="100%"
                                playing
                                muted
                                playsinline
                            />
                            }
                            {
                            isMovilTablet &&
                            <span></span>
                            } 
                            <ModalContent>
                                <h1>CACAO Cold´s</h1>
                                <Acordeon/>
                            </ModalContent>
                            <CloseModalBoton aria-label='Close modal' onClick={() => setShowModal4 (prev => !prev)}></CloseModalBoton>
                        </ModalWrapper>
                    </animated.div>
                 </Background>
            ): null}
        </>
    )
}

export default Modal1
