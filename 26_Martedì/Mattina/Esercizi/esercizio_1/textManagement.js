module.exports = {
	toUpperCase,
	charactersNumberIncludingSpaces,
	charactersNumberExcludingSpaces,
	contains,
};

function toUpperCase(text) {
	return text.toUpperCase();
}

function charactersNumberIncludingSpaces(text) {
	return text.trim().length;
}

function charactersNumberExcludingSpaces(text) {
	const strWithoutSpaces = text.replaceAll(" ", "");
	return strWithoutSpaces.length;
}

function contains(letter, text) {
	if (text.includes(letter)) {
		return "Yes";
	} else {
		return "No";
	}
}
