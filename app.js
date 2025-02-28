let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const amigoNombre = inputAmigo.value.trim().toUpperCase();  // Convertir a mayúsculas y eliminar espacios extra

    if (amigoNombre === "") {
        alert("Por favor, ingresa un nombre valido");
        return;
    }

    const patron = /^[a-zA-Z\s]+$/; // Expresión regular
    if (!patron.test(amigoNombre)) {
        alert("El nombre solo puede contener letras y espacios");
        return;
    }

    //array añadir
    amigos.push(amigoNombre);

    inputAmigo.value = "";

    mostrarAmigos();
}

function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    const resultado = document.getElementById('resultado');
    resultado.textContent = `Amigo sorteado: ${amigoSorteado}`;
}
