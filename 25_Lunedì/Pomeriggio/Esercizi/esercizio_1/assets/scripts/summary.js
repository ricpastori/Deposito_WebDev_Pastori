const storageKey = "toys";

showSummary(storageKey);

function showSummary(key) {
	const totalToys = document.getElementById("total-toys");
	const averagePrice = document.getElementById("average-price");
	const categoryList = document.getElementById("category-list");
	const unavailableList = document.getElementById("unavailable-list");
	const savedToys = localStorage.getItem(key);
	let toys = [];
	const categories = [];
	const unavailableToys = [];
	let totalPrice = 0;

	if (savedToys) {
		toys = JSON.parse(savedToys);
	}

	for (const toy of toys) {
		totalPrice += Number(toy.price);

		if (toy.category && !categories.includes(toy.category)) {
			categories.push(toy.category);
		}

		if (toy.available === "false") {
			unavailableToys.push(toy.name);
		}
	}

	totalToys.textContent = toys.length;

	if (toys.length > 0) {
		averagePrice.textContent = `${(totalPrice / toys.length)
			.toFixed(2)
			.replace(".", ",")} euro`;
	} else {
		averagePrice.textContent = "0,00 euro";
	}

	categoryList.innerHTML = "";

	if (categories.length > 0) {
		for (const category of categories) {
			categoryList.innerHTML += `<li>${category}</li>`;
		}
	} else {
		categoryList.innerHTML = "<li>Ancora nessuna categoria</li>";
	}

	unavailableList.innerHTML = "";

	if (unavailableToys.length > 0) {
		for (const toyName of unavailableToys) {
			unavailableList.innerHTML += `<li>${toyName}</li>`;
		}
	} else {
		unavailableList.innerHTML = "<li>Nessun prodotto non disponibile</li>";
	}
}
