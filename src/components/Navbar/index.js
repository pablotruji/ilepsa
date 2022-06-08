import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll'
import {
    Nav, 
    NavbarContainer, 
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavProducts
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/home" onClick={toggleHome}

                    >ILEPSA
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/> 
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavProducts to="/productos">PRODUCTOS</NavProducts>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contactanos"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-60}
                            >
                                CONTÁCTANOS</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="sobre-nosotros"
                                 smooth={true}
                                 duration={500}
                                 spy={true}
                                 exact='true'
                                 offset={-60}
                            
                            >SOBRE NOSOTROS</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>      
    );
};

export default Navbar;