const addButtons = document.querySelectorAll(".add-book-button");
const bookModal = document.getElementById("book-dialog");
const menuButton = document.getElementById("menu-button");
const mainNav = document.getElementById("main-nav");

// Salvo il contenuto iniziale del dialog per poterlo ripristinare dopo i messaggi di stato.
const initialFormTemplate = bookModal.innerHTML;

// Al click sull'hamburger aggiungo/tolgo is-open: questa classe apre o chiude il menu.
menuButton.addEventListener("click", () => {
	const isOpen = mainNav.classList.toggle("is-open");

	// Aggiorno gli attributi ARIA per descrivere lo stato reale del menu agli screen reader.
	menuButton.setAttribute("aria-expanded", isOpen);
	menuButton.setAttribute(
		"aria-label",
		isOpen ? "Chiudi menu di navigazione" : "Apri menu di navigazione",
	);
});

// Quando si clicca un link del menu, il menu si richiude dopo aver scelto la sezione.
mainNav.addEventListener("click", (event) => {
	if (event.target.classList.contains("nav-link")) {
		closeMenu();
	}
});

// Se l'utente clicca fuori dal menu e dal bottone hamburger, il menu viene chiuso.
document.addEventListener("click", (event) => {
	const clickInsideMenu = mainNav.contains(event.target);
	const clickOnButton = menuButton.contains(event.target);

	if (!clickInsideMenu && !clickOnButton) {
		closeMenu();
	}
});

for (const button of addButtons) {
	button.addEventListener("click", () => {
		bookModal.showModal();
	});
}

prepareFormEvents();
bookModal.addEventListener("close", resetCurrentForm);

function prepareFormEvents() {
	// Gli elementi del form vengono cercati qui così il form può essere ricreato dopo i messaggi di stato.
	const bookForm = document.getElementById("book-form");
	const closeButtons = document.querySelectorAll(".close-dialog-button");

	for (const button of closeButtons) {
		button.addEventListener("click", () => {
			bookModal.close();
		});
	}

	bookForm.addEventListener("submit", handleFormSubmit);
}

function handleFormSubmit(event) {
	// Blocca l'invio del form e il ricaricamento della pagina, così si può gestire i dati con JS
	event.preventDefault();

	/*
    1. Cerco il form
    2. Creo l'oggetto formData con i dati del form
    3. Mappo formData nell'oggetto bookData per gestire i dati nel form
  */
	const bookForm = document.getElementById("book-form");
	const formData = new FormData(bookForm);
	const bookData = {
		title: formData.get("book-title"),
		author: formData.get("book-author"),
		genre: formData.get("book-genre"),
		year: formData.get("book-year"),
		description: formData.get("book-description"),
	};

	loadData(bookData);
}

async function loadData(bookData) {
	showDialogMessage("Caricamento in corso...", "loading");

	try {
		// Aspetto che la Promise venga risolta prima di continuare.
		const book = await fetchData(bookData);
		showDialogMessage("Libro salvato correttamente.", "success");
		createBookItem(book);
	} catch {
		showDialogMessage("Errore durante il salvataggio del libro.", "error");
	} finally {
		// Dopo successo o errore il dialog viene chiuso e il form torna disponibile.
		closeDialogAndRestoreForm();
	}
}

function createBookItem(book) {
	const itemsList = document.getElementById("books-list");
	const emptyMessage = document.getElementById("empty-message");

	emptyMessage.style.display = "none";

	itemsList.innerHTML += `
		<article class="book-card">
			<h3>${book.title}</h3>
			<p class="book-meta">${book.author} - ${book.genre} - ${book.year}</p>
			<p>${book.description}</p>
		</article>
	`;
}

function showDialogMessage(message, status) {
	bookModal.innerHTML = `
		<div class="book-form dialog-message ${status}">
			<h2>${message}</h2>
		</div>
	`;
}

function closeDialogAndRestoreForm() {
	setTimeout(() => {
		bookModal.close();
		bookModal.innerHTML = initialFormTemplate;
		prepareFormEvents();
	}, 3000);
}

function resetCurrentForm() {
	const bookForm = document.getElementById("book-form");

	if (bookForm) {
		bookForm.reset();
	}
}

// Riporta il menu allo stato chiuso e ripristina gli attributi del bottone hamburger.
function closeMenu() {
	mainNav.classList.remove("is-open");
	menuButton.setAttribute("aria-expanded", "false");
	menuButton.setAttribute("aria-label", "Apri menu di navigazione");
}

function fetchData(bookData) {
	return new Promise((resolve, reject) => {
		// Numero casuale usato per simulare sia il caso di successo sia quello di errore.
		const randomNumber = Math.random();

		setTimeout(() => {
			if (randomNumber > 0.4) {
				resolve(bookData);
			} else {
				reject(new Error("Failed to load book data"));
			}
		}, 2000);
	});
}
