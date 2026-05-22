// Script dedicato alla pagina adozione: gestisce solo il messaggio del form.

const adoptionForm = document.querySelector("#adoption-form");
const formFeedback = document.querySelector("#form-feedback");

// Simula una chiamata asincrona, come se i dati arrivassero da un server.
function saveAdoptionRequest(requestData) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(requestData);
		}, 2000);
	});
}

async function loadAdoptionRequest(requestData) {
	formFeedback.textContent = "Invio richiesta in corso...";

	try {
		// Aspetto che la Promise venga risolta prima di continuare.
		const request = await saveAdoptionRequest(requestData);

		// Inserisco nella pagina il messaggio di conferma e ripulisco il form
		formFeedback.textContent = `Grazie ${request.name}, abbiamo registrato la tua richiesta per ${request.dog}.`;
		adoptionForm.reset();
	} catch {
		formFeedback.textContent = "Non è stato possibile registrare la richiesta.";
	}
}

function handleAdoptionSubmit(event) {
	// Blocca l'invio del form e il ricaricamento della pagina
	event.preventDefault();

	// Non mappo i dati tanto non li devo utilizzare
	const formData = new FormData(adoptionForm);
	loadAdoptionRequest(formData);
}

adoptionForm.addEventListener("submit", handleAdoptionSubmit);
