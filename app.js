// Array para almacenar nombres de amigos
<<<<<<< HEAD
let amigos = [];
=======
<<<<<<< HEAD
let nombres = [];
>>>>>>> 4e89995 (Se añadió método para limpiar lista al sortear el amigo secreto)


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
<<<<<<< HEAD
=======
=======
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
>>>>>>> 4e89995 (Se añadió método para limpiar lista al sortear el amigo secreto)

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

<<<<<<< HEAD
=======
>>>>>>> d7906cd (Se añadió método para limpiar lista al sortear el amigo secreto)
>>>>>>> 4e89995 (Se añadió método para limpiar lista al sortear el amigo secreto)
