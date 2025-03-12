// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
//Array para almacenar los nombres de los amigos

let amigos=[];

//Funcion para agregar amigos
function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    //Validar que el campo no este vacio
    if (nombreAmigo === ""){
        alert("Por favor, ingrese un nombre válido.");
        return;         //Detiene la ejecucion de la funcion
    }

    //Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    //Actualizar la lista en el HTML
    actualizarLista();

    //Limpiar el campo de entrada
    inputAmigo.value = "";
    inputAmigo.focus();
}

//Funcion para actualizar la lista de amigos en la interfaz 
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    //Limpiar el contenido actual de la lista
    listaAmigos.innerHTML = "";         //Borra cualquier contenido previo dentro del contenedor de la lista

    amigos.forEach (amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

//Funcion para sorteo de amigos
function sortearAmigo(){
    if (amigos.length === 0){
        alert("No hay amigos para sortear. Agrega nombres primero.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() = amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;

}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo)
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo)
});


