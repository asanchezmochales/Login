import React from "react";


class Formulario extends React.Component {


    
    render() {
        return (


            <div className="w-100">
                <div className="m-login__head">
                    <div className="text-right mx-4 mt-4" style={{ display: "flex", justifyContent: "end" }}>
                        <img src={require("../assets/imagenes/es.png")} class="a-idioma" data="es" style={{ width: "25px", cursor: "pointer" }} />
                        <img src={require("../assets/imagenes/en.png")} class="a-idioma" data="en" style={{ width: "25px", cursor: "pointer" }} />
                    </div>
                </div >
                <form>
                    <div className="bg-login login ">
                        <img src={require("../assets/imagenes/emprenya.png")} alt="emprenya" />
                        <div className="">
                            <input className="" id="user" type="text" placeholder="Email o usuario" name="email" />
                        </div>
                        <div className="">
                            <input className="" id="pass" type="password" placeholder="Password" name="password" />
                        </div>
                        <div className="m-login__form-action " style={{ marginTop: "1%" }}>
                            <button id="subir" className="button-inicio btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary">
                                Iniciar sesión
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}

export default Formulario;