const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

const videogames = [
	{
		id: 1,
		titolo: "The Legend of Zelda: Breath of the Wild",
		piattaforma: "Nintendo Switch",
	},
	{ id: 2, titolo: "God of War", piattaforma: "PlayStation 4" },
	{ id: 3, titolo: "Halo Infinite", piattaforma: "Xbox Series X" },
	{ id: 4, titolo: "Minecraft", piattaforma: "PC" },
	{ id: 5, titolo: "Super Mario Odyssey", piattaforma: "Nintendo Switch" },
];

app.use(cors());

app.get("/api/giochi", (req, res) => {
	res.status(200).json(videogames);
});

app.get("/api/giochi/:id", (req, res) => {
	const gameId = Number(req.params.id);
	const game = videogames.find((videogame) => videogame.id === gameId);

	if (!game) {
		return res.status(404).json({ errore: "Gioco non trovato" });
	}

	res.status(200).json(game);
});

// Il metodo listen avvia il server e blocca la porta specificata
app.listen(PORT, () => {
	console.log("Processo server attivo sulla porta di rete:", PORT);
});
