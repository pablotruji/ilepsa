import React from 'react'
import { useMediaQuery } from 'react-responsive'

import RedesSociales from '../components/RedesSociales'
import Producto from '../components/ProductoSection/indexEn';

const ProductoVista = () => {

    const isDesktopOrLaptop = useMediaQuery(
        { minDeviceWidth: 960 }
     )  
    return (
        <>  
        { isDesktopOrLaptop &&
            <RedesSociales/>
        }   
            <Producto/>
        </>
    )
}

export default ProductoVista