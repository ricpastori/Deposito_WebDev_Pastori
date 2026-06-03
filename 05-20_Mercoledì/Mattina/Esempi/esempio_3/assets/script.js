// Selezione elementi
const input = document.getElementById("nome");
const bottone = document.getElementById("btn");
const output = document.getElementById("output");

// Aggiunta event listener
bottone.addEventListener("click", () => {
	const nome = input.value; // input utente

	if (nome === "") {
		output.textContent = "Inserisci un nome";
	} else {
		output.textContent = `Ciao ${nome}`;
	}
});
