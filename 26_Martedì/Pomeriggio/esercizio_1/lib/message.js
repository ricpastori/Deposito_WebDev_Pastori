const fs = require("fs");

function show(fileName) {
	const filePath = `./assets/${fileName}`;
	return fs.readFileSync(filePath, "utf-8");
}

module.exports = show;
