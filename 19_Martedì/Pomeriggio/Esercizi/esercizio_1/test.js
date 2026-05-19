import promptSync from "prompt-sync";

const prompt = promptSync();

const name = prompt("Name: ");
console.log("You wrote:", name);
