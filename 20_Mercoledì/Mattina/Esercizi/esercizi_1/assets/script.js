const addButton = document.getElementById("add-activity-button");
const clearButton = document.getElementById("clear-list-button");
const cardCounter = document.getElementById("list-count");

cardCounter.innerText = String(0);

function tryAddActivity(activityName) {
	const todoList = document.getElementById("todo-list");
	const completedList = document.getElementById("completed-list");

	// Questi array conterranno i valori degli attributi data-control già presenti.
	// Servono per controllare se l'attività è già stata aggiunta.
	const todoControlAttributes = [];
	const completedControlAttributes = [];

	for (const child of todoList.children) {
		const controlAttribute = child.getAttribute("data-control");
		todoControlAttributes.push(controlAttribute);
	}

	for (const child of completedList.children) {
		const controlAttribute = child.getAttribute("data-control");
		completedControlAttributes.push(controlAttribute);
	}

	if (activityName !== "") {
		/* Questa istruzione trasforma il nome in formato "kebab-case" per usarlo come valore di confronto */
		kebabActivityName = activityName.replaceAll(" ", "-");

		console.log(todoControlAttributes);

		// Questo controllo verifica se l'attività è già presente prima di crearne una nuova.
		if (
			!todoControlAttributes.includes(kebabActivityName) &&
			!completedControlAttributes.includes(kebabActivityName)
		) {
			createActivity(activityName);
		} else {
			alert("L'attività che vuoi aggiungere è già nella lista");
		}
	} else {
		alert("Non hai inserito il nome dell'attività");
	}
}

function createActivity(activityName) {
	// Le nuove attività vengono inserite sempre nella lista delle cose da fare.
	const todoList = document.getElementById("todo-list");

	const activityCard = document.createElement("li");
	const activityFooter = document.createElement("div");
	const activityBody = document.createElement("div");
	const moveButton = document.createElement("button");
	const removeButton = document.createElement("button");
	const activity = document.createElement("p");
	const controlAttribute = document.createAttribute("data-control");

	// Questo attributo data-control identifica la card anche in seguito.
	controlAttribute.value = activityName.replaceAll(" ", "-");
	activityCard.setAttributeNode(controlAttribute);

	activityCard.classList.add("card", "todo-card");
	activityFooter.classList.add("activity-header");
	activityBody.classList.add("activity-body");

	moveButton.classList.add("move-activity-button");
	removeButton.classList.add("remove-activity-button");
	moveButton.innerText = "↔️ Sposta";
	removeButton.innerText = "🗑️ Cancella";

	// Al click, la card viene spostata tra le due liste.
	moveButton.addEventListener("click", () => {
		moveActivity(activityCard);
	});

	// Al click, la card viene rimossa dalla pagina.
	removeButton.addEventListener("click", () => {
		removeActivity(activityCard);
	});

	activityFooter.appendChild(moveButton);
	activityFooter.appendChild(removeButton);

	activity.innerText = activityName;
	activityBody.appendChild(activity);

	activityCard.appendChild(activityBody);
	activityCard.appendChild(activityFooter);
	todoList.appendChild(activityCard);

	cardCounter.innerText = String(Number(cardCounter.innerText) + 1);
}

function moveActivity(card) {
	const todoList = document.getElementById("todo-list");
	const completedList = document.getElementById("completed-list");

	// Se la card è già completata, torna nella lista "todo".
	if (card.classList.contains("completed-card")) {
		// appendChild(), se l'elemento esiste già, lo rimuove dal vecchio nodo.
		todoList.appendChild(card);
	} else {
		completedList.appendChild(card);
	}

	// La classe completed-card indica visivamente e logicamente lo stato della card.
	card.classList.toggle("completed-card");
}

function removeActivity(card) {
	card.remove();

	cardCounter.innerText = String(Number(cardCounter.innerText) - 1);
}

addButton.addEventListener("click", () => {
	const input = document.getElementById("activity-input");
	tryAddActivity(input.value);

	input.value = "";
});

clearButton.addEventListener("click", () => {
	const todoList = document.getElementById("todo-list");
	const completedList = document.getElementById("completed-list");

	// Fa il replace con niente, quindi le svuota
	todoList.replaceChildren();
	completedList.replaceChildren();

	cardCounter.innerText = String(0);
});
