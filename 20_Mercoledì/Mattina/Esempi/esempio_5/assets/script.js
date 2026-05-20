// Seleziono gli elementi HTML
const testo = document.getElementById("testo");
const btnColore = document.getElementById("btnColore");
const btnGrandezza = document.getElementById("btnGrandezza");
const btnSfondo = document.getElementById("btnSfondo");

// Cambio direttamente il colore del testo
btnColore.addEventListener("click", () => {
	testo.style.color = "red";
});

// Cambio direttamente la dimensione del
testo;
btnGrandezza.addEventListener("click", () => {
	testo.style.fontSize = "30px";
});

// Cambio direttamente il colore di sfondo
btnSfondo.addEventListener("click", () => {
	testo.style.backgroundColor = "yellow";
});
