// Render Prop
import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { recogerDatosFormulario } from '../servicios/post';
const Formulario = () => (
    <Form className='bg-login login'>
        <div className='imagenEmprenya'>
        <img src={require('../assets/imagenes/emprenya.png')} alt="" />
        </div>
        <FormGroup>
            <Label
                for="exampleEmail"
                className='labelLogin'
            >
                Email
            </Label>
            <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="text"
                className='form-control'
            />
        </FormGroup>
        {' '}
        <FormGroup>
            <Label
                for="examplePassword"
                className='labelLogin'
            >
                Password
            </Label>
            <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="text"
                className='form-control'
            />
        </FormGroup>
        {' '}
        <Button className='botonIniciar' onClick={recogerDatosFormulario}>
            Iniciar
        </Button>
    </Form>
);


export default Formulario;