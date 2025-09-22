
// Lista para almacenar los nombres
let listaAmigos = [];

// Función para agregar un amigo
function agregarAmigo() {
	const input = document.getElementById('amigo');
	const nombre = input.value.trim();
	if (!nombre) {
		alert('Por favor, ingresa un nombre válido.');
		return;
	}
	listaAmigos.push(nombre);
	input.value = '';
	mostrarLista();
}

// Función para mostrar la lista de amigos
function mostrarLista() {
	const ul = document.getElementById('listaAmigos');
	ul.innerHTML = '';
	listaAmigos.forEach((amigo, idx) => {
		const li = document.createElement('li');
		li.textContent = amigo;
		ul.appendChild(li);
	});
}

// Función para sortear un amigo
function sortearAmigo() {
	const resultado = document.getElementById('resultado');
	resultado.innerHTML = '';
	if (listaAmigos.length === 0) {
		alert('Agrega al menos un nombre antes de sortear.');
		return;
	}
	const indice = Math.floor(Math.random() * listaAmigos.length);
	const nombreSorteado = listaAmigos[indice];
	const li = document.createElement('li');
	li.textContent = `El amigo secreto es: ${nombreSorteado}`;
	resultado.appendChild(li);
}
