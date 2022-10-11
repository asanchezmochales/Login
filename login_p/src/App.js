
import './App.css';
import Cabecera from './componentes/cabecera';
import Idiomas from './componentes/idiomas';
import Formulario from './componentes/formulario';
import Footer from './componentes/footer';
import {Formik,Form, Field,ErrorMessage} from 'formik';


/*Importar estilos */
import "./assets/css/style.css"
import "./assets/css/normalize.css"
import React,{ useEffect, useState} from 'react';

function App() {
  return (
    <div className="App">
      <Cabecera></Cabecera>
      <Idiomas></Idiomas>
      <Formulario></Formulario>
      <Footer></Footer>
    </div>
  );
}

export default App;
