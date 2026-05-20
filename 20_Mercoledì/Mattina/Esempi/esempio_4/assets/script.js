const bottone = document.getElementById("btn");
const testo = document.getElementById("text");

bottone.addEventListener("click", () => {
	// Aggiunge o rimuove la classe CSS
	testo.classList.toggle("highlight");
});
