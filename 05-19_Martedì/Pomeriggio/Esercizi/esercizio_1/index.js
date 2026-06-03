import promptSync from "prompt-sync";
import {
	addNewProduct,
	printCatalogue,
	printCatalogueInformation,
} from "./catalogueUtilities.js";

// Array principale che contiene tutti i prodotti inseriti nel catalogo.
const mainCatalogue = [];

// Configura prompt-sync per leggere le scelte dell'utente dal terminale.
const prompt = promptSync();

// Tiene traccia dello stato del programma: false continua, true termina.
let stopProgram = false;

function catalogueRequest() {
	// Mostra il menu principale e memorizza l'opzione selezionata.
	const menuOption =
		prompt(`Che cosa vuoi fare? Inserisci il numero corrispondente all'azione che vuoi compiere\n
  1. Aggiungere prodotto al catalogo\n
  2. Conoscere le informazioni sul catalogo\n
  3. Visualizzare il catalogo completo dei prodotti\n
  4. Esci\n
	Scelta: `);

	// Gestisce l'azione richiesta in base al valore inserito dall'utente.
	switch (menuOption) {
		case "1":
			// Avvia la procedura di inserimento di un nuovo prodotto.
			addNewProduct(mainCatalogue);
			break;
		case "2":
			// Mostra informazioni riassuntive sul catalogo corrente.
			printCatalogueInformation(mainCatalogue);
			break;
		case "3":
			// Stampa l'elenco completo dei prodotti presenti nel catalogo.
			printCatalogue(mainCatalogue);
			break;
		case "4":
			// Imposta la variabile di controllo per uscire dal programma.
			stopProgram = true;
			break;
		default:
			// Avvisa l'utente quando l'opzione digitata non esiste nel menu.
			console.log("L'opzione selezionata non è presente nel menu");
			break;
	}
}

// Continua a mostrare il menu finché l'utente non seleziona l'uscita.
do {
	catalogueRequest();
} while (stopProgram === false);
