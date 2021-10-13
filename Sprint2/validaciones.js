const usuario =document.querySelector("#in_nombre_usuario");
const stringA =document.querySelector("#in_contrasena");
const stringB =document.querySelector("#in_confirmar_contrasena");
const boton_registro =document.querySelector("#btn_registrar_usuario");

console.log(usuario.value);

boton_registro.addEventListener("click", validar_nombre_usuario, validar_nombre_usuario, validar_contrasena, confirmar_contrasena);


function validar_nombre_usuario(usuario){
    if(usuario.value.length>=6 && usuario.value.length<=30){
        return true;
    }
    else{
        return false;
    }
}

function validar_contrasena(stringA){
    if(stringA.length>=6){
        return true;
    }
    else{
    return false;
    }
}

function confirmar_contrasena(stringA, stringB){
    if(stringB.length>=6){
        if(stringA==stringB){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}


module.exports.vali|dar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena=validar_contrasena;
module.exports.confirmar_contrasena=confirmar_contrasena;

// module.exports = {
//     validar_nombre_usuario,
//     validar_contrasena,
//     confirmar_contrasena
// }