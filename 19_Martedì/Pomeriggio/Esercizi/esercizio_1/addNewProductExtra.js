export function addNewProductExtra(catalogue) {
	// Chiede quale categoria di prodotto usare per eventuali campi aggiuntivi.
	const productType = prompt(
		`Seleziona la tipologia di prodotto che vuoi aggiungere:\n
    1. Intimo\n
    2. Parte superiore\n
    3. Parte inferiore\n
    4. Giacche e soprabiti\n
    5. Scarpe\n
    6. Accessori`,
	);

	switch (productType) {
		case "1":
			addNewUnderwear(catalogue);
			break;
		case "2":
			addNewTop(catalogue);
			break;
		case "3":
			addNewBottom(catalogue);
			break;
		case "4":
			addNewOuterwear(catalogue);
			break;
		case "5":
			addNewFootwear(catalogue);
			break;
		case "6":
		default:
			addNewAccessory(catalogue);
			break;
	}
}

function addNewAccessory(catalogue) {}

function addNewBottom(catalogue) {}

function addNewFootwear(catalogue) {}

function addNewOuterwear(catalogue) {}

function addNewTop(catalogue) {}

function addNewUnderwear(catalogue) {}
