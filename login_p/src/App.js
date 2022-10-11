
import './App.css';
import Cabecera from './componentes/cabecera';
import Formulario from './componentes/formulario';
import Footer from './componentes/footer';
import {Formik,Form, Field,ErrorMessage} from 'formik';


/*Importar estilos */
import "./assets/css/style.css"
import "./assets/css/normalize.css"
import React,{ useEffect, useState} from 'react';

function App() {

  const url = 'https://jsonplaceholder.typicode.com/';
  const[todos,setTodos]=useState()
  const fetchApi=async()=>{
    const response = await fetch(url);
    console.log(response.statusText)
    const responseJSON=await response.json()
    setTodos(responseJSON);
    console.log(responseJSON);
  }

  useEffect(()=>{
    fetchApi();
  },[])

/*
  const publicar=(values)=>{
    alert(JSON.stringify(values));
  }

  const validar=(values)=>{
    const errors={}

    if (values.password.length<5) errors.password='La contraseña tiene menos de 5 digitos'
    return errors;
  }

  return (    
    <div>
      <Formik
      initialValues={{
        email:"",
        password:""
      }}
      onSubmit={publicar}
      validate={validar}
      >
        <Form>
          <Field name="email" type="text"/>
          <Field name="password" type="password"/>
          <ErrorMessage name='password'></ErrorMessage>
          <button type='submit'>Enviar</button>
        </Form>
      </Formik>
    </div>
  );*/
}

export default App;
