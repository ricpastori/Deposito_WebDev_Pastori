// Selezione del pulsante per cambiare tema.
const themeButton = document.getElementById("themeButton");
const body = document.body;

// Applica il tema salvato quando la pagina viene caricata.
if (localStorage.getItem("theme") === "dark") {
	body.classList.add("dark");
}

// Cambia tema e salva la scelta nel Local Storage.
themeButton.addEventListener("click", () => {
	body.classList.toggle("dark");

	if (body.classList.contains("dark")) {
		localStorage.setItem("theme", "dark");
	} else {
		localStorage.setItem("theme", "light");
	}
});
