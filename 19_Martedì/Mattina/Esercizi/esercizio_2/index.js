const prompt = require("prompt-sync")();

function vowelBeginningWordsCounting(array) {
	let counting = 0;
	for (i = 0; i < array.length; i++) {
		const firstLetter = array[i].charAt(0);
		if (
			firstLetter.toLowerCase() === "a" ||
			firstLetter.toLowerCase() === "e" ||
			firstLetter.toLowerCase() === "i" ||
			firstLetter.toLowerCase() === "o" ||
			firstLetter.toLowerCase() === "u"
		) {
			counting += 1;
		}
	}
	return counting;
}

function findLongestWord(array) {
	let longestWord = array[0];
	for (i = 1; i < array.length; i++) {
		if (array[i].length >= array[i - 1].length) longestWord = array[i];
	}
	return longestWord;
}

function findShortestWord(array) {
	let shortestWord = array[0];
	for (i = 1; i < array.length; i++) {
		if (array[i].length <= array[i - 1].length) shortestWord = array[i];
	}
	return shortestWord;
}

function upperCaseWords(array) {
	const words = [];
	for (i = 0; i < array.length; i++) {
		words.push(array[i].toUpperCase());
	}
	return words;
}

let requestCycle = true;
const wordsList = [];
let wordsCounting = 0;

do {
	const input = prompt("Inserisci una parola: ");

	if (input.length === 0 || !Number.isNaN(Number(input))) {
		console.log("Parola non valida");
		// } else if (input.toLowerCase === "fine") {
	} else if (input === "fine") {
		requestCycle = false;
	} else {
		wordsList.push(input);
		wordsCounting += 1;
	}
} while (requestCycle === true);

console.log(`Parole inserite: ${wordsList}\n
  Numero totale di parole: ${wordsCounting}\n
  Parola più lunga: ${findLongestWord(wordsList)}\n
  Parola più corta: ${findShortestWord(wordsList)}\n
  Numero di parole che iniziano per vocale: ${vowelBeginningWordsCounting(wordsList)}\n
  Uppercase delle parole inserite: ${upperCaseWords(wordsList)}`);
