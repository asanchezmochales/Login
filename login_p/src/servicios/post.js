import axios from 'axios';


function recogerDatosFormulario(data) {
    var email = document.getElementById("exampleEmail").value;
    console.log(email)
    var clave = document.getElementById("examplePassword").value;
    const todosUsarios = async () => {
        const peticion = await axios.post('http://localhost/api/users/');
        const resultado=peticion.data.find(element=>element.email===email && element.clave===clave);
        if(!resultado){
            console.log("no econtrado");
        }else{
            console.log("encontrado");
            window.location.href='/dashboard';
        }

    }

    todosUsarios();

}


export {
    recogerDatosFormulario
}
