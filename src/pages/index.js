import React, {useState} from 'react'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import BarraInferior from '../components/BarraInferior';

import HomeSection from '../components/HomeSection';
import ContactanosSection from '../components/ContactanosSection';
import SobreNosotrosSection from '../components/SobreNosotrosSection';
import FunSection from '../components/FunSection';
import SocialYAmbientaSection from '../components/SocialYAmbientalSection';
import FooterSection from '../components/FooterSection'

import SaberMas from '../components/SaberMas';

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