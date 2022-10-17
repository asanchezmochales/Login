import React from "react";

class Registro extends React.Component {
    render() {
        return (
            <div class="m-content" style="height: 100%">



                <div class="m-content m-0 h-100">

                    <div class="m-portlet h-100 m-0">

                        <div class="m-portlet__body">
                            <div class="m-form__group form-group col-md-6 col-12 mx-auto text-center c-blue">
                                <hr/>
                                    <h1 class="col-12 mt-4">
                                        ¡Un paso más!
                                    </h1>
                                    <div class="clearfix"></div>
                                    <label class="col-12  col-form-label text-center c-blue">
                                        Introduce patrocinador                             </label>
                                    <div class="col-12 mt-3">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="patrocinador" placeholder="Nombre de usuario" style="border-color: black" />

                                        </div>
                                        <div class="text-center mt-5">
                                            <button class="btn btn-primary unete" type="button">
                                                Únete                                    </button>
                                        </div>
                                    </div>
                                    <hr/>
                                        <h6 class="c-blue mt-5">Si no tienes patrocinador rellena el siguiente formulario</h6>
                                        <button class="btn btn-primary rellenarformulario mt-4" type="button">
                                            Rellenar formulario
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>

                </div>
                )
    }
}

export default Registro;