import React from 'react';
import './App.css';
import Cabecera from './componentes/cabecera';
import Idiomas from './componentes/idiomas';
import Formulario from './componentes/formulario';
import Footer from './componentes/footer';
import Registro from './componentes/Resgistro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*Importar estilos */
import "./assets/css/style.css"
import "./assets/css/normalize.css"
import Dashboard from './componentes/Dashboard';


function App() {
  return (
    <>
    <Cabecera></Cabecera>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Formulario></Formulario>}></Route>
          <Route path='/registro' element={<Registro></Registro>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </BrowserRouter>
    <Footer></Footer>
    </>

  );
}

export default App;
