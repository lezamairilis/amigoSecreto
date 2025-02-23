let listaAmigos = [];


function agregarAmigo() {
    const nombre = document.getElementById("amigo").value;

    if (nombre) {
        listaAmigos.push(nombre);
        mostrarListaAmigos();
        document.getElementById("amigo").value = "";
    } else {
        alert("Por favor, ingresa un nombre.");
    }
}

function mostrarListaAmigos() {
    const listaElemento = document.getElementById("listaAmigos");
    listaElemento.innerHTML = "";

    listaAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaElemento.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un amigo para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];

    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `Tu amigo secreto es: ${amigoSecreto}`;
}
