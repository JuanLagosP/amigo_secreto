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

    limpiarInput();
}

function limpiarInput() {
    document.getElementById('amigo').value = '';
}

function limpiarLista() {
    document.getElementById('listaAmigos').innerHTML = '';
}

function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    
    limpiarLista();
    
    amigos.forEach(nombre => {
        lista.innerHTML += `<li>${nombre}</li>`;
    });
}

function sortearAmigo() {
    let longitudLista = amigos.length;

    if (longitudLista == 0) {
        alert('¡No se ha añadido ningún amigo!')
        return;
    } else {
        let indiceAleatorio = Math.floor(Math.random() * longitudLista);
        let amigoSecreto = amigos[indiceAleatorio];

        limpiarLista();
        document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: ${amigoSecreto}`;
    }
}

