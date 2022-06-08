import React from 'react'
import Logo from '../../images/Logo_ILEPSA_Blanco.png'
import { 
    SidebarContainer, 
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLinkProducts,
    SidebarRedes,
    Links,
    ContenedorIconos,
    IcoFacebook,
    IcoInstagram,
    ContenedorLogo,
    LogoIlepsa,
    LinkLogo
} from './SidebarProductsElementos'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinkProducts to="/products" onClick={toggle}>
                        PRODUCTS
                    </SidebarLinkProducts>
                </SidebarMenu>
                <SidebarRedes>
                <ContenedorIconos>
                    <Links href="https://www.facebook.com/traguitoec" target="_blank">
                        <IcoFacebook/>
                    </Links>
                    <Links href="https://instagram.com/traguitoec?utm_medium=copy_link" target="_blank">
                        <IcoInstagram />
                    </Links>
                </ContenedorIconos>
                <h2>VISIT OUR SOCIAL NETWORKS</h2>
                </SidebarRedes> 
                <ContenedorLogo>
                    <LinkLogo to="/homeen" onClick={toggle}>
                        <LogoIlepsa src={Logo}/>
                    </LinkLogo>
                </ContenedorLogo>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
