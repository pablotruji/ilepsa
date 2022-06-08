import React from 'react';
import Mapa from '../Mapa';
import FormEmail from '../FormularioEmail';
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
                <ContenedorContactos>
                   <ContactosInformacion>
                     <Contactanosh2><IcoCelular/>PEDIDOS</Contactanosh2>
                     <ContactanosPnumeros>098 300 1791</ContactanosPnumeros>
                     <ContactanosPnumeros>099 317 1577</ContactanosPnumeros>
                   </ContactosInformacion>
                   <ContactosInformacion>
                     <Contactanosh2><IcoTelef/>TELÉFONO</Contactanosh2>
                     <ContactanosPnumeros>2463 335/336/337</ContactanosPnumeros>
                     <ContactanosPnumeros>Ext. 108/109</ContactanosPnumeros>
                   </ContactosInformacion>
                   <ContactosInformacion>
                     <Contactanosh2><IcoMail/>CORREO</Contactanosh2>
                     <ContactanosPnumeros>comercial@ilepsa.com.ec</ContactanosPnumeros>
                   </ContactosInformacion>
                </ContenedorContactos>
                <BotonWs href="https://api.whatsapp.com/send?phone=593983001791&text=Hola%2C%20quisiera%20tomar%20un%20TRAGUITO%2C%20me%20ayudas%20%F0%9F%A5%83" target="_blank">WHATSAPP <IcoWs/></BotonWs>
                <FormEmail/>
                <Mapa/>
            </ContenedorContactanos>
        </ContenedorPaginaContactanos>
    )
}

export default ContactanosSection
