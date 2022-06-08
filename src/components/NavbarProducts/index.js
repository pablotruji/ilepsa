import React from 'react';
import {FaBars} from 'react-icons/fa';
import {
    Nav, 
    NavbarContainer, 
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavProducts
} from './navbarProductsElements';

const Navbar = ({ toggle }) => {
    

    return (
        <>
            <Nav >
                <NavbarContainer>
                    <NavLogo to="/home"

                    >ILEPSA
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/> 
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavProducts to="/productos">PRODUCTOS</NavProducts>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>      
    );
};

export default Navbar;