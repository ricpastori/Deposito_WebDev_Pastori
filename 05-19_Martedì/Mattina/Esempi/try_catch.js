try {
	const risultato = 10 / 0;
	console.log(risultato);
} catch (e) {
	console.log(`Si è verificato un errore:\n ${e}`);
}

try {
	console.log("Esecuzione...");
} catch (error) {
	console.log(error);
} finally {
	console.log("Operazione terminata");
}

function ageCheck(eta) {
	if (eta < 18) {
		throw new Error("Utente minorenne");
	}
	return "Accesso consentito";
}

try {
	console.log(ageCheck(16));
} catch (e) {
	console.log(e.message);
}
