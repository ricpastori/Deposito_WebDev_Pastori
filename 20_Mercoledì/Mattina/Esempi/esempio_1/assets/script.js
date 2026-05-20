// =====================================
// SELEZIONE ELEMENTI
// =====================================

const titolo = document.getElementById("titolo");
const paragrafo = document.getElementById("paragrafo");
const inputNome = document.getElementById("inputNome");
const btnSalva = document.getElementById("btnSalva");
const saluto = document.getElementById("saluto");
const btnTitolo = document.getElementById("btnTitolo");
const btnColore = document.getElementById("btnColore");
const btnNascondi = document.getElementById("btnNascondi");
const btnAggiungi = document.getElementById("btnAggiungi");
const btnElimina = document.getElementById("btnElimina");
const lista = document.getElementById("lista");

// =====================================
// CAMBIO TESTO
// =====================================

btnTitolo.addEventListener("click", () => {
	titolo.innerHTML = "Titolo modificato con JavaScript";
	paragrafo.innerHTML = "Paragrafo aggiornato";
});

// =====================================
// CAMBIO STILE
// =====================================

btnColore.addEventListener("click", () => {
	titolo.style.color = "red";
	paragrafo.style.backgroundColor = "yellow";
});

// =====================================
// NASCONDI / MOSTRA
// =====================================

btnNascondi.addEventListener("click", () => {
	if (paragrafo.style.display === "none") {
		paragrafo.style.display = "block";
	} else {
		paragrafo.style.display = "none";
	}
});

// =====================================
// LETTURA INPUT
// =====================================

btnSalva.addEventListener("click", () => {
	// Leggo valore input
	const nome = inputNome.value;

	// Controllo campo vuoto
	if (nome.trim() === "") {
		saluto.innerHTML = "Campo obbligatorio";
	} else {
		saluto.innerHTML = `Ciao ${nome}`;
	}
});

// =====================================
// AGGIUNTA ELEMENTO
// =====================================

btnAggiungi.addEventListener("click", () => {
	// Creo nuovo elemento li
	const nuovoElemento = document.createElement("li");

	// Inserisco testo
	nuovoElemento.innerHTML = "Nuovo elemento";

	// Aggiungo alla lista
	lista.appendChild(nuovoElemento);
});

// =====================================
// ELIMINAZIONE ELEMENTO
// =====================================

btnElimina.addEventListener("click", () => {
	// Controllo se esistono elementi
	if (lista.children.length > 0) {
		// Elimino ultimo elemento
		lista.removeChild(lista.lastElementChild);
	}
});

// =====================================
// EVENTO MOUSE
// =====================================

titolo.addEventListener("mouseover", () => {
	titolo.innerHTML = "Mouse sopra il titolo";
});

// =====================================
// EVENTO TASTIERA
// =====================================

inputNome.addEventListener("keydown", () => {
	console.log("Tasto premuto");
});
