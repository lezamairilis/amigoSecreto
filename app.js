// 1. Creo un arreglo vacío para almacenar los nombres de los amigos
let amigos = [];

// 2. Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtengo el valor del input
    const input = document.getElementById('amigo');
    let nombre = input.value.trim(); //eliminando espacios en blanco

    // Valido que el nombre no esté vacío y que no contenga números
    if (nombre === '') {
        alert('Por favor, ingresa un nombre.');
        return;
    }

    if (/\d/.test(nombre)) { // verifico que no se incluyan dígitos
        alert('No se permiten números en el nombre.');
        return;
    }

    // Hacer que el nombre comience con mayúscula
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

    // Agrega el nombre a la lista
    amigos.push(nombre);

    // Limpia el campo de entrada
    input.value = '';

    // Muestra la lista actualizada
    mostrarLista();
}

// 3. Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    // Limpiamos la lista antes de actualizarla
    lista.innerHTML = '';

    // Recorre el arreglo y crea un <li> por cada nombre
    amigos.forEach(amigo => {
        const elemento = document.createElement('li');
        elemento.textContent = amigo;
        lista.appendChild(elemento);
    });
}

// 4. Función para sortear un amigo secreto
function sortearAmigo() {
    // Verifica si hay al menos dos amigos en la lista
    if (amigos.length < 2) {
        alert('Agrega al menos dos amigos para realizar el sorteo.');
        return;
    }

    // Elige un nombre al azar
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Muestra el resultado en la lista de resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    const elemento = document.createElement('li');
    elemento.textContent = `🎉 Tu amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(elemento);

    // Muestra el botón de nuevo sorteo
    mostrarBotonNuevoSorteo();
}

// 5. Función para reiniciar el juego
function reiniciarJuego() {
    amigos = [];
    mostrarLista();

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    ocultarBotonNuevoSorteo();
}

// 6. Función para mostrar el botón de nuevo sorteo
function mostrarBotonNuevoSorteo() {
    const buttonContainer = document.querySelector('.button-container');
    const botonNuevo = document.createElement('button');
    botonNuevo.className = 'button-new-draw';
    botonNuevo.textContent = 'Nuevo sorteo';
    botonNuevo.onclick = reiniciarJuego;

    buttonContainer.appendChild(botonNuevo);
}

// 7. Función para ocultar el botón de nuevo sorteo
function ocultarBotonNuevoSorteo() {
    const botonNuevo = document.querySelector('.button-new-draw');
    if (botonNuevo) {
        botonNuevo.remove();
    }
}
