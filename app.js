// Array para almacenar nombres de amigos
let amigos = [];


function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    if (nombre.trim() == '' || nombre.trim().match('\^\\d+$')) {
        alert('¡Por favor, ingrese un nombre válido!');
    } else {
        if(amigos.includes(nombre)) {
            alert('¡El nombre ya se encuentra registrado!');
        } else {
            amigos.push(nombre);
            actualizarListaAmigos();
        }
    }
}


function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    
    lista.innerHTML = '';
    
    amigos.forEach(nombre => {
        lista.innerHTML += `<li>${nombre}</li>`;
    });
}

