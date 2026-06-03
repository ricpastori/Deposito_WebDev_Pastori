// Seleziono gli elementi tramite id
const titolo = document.getElementById("titolo");
const testo = document.getElementById("testo");
const bottone = document.getElementById("bottone");
const lista = document.getElementById("lista");

// Cambio il titolo appena la pagina parte
titolo.innerHTML = "Titolo modificato con JS";

// Quando clicco il bottone
bottone.addEventListener("click", () => {
	// Cambio il testo del paragrafo
	testo.innerHTML = "Testo modificato ";

	// Creo un nuovo elemento li
	const nuovoElemento = document.createElement("li");

	// Inserisco testo nel nuovo elemento
	nuovoElemento.innerHTML = "Nuovo elemento ";

	// Aggiungo l'elemento alla lista
	lista.appendChild(nuovoElemento);
});
