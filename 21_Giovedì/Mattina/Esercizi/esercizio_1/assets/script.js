/* Salvo come globali:
    1. I bottoni a cui aggiungere gli eventListener
    2. Titolo e paragrafo introduttivo di cui devo salvare delle proprietà per il reset
  */
const buttons = document.querySelectorAll(".button");
const title = document.getElementById("zoo-title");
const intro = document.querySelector("#zoo-title + p");
const titleFont = title.style.fontFamily;
const titleText = title.innerText;
const introText = intro.innerText;

// Ciclo sui bottoni e aggiungo l'eventListener corretto in base al bottone
for (const button of buttons) {
	const identifier = button.id;
	switch (identifier) {
		case "add-lion":
			button.addEventListener("click", () => {
				createItem("Lion", "🦁", "Un animale fiero dalla grande criniera.");
			});
			break;
		case "add-elephant":
			button.addEventListener("click", () => {
				createItem(
					"Elephant",
					"🐘",
					"Un animale maestoso dalla lunga proboscide.",
				);
			});
			break;
		case "remove-animal":
			button.addEventListener("click", () => {
				const itemsList = document.getElementById("animal-list");
				const lastChild = document.querySelector(
					"#animal-list > .animal-card:last-child",
				);

				// Controllo di non cancellare la card della Giraffa che è aggiunta di default sul file HTML
				if (itemsList.children.length > 1) {
					// Controllo che esista almeno un elemento (è sempre true perché c'è la card della Giraffa di default)
					if (lastChild !== null) {
						itemsList.removeChild(lastChild);
					} else {
						alert("Hai già eliminato tutti :(");
					}
				} else {
					alert("Che fai!? Rimane solo una Giraffa!");
				}
			});
			break;
		case "change-theme":
			button.addEventListener("click", () => {
				changeTheme("new-theme");
			});
			break;
	}
}

function createItem(itemName, emoji, description) {
	const itemsList = document.getElementById("animal-list");

	// Normalizzo la classe
	const animalClass = itemName.toLowerCase().replaceAll(" ", "-");

	// Inserisco il template completo della card con classe, emoji, titolo e descrizione dinamici
	itemsList.innerHTML += `
		<article class="animal-card ${animalClass}">
			<span class="animal-emoji">${emoji}</span>
			<div class="animal-content">
				<h2>${itemName}</h2>
				<p>${description}</p>
			</div>
		</article>
	`;
}

function changeTheme(theme) {
	const body = document.querySelector("body");

	// Faccio il toggle della classe "tema" sul body in modo da aggiornare le variabili
	body.classList.toggle(theme);

	// Recupero la lista della classe in modo da controllare quando elimina la classe "tema" e resettare il contenuto dell'introduzione
	bodyClassList = body.classList.value.split(" ");

	if (!bodyClassList.includes(theme)) {
		title.style.fontFamily = titleFont;
		title.innerText = titleText;
		intro.innerText = introText;
	} else {
		console.log(`${title}, ${title.innerText}, ${title.style.fontFamily}`);
		title.style.fontFamily = "Impact,Charcoal,sans-serif";
		title.innerText = "Zoo Blu";
		intro.innerText =
			"Il tema dello zoo e stato aggiornato con nuovi colori e uno stile diverso.";
		console.log(`${title}, ${title.innerText}, ${title.style.fontFamily}`);
	}
}
