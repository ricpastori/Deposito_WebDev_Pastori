import chalk from "chalk";

// Ordine di esecuzione: prima il call stack esegue il codice sincrono.
// Poi l'event loop esegue una macrotask alla volta (setTimeout) e, dopo ognuna,
// controlla la coda delle microtask (Promise/await) e la svuota completamente.

// Contatore condiviso per leggere l'ordine reale dei console.log.
let logNumber = 1;

function invertiStringa(testo) {
	return testo.split("").reverse().join("");
}

function invertiStringaAsincronaConCallback(testo, callback) {
	// Il timer entra nelle macrotask: la callback parte dopo 1500ms.
	setTimeout(() => {
		const upperCaseText = testo.toUpperCase();
		const callbackResult = callback(upperCaseText);

		console.log(
			chalk.yellow(
				`${logNumber++}. Macrotask - callback setTimeout: ${chalk.green(callbackResult)}`,
			),
		);
	}, 1500);
}

// La funzione termina subito: il risultato vero arriverà nella macrotask.
console.log(
	chalk.cyan(
		`${logNumber++}. Main - ritorno immediato callback: ${chalk.gray(
			invertiStringaAsincronaConCallback("event loop", invertiStringa),
		)}`,
	),
);

function invertiStringaAsincronaConPromise(testo) {
	return new Promise((resolve, reject) => {
		const isEmptyText = testo === null || testo === undefined || testo === "";

		if (!isEmptyText) {
			// Caso positivo: resolve avviene nella macrotask del setTimeout.
			setTimeout(() => {
				const upperCaseText = testo.toUpperCase();

				console.log(
					chalk.yellow(
						`${logNumber++}. Macrotask - Promise setTimeout resolve: ${chalk.green(
							upperCaseText,
						)}`,
					),
				);

				resolve(upperCaseText);
			}, 0);
		} else {
			// Caso negativo: reject immediato, senza attendere il timer.
			reject("Il testo che hai inserito non può essere manipolato");
		}
	});
}

function chainingPromise(testo) {
	// then/catch vengono eseguiti come microtask dopo resolve/reject.
	invertiStringaAsincronaConPromise(testo)
		.then((res) => {
			const reverseText = invertiStringa(res);

			console.log(
				chalk.magenta(
					`${logNumber++}. Microtask - Promise.then: ${chalk.green(
						reverseText,
					)}`,
				),
			);
		})
		.catch((err) =>
			console.log(
				chalk.red(`${logNumber++}. Microtask - Promise.catch: ${err}`),
			),
		);
}

console.log(
	chalk.cyan(
		`${logNumber++}. Main - ritorno immediato chainingPromise: ${chalk.gray(
			chainingPromise("event loop"),
		)}`,
	),
);

async function managingPromise(testo) {
	try {
		const reverseText = await invertiStringaAsincronaConPromise(testo);

		console.log(
			chalk.magenta(
				`${logNumber++}. Microtask - async/await dopo await: ${chalk.green(
					reverseText,
				)}`,
			),
		);
	} catch (err) {
		console.log(
			chalk.red(`${logNumber++}. Microtask - async/await catch: ${err}`),
		);
	}
}

// async restituisce subito una Promise; dopo await riprende come microtask.
console.log(
	chalk.cyan(
		`${logNumber++}. Main - ritorno immediato managingPromise: ${chalk.gray(
			managingPromise("event loop"),
		)}`,
	),
);
