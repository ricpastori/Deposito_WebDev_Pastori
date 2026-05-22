// Script dedicato alla pagina cani: qui tengo solo il filtro delle schede.
const filterButtons = document.querySelectorAll(".filter-button");
const dogProfiles = document.querySelectorAll(".dog-profile");

for (const button of filterButtons) {
	button.addEventListener("click", () => {
		// Con dataset leggo e controllo i data-attributes scritti nell'HTML.
		const selectedFilter = button.dataset.filter;

		for (const item of filterButtons) {
			item.classList.remove("active");
		}
		button.classList.add("active");

		for (const profile of dogProfiles) {
			// Nascondo solo le schede che non appartengono alla categoria scelta.
			if (selectedFilter === "all" || profile.dataset.category === selectedFilter) {
				profile.classList.remove("is-hidden");
			} else {
				profile.classList.add("is-hidden");
			}
		}
	});
}
