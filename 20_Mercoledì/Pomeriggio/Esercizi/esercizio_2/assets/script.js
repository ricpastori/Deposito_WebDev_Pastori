// Recupero gli elementi HTML con cui lo script deve interagire.
const loadButton = document.getElementById("load-btn");
const output = document.getElementById("output");

// Simula una chiamata asincrona, come se i dati arrivassero da un server.
function fetchData() {
	return new Promise((resolve, reject) => {
		// Volevo vedere cosa succedeva se falliva
		const randomNumber = Math.random();
		setTimeout(() => {
			if (randomNumber > 0.5) {
				resolve({
					nome: "Mario Rossi",
					ruolo: "Sviluppatore",
					stato: "Online",
				});
			} else {
				// Qua ho chiesto aiuto all'AI perché non sapevo come si gestisce il reject
				reject(new Error("Failed to fetch user data"));
			}
		}, 2000);
	});
}

async function loadData() {
	output.textContent = "Caricamento in corso...";
	// Si assicura che le classi di stato precedenti non siano presenti.
	output.classList.remove("success", "error");
	output.classList.add("loading");
	// Blocca il bottone così l'utente non può chiedere dati in loop (pensavo fosse una cosa furba ma anche commentando la riga non mi sembra cambi qualcosa)
	// loadButton.disabled = true;

	try {
		// Aspetto che la Promise venga risolta prima di continuare.
		const user = await fetchData();

		// Inserisco nella pagina i dati ricevuti.
		output.innerHTML = `
    <strong>Nome:</strong> ${user.nome}<br>
    <strong>Ruolo:</strong> ${user.ruolo}<br>
    <strong>Stato:</strong> ${user.stato}
  `;

		// Modifico lo stato finale dell'interfaccia e riabilito il bottone.
		output.classList.remove("loading");
		output.classList.add("success");
		loadButton.disabled = false;
	} catch {
		output.classList.remove("loading");
		output.classList.add("error");
		output.innerHTML = "Richiesta fallita";
		loadButton.disabled = false;
	}
}

// Avvia il caricamento dei dati quando l'utente clicca sul pulsante.
loadButton.addEventListener("click", loadData);
