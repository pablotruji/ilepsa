import React, {useState} from 'react'
import './styles.css';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/swiper-bundle.css';

import SidebarProducts from '../SidebarProducts';

import SwiperCore, {
    Navigation,
    Pagination,
    EffectCoverflow
  } from 'swiper';

import NavbarProducts from '../NavbarProducts';

import {
    ContenedorProductosPagina,
    ContenedorProductos,
    Productosh2,
    WrapperProductos,
    ContenedorProductosContenido,
    ImgProductos,
    TituloProducto,
    BotonVerMas
} from "./ProductosElementos"

import Traguito1 from '../../images/botellasProductos/Traguito-1.jpg'
import Traguito2 from '../../images/botellasProductos/Traguito-Verde-1.jpg'
import Traguito3 from '../../images/botellasProductos/Traguito-Azul-2.jpg'
import TraguitoTradicional1 from '../../images/botellasProductos/Traguito-4.jpg'
import TraguitoTradicional2 from '../../images/botellasProductos/Traguito-5.jpg'
import Cacao from '../../images/botellasProductos/Cacao-Colds-1.jpg'
import Cafe from '../../images/botellasProductos/Cafe-Colds-1.jpg'
import Curacao from '../../images/botellasProductos/Curacao-Colds-1.jpg'
import Menta from '../../images/botellasProductos/Menta-Colds-1.jpg'
import Whisky from '../../images/botellasProductos/Whisky-Colds-1.jpg'
import PinaColada from '../../images/botellasProductos/Pina-Colada-Colds-1.jpg'
import Amaretto from '../../images/botellasProductos/Amaretto-Colds-1.jpg'
import Chirimoya from '../../images/botellasProductos/Chirimoya-1.jpg'
import CocadaBelga from '../../images/botellasProductos/Cocada-Belga-1.jpg'
import GoldenNut from '../../images/botellasProductos/Golden-Nut-1.jpg'
import Rompope from '../../images/botellasProductos/Rompope-1.jpg'
import TripleSec from '../../images/botellasProductos/Triple-Sec-Colds-1.jpg'
import RonOro from '../../images/botellasProductos/Ron-Isla-Oro-2.jpg'
import RonPlata from '../../images/botellasProductos/Ron-Isla-Plata-2.jpg'

SwiperCore.use([Navigation,Pagination,EffectCoverflow]);

