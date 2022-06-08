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
                <h2>ILEPSA LABORA CON CONCIENCIA SOCIAL Y AMBIENTAL</h2>
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
                                    Constantemente en todos nuestros procesos concientizamos la 
                                    minimización de consumo de energía y agua, así como la minimización 
                                    de generación de desechos varios.
                                </p>
                            </Tarjeta>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Tarjeta>   
                                <ContenedorImagen backgroundAmbiente={ImagenAmbiental8}/>
                                <p>
                                    Tenemos una gestión ambiental controlada con gestores autorizados 
                                    para garantizar que todos nuestros desechos tienen un destino adecuado de 
                                    reciclaje o eliminación.
                                </p>
                            </Tarjeta>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Tarjeta>   
                                <ContenedorImagen backgroundAmbiente={ImagenAmbiental4}/>
                                <p>
                                    Dentro de nuestro proceso tenemos la implementación de “botella retornable”, 
                                    aporte que permite minimizar la generación de desecho de vidrio.
                                </p>
                            </Tarjeta>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Tarjeta>
                                <ContenedorImagen backgroundAmbiente={ImagenAmbiental2}/>
                                <p>
                                    Mantenemos monitoreos en nuestros procesos tanto en la generación de gases como de aguas residuales, realizando el tratamiento oportuno, 
                                    para devolver al planeta una pequeña parte de todo lo que nos ha brindado.
                                </p>
                            </Tarjeta>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Tarjeta>
                                <ContenedorImagen backgroundAmbiente={ImagenAmbiental7}/>  
                                <p>
                                    Generamos conciencia social y ambiental por medio de capacitaciones oportunas a nuestro personal.
                                </p>
                            </Tarjeta>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Tarjeta>
                                <ContenedorImagen backgroundAmbiente={ImagenAmbiental9}/>   
                                <p>
                                La familia ILEPSA comprende que una eficiente gestión corresponde a obtener productos de alta calidad, 
                                con precios justos y satisfacción de nuestros clientes, implementando conciencia social y ambiental.
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
