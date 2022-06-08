import React, {useState} from 'react'

import Navbar from '../components/Navbar/indexEn'
import Sidebar from '../components/Sidebar/indexEn';
import BarraInferior from '../components/BarraInferior/indexEn';

import HomeSection from '../components/HomeSection/indexEn';
import ContactanosSection from '../components/ContactanosSection/indexEn';
import SobreNosotrosSection from '../components/SobreNosotrosSection/indexEn';
import FunSection from '../components/FunSection/indexEn';
import SocialYAmbientaSection from '../components/SocialYAmbientalSection/indexEn';
import FooterSection from '../components/FooterSection/indexEn'

import SaberMas from '../components/SaberMas/indexEn';

import ContenedorSlide  from '../components/HomeSlide';

import RedesSociales from '../components/RedesSociales'


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isOpenInf, setIsOpenInf] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    const toggleInf = () => {
        setIsOpenInf(!isOpenInf)
    };

    return (
        <>
          
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle} />
          <ContenedorSlide/>
          <RedesSociales/>
          <HomeSection/>  
          <BarraInferior/>
          <ContactanosSection/>
          <SobreNosotrosSection toggleInf={toggleInf} />
          <SaberMas isOpenInf={isOpenInf} toggleInf={toggleInf}/>
          <SocialYAmbientaSection/>
          <FunSection/>
          <FooterSection/>
        </>
    )
}

export default Home;