// Selezione dei controlli del deck.
const clearButton = document.getElementById("clearButton");
const fillButton = document.getElementById("fillButton");
const playerDeck = document.getElementById("playerDeck");
const playerFormElement = document.getElementById("playerForm");
const previousCardButton = document.getElementById("previousCardButton");
const nextCardButton = document.getElementById("nextCardButton");

// Chiave usata per salvare quante carte ci sono nel Local Storage.
const playersCountKey = "playersCount";

// Dati di esempio per popolare rapidamente il deck (generati con AI).
const fakePlayers = [
	{
		playerName: "NovaRider",
		playerArchetype: "Speedrunner",
		playerDescription:
			"Ama partite veloci, mappe competitive e obiettivi completati con precisione.",
		preferredPlatform: "PC",
		favoriteGame: "Rocket League",
	},
	{
		playerName: "IronPixel",
		playerArchetype: "Tank",
		playerDescription:
			"Tiene la posizione, protegge il team e resiste anche nei match piu difficili.",
		preferredPlatform: "PlayStation",
		favoriteGame: "Overwatch 2",
	},
	{
		playerName: "ByteMage",
		playerArchetype: "Support",
		playerDescription:
			"Gioca di squadra, legge la mappa e trasforma ogni partita in una rimonta.",
		preferredPlatform: "Xbox",
		favoriteGame: "Fortnite",
	},
];

// Stato principale del deck.
let players = getStoredPlayers();
let activeCardIndex = 0;
let lastActiveCardIndex = null;

if (players.length > 0) {
	activeCardIndex = players.length - 1;
}

// Disegna il deck appena la pagina carica.
renderDeck();

// Inserisce tre carte demo e le salva nel browser.
fillButton.addEventListener("click", () => {
	players = [];

	for (const player of fakePlayers) {
		players.push(player);
	}

	activeCardIndex = players.length - 1;
	lastActiveCardIndex = null;

	if (players.length > 1) {
		lastActiveCardIndex = players.length - 2;
	}

	savePlayers();
	playerFormElement.reset();
	renderCardPreview();
	renderDeck();
});

// Svuota Local Storage, form e deck.
clearButton.addEventListener("click", () => {
	localStorage.clear();
	document.body.classList.remove("dark");
	players = [];
	activeCardIndex = 0;
	lastActiveCardIndex = null;

	playerFormElement.reset();
	renderCardPreview();
	renderDeck();
});

// Mostra la carta precedente.
previousCardButton.addEventListener("click", () => {
	if (players.length > 1) {
		lastActiveCardIndex = activeCardIndex;

		if (activeCardIndex === 0) {
			activeCardIndex = players.length - 1;
		} else {
			activeCardIndex--;
		}

		renderDeck();
	}
});

// Mostra la carta successiva.
nextCardButton.addEventListener("click", () => {
	if (players.length > 1) {
		lastActiveCardIndex = activeCardIndex;

		if (activeCardIndex === players.length - 1) {
			activeCardIndex = 0;
		} else {
			activeCardIndex++;
		}

		renderDeck();
	}
});

// Aggiunge una carta creata dal form.
function addPlayer(player) {
	lastActiveCardIndex = null;

	if (players.length > 0) {
		lastActiveCardIndex = activeCardIndex;
	}

	players.push(player);
	activeCardIndex = players.length - 1;

	savePlayers();
	renderDeck();
}

