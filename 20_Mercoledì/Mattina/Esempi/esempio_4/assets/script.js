const toggleBtn = document.getElementById("btn-toggle");
const addBtn = document.getElementById("btn-add");
const removeBtn = document.getElementById("btn-remove");
const testo = document.getElementById("text");

toggleBtn.addEventListener("click", () => {
	// Aggiunge o rimuove la classe CSS
	testo.classList.toggle("highlight");
});

addBtn.addEventListener("click", () => {
	// Aggiunge la classe CSS
	testo.classList.add("highlight");
});

removeBtn.addEventListener("click", () => {
	// Rimuove la classe CSS
	testo.classList.remove("highlight");
});
