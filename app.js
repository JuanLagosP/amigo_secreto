// Array para almacenar nombres de amigos
let nombres = [];


function agregarAmigo() {
    let input = document.getElementById('amigo').value;

    if (input.trim() == '' || input.trim().match('\^\\d+$')) {
        alert('¡Por favor, ingrese un nombre válido!');
    } else {
        if(nombres.includes(input)) {
            alert('¡El nombre ya se encuentra registrado!');
        } else {
            nombres.push(input);
        }
    }
}