const Productos = () => {

    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <NavbarProducts toggle={toggle}/>
            <SidebarProducts isOpen={isOpen} toggle={toggle}/>
            <ContenedorProductosPagina>
                
                <ContenedorProductos>

                    <WrapperProductos>
                        <Swiper id="SlideProductos" 
                            loop={true}
                            navigation={true}
                            slidesPerView={1}
                            effect={'coverflow'}
                            centeredSlides={true}
                            pagination={{
                                clickable: true
                            }}
                            breakpoints={{
                                "640": {
                        
                                },
                                "760": {
                                    slidesPerView: 1,
                                    spaceBetween: 1
                                },
                                "1024": {
                                    slidesPerView: 3,
                                    spaceBetween: 1
                                }
                            }}

                            coverflowEffect={{
                                "rotate": 50,
                                "stretch": 0,
                                "depth": 100,
                                "modifier": 1,
                                "slideShadows": false
                            }}
                        >        
                                 

                                <SwiperSlide>
                                    <ContenedorProductosContenido>
                                        <h2>AGUARDIENTE</h2>
                                        <ImgProductos src={Traguito1}/>
                                        <TituloProducto>
                                            TRAGUITO
                                        </TituloProducto>
                                        <BotonVerMas to='producto/traguito'>VER MÁS</BotonVerMas>
                                    </ContenedorProductosContenido>
                                </SwiperSlide>  

                                <SwiperSlide> 
                                    <ContenedorProductosContenido>
                                        <h2>AGUARDIENTE</h2>
                                        <ImgProductos src={Traguito2}/>
                                        <TituloProducto>
                                            TRAGUITO CAÑA
                                        </TituloProducto>
                                        <BotonVerMas to='producto/traguito-cana'>VER MÁS</BotonVerMas>
                                    </ContenedorProductosContenido>
                                </SwiperSlide>

                                <SwiperSlide> 
                                    <ContenedorProductosContenido>
                                        <h2>AGUARDIENTE</h2>
                                        <ImgProductos src={Traguito3}/>
                                        <TituloProducto>
                                            TRAGUITO SIN AZÚCAR
                                        </TituloProducto>
                                        <BotonVerMas to="producto/traguito-sin-azucar">VER MÁS</BotonVerMas>
                                    </ContenedorProductosContenido>
                                </SwiperSlide> 

                                <SwiperSlide> 
                                    <ContenedorProductosContenido>
                                        <h2>AGUARDIENTE</h2>
                                        <ImgProductos src={TraguitoTradicional1}/>
                                        <TituloProducto>
                                            TRAGUITO TRADICIONAL
                                        </TituloProducto>
                                        <BotonVerMas to="producto/tradicional-1">VER MÁS</BotonVerMas>
                                    </ContenedorProductosContenido>
                                </SwiperSlide>

                                <SwiperSlide> 
                                    <ContenedorProductosContenido>
                                        <h2>AGUARDIENTE</h2>
                                        <ImgProductos src={TraguitoTradicional2}/>
                                        <TituloProducto>
                                            CAÑA TRADICIONAL
                                        </TituloProducto>
                                        <BotonVerMas to="producto/tradicional-2">VER MÁS</BotonVerMas>
                                    </ContenedorProductosContenido>
                                </SwiperSlide>

                                <SwiperSlide> 
                                    <ContenedorProductosContenido>
                                        <h2>COLD'S</h2>
                                        <ImgProductos src={Cacao}/>
                                        <TituloProducto>
                                            CACAO
                                        </TituloProducto>
                                        <BotonVerMas to='producto/cacao'>VER MÁS</BotonVerMas>
                                    </ContenedorProductosContenido>
                                </SwiperSlide>                       

                                <SwiperSlide> 
                                    <ContenedorProductosContenido>
                                        <h2>COLD`S</h2>
                                        <ImgProductos src={Cafe}/>
                                        <TituloProducto>
                                            CAFÉ
                                        </TituloProducto>
                                        <BotonVerMas to='producto/cafe'>VER MÁS</BotonVerMas>
                                    </ContenedorProductosContenido>
                                </SwiperSlide> 

                                <SwiperSlide> 
                                    <ContenedorProductosContenido>
                                        <h2>COLD'S</h2>
                                        <ImgProductos src={Curacao}/>
                                        <TituloProducto>
                                            CURACAO
                                        </TituloProducto>
                                        <BotonVerMas to='producto/curacao'>VER MÁS</BotonVerMas>
                                    </ContenedorProductosContenido>
                                </SwiperSlide> 

                                <SwiperSlide> 
                                    <ContenedorProductosContenido>
                                        <h2>COLD'S</h2>
                                        <ImgProductos src={Menta}/>
                                        <TituloProducto>
                                            MENTA
                                        </TituloProducto>
                                        <BotonVerMas to='producto/menta'>VER MÁS</BotonVerMas>
                                    </ContenedorProductosContenido>
                                </SwiperSlide> 

                                <SwiperSlide> 
                                    <ContenedorProductosContenido>
                                        <h2>COLD'S</h2>
                                        <ImgProductos src={Whisky}/>
                                        <TituloProducto>
                                            WHISKY
                                        </TituloProducto>
                                        <BotonVerMas to='producto/whisky'>VER MÁS</BotonVerMas>
                                    </ContenedorProductosContenido>
                                </SwiperSlide> 

                                <SwiperSlide> 
                                    <ContenedorProductosContenido>
                                        <h2>COLD'S</h2>
                                        <ImgProductos src={PinaColada}/>
                                        <TituloProducto>
                                            PIÑA COLADA
                                        </TituloProducto>
                                        <BotonVerMas to='producto/pina-colada'>VER MÁS</BotonVerMas>
                                    </ContenedorProductosContenido>
                                </SwiperSlide> 

                                <SwiperSlide> 
                                    <ContenedorProductosContenido>
                                        <h2>COLD'S</h2>
                                        <ImgProductos src={Amaretto}/>
                                        <TituloProducto>
                                            AMARETTO
                                        </TituloProducto>
                                        <BotonVerMas to='producto/amaretto'>VER MÁS</BotonVerMas>
                                    </ContenedorProductosContenido>
                                </SwiperSlide>

                                <SwiperSlide> 
                                    <ContenedorProductosContenido>
                                        <h2>COLD'S</h2>
                                        <ImgProductos src={TripleSec}/>
                                        <TituloProducto>
                                            TRIPLE SEC
                                        </TituloProducto>
                                        <BotonVerMas to='producto/triple-sec'>VER MÁS</BotonVerMas>
                                    </ContenedorProductosContenido>
                                </SwiperSlide>

                                <SwiperSlide> 
                                    <ContenedorProductosContenido>
                                        <h2>COLD'S</h2>
                                        <ImgProductos src={Chirimoya}/>
                                        <TituloProducto>
                                            CHIRIMOYA
                                        </TituloProducto>
                                        <BotonVerMas to='producto/chirimoya'>VER MÁS</BotonVerMas>
                                    </ContenedorProductosContenido>
                                </SwiperSlide>

                                <SwiperSlide> 
                                    <ContenedorProductosContenido>
                                        <h2>COLD'S</h2>
                                        <ImgProductos src={CocadaBelga}/>
                                        <TituloProducto>
                                            COCADA BELGA
                                        </TituloProducto>
                                        <BotonVerMas to='producto/cocada-belga'>VER MÁS</BotonVerMas>
                                    </ContenedorProductosContenido>
                                </SwiperSlide>

                                <SwiperSlide> 
                                    <ContenedorProductosContenido>
                                        <h2>COLD'S</h2>
                                        <ImgProductos src={GoldenNut}/>
                                        <TituloProducto>
                                            GOLDEN NUT
                                        </TituloProducto>
                                        <BotonVerMas to='producto/golden-nut'>VER MÁS</BotonVerMas>
                                    </ContenedorProductosContenido>
                                </SwiperSlide>

                                <SwiperSlide> 
                                    <ContenedorProductosContenido>
                                        <h2>COLD'S</h2>
                                        <ImgProductos src={Rompope}/>
                                        <TituloProducto>
                                            ROMPOPE
                                        </TituloProducto>
                                        <BotonVerMas to='producto/rompope'>VER MÁS</BotonVerMas>
                                    </ContenedorProductosContenido>
                                </SwiperSlide>

                                <SwiperSlide> 
                                    <ContenedorProductosContenido>
                                        <h2>ISLA DEL TESORO</h2>
                                        <ImgProductos src={RonOro}/>
                                        <TituloProducto>
                                            RON ORO
                                        </TituloProducto>
                                        <BotonVerMas to='producto/ron-oro'>VER MÁS</BotonVerMas>
                                    </ContenedorProductosContenido>
                                </SwiperSlide>

                                <SwiperSlide> 
                                    <ContenedorProductosContenido>
                                        <h2>ISLA DEL TESORO</h2>
                                        <ImgProductos src={RonPlata}/>
                                        <TituloProducto>
                                            RON PLATA
                                        </TituloProducto>
                                        <BotonVerMas to='producto/ron-plata'>VER MÁS</BotonVerMas>
                                    </ContenedorProductosContenido>
                                </SwiperSlide>

                                
                        </Swiper>
                    </WrapperProductos>
                   
                </ContenedorProductos>
                
            </ContenedorProductosPagina>
    </>
    )
}

export default Productos
