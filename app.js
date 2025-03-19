// Array para almacenar nombres de amigos
<<<<<<< HEAD
<<<<<<< HEAD
let amigos = [];
=======
<<<<<<< HEAD
let nombres = [];
>>>>>>> 4e89995 (Se añadió método para limpiar lista al sortear el amigo secreto)
=======
<<<<<<< HEAD
let nombres = [];
=======
let amigos = [];
>>>>>>> d26819f (Se creó método para actualizar listado de amigos)
>>>>>>> 2977ccf (Conflictos resueltos y merge de develop en main)


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
<<<<<<< HEAD
=======
=======
>>>>>>> 2977ccf (Conflictos resueltos y merge de develop en main)
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
=======


function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    
    lista.innerHTML = '';
>>>>>>> d26819f (Se creó método para actualizar listado de amigos)
    
    amigos.forEach(nombre => {
        lista.innerHTML += `<li>${nombre}</li>`;
    });
}

<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> 4e89995 (Se añadió método para limpiar lista al sortear el amigo secreto)
=======
=======
>>>>>>> d26819f (Se creó método para actualizar listado de amigos)
>>>>>>> 2977ccf (Conflictos resueltos y merge de develop en main)
