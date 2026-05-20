const addButton = document.getElementById("add-button");
const removeButton = document.getElementById("remove-button");
const randomStyleButton = document.getElementById("style-button");
const resetStyleButton = document.getElementById("reset-button");

// Non è il massimo lo so, ma volevo provare
const title = document.getElementsByTagName("h1")[0];
const titleText = title.innerText;
const titleColor = title.style.color;

function tryAddItem(item) {
	if (item !== "") {
		createItem(item);
	} else {
		alert("Non hai inserito il nome dell'attività");
	}
}

function createItem(itemName) {
	const itemsList = document.getElementById("items-list");

	const itemCard = document.createElement("li");
	const itemFooter = document.createElement("div");
	const itemBody = document.createElement("div");
	const visibilityButton = document.createElement("button");
	const item = document.createElement("p");

	item.innerText = itemName;

	itemCard.classList.add("card");
	itemFooter.classList.add("item-header");
	itemBody.classList.add("item-body");

	visibilityButton.classList.add("visibility-button");
	visibilityButton.innerText = "👀";

	// Sistemare i 2 eventListener altrimenti quello su itemCard è come se nascondesse quello di visibilityButton

	visibilityButton.addEventListener("click", () => {
		if (itemBody.style.visibility === "hidden") {
			itemBody.style.visibility = "visible";
		} else {
			itemBody.style.visibility = "hidden";
		}
	});

	itemCard.addEventListener("click", () => {
		itemsList.removeChild(itemCard);
	});

	itemFooter.appendChild(visibilityButton);

	itemBody.appendChild(item);

	itemCard.appendChild(itemBody);
	itemCard.appendChild(itemFooter);
	itemsList.appendChild(itemCard);
}

function randomIntroStyle() {
	const textContainer = document.getElementById("editable-text");
	const text = document.querySelector("#editable-text > p");

	const borderStyles = [
		"none",
		"hidden",
		"dotted",
		"dashed",
		"solid",
		"double",
		"groove",
		"ridge",
		"inset",
		"outset",
		"initial",
		"inherit",
	];

	/* Per il random del colore mi sono fatto aiutare dall'AI perché mi ricordavo una cosa del genere ma chiaramente non bene, soprattutto il valore necessario per fare correttamente il codice hex */
	textContainer.style.backgroundColor = `#${Math.floor(
		Math.random() * 16777215,
	).toString(16)}`;

	textContainer.style.border = `${Math.floor(Math.random() * 10)}px ${borderStyles[Math.floor(Math.random() * borderStyles.length)]} #${Math.floor(Math.random() * 16777215).toString(16)}`;

	text.style.fontSize = `${0.75 + Math.random()}rem`;

	title.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

	title.innerText = "testo random";
}

function resetIntroStyle() {
	title.innerText = titleText;
	title.style.color = titleColor;
}

addButton.addEventListener("click", () => {
	const input = document.getElementById("list-input");
	tryAddItem(input.value);
	input.value = "";
});

removeButton.addEventListener("click", () => {
	const collection = document.getElementById("items-list");
	const lastChild = document.querySelector("#items-list > .card:last-child");

	if (lastChild !== null) {
		collection.removeChild(lastChild);
	}
});

randomStyleButton.addEventListener("click", () => {
	randomIntroStyle();
});

resetStyleButton.addEventListener("click", () => {
	resetIntroStyle();
});
