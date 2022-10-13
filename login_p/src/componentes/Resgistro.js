import React from "react";
import { Formik, Field, ErrorMessage } from 'formik';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
class Registro extends React.Component {
    render() {
        return (
            <Form className='bg-login login'>
                <div className='imagenEmprenya'>
                    <img src={require('../assets/imagenes/emprenya.png')} alt="" />
                </div>
                <FormGroup>
                    <Label
                        for="exampleEmail"
                        hidden
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
                        hidden
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
                <Button className='botonIniciar'>
                    Iniciar
                </Button>
            </Form>
        )
    }
}

export default Registro;