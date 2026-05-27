const message = require("./lib/message");
const http = require("http");
// const inquirer = require("@inquirer/prompts");

const server = http.createServer((req, res) => {
	const currentUrl = new URL(req.url, "http://localhost:3000");
	const fileType = currentUrl.searchParams.get("fileType");
	const output = message(`message.+${fileType}`);

	switch (fileType) {
		case "/html":
			res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
			res.end(output);
			break;
		case "/txt":
		default:
			res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
			res.end(output);
			break;
	}

	server.close(() => {
		console.log("Server chiuso");
	});
});

// Avvia il server sulla porta 3000
server.listen(3000, async () => {
	console.log("Server avviato su http://localhost:3000");

	const userInput = await inquirer.select({
		message: "Quale file vuoi leggere?",
		choices: [
			{
				name: "File TXT",
				value: "txt",
				description: "Legge il contenuto di assets/message.txt",
			},
			{
				name: "File HTML",
				value: "html",
				description: "Legge il contenuto di assets/message.html",
			},
		],
	});

	// Crea una richiesta GET verso il server locale.
	http.get(
		// La scelta dell'utente viene passata come query parameter nell'URL.
		`http://localhost:3000?fileType=${encodeURIComponent(userInput)}`,
	);
	console.log(`File scelto: ${userInput}`);
	console.log(`Apri: http://localhost:3000?fileType=${userInput}`);
});
