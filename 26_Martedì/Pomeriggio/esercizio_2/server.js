const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
// Ho provato ad utilizzarlo anche nell'esercizio di prima, utilizzando select non devo scrivere a mano tutte le volte l'opzione
const inquirer = require("@inquirer/prompts");

const pages = ["home", "info", "calculator"];

const server = http.createServer((req, res) => {
	const currentUrl = new URL(req.url, "http://localhost:3000");
	const page = currentUrl.searchParams.get("page");

	// Se tra le pagine non c'è quella richiesta, rispondo con una pagina 404
	if (!pages.includes(page)) {
		res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
		res.end("<h1>404 - Pagina non trovata</h1>");
	} else {
		const filePath = path.join(__dirname, "pages", `${page}.html`);
		const fileHtml = fs.readFileSync(filePath, "utf-8");

		res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
		res.end(fileHtml);
	}
});

server.listen(3000, async () => {
	console.log("Server avviato su http://localhost:3000");

	selectedPage = await inquirer.select({
		message: "Quale pagina vuoi mostrare?",
		choices: [
			{
				name: "a - Home",
				value: "home",
			},
			{
				name: "b - Info creatore",
				value: "info",
			},
			{
				name: "c - Calcolatrice",
				value: "calculator",
			},
		],
	});

	http.get(`http://localhost:3000?page=${encodeURIComponent(selectedPage)}`);

	console.log(`Pagina scelta: ${selectedPage}`);
	console.log(`Apri: http://localhost:3000?page=${selectedPage}`);
});
