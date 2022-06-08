import React, { useState } from 'react'
import './styles.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { useMediaQuery } from 'react-responsive'

//Ventana Modal Usos Y Recetas
import ModalVideo1 from '../ModalesProductoVista/ModalTraguito'
import ModalVideo2 from '../ModalesProductoVista/ModalTraguitoCana'
import ModalVideo3 from '../ModalesProductoVista/ModalTrguitoSinAzucar'
import ModalVideo4 from '../ModalesProductoVista/ModalCacao'
import ModalVideo5 from '../ModalesProductoVista/ModalCafe'
import ModalVideo6 from '../ModalesProductoVista/ModalCuracao'
import ModalVideo7 from '../ModalesProductoVista/ModalMenta'
import ModalVideo8 from '../ModalesProductoVista/ModalPinaColada'
import ModalVideo9 from '../ModalesProductoVista/ModalWhisky'
import ModalVideo10 from '../ModalesProductoVista/ModalAmaretto'
import ModalVideo11 from '../ModalesProductoVista/ModalTripleSec.js'
import ModalVideo12 from '../ModalesProductoVista/ModalRonOro.js'
import ModalVideo13 from '../ModalesProductoVista/ModalRonPlata.js'

import ModalVideo14 from '../ModalesProductoVista/ModalChirimoya'
import ModalVideo15 from '../ModalesProductoVista/ModalCocadaBelga'
import ModalVideo16 from '../ModalesProductoVista/ModalGoldenNut'
import ModalVideo17 from '../ModalesProductoVista/ModalRompope'

//Descripciones Productos

import TraguitoDesc  from '../DescripcionProducto/TraguitoDesc'
import TraguitoCanaDesc from '../DescripcionProducto/TraguitoCanaDesc'
import AmarettoDesc from '../DescripcionProducto/AmarettoDesc'
import CacaoDesc from '../DescripcionProducto/CacaoDesc'
import CafeDesc from '../DescripcionProducto/CafeDesc'
import MentaDesc from '../DescripcionProducto/MentaDesc'
import CuracaoDesc from '../DescripcionProducto/CuracaoDesc'
import PinaColadaDesc from '../DescripcionProducto/PinaColadaDesc'
import WhiskyDesc from '../DescripcionProducto/WhiskyDesc'
import TripleSecDesc from '../DescripcionProducto/TripleSecDesc'
import RonOroDesc from '../DescripcionProducto/RonOroDesc'
import RonPlataDesc from '../DescripcionProducto/RonPlataDesc'
import TraguitoSinAzucarDesc from '../DescripcionProducto/TraguitoSinAzucarDesc'

import ChirimoyaDesc from '../DescripcionProducto/ChirimoyaDesc'
import RompopeDesc from '../DescripcionProducto/RompopeDesc'
import CocadaBelgaDesc from '../DescripcionProducto/CocadaBelgaDesc'
import GoldenNutDesc from '../DescripcionProducto/GoldenNutDesc';

//Ventana Modal movil descripción

import TraguitoDescModal from '../ModalDescMovil/TraguitoDescModal';
import TraguitoCanaDescModal from '../ModalDescMovil/TraguitoCanaDescModal';
import TraguitoSinAzucarDescModal from '../ModalDescMovil/TraguitoSinAzucarDescModal';
import CacaoDescModal from '../ModalDescMovil/CacaoDescModal'
import CafeDescModal from '../ModalDescMovil/CafeDescModal'
import CuracaoDescModal from '../ModalDescMovil/CuracaoDescModal'
import MentaDescModal from '../ModalDescMovil/MentaDescModal'
import PinaColadaDescModal from '../ModalDescMovil/PinaColadaModal'
import WhiskyDescModal from '../ModalDescMovil/WhiskyDescModal'
import AmarettoDescModal from '../ModalDescMovil/AmarettoDescModal'
import TripleSecDescModal from '../ModalDescMovil/TripleSecDescModal'
import RonOroDescModal from '../ModalDescMovil/RonOroDescModal'
import RonPlataDescModal from '../ModalDescMovil/RonPlataDescModal'

import ChirimoyaDescModal from '../ModalDescMovil/ChirimoyaDescModal'
import CocadaBelgaDescModal from '../ModalDescMovil/CocadaBelgaDescModal'
import GoldenNutDescModal from '../ModalDescMovil/GoldenNutDescModal'
import RompopeDescModal from '../ModalDescMovil/RompopeDescModal'



import SwiperCore, {
    Navigation, History, Pagination
  } from 'swiper';

import NavbarProducts from '../NavbarProducts';
import SidebarProducts from '../SidebarProducts';

import {
    ContenedorProductoPagina,
    ContenedorProducto,
    ContenedorProductoInformacion,
    ContenedorImg,
    ContenedorCajasInformacion,
    ContenedorCajasInformacion2,
    ContenedorTitulos,
    TituloProducto,
    SubtituloProducto,
    DescripcionProducto,
    Comunicatep,
    BotonVerMas,
    ContenedorInfo2,
    VerMasMovil,
    UsosyRecetasMovil,
    IcoAdelante,
    VentanaModalMovil

} from './ProductoElementos';

import BotonSolicitaElProducto from '../BotonSolicitaProducto'

/*Cargando Imágenes */

import Traguito from '../../images/botellasProductoVista/Traguitos.png'
import TraguitoCana from '../../images/botellasProductoVista/Traguitos-Verdes.png'
import TraguitoSinAzucar from '../../images/botellasProductoVista/Traguitos-Azul.png'
import TraguitoTradicional_1 from '../../images/botellasProductoVista/Traguitos-Tradicionales.png' 
import TraguitoTradicional_2 from '../../images/botellasProductoVista/Traguitos-Tradicionales-2.png' 
import Cacao from '../../images/botellasProductoVista/Cacao-2.png'
import Cafe from '../../images/botellasProductoVista/Cafe-2.png'
import Curacao from '../../images/botellasProductoVista/Curacao-2.png'
import Menta from '../../images/botellasProductoVista/Menta-2.png'
import PinaColada from '../../images/botellasProductoVista/Pina-Colada-2.png'
import Whisky from '../../images/botellasProductoVista/Whisky-2.png'
import Amaretto from '../../images/botellasProductoVista/Amaretto-2.png'
import TripleSec from '../../images/botellasProductoVista/Triple-sec-2.png'
import RonOro from '../../images/botellasProductoVista/Rons-Oro.png'
import RonPlata from '../../images/botellasProductoVista/Ron-Plata-2-1.png'

import Chirimoya from '../../images/botellasProductoVista/Chirimoya-2.png'
import CocadaBelga from '../../images/botellasProductoVista/Cocada-Belga-2.png'
import GoldenNut from '../../images/botellasProductoVista/Golden-Nut-2.png'
import Rompope from '../../images/botellasProductoVista/Rompope-2.png'

import backgroundDesktop_1 from '../../images/botellasProductoVista/Background_Producto.jpg'
import backgroundDesktop_2 from '../../images/botellasProductoVista/Background_Producto-2.jpg'
import backgroundDesktop_3 from '../../images/botellasProductoVista/Background_Producto-3.jpg'
import BackgroundMovil from '../../images/botellasProductoVista/Background_Oscuro_Movil_Producto.jpg';

/* TÍTULOS */
import {
    TituloTraguito,
    TituloTraguitoCana,
    TituloTraguitoSinAzucar,
    TituloTraguitoTradicional,
    TituloTraguitoCanaTradicional,
    TituloCacao,
    TituloCafe,
    TituloCuracao,
    TituloMenta,
    TituloPinaColada,
    TituloWhisky,
    TituloAmaretto,
    TituloTripleSec,
    TituloRonOro,
    TituloRonPlata,
    TituloChirimoya,
    TituloCocadaBelga,
    TituloGoldenNut,
    TituloRompope

} from './Constantes'


SwiperCore.use([Navigation, History, Pagination]);

