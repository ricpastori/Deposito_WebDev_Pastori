import promptSync from "prompt-sync";

// Configura prompt-sync per leggere le scelte dell'utente dal terminale.
const prompt = promptSync();

export function addNewProduct(catalogue) {
	// Richiede e valida i dati necessari per creare un nuovo prodotto.
	const productName = tryPrompt("text", "Qual è il nome del nuovo prodotto? ");
	const productPrize = tryPrompt(
		"number",
		"Quanto costa? (Non inserire valute) ",
	);
	const productQuantity = tryPrompt(
		"number",
		"Quanto pezzi vuoi inserire nel magazzino? ",
	);

	// Organizza i dati raccolti in un oggetto prodotto.
	const newProduct = {
		name: productName,
		prize: productPrize,
		quantity: productQuantity,
	};

	// Aggiunge il nuovo prodotto al catalogo ricevuto come parametro.
	catalogue.push(newProduct);
}

export function printCatalogue(catalogue) {
	// Se il catalogo è vuoto, mostra un messaggio dedicato.
	if (catalogue.isEmpty) {
		console.log("Il catalogo è vuoto");
	} else {
		// Stampa ogni prodotto con prezzo, quantità e valore totale.
		catalogue.forEach((product) => {
			console.log(`[\n
        Nome: ${product.name}\n
        Prezzo: ${product.prize}\n
        Quantità: ${product.quantity}\n
        Valore totale: ${product.prize * product.quantity}\n
			],\n`);
		});
	}
}

export function printCatalogueInformation(catalogue) {
	// Mostra un riepilogo solo quando sono presenti prodotti nel catalogo.
	if (catalogue.isEmpty) {
		console.log("Il catalogo è vuoto");
	} else {
		console.log(`Prodotti disponibili: ${availableProducts(catalogue)}\n
      Valore totale del magazzino: ${totalCatalogueValue(catalogue)}\n
      Prodotto più costoso: ${findMostExpensiveProduct(catalogue)}\n
      Elenco completo dei prodotti: ${printAllProductsNames(catalogue)}\n`);
	}
}

function availableProducts(catalogue) {
	// Restituisce i nomi dei prodotti che hanno almeno un pezzo disponibile.
	if (catalogue.isEmpty) {
		console.log("Il catalogo è vuoto");
	} else {
		const availables = [];
		catalogue.forEach((product) => {
			if (product.quantity > 0) {
				availables.push(product.name);
			}
		});
		return availables;
	}
}

function findMostExpensiveProduct(catalogue) {
	// Parte dal primo prodotto e aggiorna il risultato quando trova un prezzo maggiore.
	if (catalogue.length < 1) {
		console.log("Il catalogo è vuoto");
	} else if (catalogue.length === 1) {
		return catalogue[0].name;
	} else {
		let mostExpensiveProduct = catalogue[0].name;
		for (let i = 1; i < catalogue.length; i++) {
			if (catalogue[i].prize >= catalogue[i - 1].prize) {
				mostExpensiveProduct = catalogue[i].name;
			}
		}
		return mostExpensiveProduct;
	}
}

function printAllProductsNames(catalogue) {
	// Crea un array contenente solo i nomi dei prodotti.
	const products = [];
	catalogue.forEach((product) => {
		products.push(product.name);
	});
	return products;
}

function totalCatalogueValue(catalogue) {
	// Calcola il valore complessivo moltiplicando prezzo e quantità disponibili.
	let totalValue = 0;
	catalogue.forEach((product) => {
		if (product.quantity > 0) {
			totalValue += product.quantity * product.prize;
		}
	});
	return totalValue;
}

function tryPrompt(type, message) {
	// Continua a chiedere l'input finché l'utente non inserisce un valore valido.
	let validRequest = false;
	do {
		const input = prompt(message);

		// Cambia la validazione in base al tipo di dato richiesto.
		switch (type) {
			case "number":
				if (input !== "" && !Number.isNaN(Number(input))) {
					validRequest = true;
					return Number(input);
				} else {
					console.log("Il valore inserito non è valido. Riprova");
				}
				break;
			default:
				if (input !== "" && Number.isNaN(Number(input))) {
					validRequest = true;
					return input;
				} else {
					console.log("Il valore inserito non è valido. Riprova");
				}
				break;
		}
	} while (validRequest === false);
}
