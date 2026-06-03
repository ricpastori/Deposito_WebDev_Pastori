/* Ho usato try-catch perché pensavo fosse un'argomento già fatto ieri (Lunedì 18) */
/* Non funziona: continua a ciclare ad ogni lettere che inserisco in console (senza che prema invio) */

const prompt = require("prompt-sync")();

function sum(array) {
	let total = array[0];

	for (i = 1; i < array.length; i++) {
		total = total + array[i];
	}

	return total;
}

function subtraction(array) {
	let total = array[0];

	for (i = 1; i < array.length; i++) {
		total = total - array[i];
	}

	return total;
}

function multiplication(array) {
	let total = array[0];

	for (i = 1; i < array.length; i++) {
		total = total * array[i];
	}

	return total;
}

function division(array) {
	let total = array[0];

	for (i = 1; i < array.length; i++) {
		total = total / array[i];
	}

	return total;
}

let operationStop = false;
const results = [];

do {
	const operationChoice = prompt(
		"Scegli un'operazione tra le seguenti:\nSomma\nSottrazione\nMoltiplicazione\nDivisione\nUsa 'Stop' per uscire: ",
	);

	switch (operationChoice) {
		case "Somma":
			(() => {
				const input = prompt(
					"Inserisci un elenco di numeri che vuoi sommare. Separa ogni numero con una virgola:",
				);
				try {
					const operands = input.split(",").map(Number);
					const result = `Risultato somma: ${sum(operands)}`;
					results.push(result);
				} catch (e) {
					console.log(
						`${e.Message}\nSembra ci siano stati dei problemi nell'inserimento dei numeri. \n Riproviamo da capo`,
					);
					return;
				}
			})();
			break;
		case "Sottrazione":
			(() => {
				const input = prompt(
					"Inserisci un elenco di numeri che vuoi sottrarre. Separa ogni numero con una virgola:",
				);
				try {
					const operands = input.split(",").map(Number);
					const result = `Risultato sottrazione: ${subtraction(operands)}`;
					results.push(result);
				} catch (e) {
					console.log(
						`${e.Message}\nSembra ci siano stati dei problemi nell'inserimento dei numeri. \n Riproviamo da capo`,
					);
					return;
				}
			})();
			results.push(subtractionResults);
			break;
		case "Moltiplicazione":
			(() => {
				const input = prompt(
					"Inserisci un elenco di numeri che vuoi moltiplicazione. Separa ogni numero con una virgola:",
				);
				try {
					const operands = input.split(",").map(Number);
					const result = `Risultato moltiplicazione: ${multiplication(operands)}`;
					results.push(result);
				} catch (e) {
					console.log(
						`${e.Message}\nSembra ci siano stati dei problemi nell'inserimento dei numeri. \n Riproviamo da capo`,
					);
					return;
				}
			})();
			results.push(multiplicationResults);
			break;
		case "Divisione":
			(() => {
				const input = prompt(
					"Inserisci un elenco di numeri che vuoi dividere. Separa ogni numero con una virgola:",
				);
				try {
					const operands = input.split(",").map(Number);
					const result = `Risultato divisione: ${division(operands)}`;
					results.push(result);
				} catch (e) {
					console.log(
						`${e.Message}\nSembra ci siano stati dei problemi nell'inserimento dei numeri. \n Riproviamo da capo`,
					);
					return;
				}
			})();
			results.push(divisionResults);
			break;
		case "Stop":
			operationStop = true;
			break;
		default:
			console.log(
				"Sembra ci siano stati dei problemi con la scelta dell'operazione. Riproviamo da capo!",
			);
			break;
	}
} while (operationStop === false);

console.log(results);