const ProductoVista = () => {

    const[showModalMovil1, setShowModalMovil1] = useState(false)
    const[showModalMovil2, setShowModalMovil2] = useState(false)
    const[showModalMovil3, setShowModalMovil3] = useState(false)
    const[showModalMovil4, setShowModalMovil4] = useState(false)
    const[showModalMovil5, setShowModalMovil5] = useState(false)
    const[showModalMovil6, setShowModalMovil6] = useState(false)
    const[showModalMovil7, setShowModalMovil7] = useState(false)
    const[showModalMovil8, setShowModalMovil8] = useState(false)
    const[showModalMovil9, setShowModalMovil9] = useState(false)
    const[showModalMovil10, setShowModalMovil10] = useState(false)
    const[showModalMovil11, setShowModalMovil11] = useState(false)
    const[showModalMovil12, setShowModalMovil12] = useState(false)
    const[showModalMovil13, setShowModalMovil13] = useState(false)
    const[showModalMovil14, setShowModalMovil14] = useState(false)
    const[showModalMovil15, setShowModalMovil15] = useState(false)
    const[showModalMovil16, setShowModalMovil16] = useState(false)
    const[showModalMovil17, setShowModalMovil17] = useState(false)

    const openModalMovil1 = () =>{
        setShowModalMovil1(prev => !prev)
        setShowModalMovil2(false)
        setShowModalMovil3(false)
        setShowModalMovil4(false)
        setShowModalMovil5(false)
        setShowModalMovil6(false)
        setShowModalMovil7(false)
        setShowModalMovil8(false)
        setShowModalMovil9(false)
        setShowModalMovil10(false)
        setShowModalMovil11(false)
        setShowModalMovil12(false)
        setShowModalMovil13(false)
        setShowModalMovil14(false)
        setShowModalMovil15(false)
        setShowModalMovil16(false)
        setShowModalMovil17(false)
    }

    const openModalMovil2 = () =>{
        setShowModalMovil2(prev => !prev)
        setShowModalMovil1(false)
        setShowModalMovil3(false)
        setShowModalMovil4(false)
        setShowModalMovil5(false)
        setShowModalMovil6(false)
        setShowModalMovil7(false)
        setShowModalMovil9(false)
        setShowModalMovil10(false)
        setShowModalMovil11(false)
        setShowModalMovil12(false)
        setShowModalMovil13(false)
        setShowModalMovil14(false)
        setShowModalMovil15(false)
        setShowModalMovil16(false)
        setShowModalMovil17(false)
    }

    const openModalMovil3 = () =>{
        setShowModalMovil3(prev => !prev)
        setShowModalMovil1(false)
        setShowModalMovil2(false)
        setShowModalMovil4(false)
        setShowModalMovil5(false)
        setShowModalMovil6(false)
        setShowModalMovil7(false)
        setShowModalMovil8(false)
        setShowModalMovil9(false)
        setShowModalMovil10(false)
        setShowModalMovil11(false)
        setShowModalMovil12(false)
        setShowModalMovil13(false)
        setShowModalMovil14(false)
        setShowModalMovil15(false)
        setShowModalMovil16(false)
        setShowModalMovil17(false)
    }

    const openModalMovil4 = () =>{
        setShowModalMovil4(prev => !prev)
        setShowModalMovil1(false)
        setShowModalMovil2(false)
        setShowModalMovil3(false)
        setShowModalMovil5(false)
        setShowModalMovil6(false)
        setShowModalMovil7(false)
        setShowModalMovil8(false)
        setShowModalMovil9(false)
        setShowModalMovil10(false)
        setShowModalMovil11(false)
        setShowModalMovil12(false)
        setShowModalMovil13(false)
        setShowModalMovil14(false)
        setShowModalMovil15(false)
        setShowModalMovil16(false)
        setShowModalMovil17(false)
    }

    const openModalMovil5 = () =>{
        setShowModalMovil5(prev => !prev)
        setShowModalMovil1(false)
        setShowModalMovil2(false)
        setShowModalMovil3(false)
        setShowModalMovil4(false)
        setShowModalMovil6(false)
        setShowModalMovil7(false)
        setShowModalMovil8(false)
        setShowModalMovil9(false)
        setShowModalMovil10(false)
        setShowModalMovil11(false)
        setShowModalMovil12(false)
        setShowModalMovil13(false)
        setShowModalMovil14(false)
        setShowModalMovil15(false)
        setShowModalMovil16(false)
        setShowModalMovil17(false)
    }

    const openModalMovil6 = () =>{
        setShowModalMovil6(prev => !prev)
        setShowModalMovil1(false)
        setShowModalMovil2(false)
        setShowModalMovil3(false)
        setShowModalMovil4(false)
        setShowModalMovil5(false)
        setShowModalMovil7(false)
        setShowModalMovil8(false)
        setShowModalMovil9(false)
        setShowModalMovil10(false)
        setShowModalMovil11(false)
        setShowModalMovil12(false)
        setShowModalMovil13(false)
        setShowModalMovil14(false)
        setShowModalMovil15(false)
        setShowModalMovil16(false)
        setShowModalMovil17(false)
    }
    
    const openModalMovil7 = () =>{
        setShowModalMovil7(prev => !prev)
        setShowModalMovil1(false)
        setShowModalMovil2(false)
        setShowModalMovil3(false)
        setShowModalMovil4(false)
        setShowModalMovil5(false)
        setShowModalMovil6(false)
        setShowModalMovil8(false)
        setShowModalMovil9(false)
        setShowModalMovil10(false)
        setShowModalMovil11(false)
        setShowModalMovil12(false)
        setShowModalMovil13(false)
        setShowModalMovil14(false)
        setShowModalMovil15(false)
        setShowModalMovil16(false)
        setShowModalMovil17(false)
    }

    const openModalMovil8 = () =>{
        setShowModalMovil8(prev => !prev)
        setShowModalMovil1(false)
        setShowModalMovil2(false)
        setShowModalMovil3(false)
        setShowModalMovil4(false)
        setShowModalMovil5(false)
        setShowModalMovil6(false)
        setShowModalMovil7(false)
        setShowModalMovil9(false)
        setShowModalMovil10(false)
        setShowModalMovil11(false)
        setShowModalMovil12(false)
        setShowModalMovil13(false)
        setShowModalMovil14(false)
        setShowModalMovil15(false)
        setShowModalMovil16(false)
        setShowModalMovil17(false)
    }

    
    const openModalMovil9 = () =>{
        setShowModalMovil9(prev => !prev)
        setShowModalMovil1(false)
        setShowModalMovil2(false)
        setShowModalMovil3(false)
        setShowModalMovil4(false)
        setShowModalMovil5(false)
        setShowModalMovil6(false)
        setShowModalMovil7(false)
        setShowModalMovil8(false)
        setShowModalMovil10(false)
        setShowModalMovil11(false)
        setShowModalMovil12(false)
        setShowModalMovil13(false)
        setShowModalMovil14(false)
        setShowModalMovil15(false)
        setShowModalMovil16(false)
        setShowModalMovil17(false)
    }

    const openModalMovil10 = () =>{
        setShowModalMovil10(prev => !prev)
        setShowModalMovil1(false)
        setShowModalMovil2(false)
        setShowModalMovil3(false)
        setShowModalMovil4(false)
        setShowModalMovil5(false)
        setShowModalMovil6(false)
        setShowModalMovil7(false)
        setShowModalMovil8(false)
        setShowModalMovil9(false)
        setShowModalMovil11(false)
        setShowModalMovil12(false)
        setShowModalMovil13(false)
        setShowModalMovil14(false)
        setShowModalMovil15(false)
        setShowModalMovil16(false)
        setShowModalMovil17(false)
    }

    const openModalMovil11 = () =>{
        setShowModalMovil11(prev => !prev)
        setShowModalMovil1(false)
        setShowModalMovil2(false)
        setShowModalMovil3(false)
        setShowModalMovil4(false)
        setShowModalMovil5(false)
        setShowModalMovil6(false)
        setShowModalMovil7(false)
        setShowModalMovil8(false)
        setShowModalMovil9(false)
        setShowModalMovil10(false)
        setShowModalMovil12(false)
        setShowModalMovil13(false)
        setShowModalMovil14(false)
        setShowModalMovil15(false)
        setShowModalMovil16(false)
        setShowModalMovil17(false)
    }

    const openModalMovil12 = () =>{
        setShowModalMovil12(prev => !prev)
        setShowModalMovil1(false)
        setShowModalMovil2(false)
        setShowModalMovil3(false)
        setShowModalMovil4(false)
        setShowModalMovil5(false)
        setShowModalMovil6(false)
        setShowModalMovil7(false)
        setShowModalMovil8(false)
        setShowModalMovil9(false)
        setShowModalMovil10(false)
        setShowModalMovil11(false)
        setShowModalMovil13(false)
        setShowModalMovil14(false)
        setShowModalMovil15(false)
        setShowModalMovil16(false)
        setShowModalMovil17(false)
    }

    const openModalMovil13 = () =>{
        setShowModalMovil13(prev => !prev)
        setShowModalMovil1(false)
        setShowModalMovil2(false)
        setShowModalMovil3(false)
        setShowModalMovil4(false)
        setShowModalMovil5(false)
        setShowModalMovil6(false)
        setShowModalMovil7(false)
        setShowModalMovil8(false)
        setShowModalMovil9(false)
        setShowModalMovil10(false)
        setShowModalMovil11(false)
        setShowModalMovil12(false)
        setShowModalMovil14(false)
        setShowModalMovil15(false)
        setShowModalMovil16(false)
        setShowModalMovil17(false)
    }

    const openModalMovil14 = () =>{
        setShowModalMovil14(prev => !prev)
        setShowModalMovil1(false)
        setShowModalMovil2(false)
        setShowModalMovil3(false)
        setShowModalMovil4(false)
        setShowModalMovil5(false)
        setShowModalMovil6(false)
        setShowModalMovil7(false)
        setShowModalMovil8(false)
        setShowModalMovil9(false)
        setShowModalMovil10(false)
        setShowModalMovil11(false)
        setShowModalMovil12(false)
        setShowModalMovil13(false)
        setShowModalMovil15(false)
        setShowModalMovil16(false)
        setShowModalMovil17(false)
    }

    const openModalMovil15 = () =>{
        setShowModalMovil15(prev => !prev)
        setShowModalMovil1(false)
        setShowModalMovil2(false)
        setShowModalMovil3(false)
        setShowModalMovil4(false)
        setShowModalMovil5(false)
        setShowModalMovil6(false)
        setShowModalMovil7(false)
        setShowModalMovil8(false)
        setShowModalMovil9(false)
        setShowModalMovil10(false)
        setShowModalMovil11(false)
        setShowModalMovil12(false)
        setShowModalMovil13(false)
        setShowModalMovil14(false)
        setShowModalMovil16(false)
        setShowModalMovil17(false)
    }

    const openModalMovil16 = () =>{
        setShowModalMovil16(prev => !prev)
        setShowModalMovil1(false)
        setShowModalMovil2(false)
        setShowModalMovil3(false)
        setShowModalMovil4(false)
        setShowModalMovil5(false)
        setShowModalMovil6(false)
        setShowModalMovil7(false)
        setShowModalMovil8(false)
        setShowModalMovil9(false)
        setShowModalMovil10(false)
        setShowModalMovil11(false)
        setShowModalMovil12(false)
        setShowModalMovil13(false)
        setShowModalMovil14(false)
        setShowModalMovil15(false)
        setShowModalMovil17(false)
    }

    const openModalMovil17 = () =>{
        setShowModalMovil17(prev => !prev)
        setShowModalMovil1(false)
        setShowModalMovil2(false)
        setShowModalMovil3(false)
        setShowModalMovil4(false)
        setShowModalMovil5(false)
        setShowModalMovil6(false)
        setShowModalMovil7(false)
        setShowModalMovil8(false)
        setShowModalMovil9(false)
        setShowModalMovil10(false)
        setShowModalMovil11(false)
        setShowModalMovil12(false)
        setShowModalMovil13(false)
        setShowModalMovil14(false)
        setShowModalMovil15(false)
        setShowModalMovil16(false)
    }


    const[showModal1, setShowModal1] = useState(false)
    const[showModal2, setShowModal2] = useState(false)
    const[showModal3, setShowModal3] = useState(false)
    const[showModal4, setShowModal4] = useState(false)
    const[showModal5, setShowModal5] = useState(false)
    const[showModal6, setShowModal6] = useState(false)
    const[showModal7, setShowModal7] = useState(false)
    const[showModal8, setShowModal8] = useState(false)
    const[showModal9, setShowModal9] = useState(false)
    const[showModal10, setShowModal10] = useState(false)
    const[showModal11, setShowModal11] = useState(false)
    const[showModal12, setShowModal12] = useState(false)
    const[showModal13, setShowModal13] = useState(false)
    const[showModal14, setShowModal14] = useState(false)
    const[showModal15, setShowModal15] = useState(false)
    const[showModal16, setShowModal16] = useState(false)
    const[showModal17, setShowModal17] = useState(false)

    const openModal1 = () =>{
      setShowModal1(prev => !prev)
      setShowModal2(false)
      setShowModal3(false)
      setShowModal4(false)
      setShowModal5(false)
      setShowModal6(false)
      setShowModal7(false)
      setShowModal8(false)
      setShowModal9(false)
      setShowModal10(false)
      setShowModal11(false)
      setShowModal12(false) 
      setShowModal13(false)
      setShowModal14(false)
      setShowModal15(false)
      setShowModal16(false) 
      setShowModal17(false) 
    }  

    const openModal2 = () =>{
        setShowModal2(prev => !prev)
        setShowModal1(false)
        setShowModal3(false)
        setShowModal4(false)
        setShowModal5(false)
        setShowModal6(false)
        setShowModal7(false)
        setShowModal8(false)
        setShowModal9(false)
        setShowModal10(false)
        setShowModal11(false)
        setShowModal12(false) 
        setShowModal13(false)
        setShowModal14(false)
        setShowModal15(false)
        setShowModal16(false) 
        setShowModal17(false) 
    }

    const openModal3 = () =>{
        setShowModal3(prev => !prev)
        setShowModal1(false)
        setShowModal2(false)
        setShowModal4(false)
        setShowModal5(false)
        setShowModal6(false)
        setShowModal7(false)
        setShowModal8(false)
        setShowModal9(false)
        setShowModal10(false)
        setShowModal11(false)
        setShowModal12(false) 
        setShowModal13(false)
        setShowModal14(false)
        setShowModal15(false)
        setShowModal16(false) 
        setShowModal17(false) 
    }

    const openModal4 = () =>{
        setShowModal4(prev => !prev)
        setShowModal1(false)
        setShowModal2(false)
        setShowModal3(false)
        setShowModal5(false)
        setShowModal6(false)
        setShowModal7(false)
        setShowModal8(false)
        setShowModal9(false)
        setShowModal10(false)
        setShowModal11(false)
        setShowModal12(false) 
        setShowModal13(false)
        setShowModal14(false)
        setShowModal15(false)
        setShowModal16(false) 
        setShowModal17(false) 
    }

    const openModal5 = () =>{
        setShowModal5(prev => !prev)
        setShowModal1(false)
        setShowModal2(false)
        setShowModal3(false)
        setShowModal4(false)
        setShowModal6(false)
        setShowModal7(false)
        setShowModal8(false)
        setShowModal9(false)
        setShowModal10(false)
        setShowModal11(false)
        setShowModal12(false) 
        setShowModal13(false)
        setShowModal14(false)
        setShowModal15(false)
        setShowModal16(false) 
        setShowModal17(false) 
    }

    const openModal6 = () =>{
        setShowModal6(prev => !prev)
        setShowModal1(false)
        setShowModal2(false)
        setShowModal3(false)
        setShowModal4(false)
        setShowModal5(false)
        setShowModal7(false)
        setShowModal8(false)
        setShowModal9(false)
        setShowModal10(false)
        setShowModal11(false)
        setShowModal12(false) 
        setShowModal13(false)
        setShowModal14(false)
        setShowModal15(false)
        setShowModal16(false) 
        setShowModal17(false) 
    }

    const openModal7 = () =>{
        setShowModal7(prev => !prev)
        setShowModal1(false)
        setShowModal2(false)
        setShowModal3(false)
        setShowModal4(false)
        setShowModal5(false)
        setShowModal6(false)
        setShowModal8(false)
        setShowModal9(false)
        setShowModal10(false)
        setShowModal11(false)
        setShowModal12(false) 
        setShowModal13(false)
        setShowModal14(false)
        setShowModal15(false)
        setShowModal16(false) 
        setShowModal17(false) 
    }

    const openModal8 = () =>{
        setShowModal8(prev => !prev)
        setShowModal1(false)
        setShowModal2(false)
        setShowModal3(false)
        setShowModal4(false)
        setShowModal5(false)
        setShowModal6(false)
        setShowModal7(false)
        setShowModal9(false)
        setShowModal10(false)
        setShowModal11(false)
        setShowModal12(false) 
        setShowModal13(false)
        setShowModal14(false)
        setShowModal15(false)
        setShowModal16(false) 
        setShowModal17(false) 
    }

    const openModal9 = () =>{
        setShowModal9(prev => !prev)
        setShowModal1(false)
        setShowModal2(false)
        setShowModal3(false)
        setShowModal4(false)
        setShowModal5(false)
        setShowModal6(false)
        setShowModal7(false)
        setShowModal8(false)
        setShowModal10(false)
        setShowModal11(false)
        setShowModal12(false) 
        setShowModal13(false)
        setShowModal14(false)
        setShowModal15(false)
        setShowModal16(false) 
        setShowModal17(false) 
    }

    const openModal10 = () =>{
        setShowModal10(prev => !prev)
        setShowModal1(false)
        setShowModal2(false)
        setShowModal3(false)
        setShowModal4(false)
        setShowModal5(false)
        setShowModal6(false)
        setShowModal7(false)
        setShowModal8(false)
        setShowModal9(false)
        setShowModal11(false)
        setShowModal12(false)
        setShowModal13(false)
        setShowModal14(false)
        setShowModal15(false)
        setShowModal16(false) 
        setShowModal17(false) 
    }

    const openModal11 = () =>{
        setShowModal11(prev => !prev)
        setShowModal1(false)
        setShowModal2(false)
        setShowModal3(false)
        setShowModal4(false)
        setShowModal5(false)
        setShowModal6(false)
        setShowModal7(false)
        setShowModal8(false)
        setShowModal9(false)
        setShowModal10(false)
        setShowModal12(false)
        setShowModal13(false)
        setShowModal14(false)
        setShowModal15(false)
        setShowModal16(false) 
        setShowModal17(false) 
    }

    const openModal12 = () =>{
        setShowModal12(prev => !prev)
        setShowModal1(false)
        setShowModal2(false)
        setShowModal3(false)
        setShowModal4(false)
        setShowModal5(false)
        setShowModal6(false)
        setShowModal7(false)
        setShowModal8(false)
        setShowModal9(false)
        setShowModal10(false)
        setShowModal11(false)
        setShowModal13(false) 
        setShowModal14(false)
        setShowModal15(false)
        setShowModal16(false) 
        setShowModal17(false) 
    }

    const openModal13 = () =>{
        setShowModal13(prev => !prev)
        setShowModal1(false)
        setShowModal2(false)
        setShowModal3(false)
        setShowModal4(false)
        setShowModal5(false)
        setShowModal6(false)
        setShowModal7(false)
        setShowModal8(false)
        setShowModal9(false)
        setShowModal10(false)
        setShowModal11(false) 
        setShowModal12(false) 
        setShowModal14(false)
        setShowModal15(false)
        setShowModal16(false) 
        setShowModal17(false) 
    }

    const openModal14 = () =>{
        setShowModal14(prev => !prev)
        setShowModal1(false)
        setShowModal2(false)
        setShowModal3(false)
        setShowModal4(false)
        setShowModal5(false)
        setShowModal6(false)
        setShowModal7(false)
        setShowModal8(false)
        setShowModal9(false)
        setShowModal10(false)
        setShowModal11(false) 
        setShowModal12(false) 
        setShowModal13(false) 
        setShowModal15(false)
        setShowModal16(false) 
        setShowModal17(false) 
    }

    const openModal15 = () =>{
        setShowModal15(prev => !prev)
        setShowModal1(false)
        setShowModal2(false)
        setShowModal3(false)
        setShowModal4(false)
        setShowModal5(false)
        setShowModal6(false)
        setShowModal7(false)
        setShowModal8(false)
        setShowModal9(false)
        setShowModal10(false)
        setShowModal11(false) 
        setShowModal12(false) 
        setShowModal13(false) 
        setShowModal14(false) 
        setShowModal16(false) 
        setShowModal17(false) 
    }

    const openModal16 = () =>{
        setShowModal16(prev => !prev)
        setShowModal1(false)
        setShowModal2(false)
        setShowModal3(false)
        setShowModal4(false)
        setShowModal5(false)
        setShowModal6(false)
        setShowModal7(false)
        setShowModal8(false)
        setShowModal9(false)
        setShowModal10(false)
        setShowModal11(false) 
        setShowModal12(false) 
        setShowModal13(false) 
        setShowModal14(false) 
        setShowModal15(false) 
        setShowModal17(false) 
    }

    const openModal17 = () =>{
        setShowModal17(prev => !prev)
        setShowModal1(false)
        setShowModal2(false)
        setShowModal3(false)
        setShowModal4(false)
        setShowModal5(false)
        setShowModal6(false)
        setShowModal7(false)
        setShowModal8(false)
        setShowModal9(false)
        setShowModal10(false)
        setShowModal11(false) 
        setShowModal12(false) 
        setShowModal13(false) 
        setShowModal14(false) 
        setShowModal15(false)
        setShowModal16(false)
    }

    const isDesktopOrLaptop = useMediaQuery(
        { minDeviceWidth: 960 }
     )
    
    const isMovilTablet = useMediaQuery(
        {  maxDeviceWidth: 959 },
    ) 

    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <NavbarProducts toggle={toggle}/>
            <SidebarProducts isOpen={isOpen} toggle={toggle}/>
            <ContenedorProductoPagina  >
               
                <Swiper id="SlideProducto"
                    navigation={true} 
                    loop={true}
                    history={{
                        key: "producto"
                    }}
                    pagination={{
                    type: "fraction"
                }}
                >
                    <SwiperSlide data-history="traguito">
                        <ContenedorProducto backgroundDesktop2={backgroundDesktop_3}>
                            <ContenedorProductoInformacion>
                                <ContenedorTitulos>
                                    <TituloProducto colorTitulo={'#FCC013'}>{TituloTraguito}</TituloProducto>
                                    <SubtituloProducto>AGUARDIENTE DE CAÑA</SubtituloProducto>
                                </ContenedorTitulos>                    
                                <DescripcionProducto>
                                    <TraguitoDesc/>
                                </DescripcionProducto>
                                <ContenedorCajasInformacion>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 30% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc / 375 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                        <p>Caja de 24 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion>
                                <Comunicatep>
                                    Comunícate via Whatsapp o por E-mail con uno de nuestros asesores de venta.
                                </Comunicatep>
                                <BotonSolicitaElProducto/>
                            </ContenedorProductoInformacion>

                            <ContenedorInfo2>
                                <h2>{TituloTraguito}</h2>
                                <h3>AGUARDIENTE DE CAÑA</h3>
                                <ContenedorCajasInformacion2>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 30% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc / 375 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                        <p>Caja de 24 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion2>
                                <BotonSolicitaElProducto/>
                                <VerMasMovil onClick={openModalMovil1}>
                                    DESCRIPCIÓN <IcoAdelante/>
                                </VerMasMovil>
                                <UsosyRecetasMovil onClick={openModal1}>
                                    USOS Y RECETAS <IcoAdelante/>
                                </UsosyRecetasMovil>
                                
                            </ContenedorInfo2> 

                            <TraguitoDescModal showModalMovil1={showModalMovil1} setShowModalMovil1={setShowModalMovil1}/>

                            { isDesktopOrLaptop &&
                            <ContenedorImg src={Traguito}/>
                            }   
                            {
                             isMovilTablet &&
                             <ContenedorImg style={{width:'40vh'}} src={Traguito}/>
                            }    
                            
                            <BotonVerMas onClick={openModal1}>
                                <a>DESCUBRE LOS USOS Y RECETAS DEL<span> TRAGUITO</span></a>
                            </BotonVerMas>
                            <ModalVideo1 showModal1={showModal1} setShowModal1={setShowModal1}/>
                            
                        </ContenedorProducto>
                        
                    </SwiperSlide>
                    
                    <SwiperSlide data-history="traguito-cana">
                        <ContenedorProducto backgroundDesktop2={backgroundDesktop_3}>
                            <ContenedorProductoInformacion>
                                <ContenedorTitulos>
                                    <TituloProducto colorTitulo={'#1F9007'}>{TituloTraguitoCana}</TituloProducto>
                                    <SubtituloProducto>AGUARDIENTE DE CAÑA</SubtituloProducto>
                                </ContenedorTitulos>                    
                                <DescripcionProducto>
                                    <TraguitoCanaDesc/>
                                </DescripcionProducto>
                                <ContenedorCajasInformacion>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 30% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc / 375 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                        <p>Caja de 24 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion>
                                <Comunicatep>
                                    Comunícate via Whatsapp o por E-mail con uno de nuestros asesores de venta.
                                </Comunicatep>
                                <BotonSolicitaElProducto/>
                            </ContenedorProductoInformacion>

                            <ContenedorInfo2>
                                <h2 style={{color:"#1F9007"}}>{TituloTraguitoCana}</h2>
                                <h3>AGUARDIENTE DE CAÑA</h3>
                                <ContenedorCajasInformacion2>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 30% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc / 375 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                        <p>Caja de 24 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion2>
                                <BotonSolicitaElProducto/>
                                <VerMasMovil onClick={openModalMovil2}>DESCRIPCIÓN <IcoAdelante/></VerMasMovil>
                                <UsosyRecetasMovil onClick={openModal2}>
                                    USOS Y RECETAS <IcoAdelante/>
                                </UsosyRecetasMovil>
                            </ContenedorInfo2> 

                            <TraguitoCanaDescModal showModalMovil2={showModalMovil2} setShowModalMovil2={setShowModalMovil2}/>
                            
                            { isDesktopOrLaptop &&
                                <ContenedorImg src={TraguitoCana}/>
                            }   
                            { isMovilTablet &&
                                <ContenedorImg style={{width:'40vh'}} src={TraguitoCana}/>
                            }
                            <BotonVerMas onClick={openModal2}>
                                <a>DESCUBRE LOS USOS Y RECETAS DEL<span> TRAGUITO CAÑA</span></a>
                            </BotonVerMas>
                            <ModalVideo2 showModal2={showModal2} setShowModal2={setShowModal2}/>
                            
                        </ContenedorProducto>
                        
                    </SwiperSlide>

                    <SwiperSlide data-history="traguito-sin-azucar">
                       
                        <ContenedorProducto backgroundDesktop2={backgroundDesktop_3}>
                            <ContenedorProductoInformacion>
                                <ContenedorTitulos>
                                    <TituloProducto colorTitulo={'#006BCA'}>{TituloTraguitoSinAzucar}</TituloProducto>
                                    <SubtituloProducto>AGUARDIENTE DE CAÑA</SubtituloProducto>
                                </ContenedorTitulos>                    
                                <DescripcionProducto>
                                    <TraguitoSinAzucarDesc/>
                                </DescripcionProducto>
                                <ContenedorCajasInformacion>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 30% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc / 375 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                        <p>Caja de 24 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion>
                                <Comunicatep>
                                    Comunícate via Whatsapp o por E-mail con uno de nuestros asesores de venta.
                                </Comunicatep>
                                <BotonSolicitaElProducto/>
                                
                            </ContenedorProductoInformacion>

                            <ContenedorInfo2>
                                <h2 style={{color:"#006bca"}}>{TituloTraguitoSinAzucar}</h2>
                                <h3>AGUARDIENTE DE CAÑA</h3>
                                <ContenedorCajasInformacion2>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 30% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                        <p>750 cc / 375 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                        <p>Caja de 24 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion2>
                                <BotonSolicitaElProducto/>
                                <VerMasMovil onClick={openModalMovil3}>DESCRIPCIÓN <IcoAdelante/></VerMasMovil>
                                <UsosyRecetasMovil onClick={openModal3}>
                                    USOS Y RECETAS <IcoAdelante/>
                                </UsosyRecetasMovil>
                            </ContenedorInfo2> 

                            <TraguitoSinAzucarDescModal showModalMovil3={showModalMovil3} setShowModalMovil3={setShowModalMovil3}/>
                            { isDesktopOrLaptop &&
                            <ContenedorImg src={TraguitoSinAzucar}/>
                            }
                            {
                               isMovilTablet && 
                               <ContenedorImg style={{width:'40vh'}} src={TraguitoSinAzucar}/>
                            }   
                            <BotonVerMas onClick={openModal3}>
                                <a>DESCUBRE LOS USOS Y RECETAS DEL<span> TRAGUITO SIN AZUCAR</span></a>
                            </BotonVerMas>
                            <ModalVideo3 showModal3={showModal3} setShowModal3={setShowModal3}/>
                            
                        </ContenedorProducto>
                        
                    </SwiperSlide>

                    <SwiperSlide data-history="tradicional-1">
                       
                        <ContenedorProducto backgroundDesktop2={backgroundDesktop_3}>
                            <ContenedorProductoInformacion>
                                <ContenedorTitulos>
                                    <TituloProducto colorTitulo={'#FCC013'}>{TituloTraguitoTradicional}</TituloProducto>
                                    <SubtituloProducto>AGUARDIENTE DE CAÑA</SubtituloProducto>
                                </ContenedorTitulos>                    
                                <DescripcionProducto>
                                    <TraguitoDesc/>
                                </DescripcionProducto>
                                <ContenedorCajasInformacion>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 35% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc / 375 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                        <p>Caja de 24 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion>
                                <Comunicatep>
                                    Comunícate via Whatsapp o por E-mail con uno de nuestros asesores de venta.
                                </Comunicatep>
                                <BotonSolicitaElProducto/>
                            </ContenedorProductoInformacion>

                            <ContenedorInfo2>
                                <h2>{TituloTraguitoTradicional}</h2>
                                <h3>AGUARDIENTE DE CAÑA</h3>
                                <ContenedorCajasInformacion2>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 35% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc / 375 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                        <p>Caja de 24 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion2>
                                <BotonSolicitaElProducto/>
                            </ContenedorInfo2>
                                { isDesktopOrLaptop &&
                                <ContenedorImg src={TraguitoTradicional_1}/>  
                                }   
                                {
                                isMovilTablet &&
                                <ContenedorImg style={{width:'40vh'}} src={TraguitoTradicional_1}/>  
                                }                   
                        </ContenedorProducto>
                        
                    </SwiperSlide>

                    <SwiperSlide data-history="tradicional-2">
                       
                        <ContenedorProducto backgroundDesktop2={backgroundDesktop_3}>
                            <ContenedorProductoInformacion>
                                <ContenedorTitulos> 
                                    <TituloProducto colorTitulo={'#1F9007'}>{TituloTraguitoCanaTradicional}</TituloProducto>
                                    <SubtituloProducto>AGUARDIENTE DE CAÑA</SubtituloProducto>
                                </ContenedorTitulos>                  
                                <DescripcionProducto>
                                    <TraguitoCanaDesc/>
                                </DescripcionProducto>
                                <ContenedorCajasInformacion>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 35% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc / 375 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                        <p>Caja de 24 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion>
                                <Comunicatep>
                                    Comunícate via Whatsapp o por E-mail con uno de nuestros asesores de venta.
                                </Comunicatep>
                                <BotonSolicitaElProducto/>                 
                            </ContenedorProductoInformacion>

                            <ContenedorInfo2>
                                <h2 style={{color:"#1F9007"}}>{TituloTraguitoCanaTradicional}</h2>
                                <h3>AGUARDIENTE DE CAÑA</h3>
                                <ContenedorCajasInformacion2>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 35% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc / 375 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                        <p>Caja de 24 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion2>
                                <BotonSolicitaElProducto/>
                            </ContenedorInfo2> 
                                { isDesktopOrLaptop &&
                                <ContenedorImg src={TraguitoTradicional_2}/>  
                                }   
                                {
                                isMovilTablet &&
                                <ContenedorImg style={{width:'40vh'}} src={TraguitoTradicional_2}/>  
                                }                        
                        </ContenedorProducto>
                        
                    </SwiperSlide>

                    <SwiperSlide data-history="cacao">
                        <ContenedorProducto backgroundDesktop2={backgroundDesktop_1}>
                            <ContenedorProductoInformacion>
                                <ContenedorTitulos>
                                    <TituloProducto colorTitulo={'#D23200'}>{TituloCacao}</TituloProducto>
                                    <SubtituloProducto>LICOR DULCE SABOR A CACAO</SubtituloProducto>
                                </ContenedorTitulos>                    
                                <DescripcionProducto>
                                    <CacaoDesc/>
                                </DescripcionProducto>
                                <ContenedorCajasInformacion>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 26% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion>
                                <Comunicatep>
                                    Comunícate via Whatsapp o por E-mail con uno de nuestros asesores de venta.
                                </Comunicatep>
                                <BotonSolicitaElProducto/>
                            </ContenedorProductoInformacion>
                            <ContenedorInfo2>
                                <h2 style={{color:"#D23200"}}>{TituloCacao}</h2>
                                <h3>LICOR DULCE SABOR A CACAO</h3>
                                <ContenedorCajasInformacion2>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 26% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion2>
                                <BotonSolicitaElProducto/>
                                <VerMasMovil onClick={openModalMovil4}>DESCRIPCIÓN <IcoAdelante/></VerMasMovil>
                                <UsosyRecetasMovil onClick={openModal4}>
                                    USOS Y RECETAS <IcoAdelante/>
                                </UsosyRecetasMovil>
                            </ContenedorInfo2> 
                            
                            <CacaoDescModal showModalMovil4={showModalMovil4} setShowModalMovil4={setShowModalMovil4}/>

                            <ContenedorImg src={Cacao}/>

                            <BotonVerMas onClick={openModal4}>
                                <a>DESCUBRE LOS USOS Y RECETAS DEL<span> CACAO COLD'S</span></a>
                            </BotonVerMas>
                            <ModalVideo4 showModal4={showModal4} setShowModal4={setShowModal4}/>

                        </ContenedorProducto>
                    </SwiperSlide>

                    <SwiperSlide data-history="cafe">
                        <ContenedorProducto backgroundDesktop2={backgroundDesktop_1}>
                            <ContenedorProductoInformacion>
                                <ContenedorTitulos>
                                    <TituloProducto colorTitulo={'#FC7513'}>{TituloCafe}</TituloProducto>
                                    <SubtituloProducto>LICOR DULCE SABOR A CAFÉ</SubtituloProducto>
                                </ContenedorTitulos>                    
                                <DescripcionProducto>
                                    <CafeDesc/>
                                </DescripcionProducto>
                                <ContenedorCajasInformacion>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 24% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion>
                                <Comunicatep>
                                    Comunícate via Whatsapp o por E-mail con uno de nuestros asesores de venta.
                                </Comunicatep>
                                <BotonSolicitaElProducto/>
                            </ContenedorProductoInformacion>
                            <ContenedorInfo2>
                                <h2 style={{color:"#FC7513"}}>{TituloCafe}</h2>
                                <h3>LICOR DULCE SABOR A CAFÉ</h3>
                                <ContenedorCajasInformacion2>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 24% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion2>
                                <BotonSolicitaElProducto/>
                                <VerMasMovil onClick={openModalMovil5}>DESCRIPCIÓN <IcoAdelante/></VerMasMovil>
                                <UsosyRecetasMovil onClick={openModal5}>
                                    USOS Y RECETAS <IcoAdelante/>
                                </UsosyRecetasMovil>
                            </ContenedorInfo2>

                            <CafeDescModal showModalMovil5={showModalMovil5} setShowModalMovil5={setShowModalMovil5}/>

                            <ContenedorImg src={Cafe}/>

                            <BotonVerMas onClick={openModal5}>
                                <a>DESCUBRE LOS USOS Y RECETAS DEL<span> CAFÉ COLD'S</span></a>
                            </BotonVerMas>
                            <ModalVideo5 showModal5={showModal5} setShowModal5={setShowModal5}/>

                        </ContenedorProducto>
                    </SwiperSlide>

                    <SwiperSlide data-history="curacao">
                        <ContenedorProducto backgroundDesktop2={backgroundDesktop_1}>
                            <ContenedorProductoInformacion>
                                <ContenedorTitulos>
                                    <TituloProducto colorTitulo={'#1C94B6'}>{TituloCuracao}</TituloProducto>
                                    <SubtituloProducto>LICOR DULCE SABOR A NARANJA</SubtituloProducto>
                                </ContenedorTitulos>                    
                                <DescripcionProducto>
                                    <CuracaoDesc/>
                                </DescripcionProducto>
                                <ContenedorCajasInformacion>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 24% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion>
                                <Comunicatep>
                                    Comunícate via Whatsapp o por E-mail con uno de nuestros asesores de venta.
                                </Comunicatep>
                                <BotonSolicitaElProducto/>
                            </ContenedorProductoInformacion>
                            <ContenedorInfo2>
                                <h2 style={{color:"#1C94B6"}}>{TituloCuracao}</h2>
                                <h3>LICOR DULCE SABOR A NARANJA</h3>
                                <ContenedorCajasInformacion2>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 24% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion2>
                                <BotonSolicitaElProducto/>
                                <VerMasMovil onClick={openModalMovil6}>DESCRIPCIÓN <IcoAdelante/></VerMasMovil>
                                <UsosyRecetasMovil onClick={openModal6}>
                                    USOS Y RECETAS <IcoAdelante/>
                                </UsosyRecetasMovil>
                            </ContenedorInfo2>

                            <CuracaoDescModal showModalMovil6={showModalMovil6} setShowModalMovil6={setShowModalMovil6}/>

                            <ContenedorImg src={Curacao}/>

                            <BotonVerMas onClick={openModal6}>
                                <a>DESCUBRE LOS USOS Y RECETAS DEL<span> CURACAO COLD'S</span></a>
                            </BotonVerMas>
                            <ModalVideo6 showModal6={showModal6} setShowModal6={setShowModal6}/>

                        </ContenedorProducto>
                    </SwiperSlide>

                    <SwiperSlide data-history="menta">
                        <ContenedorProducto backgroundDesktop2={backgroundDesktop_1}>
                            <ContenedorProductoInformacion>
                                <ContenedorTitulos>
                                    <TituloProducto colorTitulo={'#1CBC22'}>{TituloMenta}</TituloProducto>
                                    <SubtituloProducto>LICOR DULCE SABOR A MENTA</SubtituloProducto>
                                </ContenedorTitulos>                    
                                <DescripcionProducto>
                                    <MentaDesc/>
                                </DescripcionProducto>
                                <ContenedorCajasInformacion>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 28% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion>
                                <Comunicatep>
                                    Comunícate via Whatsapp o por E-mail con uno de nuestros asesores de venta.
                                </Comunicatep>
                                <BotonSolicitaElProducto/>
                            </ContenedorProductoInformacion>
                            <ContenedorInfo2>
                                <h2 style={{color:"#1CBC22"}}>{TituloMenta}</h2>
                                <h3>LICOR DULCE SABOR A MENTA</h3>
                                <ContenedorCajasInformacion2>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 28% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion2>
                                <BotonSolicitaElProducto/>
                                <VerMasMovil onClick={openModalMovil7}>DESCRIPCIÓN <IcoAdelante/></VerMasMovil>
                                <UsosyRecetasMovil onClick={openModal7}>
                                    USOS Y RECETAS <IcoAdelante/>
                                </UsosyRecetasMovil>
                            </ContenedorInfo2>

                            <MentaDescModal showModalMovil7={showModalMovil7} setShowModalMovil7={setShowModalMovil7}/>

                            <ContenedorImg src={Menta}/>

                            <BotonVerMas onClick={openModal7}>
                                <a>DESCUBRE LOS USOS Y RECETAS DEL<span> MENTA COLD'S</span></a>
                            </BotonVerMas>
                            <ModalVideo7 showModal7={showModal7} setShowModal7={setShowModal7}/>

                        </ContenedorProducto>
                    </SwiperSlide>

                    <SwiperSlide data-history="pina-colada">
                        <ContenedorProducto backgroundDesktop2={backgroundDesktop_1}>
                            <ContenedorProductoInformacion>
                                <ContenedorTitulos>
                                    <TituloProducto colorTitulo={'#FFF4CB'}>{TituloPinaColada}</TituloProducto>
                                    <SubtituloProducto>PIÑA COLADA</SubtituloProducto>
                                </ContenedorTitulos>                    
                                <DescripcionProducto>
                                    <PinaColadaDesc/>
                                </DescripcionProducto>
                                <ContenedorCajasInformacion>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 15% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion>
                                <Comunicatep>
                                    Comunícate via Whatsapp o por E-mail con uno de nuestros asesores de venta.
                                </Comunicatep>
                                <BotonSolicitaElProducto/>
                            </ContenedorProductoInformacion>
                            <ContenedorInfo2>
                                <h2 style={{color:"#FFF4CB"}}>{TituloPinaColada}</h2>
                                <h3>PIÑA COLADA</h3>
                                <ContenedorCajasInformacion2>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 15% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion2>
                                <BotonSolicitaElProducto/>
                                <VerMasMovil onClick={openModalMovil8}>DESCRIPCIÓN <IcoAdelante/></VerMasMovil>
                                <UsosyRecetasMovil onClick={openModal8}>
                                    USOS Y RECETAS <IcoAdelante/>
                                </UsosyRecetasMovil>
                            </ContenedorInfo2>

                            <PinaColadaDescModal showModalMovil8={showModalMovil8} setShowModalMovil8={setShowModalMovil8}/>

                            <ContenedorImg src={PinaColada}/>

                            <BotonVerMas onClick={openModal8}>
                                <a>DESCUBRE LOS USOS Y RECETAS DEL<span> PIÑA COLADA COLD'S</span></a>
                            </BotonVerMas>
                            <ModalVideo8 showModal8={showModal8} setShowModal8={setShowModal8}/>

                        </ContenedorProducto>
                    </SwiperSlide>

                    <SwiperSlide data-history="whisky">
                        <ContenedorProducto backgroundDesktop2={backgroundDesktop_1}>
                            <ContenedorProductoInformacion>
                                <ContenedorTitulos>
                                    <TituloProducto colorTitulo={'#B7992F'}>{TituloWhisky}</TituloProducto>
                                    <SubtituloProducto>LICOR DULCE SABOR A WHISKY</SubtituloProducto>
                                </ContenedorTitulos>                    
                                <DescripcionProducto>
                                    <WhiskyDesc/>
                                </DescripcionProducto>
                                <ContenedorCajasInformacion>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 17% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion>
                                <Comunicatep>
                                    Comunícate via Whatsapp o por E-mail con uno de nuestros asesores de venta.
                                </Comunicatep>
                                <BotonSolicitaElProducto/>
                            </ContenedorProductoInformacion>
                            <ContenedorInfo2>
                                <h2 style={{color:'#B7992F'}}>{TituloWhisky}</h2>
                                <h3>LICOR DULCE SABOR A WHISKY</h3>
                                <ContenedorCajasInformacion2>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 17% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion2>
                                <BotonSolicitaElProducto/>
                                <VerMasMovil onClick={openModalMovil9}>DESCRIPCIÓN <IcoAdelante/></VerMasMovil>
                                <UsosyRecetasMovil onClick={openModal9}>
                                    USOS Y RECETAS <IcoAdelante/>
                                </UsosyRecetasMovil>
                            </ContenedorInfo2>

                            <WhiskyDescModal showModalMovil9={showModalMovil9} setShowModalMovil9={setShowModalMovil9}/>

                            <ContenedorImg src={Whisky}/>

                            <BotonVerMas onClick={openModal9}>
                                <a>DESCUBRE LOS USOS Y RECETAS DEL<span> WHISKY COLD'S</span></a>
                            </BotonVerMas>
                            <ModalVideo9 showModal9={showModal9} setShowModal9={setShowModal9}/>

                        </ContenedorProducto>
                    </SwiperSlide>

                    <SwiperSlide data-history="amaretto">
                        <ContenedorProducto backgroundDesktop2={backgroundDesktop_1}>
                            <ContenedorProductoInformacion>
                                <ContenedorTitulos>
                                    <TituloProducto colorTitulo={'#BD011C'}>{TituloAmaretto}</TituloProducto>
                                    <SubtituloProducto>LICOR DE ALMENDRAS</SubtituloProducto>
                                </ContenedorTitulos>                    
                                <DescripcionProducto>
                                    <AmarettoDesc/>
                                </DescripcionProducto>
                                <ContenedorCajasInformacion>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 26% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion>
                                <Comunicatep>
                                    Comunícate via Whatsapp o por E-mail con uno de nuestros asesores de venta.
                                </Comunicatep>
                                <BotonSolicitaElProducto/>
                            </ContenedorProductoInformacion>
                            <ContenedorInfo2>
                                <h2 style={{color:'#BD011C'}}>{TituloAmaretto}</h2>
                                <h3>LICOR DE ALMENDRAS</h3>
                                <ContenedorCajasInformacion2>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 26% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion2>
                                <BotonSolicitaElProducto/>
                                <VerMasMovil onClick={openModalMovil10}>DESCRIPCIÓN <IcoAdelante/></VerMasMovil>
                                <UsosyRecetasMovil onClick={openModal10}>
                                    USOS Y RECETAS <IcoAdelante/>
                                </UsosyRecetasMovil>
                            </ContenedorInfo2>

                            <AmarettoDescModal showModalMovil10={showModalMovil10} setShowModalMovil10={setShowModalMovil10}/>

                            <ContenedorImg src={Amaretto}/>

                            <BotonVerMas onClick={openModal10}>
                                <a>DESCUBRE LOS USOS Y RECETAS DEL<span> AMARETTO COLD'S</span></a>
                            </BotonVerMas>
                            <ModalVideo10 showModal10={showModal10} setShowModal10={setShowModal10}/>

                        </ContenedorProducto>
                    </SwiperSlide>

                    <SwiperSlide data-history="triple-sec">
                        <ContenedorProducto backgroundDesktop2={backgroundDesktop_1}>
                            <ContenedorProductoInformacion>
                                <ContenedorTitulos>
                                    <TituloProducto colorTitulo={'#DDB23F'}>{TituloTripleSec}</TituloProducto>
                                    <SubtituloProducto>LICOR DULCE SABOR A NARANJA</SubtituloProducto>
                                </ContenedorTitulos>                    
                                <DescripcionProducto>
                                   <TripleSecDesc/>
                                </DescripcionProducto>
                                <ContenedorCajasInformacion> 
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 35% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion>
                                <Comunicatep>
                                    Comunícate via Whatsapp o por E-mail con uno de nuestros asesores de venta.
                                </Comunicatep>
                                <BotonSolicitaElProducto/>
                            </ContenedorProductoInformacion>
                            <ContenedorInfo2>
                                <h2 style={{color:'#DDB23F'}}>{TituloTripleSec}</h2>
                                <h3>LICOR DULCE SABOR A NARANJA</h3>
                                <ContenedorCajasInformacion2>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 35% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion2>
                                <BotonSolicitaElProducto/>
                                <VerMasMovil onClick={openModalMovil11}>DESCRIPCIÓN <IcoAdelante/></VerMasMovil>
                                <UsosyRecetasMovil onClick={openModal11}>
                                    USOS Y RECETAS <IcoAdelante/>
                                </UsosyRecetasMovil>
                            </ContenedorInfo2>

                            <TripleSecDescModal showModalMovil11={showModalMovil11} setShowModalMovil11={setShowModalMovil11}/>

                            <ContenedorImg src={TripleSec}/>

                            <BotonVerMas onClick={openModal11}>
                                <a>DESCUBRE LOS USOS Y RECETAS DEL<span> TRIPLE SEC COLD'S</span></a>
                            </BotonVerMas>
                            <ModalVideo11 showModal11={showModal11} setShowModal11={setShowModal11}/>
                        </ContenedorProducto>
                    </SwiperSlide>

                    <SwiperSlide data-history="chirimoya">
                        <ContenedorProducto backgroundDesktop2={backgroundDesktop_1}>
                            <ContenedorProductoInformacion>
                                <ContenedorTitulos>
                                    <TituloProducto colorTitulo={'#B3D11B'}>{TituloChirimoya}</TituloProducto>
                                    <SubtituloProducto>-</SubtituloProducto>
                                </ContenedorTitulos>                    
                                <DescripcionProducto>
                                   <ChirimoyaDesc/>
                                </DescripcionProducto>
                                <ContenedorCajasInformacion> 
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 15% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion>
                                <Comunicatep>
                                    Comunícate via Whatsapp o por E-mail con uno de nuestros asesores de venta.
                                </Comunicatep>
                                <BotonSolicitaElProducto/>
                            </ContenedorProductoInformacion>
                            <ContenedorInfo2>
                                <h2 style={{color:'#B3D11B'}}>{TituloChirimoya}</h2>
                                <h3>-</h3>
                                <ContenedorCajasInformacion2>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 15% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion2>
                                <BotonSolicitaElProducto/>
                                <VerMasMovil onClick={openModalMovil14}>DESCRIPCIÓN <IcoAdelante/></VerMasMovil>
                                <UsosyRecetasMovil onClick={openModal14}>
                                    USOS Y RECETAS <IcoAdelante/>
                                </UsosyRecetasMovil>
                            </ContenedorInfo2>

                            <ChirimoyaDescModal showModalMovil14={showModalMovil14} setShowModalMovil14={setShowModalMovil14}/>

                            <ContenedorImg src={Chirimoya}/>

                            <BotonVerMas onClick={openModal14}>
                                <a>DESCUBRE LOS USOS Y RECETAS DEL<span> CHIRIMOYA COLD'S</span></a>
                            </BotonVerMas>
                            <ModalVideo14 showModal14={showModal14} setShowModal14={setShowModal14}/>
                        </ContenedorProducto>
                    </SwiperSlide>

                    <SwiperSlide data-history="cocada-belga">
                        <ContenedorProducto backgroundDesktop2={backgroundDesktop_1}>
                            <ContenedorProductoInformacion>
                                <ContenedorTitulos>
                                    <TituloProducto colorTitulo={'#D555A2'}>{TituloCocadaBelga}</TituloProducto>
                                    <SubtituloProducto>-</SubtituloProducto>
                                </ContenedorTitulos>                    
                                <DescripcionProducto>
                                   <CocadaBelgaDesc/>
                                </DescripcionProducto>
                                <ContenedorCajasInformacion> 
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 15% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion>
                                <Comunicatep>
                                    Comunícate via Whatsapp o por E-mail con uno de nuestros asesores de venta.
                                </Comunicatep>
                                <BotonSolicitaElProducto/>
                            </ContenedorProductoInformacion>
                            <ContenedorInfo2>
                                <h2 style={{color:'#D555A2'}}>{TituloCocadaBelga}</h2>
                                <h3>-</h3>
                                <ContenedorCajasInformacion2>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 15% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion2>
                                <BotonSolicitaElProducto/>
                                <VerMasMovil onClick={openModalMovil15}>DESCRIPCIÓN <IcoAdelante/></VerMasMovil>
                                <UsosyRecetasMovil onClick={openModal15}>
                                    USOS Y RECETAS <IcoAdelante/>
                                </UsosyRecetasMovil>
                            </ContenedorInfo2>

                            <CocadaBelgaDescModal showModalMovil15={showModalMovil15} setShowModalMovil15={setShowModalMovil15}/>

                            <ContenedorImg src={CocadaBelga}/>

                            <BotonVerMas onClick={openModal15}>
                                <a>DESCUBRE LOS USOS Y RECETAS DEL<span> COCADA BELGA COLD'S</span></a>
                            </BotonVerMas>
                            <ModalVideo15 showModal15={showModal15} setShowModal15={setShowModal15}/>
                        </ContenedorProducto>
                    </SwiperSlide>

                    <SwiperSlide data-history="golden-nut">
                        <ContenedorProducto backgroundDesktop2={backgroundDesktop_1}>
                            <ContenedorProductoInformacion>
                                <ContenedorTitulos>
                                    <TituloProducto colorTitulo={'#E3C629'}>{TituloGoldenNut}</TituloProducto>
                                    <SubtituloProducto>-</SubtituloProducto>
                                </ContenedorTitulos>                    
                                <DescripcionProducto>
                                   <GoldenNutDesc/>
                                </DescripcionProducto>
                                <ContenedorCajasInformacion> 
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 15% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion>
                                <Comunicatep>
                                    Comunícate via Whatsapp o por E-mail con uno de nuestros asesores de venta.
                                </Comunicatep>
                                <BotonSolicitaElProducto/>
                            </ContenedorProductoInformacion>
                            <ContenedorInfo2>
                                <h2 style={{color:'#E3C629'}}>{TituloGoldenNut}</h2>
                                <h3>-</h3>
                                <ContenedorCajasInformacion2>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 15% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion2>
                                <BotonSolicitaElProducto/>
                                <VerMasMovil onClick={openModalMovil16}>DESCRIPCIÓN <IcoAdelante/></VerMasMovil>
                                <UsosyRecetasMovil onClick={openModal16}>
                                    USOS Y RECETAS <IcoAdelante/>
                                </UsosyRecetasMovil>
                            </ContenedorInfo2>

                            <GoldenNutDescModal showModalMovil16={showModalMovil16} setShowModalMovil16={setShowModalMovil16}/>

                            <ContenedorImg src={GoldenNut}/>

                            <BotonVerMas onClick={openModal16}>
                                <a>DESCUBRE LOS USOS Y RECETAS DEL<span> GOLDEN NUT COLD'S</span></a>
                            </BotonVerMas>
                            <ModalVideo16 showModal16={showModal16} setShowModal16={setShowModal16}/>
                        </ContenedorProducto>
                    </SwiperSlide>

                    <SwiperSlide data-history="rompope">
                        <ContenedorProducto backgroundDesktop2={backgroundDesktop_1}>
                            <ContenedorProductoInformacion>
                                <ContenedorTitulos>
                                    <TituloProducto colorTitulo={'#EEE19F'}>{TituloRompope}</TituloProducto>
                                    <SubtituloProducto>-</SubtituloProducto>
                                </ContenedorTitulos>                    
                                <DescripcionProducto>
                                   <RompopeDesc/>
                                </DescripcionProducto>
                                <ContenedorCajasInformacion> 
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 35% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion>
                                <Comunicatep>
                                    Comunícate via Whatsapp o por E-mail con uno de nuestros asesores de venta.
                                </Comunicatep>
                                <BotonSolicitaElProducto/>
                            </ContenedorProductoInformacion>
                            <ContenedorInfo2>
                                <h2 style={{color:'#EEE19F'}}>{TituloRompope}</h2>
                                <h3>-</h3>
                                <ContenedorCajasInformacion2>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 15% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion2>
                                <BotonSolicitaElProducto/>
                                <VerMasMovil onClick={openModalMovil17}>DESCRIPCIÓN <IcoAdelante/></VerMasMovil>
                                <UsosyRecetasMovil onClick={openModal17}>
                                    USOS Y RECETAS <IcoAdelante/>
                                </UsosyRecetasMovil>
                            </ContenedorInfo2>

                            <RompopeDescModal showModalMovil17={showModalMovil17} setShowModalMovil17={setShowModalMovil17}/>

                            <ContenedorImg src={Rompope}/>

                            <BotonVerMas onClick={openModal17}>
                                <a>DESCUBRE LOS USOS Y RECETAS DEL<span> ROMPOPE COLD'S</span></a>
                            </BotonVerMas>
                            <ModalVideo17 showModal17={showModal17} setShowModal17={setShowModal17}/>
                        </ContenedorProducto>
                    </SwiperSlide>

                    <SwiperSlide data-history="ron-oro">
                        <ContenedorProducto backgroundDesktop2={backgroundDesktop_2} >
                            <ContenedorProductoInformacion>
                                <ContenedorTitulos>
                                    <TituloProducto colorTitulo={'#FFCC69'}>{TituloRonOro}</TituloProducto>
                                    <SubtituloProducto>RON ORO</SubtituloProducto>
                                </ContenedorTitulos>                    
                                <DescripcionProducto>
                                    <RonOroDesc/>
                                </DescripcionProducto>
                                <ContenedorCajasInformacion> 
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 35% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc / 375 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                        <p>Caja de 24 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion>
                                <Comunicatep>
                                    Comunícate via Whatsapp o por E-mail con uno de nuestros asesores de venta.
                                </Comunicatep>
                                <BotonSolicitaElProducto/>
                            </ContenedorProductoInformacion>
                            <ContenedorInfo2>
                                <h2 style={{color:"#FFCC69"}}>{TituloRonOro}</h2>
                                <h3>RON ORO</h3>
                                <ContenedorCajasInformacion2>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 35% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc / 375 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                        <p>Caja de 24 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion2>
                                <BotonSolicitaElProducto/>
                                <VerMasMovil onClick={openModalMovil12}>DESCRIPCIÓN <IcoAdelante/></VerMasMovil>
                                <UsosyRecetasMovil onClick={openModal12}>
                                    USOS Y RECETAS <IcoAdelante/>
                                </UsosyRecetasMovil>
                            </ContenedorInfo2>

                            <RonOroDescModal showModalMovil12={showModalMovil12} setShowModalMovil12={setShowModalMovil12}/>

                            { isDesktopOrLaptop &&
                            <ContenedorImg src={RonOro}/>
                            }   
                            {
                             isMovilTablet &&
                             <ContenedorImg style={{width:'40vh'}} src={RonOro}/>
                            }   
                            <BotonVerMas onClick={openModal12}>
                                <a>DESCUBRE LOS USOS Y RECETAS DEL<span> RON ORO</span></a>
                            </BotonVerMas>
                            <ModalVideo12 showModal12={showModal12} setShowModal12={setShowModal12}/>

                        </ContenedorProducto>
                    </SwiperSlide>

                    <SwiperSlide data-history="ron-plata">
                        <ContenedorProducto backgroundDesktop2={backgroundDesktop_2}>
                            <ContenedorProductoInformacion>
                                <ContenedorTitulos>
                                    <TituloProducto colorTitulo={'#DFDFDF'}>{TituloRonPlata}</TituloProducto>
                                    <SubtituloProducto>RON PLATA</SubtituloProducto>
                                </ContenedorTitulos>                    
                                <DescripcionProducto>
                                    <RonPlataDesc/>
                                </DescripcionProducto>
                                <ContenedorCajasInformacion> 
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 36% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion>
                                <Comunicatep>
                                    Comunícate via Whatsapp o por E-mail con uno de nuestros asesores de venta.
                                </Comunicatep>
                                <BotonSolicitaElProducto/>
                            </ContenedorProductoInformacion>
                            <ContenedorInfo2>
                                <h2 style={{color:"#DFDFDF"}}>{TituloRonPlata}</h2>
                                <h3>RON PLATA</h3>
                                <ContenedorCajasInformacion2>
                                    <div>
                                        <h3>Grado Alcohólico</h3>
                                        <p>Alc. 36% (Vol.)</p>
                                    </div>
                                    <div>
                                        <h3>Volumen</h3>
                                        <p>750 cc</p>
                                    </div>
                                    <div>
                                        <h3>Presentación</h3>
                                        <p>Caja de 12 unidades</p>
                                    </div>
                                </ContenedorCajasInformacion2>
                                <BotonSolicitaElProducto/>
                                <VerMasMovil onClick={openModalMovil13}>DESCRIPCIÓN <IcoAdelante/></VerMasMovil>
                                <UsosyRecetasMovil onClick={openModal13}>
                                    USOS Y RECETAS <IcoAdelante/>
                                </UsosyRecetasMovil>
                            </ContenedorInfo2>

                            <RonPlataDescModal showModalMovil13={showModalMovil13} setShowModalMovil13={setShowModalMovil13}/>

                            <ContenedorImg src={RonPlata}/>

                            <BotonVerMas onClick={openModal13}>
                                <a>DESCUBRE LOS USOS Y RECETAS DEL<span> RON PLATA COLD'S</span></a>
                            </BotonVerMas>
                            <ModalVideo13 showModal13={showModal13} setShowModal13={setShowModal13}/>

                        </ContenedorProducto>
                    </SwiperSlide>
                </Swiper>
            </ContenedorProductoPagina>
        </>
    )
}

export default ProductoVista
