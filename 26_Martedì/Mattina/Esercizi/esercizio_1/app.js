const textManagement = require("./textManagement");
const prompt = require("prompt-sync")();
const http = require("http");

const server = http.createServer((req, res) => {
	/*
    req.url contiene solo il path della richiesta, ad esempio: "/?text=ciao"
    e bisognerebbe poi fare il parsing manuale.
    new URL() converte quella stringa in un oggetto URL navigabile, così posso usare searchParams invece di fare parsing manuale.
    La base "http://localhost:3000" serve perché URL() richiede un URL assoluto.
  */
	const currentUrl = new URL(req.url, "http://localhost:3000");
	const text = currentUrl.searchParams.get("text");

	const output = `Frase inserita: ${text}\n
                  Frase in maiuscolo: ${textManagement.toUpperCase(text)}\n
                  Numero di caratteri con spazi: ${textManagement.charactersNumberIncludingSpaces(text)}\n
                  Numero di caratteri senza spazi: ${textManagement.charactersNumberExcludingSpaces(text)}\n
                  Contiene la lettera B? ${textManagement.contains("b", text)}\n`;

	// Imposta il tipo di contenuto
	res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
	res.end(output);

	server.close(() => {
		console.log("Server chiuso");
	});
});

// Avvia il server sulla porta 3000
server.listen(3000, () => {
	console.log("Server avviato");

	const userInput = prompt("Inserisci una frase fantasiosa: ");

	// Crea una richiesta GET verso il server locale.
	http.get(
		// La stringa inserita dall'utente viene passata come query parameter nell'URL.
		`http://localhost:3000?text=${encodeURIComponent(userInput)}`,

		/*
      Questa callback viene eseguita quando il server risponde alla richiesta.
      "res" NON contiene direttamente il testo finale: è uno stream leggibile da cui arrivano i dati della risposta HTTP.
      Accumulo tutti i chunk nella stringa "data" e stampo il risultato finale quando arriva l'evento "end".
    */
		(res) => {
			let data = "";
			res.on("data", (chunk) => {
				data += chunk;
			});
			res.on("end", () => {
				console.log(data);
			});
		},
	);
});
