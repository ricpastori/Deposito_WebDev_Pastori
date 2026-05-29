const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3008;

// Attivazione della connessione asincrona verso la URI locale o Cloud Atlas
mongoose
	.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/corso_db")
	.then(() => console.log("Pipeline di comunicazione con MongoDB stabilita."))
	.catch((err) => console.error("Errore critico durante l'handshake:", err));

const ArticleSchema = new mongoose.Schema({
	name: { type: String, unique: true }, // Vincolo di obbligatorietà del dato
	price: { type: Number, required: true }, // Indice di univocità a livello database
	buyed: { type: Boolean, default: false },
});

// Generazione del Modello operativo vincolato alla collection 'utenti'
const Article = mongoose.model("Utente", ArticleSchema);

app.use(cors());
app.use(express.json());

app.get("/api/articles", async (req, res) => {
	try {
		// Sospensione locale della routine fino al recupero dei dati dal database
		const articlesList = await Article.find();
		res.status(200).json({
			status: status,
			message: "Articolo aggiunto alla wishlist",
			articolo: articlesList,
		});
	} catch (error) {
		// Intercettazione guasti per prevenire il crash incontrollato del demone server
		res.status(500).json({ errore: "Latenza database o query malformata" });
	}
});

app.post("/api/articles", async (req, res) => {
	try {
		// Istanziazione di un nuovo documento basato sul body della richiesta
		const newArticle = new Article(req.body);

		// Esecuzione della scrittura fisica asincrona all'interno della collection
		await newArticle.save();

		res.status(201).json(newArticle);
	} catch (error) {
		// Cattura fallimenti legati a violazioni di validazione dello schema
		res
			.status(400)
			.json({ errore: "Payload non conforme ai vincoli dello schema" });
	}
});

// Il metodo listen avvia il server e blocca la porta specificata
app.listen(PORT, () => {
	console.log("Processo server attivo sulla porta di rete:", PORT);
});
