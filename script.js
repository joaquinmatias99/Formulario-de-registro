/*document.getElementById('botonTema').addEventListener('click', () => {
    document.body.classList.toggle('tema2');
});
*/

let nombre = document.getElementById('inputNombre');
let email = document.getElementById('inputEmail');
let contraseña = document.getElementById('inputContraseña');
let repetirContraseña = document.getElementById('inputRepetirContraseña');

document.getElementById('botonRegistrar').addEventListener('click', registrar());


function registrar() {
    if (!nombre) {
        if(!email)
            {
                if(contraseña==repetirContraseña)
                    {
                        console.log("Registrado");
                    }
            }
            else{
                
            }

    }
    else {

    }
}



function cambiarTema() {
    document.body.classList.toggle('tema2');
}