import React from 'react'
import { useMediaQuery } from 'react-responsive'

import RedesSociales from '../components/RedesSociales'
import ProductosSection from '../components/ProductosSection/indexEn' 

const Productos = () => {

    const isDesktopOrLaptop = useMediaQuery(
        { minDeviceWidth: 960 }
     ) 

    return (
        <>
         { isDesktopOrLaptop &&
            <RedesSociales/>
         }
            <ProductosSection/>
        </>
    )
}

export default Productos
