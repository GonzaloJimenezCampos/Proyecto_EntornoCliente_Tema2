
function validateForm() {
    // Get input values
    var email = document.getElementById('email').value;
    var dni = document.getElementById('dni').value;
    var telefono = document.getElementById('telefono').value;
    var codigoPostal = document.getElementById('codigo-postal').value;
    var direccion = document.getElementById('direccion').value;

    // Email validation
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, introduce un email válido.');
        return false;
    }

    // DNI validation
    var dniRegex = /^[0-9]{8}$/;
    if (!dniRegex.test(dni)) {
        alert('Por favor, introduce un DNI válido (8 dígitos numéricos).');
        return false;
    }

    // Teléfono validation
    var telefonoRegex = /^[0-9]{9}$/;
    if (!telefonoRegex.test(telefono)) {
        alert('Por favor, introduce un número de teléfono válido (9 dígitos numéricos).');
        return false;
    }

    // Código Postal validation
    var codigoPostalRegex = /^[0-9]{5}$/;
    if (!codigoPostalRegex.test(codigoPostal)) {
        alert('Por favor, introduce un código postal válido (5 dígitos numéricos).');
        return false;
    }

    // Dirección validation (optional)
    // You can add specific validation for the address if needed.

    // If all validations pass, the form will be submitted
    return true;
}