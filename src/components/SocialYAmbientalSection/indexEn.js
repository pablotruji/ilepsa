import React from 'react'
import './styles.css'
import { Swiper, SwiperSlide } from "swiper/react";


import 'swiper/swiper-bundle.css';

import SwiperCore, {
    Navigation,
    Pagination,
  } from 'swiper';

import {
    SocialYAmbientalPagina,
    SocialYAmbientalContenedor,
    ContenedorTarjetas,
    Tarjeta,
    ContenedorImagen

} from './SocialYAmbientalElementos'

import ImagenAmbiental1 from '../../images/SectionAmbiental/imaAmbiente.jpg'
import ImagenAmbiental2 from '../../images/SectionAmbiental/imaAmbiente-2.jpg'
import ImagenAmbiental3 from '../../images/SectionAmbiental/imaAmbiente-3.jpg'
import ImagenAmbiental4 from '../../images/SectionAmbiental/imaAmbiente-4.jpg'
import ImagenAmbiental5 from '../../images/SectionAmbiental/imaAmbiente-5.jpg'
import ImagenAmbiental6 from '../../images/SectionAmbiental/imaAmbiente-6.jpg'
import ImagenAmbiental7 from '../../images/SectionAmbiental/imaAmbiente-7.jpg'
import ImagenAmbiental8 from '../../images/SectionAmbiental/imaAmbiente-8.jpg'
import ImagenAmbiental9 from '../../images/SectionAmbiental/imaAmbiente-9.jpg'

SwiperCore.use([Navigation,Pagination]);

const SocialYAmbientalSection = (backgroundAmbiente) => {
    return (
        <SocialYAmbientalPagina>
            <SocialYAmbientalContenedor>
                <h2>ILEPSA WORKS WITH SOCIAL AND ENVIRONMENTAL CONSCIOUSNESS</h2>
                <ContenedorTarjetas>
                    <Swiper id="SlideSocialAmbiental"
                        navigation={true}
                        slidesPerView={1}
                        pagination={{
                            clickable: true
                        }}
                        breakpoints={{
                            "640": {
                    
                            },
                            "768": {
                                slidesPerView: 2,
                                spaceBetween: 1
                            },
                            "1024": {
                                slidesPerView: 3,
                                spaceBetween: 1
                            }
                        }}
                    >
                        <SwiperSlide>
                            <Tarjeta>   
                                <ContenedorImagen backgroundAmbiente={ImagenAmbiental1}/>
                                <p>
                                    Constantly in all our processes we raise awareness of
                                    minimization of energy and water consumption, as well as minimization
                                    generation of miscellaneous waste.
                                </p>
                            </Tarjeta>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Tarjeta>   
                                <ContenedorImagen backgroundAmbiente={ImagenAmbiental8}/>
                                <p>
                                    We have a controlled environmental management with authorized managers
                                    to ensure that all our waste has a proper destination of
                                    recycling or disposal.
                                </p>
                            </Tarjeta>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Tarjeta>   
                                <ContenedorImagen backgroundAmbiente={ImagenAmbiental4}/>
                                <p>
                                    Within our process we have the implementation of "returnable bottle",
                                    contribution that allows minimizing the generation of glass waste.
                                </p>
                            </Tarjeta>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Tarjeta>
                                <ContenedorImagen backgroundAmbiente={ImagenAmbiental2}/>
                                <p>
                                    We monitor our processes both in the generation of gases and wastewater, carrying out the appropriate treatment,
                                    to give back to the planet a small part of everything it has given us.
                                </p>
                            </Tarjeta>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Tarjeta>
                                <ContenedorImagen backgroundAmbiente={ImagenAmbiental7}/>  
                                <p>
                                    We generate social and environmental awareness through timely training for our staff.
                                </p>
                            </Tarjeta>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Tarjeta>
                                <ContenedorImagen backgroundAmbiente={ImagenAmbiental9}/>   
                                <p>
                                    The ILEPSA family understands that efficient management corresponds to obtaining high quality products,
                                    with fair prices and customer satisfaction, implementing social and environmental awareness.
                                </p>
                            </Tarjeta>
                        </SwiperSlide>
                    </Swiper>
                </ContenedorTarjetas> 
            </SocialYAmbientalContenedor>
        </SocialYAmbientalPagina>
    )
}

export default SocialYAmbientalSection
