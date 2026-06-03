// Seleziono elementi HTML
const box = document.getElementById("box");
const btnBordo = document.getElementById("btnBordo");
const btnRotazione = document.getElementById("btnRotazione");
const btnNascondi = document.getElementById("btnNascondi");

btnBordo.addEventListener("click", () => {
	// Cambio spessore e colore bordo
	box.style.border = "5px dashed red";
});

btnRotazione.addEventListener("click", () => {
	// Ruoto il box
	box.style.transform = "rotate(20deg)";
});

btnNascondi.addEventListener("click", () => {
	// Nascondo il box
	box.style.visibility = "hidden";
	setTimeout(2000, () => {
		box.style.visibility = "visible";
	});
});