// Ricostruisce il deck usando lo stato globale dichiarato a inizio file.
function renderDeck() {
	playerDeck.innerHTML = "";
	previousCardButton.disabled = players.length <= 1;
	nextCardButton.disabled = players.length <= 1;

	if (players.length !== 0) {
		playerDeck.classList.remove("deck-empty");

		// Calcola quante carte vanno nella mano laterale sinistra.
		let handIndex = 0;
		let deckHTML = "";
		let handCount = players.length - 1;

		// lastActiveCardIndex e la carta mostrata a destra, quindi non va nella mano.
		if (lastActiveCardIndex !== null) {
			handCount = players.length - 2;
		}

		// entries() permette di usare for...of avendo sia indice sia giocatore.
		for (const [index, player] of players.entries()) {
			let cardClass = "player-card";
			let style = "";

			if (index === activeCardIndex) {
				cardClass += " active";
			} else if (index === lastActiveCardIndex) {
				cardClass += " last-active";
			} else {
				// Per questi calcoli di posizione mi sto facendo aiutare dall'AI.
				// Ogni carta laterale riceve variabili CSS per posizione e rotazione.
				let handOffset = -160 + handIndex * 40;
				let handRotation = -16 + handIndex * 4;
				let handLift = handCount - handIndex - 1;

				// Questi controlli evitano che la mano superi la carta centrale.
				if (handOffset > -58) {
					handOffset = -58;
				}

				if (handRotation > -4) {
					handRotation = -4;
				}

				if (handLift < 0) {
					handLift = 0;
				}

				handLift = handLift * 5;

				const handMobileOffset = handOffset * 0.72;
				const handZIndex = handIndex + 1;

				cardClass += " hand-card";
				// Le custom properties passano dati dinamici dal JavaScript al CSS.
				style = `
					--hand-offset: ${handOffset}px;
					--hand-mobile-offset: ${handMobileOffset}px;
					--hand-rotation: ${handRotation}deg;
					--hand-lift: ${handLift}px;
					z-index: ${handZIndex};
				`;
				handIndex++;
			}

			deckHTML += createPlayerCardTemplate(player, cardClass, style);
		}

		playerDeck.innerHTML = deckHTML;
	} else {
		playerDeck.classList.add("deck-empty");
		playerDeck.innerHTML = `
			<p class="empty deck-empty-message">Il deck e vuoto. Salva una carta dal form per iniziare a sfogliarlo.</p>
		`;
	}
}

// Template HTML riutilizzato sia per le card del deck sia per la preview.
function createPlayerCardTemplate(
	player,
	cardClass = "player-card",
	style = "",
) {
	return `
		<article class="${cardClass}" style="${style}">
			<span class="archetype-badge">${escapeHTML(player.playerArchetype)}</span>
			<h3>${escapeHTML(player.playerName)}</h3>
			<p>${escapeHTML(player.playerDescription)}</p>
			<ul>
				<li>Gioco: ${escapeHTML(player.favoriteGame)}</li>
				<li>Piattaforma: ${escapeHTML(player.preferredPlatform)}</li>
			</ul>
		</article>
	`;
}

// Evita che testo scritto dall'utente venga interpretato come HTML.
function escapeHTML(value) {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;");
}

// Recupera le carte salvate nel Local Storage.
function getStoredPlayers() {
	const playersCount = Number(localStorage.getItem(playersCountKey));
	const storedPlayers = [];
	let playerIndex = 0;

	while (playerIndex < playersCount) {
		const player = {
			playerName: localStorage.getItem(`player-${playerIndex}-playerName`) || "",
			playerArchetype:
				localStorage.getItem(`player-${playerIndex}-playerArchetype`) || "",
			playerDescription:
				localStorage.getItem(`player-${playerIndex}-playerDescription`) || "",
			preferredPlatform:
				localStorage.getItem(`player-${playerIndex}-preferredPlatform`) || "",
			favoriteGame:
				localStorage.getItem(`player-${playerIndex}-favoriteGame`) || "",
		};

		storedPlayers.push(player);
		playerIndex++;
	}

	return storedPlayers;
}

// Salva le carte nel browser usando chiavi semplici.
function savePlayers() {
	localStorage.setItem(playersCountKey, players.length);

	// players e l'array globale aggiornato da form, demo e navigazione.
	for (const [playerIndex, player] of players.entries()) {
		localStorage.setItem(`player-${playerIndex}-playerName`, player.playerName);
		localStorage.setItem(
			`player-${playerIndex}-playerArchetype`,
			player.playerArchetype,
		);
		localStorage.setItem(
			`player-${playerIndex}-playerDescription`,
			player.playerDescription,
		);
		localStorage.setItem(
			`player-${playerIndex}-preferredPlatform`,
			player.preferredPlatform,
		);
		localStorage.setItem(
			`player-${playerIndex}-favoriteGame`,
			player.favoriteGame,
		);
	}
}
