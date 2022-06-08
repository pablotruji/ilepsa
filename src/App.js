import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './pages/index';
import HomeEn from './pages/indexEn'
import IdiomaPagina from './pages/idiomaPagina'
import Espanol from './pages/espanol'
import English from './pages/english';
import Juego from './pages/juego';
import JuegoEn from './pages/juegoEn'
import JuegoHeavy from './pages/juegoHeavy';
import JuegoHeavyEn from './pages/juegoHeavyEn'
import SeleccionarJuego from './pages/seleccionarJuego'
import SeleccionarJuegoEn from './pages/seleccionarJuegoEn'
import Productos from './pages/productos'
import ProductosEn from './pages/productosEn'
import Producto from './pages/productoVista'
import ProductoEn from './pages/productoVistaEn'
import PruebaFormulario from './components/PruebaFormulario/index'
import PaginaError from './pages/errorPagina'

import Sendgrid from './pages/sendgrid';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={IdiomaPagina} exact/>
        <Route path="/home" component={Home} exact/>
        <Route path="/homeen" component={HomeEn} exact/>
        <Route path="/espanol" component={Espanol} exact/>
        <Route path="/english" component={English} exact/>
        <Route path="/seleccionar" component={SeleccionarJuego} exact/>
        <Route path="/select" component={SeleccionarJuegoEn} exact/>
        <Route path="/juego/light" component={Juego} exact/>
        <Route path="/game/light" component={JuegoEn} exact/>
        <Route path="/juego/heavy" component={JuegoHeavy} exact/>
        <Route path="/game/heavy" component={JuegoHeavyEn} exact/>

        <Route path="/formulario" component={PruebaFormulario} exact />

        <Route path="/sendgrid" component={Sendgrid} exact />

        {/*ESPAÑOL PRODUCTOS*/}
        <Route path="/productos" component={Productos} excat />
        <Route path="/producto/traguito" component={Producto} exact/>
        <Route path="/producto/cafe" component={Producto} exact/>
        <Route path="/producto/cacao" component={Producto} exact/>
        <Route path="/producto/curacao" component={Producto} exact/>
        <Route path="/producto/traguito-cana" component={Producto} exact/>
        <Route path="/producto/traguito-sin-azucar" component={Producto} exact/>
        <Route path="/producto/whisky" component={Producto} exact/>
        <Route path="/producto/menta" component={Producto} exact/>
        <Route path="/producto/pina-colada" component={Producto} exact/>
        <Route path="/producto/amaretto" component={Producto} exact/>
        <Route path="/producto/triple-sec" component={Producto} exact/>
        <Route path="/producto/ron-oro" component={Producto} exact/>
        <Route path="/producto/ron-plata" component={Producto} exact/>
        <Route path="/producto/tradicional-1" component={Producto} exact/>
        <Route path="/producto/tradicional-2" component={Producto} exact/>
        <Route path="/producto/chirimoya" component={Producto} exact/>
        <Route path="/producto/cocada-belga" component={Producto} exact/>
        <Route path="/producto/golden-nut" component={Producto} exact/>
        <Route path="/producto/rompope" component={Producto} exact/>
 

        {/*INGLES PRODCUTOS*/}
        <Route path="/products" component={ProductosEn} excat />
        <Route path="/product/traguito" component={ProductoEn} exact/>
        <Route path="/product/cafe" component={ProductoEn} exact/>
        <Route path="/product/cacao" component={ProductoEn} exact/>
        <Route path="/product/curacao" component={ProductoEn} exact/>
        <Route path="/product/traguito-cana" component={ProductoEn} exact/>
        <Route path="/product/traguito-sin-azucar" component={ProductoEn} exact/>
        <Route path="/product/whisky" component={ProductoEn} exact/>
        <Route path="/product/menta" component={ProductoEn} exact/>
        <Route path="/product/pina-colada" component={ProductoEn} exact/>
        <Route path="/product/amaretto" component={ProductoEn} exact/>
        <Route path="/product/triple-sec" component={ProductoEn} exact/>
        <Route path="/product/ron-oro" component={ProductoEn} exact/>
        <Route path="/product/ron-plata" component={ProductoEn} exact/>
        <Route path="/product/tradicional-1" component={ProductoEn} exact/>
        <Route path="/product/tradicional-2" component={ProductoEn} exact/>
        <Route path="/product/chirimoya" component={ProductoEn} exact/>
        <Route path="/product/cocada-belga" component={ProductoEn} exact/>
        <Route path="/product/golden-nut" component={ProductoEn} exact/>
        <Route path="/product/rompope" component={ProductoEn} exact/>

        <Route path="*" component={PaginaError}/>

      </Switch> 
    </Router>
  );
}

export default App;
