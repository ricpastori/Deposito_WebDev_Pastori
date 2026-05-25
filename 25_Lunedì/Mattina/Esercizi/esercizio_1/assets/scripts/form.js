// Selezione degli elementi del form e dell'anteprima.
const playerForm = document.getElementById("playerForm");
const cardPreview = document.getElementById("cardPreview");

// Disattiva i messaggi nativi del browser: gli errori li gestiamo con alert().
playerForm.noValidate = true;

// Disegna l'anteprima iniziale.
renderCardPreview();

// Aggiorna l'anteprima mentre l'utente modifica i campi.
playerForm.addEventListener("input", renderCardPreview);
playerForm.addEventListener("change", renderCardPreview);

// Quando il form viene inviato, crea una nuova carta se tutti i dati sono presenti.
playerForm.addEventListener("submit", handlePlayerFormSubmit);

function handlePlayerFormSubmit(event) {
	event.preventDefault();

	const player = getDraftPlayer();

	if (!hasEmptyField(player)) {
		addPlayer(player);
		playerForm.reset();
		renderCardPreview();
	} else {
		alert("Controlla il form: compila correttamente tutti i campi.");
	}
}

// Mostra la card di anteprima oppure un messaggio se il form e vuoto.
function renderCardPreview() {
	const player = getDraftPlayer();

	if (!isFormEmpty(player)) {
		cardPreview.innerHTML = createPlayerCardTemplate(
			getPreviewPlayer(player),
			"preview-card",
		);
	} else {
		cardPreview.innerHTML = `
			<p class="empty">Compila il form per vedere l'anteprima della carta.</p>
		`;
	}
}

// Recupera i valori attuali del form e li pulisce con trim().
function getDraftPlayer() {
	const formData = new FormData(playerForm);

	return {
		playerName: formData.get("playerName").trim(),
		playerArchetype: formData.get("playerArchetype"),
		playerDescription: formData.get("playerDescription").trim(),
		preferredPlatform: formData.get("preferredPlatform"),
		favoriteGame: formData.get("favoriteGame").trim(),
	};
}

function hasEmptyField(player) {
	return (
		!player.playerName ||
		!player.playerArchetype ||
		!player.playerDescription ||
		!player.preferredPlatform ||
		!player.favoriteGame
	);
}

function isFormEmpty(player) {
	return (
		!player.playerName &&
		!player.playerArchetype &&
		!player.playerDescription &&
		!player.preferredPlatform &&
		!player.favoriteGame
	);
}

// Aggiunge testi provvisori solo per la preview dei campi non ancora compilati.
function getPreviewPlayer(player) {
	// Il testo dopo || viene usato se il campo e ancora vuoto.
	return {
		playerName: player.playerName || "Nome giocatore",
		playerArchetype: player.playerArchetype || "Archetipo",
		playerDescription:
			player.playerDescription ||
			"La descrizione apparira qui mentre compili il form.",
		preferredPlatform: player.preferredPlatform || "Piattaforma",
		favoriteGame: player.favoriteGame || "Gioco",
	};
}
