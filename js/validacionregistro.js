function validarFormulario() {
    var nombreUsuario = document.getElementById("nombre_usuario").value;
    var correoElectronico = document.getElementById("correo_electronico").value;
    var contrasena = document.getElementById("contrasena").value;
    var confirmarContrasena = document.getElementById("confirmar_contrasena").value;

    if (nombreUsuario === "" || correoElectronico === "" || contrasena === "" || confirmarContrasena === "") {

        alert("Todos los campos son obligatorios. Por favor, rellénelos.");

    }else if(!validarCorreoElectronico(correoElectronico)){

        alert("El correo escogido no cumple los criterios adecuados")

    }else if (contrasena !== confirmarContrasena) {

        alert("Las contraseñas no coinciden. Por favor, inténtelo de nuevo.");

    }else if (!validarContrasena(contrasena)){

        alert("La contraseña escogida no es segura");

    }

}

function validarContrasena(contrasena) {
    // Requisitos de seguridad de la contraseña
    var longitudMinima = 8;
    var tieneLetraMayuscula = /[A-Z]/.test(contrasena);
    var tieneLetraMinuscula = /[a-z]/.test(contrasena);
    var tieneNumero = /\d/.test(contrasena);
    var tieneCaracterEspecial = /[!@#$%^&*.]/.test(contrasena);

    if (contrasena.length < longitudMinima || !tieneLetraMayuscula || !tieneLetraMinuscula || !tieneNumero || !tieneCaracterEspecial) {
        return false;
    }

    return true;
}

function validarCorreoElectronico(correo) {
    // Expresión regular para validar una dirección de correo electrónico
    var expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return expresionRegular.test(correo);
}