const storageKey = "toys";

// Avvia il caricamento della lista usando la chiave del localStorage.
showToyList(storageKey);

function showToyList(key) {
	// Recupera gli elementi della pagina e i dati salvati nel browser.
	const toyList = document.getElementById("toy-list");
	const emptyListMessage = document.getElementById("empty-list-message");
	const toys = getSavedToys(key);

	renderToys(toyList, emptyListMessage, toys, key);
}

function renderToys(toyList, emptyListMessage, toys, key) {
	// Svuota la lista prima di ridisegnarla.
	toyList.innerHTML = "";

	// Se non ci sono giocattoli, mostra il messaggio vuoto.
	if (toys.length === 0) {
		emptyListMessage.hidden = false;
	} else {
		emptyListMessage.hidden = true;

		// entries() permette di usare sia l'indice sia il giocattolo.
		for (const [toyIndex, toy] of toys.entries()) {
			const toyCard = document.createElement("article");
			const downloadButton = document.createElement("button");
			const deleteButton = document.createElement("button");
			const price = Number(toy.price).toFixed(2);
			let availability = "❌";

			if (toy.available === "true") {
				availability = "✅";
			}

			toyCard.classList.add("toy-card");
			downloadButton.classList.add("secondary-button");
			deleteButton.classList.add("danger-button");

			downloadButton.type = "button";
			deleteButton.type = "button";
			downloadButton.innerText = "Scarica JSON";
			deleteButton.innerText = "Cancella";

			// Template literal usata per inserire i dati nella card.
			toyCard.innerHTML = `
				<div class="toy-info">
					<h3>${toy.name}</h3>
					<dl class="toy-details">
						<div>
							<dt>Categoria</dt>
							<dd>${toy.category}</dd>
						</div>
						<div>
							<dt>Prezzo</dt>
							<dd>${price} euro</dd>
						</div>
						<div>
							<dt>Età</dt>
							<dd>${toy.recommendedAge}</dd>
						</div>
						<div>
							<dt>Disponibilità</dt>
							<dd>${availability}</dd>
						</div>
					</dl>
				</div>
				<div class="toy-actions"></div>
			`;

			const toyActions = toyCard.querySelector(".toy-actions");

			// Crea e scarica un file JSON con i dati del singolo giocattolo.
			downloadButton.addEventListener("click", () => {
				const toyJson = JSON.stringify(toy, null, 2);
				const file = new Blob([toyJson], { type: "application/json" });
				const fileUrl = URL.createObjectURL(file);
				const link = document.createElement("a");

				link.href = fileUrl;
				link.download = `toy-${toyIndex + 1}.json`;
				document.body.appendChild(link);
				link.click();
				link.remove();
				URL.revokeObjectURL(fileUrl);
			});

			// Rimuove il giocattolo dall'array, aggiorna localStorage e ridisegna la lista.
			deleteButton.addEventListener("click", () => {
				toys.splice(toyIndex, 1);
				localStorage.setItem(key, JSON.stringify(toys));
				renderToys(toyList, emptyListMessage, toys, key);
			});

			toyActions.appendChild(downloadButton);
			toyActions.appendChild(deleteButton);
			toyList.appendChild(toyCard);
		}
	}
}

function getSavedToys(key) {
	// localStorage salva solo stringhe: JSON.parse le riconverte in array/oggetti.
	const savedToys = localStorage.getItem(key);

	if (savedToys) {
		return JSON.parse(savedToys);
	}

	return [];
}
