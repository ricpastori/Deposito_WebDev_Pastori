// Comunque qua, per fare gli extra, stavo già pensando al dinamismo e stavo andando a vedere il sessionStorage

const addButton = document.getElementById("add-activity-button");
const moveButtons = document.getElementsByClassName("move-activity-button");
const removeButtons = document.getElementsByClassName("remove-activity-button");
const todoList = document.getElementById("todo-list");
const completedList = document.getElementById("completed-list");

function tryAddActivity(activityName) {
	if (activityName !== "") {
		// Ho iniziato la struttura per fare gli extra. So che if (true) non ha senso
		// if (activityList.contains(activityName) === false) {
		if (true) {
			createActivity(activityName);
		} else {
			alert("L'attività che vuoi aggiungere è già nella lista");
		}
	} else {
		alert("Non hai inserito il nome dell'attività");
	}
}

function createActivity(activityName) {
	const activityCard = document.createElement("li");
	const activityFooter = document.createElement("div");
	const activityBody = document.createElement("div");
	const moveButton = document.createElement("button");
	const removeButton = document.createElement("button");
	const activity = document.createElement("p");

	activity.innerText = activityName;

	activityCard.classList.add("card", "todo-card");
	activityFooter.classList.add("activity-header");
	activityBody.classList.add("activity-body");

	moveButton.classList.add("move-activity-button");
	moveButton.innerText = "< - >";
	removeButton.classList.add("remove-activity-button");
	removeButton.innerText = "X";

	activityFooter.appendChild(moveButton);
	activityFooter.appendChild(removeButton);

	activityBody.appendChild(activity);

	activityCard.appendChild(activityBody);
	activityCard.appendChild(activityFooter);
	todoList.appendChild(activityCard);

	updateActivityList();
}

function moveActivity(card) {
	completedList.appendChild(card);

	card.classList.toggle("todo-card");
	card.classList.toggle("completed-card");
}

function removeActivity() {}

function updateActivityList() {}

addButton.addEventListener("click", () => {
	const input = document.getElementById("activity-input");
	tryAddActivity(input.value);
	input.value = "";
});
moveButton.addEventListener("click", () => {
	moveActivity();
});
removeButton.addEventListener("click", () => {
	removeActivity();
});
