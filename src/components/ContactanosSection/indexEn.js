import React from 'react';
import Mapa from '../Mapa/indexEn';
import FormEmail from '../FormularioEmail/indexEn';
import {
        ContenedorContactosEn
}from './ContactanosElementosEn'
import {
    ContenedorPaginaContactanos,
    ContenedorContactanos,
    ContenedorContactos,
    ContactosInformacion,
    Contactanosh2,
    IcoCelular,
    IcoTelef,
    IcoMail,
    ContactanosPnumeros,
    BotonWs,
    IcoWs,

} from './ContactanosElementos';

const ContactanosSection = () => {
    return (
        <ContenedorPaginaContactanos id="contactanos">
            <ContenedorContactanos>
                <ContenedorContactosEn>
                   <ContactosInformacion>
                     <Contactanosh2><IcoCelular/>ORDERS</Contactanosh2>
                     <ContactanosPnumeros>(593) 95861 3418</ContactanosPnumeros>
                   </ContactosInformacion>
                   <ContactosInformacion>
                     <Contactanosh2><IcoMail/>EMAIL</Contactanosh2>
                     <ContactanosPnumeros>gerencia@ilepsa.com.ec</ContactanosPnumeros>
                   </ContactosInformacion>
                </ContenedorContactosEn>
                <BotonWs href="https://wa.me/593983001791?text=Hello%20ILEPSA,%20please%20help%20me%20with:" target="_blank">WHATSAPP <IcoWs/></BotonWs>
                <FormEmail/>
                <Mapa/>
            </ContenedorContactanos>
        </ContenedorPaginaContactanos>
    )
}

export default ContactanosSection
