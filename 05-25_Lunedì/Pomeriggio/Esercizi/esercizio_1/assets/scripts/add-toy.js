const storageKey = "toys";

const toyForm = document.getElementById("toy-form");
const formMessage = document.getElementById("form-message");
const debugToysButton = document.getElementById("debug-toys-button");
const jsonUploadButton = document.getElementById("json-upload-button");
const toyJsonFile = document.getElementById("toy-json-file");

const debugToys = [
	{
		name: "Costruzioni colorate",
		category: "Costruzioni",
		price: "24.90",
		recommendedAge: "6+",
		available: "true",
	},
	{
		name: "Bambola arcobaleno",
		category: "Bambole",
		price: "18.50",
		recommendedAge: "4+",
		available: "true",
	},
	{
		name: "Camion dei pompieri",
		category: "Veicoli",
		price: "32.00",
		recommendedAge: "5+",
		available: "false",
	},
	{
		name: "Memory degli animali",
		category: "Educativi",
		price: "12.90",
		recommendedAge: "3+",
		available: "true",
	},
	{
		name: "Peluches orsetto",
		category: "Peluches",
		price: "15.00",
		recommendedAge: "0+",
		available: "false",
	},
];

toyForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const formData = new FormData(toyForm);
	const toy = {
		name: formData.get("name").trim(),
		category: formData.get("category"),
		price: formData.get("price"),
		recommendedAge: formData.get("recommendedAge").trim(),
		available: formData.get("available"),
	};
	const toys = getSavedToys(storageKey);

	toys.push(toy);
	localStorage.setItem(storageKey, JSON.stringify(toys));

	toyForm.reset();
	formMessage.textContent = "Giocattolo salvato correttamente.";
});

debugToysButton.addEventListener("click", () => {
	const toys = getSavedToys(storageKey);

	for (const toy of debugToys) {
		toys.push(toy);
	}

	localStorage.setItem(storageKey, JSON.stringify(toys));
	formMessage.textContent = "5 giocattoli preimpostati aggiunti correttamente.";
});

jsonUploadButton.addEventListener("click", () => {
	toyJsonFile.click();
	// Da fare: leggere il file JSON selezionato e salvare il giocattolo.
});

function getSavedToys(key) {
	const savedToys = localStorage.getItem(key);

	if (savedToys) {
		return JSON.parse(savedToys);
	}

	return [];
}
