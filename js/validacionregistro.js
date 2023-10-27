function validarFormulario() {
    var nombreUsuario = document.getElementById("nombre_usuario").value;
    var correoElectronico = document.getElementById("correo_electronico").value;
    var contrasena = document.getElementById("contrasena").value;
    var confirmarContrasena = document.getElementById("confirmar_contrasena").value;
    var checkbox = document.getElementById("aceptar_terminos");

    switch(true){

        case(nombreUsuario === "" || correoElectronico === "" || contrasena === "" || confirmarContrasena === ""):

            alert("Todos los campos son obligatorios. Por favor, rellénelos.");
            break;

        case(!validarCorreoElectronico(correoElectronico)):

            alert("El correo escogido no cumple los criterios adecuados");
            break;

        case(contrasena !== confirmarContrasena):

            alert("Las contraseñas no coinciden. Por favor, inténtelo de nuevo.");
            break;

        case(!validarContrasena(contrasena)):

            alert("La contraseña escogida no es segura");
            break;

        case(!validarCheckbox(checkbox)):

            alert("Debes aceptar los términos y condiciones.");
            break;


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

function validarCheckbox(checkbox) {

    if (checkbox.checked) {
        // El checkbox ha sido marcado, el formulario puede enviarse
        return true;
    } else {
        // El checkbox no ha sido marcado, muestra un mensaje de advertencia
        return false;
    }
}