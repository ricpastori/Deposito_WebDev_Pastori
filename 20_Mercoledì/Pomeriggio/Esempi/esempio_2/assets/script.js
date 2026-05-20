const btnPromise = document.getElementById("btn-promise");
const btnCallback = document.getElementById("btn-callback");
const outputPromise = document.getElementById("output-promise");
const outputCallback = document.getElementById("output-callback");

// CALLBACK
function operazioneConCallback(callback) {
	setTimeout(() => {
		callback("Dati ricevuti tramite callback");
	}, 2000);
}

function caricaDatiCallback() {
	outputCallback.textContent = "Caricamento in corso...";
	const risultato = operazioneConCallback();
	setTimeout(() => {
		outputCallback.textContent = risultato;
	}, 3000);
}

// PROMISE
function operazioneConPromise() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Dati ricevuti tramite Promise");
		}, 2000);
	});
}

// ASYNC / AWAIT
async function caricaDatiPromise() {
	outputPromise.textContent = "Caricamento in corso...";

	try {
		const risultato = await operazioneConPromise();
		outputPromise.textContent = risultato;
	} catch (errore) {
		outputPromise.textContent = "Errore nel caricamento";
	}
}

btnPromise.addEventListener("click", () => {
	caricaDatiPromise();
});

btnCallback.addEventListener("click", () => {
	caricaDatiCallback();
});
