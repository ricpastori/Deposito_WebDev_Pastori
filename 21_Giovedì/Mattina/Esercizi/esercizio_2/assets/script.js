const addButtons = document.querySelectorAll(".add-book-button");
const bookModal = document.getElementById("book-dialog");

for (button of addButtons) {
	button.addEventListener("click", () => {
		bookModal.showModal();
	});
}
