document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault();

    let nombre = document.getElementById('inputNombre');
    let errorNombre = document.getElementById('nameError');
    let email = document.getElementById('inputEmail');
    let emailError = document.getElementById('emailError');
    let contraseña = document.getElementById('inputContraseña');
    let contraseñaError = document.getElementById('passwordError');
    let repetirContraseña = document.getElementById('inputRepetirContraseña');
    let repetirContraseñaError = document.getElementById('passwordRepeateError');

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    if (nombre.value.trim() === '') {
        errorNombre.textContent = 'Por favor, introduzca un nombre';
        errorNombre.classList.add('error-message');
        isValid = false;
    } else {
        errorNombre.textContent = '';
        errorNombre.classList.remove('error-message');
    }

    if (!emailPattern.test(email.value)) {
        emailError.textContent = 'Por favor, introduzca un email válido';
        emailError.classList.add('error-message');
        isValid = false;
    } else {
        emailError.textContent = '';
        emailError.classList.remove('error-message');
    }

    if (contraseña.value.length < 8) {
        contraseñaError.textContent = 'La contraseña debe tener al menos 8 caracteres';
        contraseñaError.classList.add('error-message');
        isValid = false;
    } else {
        contraseñaError.textContent = '';
        contraseñaError.classList.remove('error-message');
    }

    if (contraseña.value !== repetirContraseña.value) {
        repetirContraseñaError.textContent = 'Las contraseñas no coinciden';
        repetirContraseñaError.classList.add('error-message');
        isValid = false;
    } else {
        repetirContraseñaError.textContent = '';
        repetirContraseñaError.classList.remove('error-message');
    }

    if (isValid) {
        alert('El formulario se ha enviado con éxito');
        document.getElementById('formulario').reset();
    }
});

document.getElementById('botonTema').addEventListener('click', () => {
    document.body.classList.toggle('tema2');
});
