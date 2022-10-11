const options = {
	negotiationPhases: 5,
	roundsPerPhase: 5,
	numberOfTransformations: 2,
	displayDuration: 2000,
};

var clickedItemId = null;

function random(min, max) {
	return Math.ceil(Math.random * (max - min) + min);
}

async function setTimeoutAsync(func, timeoutMs) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			func();
			resolve();
		}, timeoutMs);
	});
}

function getRandomTransformation() {
	return {
		transform: (x) => x * 2,
		displayValue: "x2",
	};
}

async function runGame() {
	console.log("run game");
	drawSalary(salary);
	for (let phase = 0; phase < options.negotiationPhases; phase++) {
		let salary = await getSalary(phase);
		for (let round = 0; round < options.roundsPerPhase; round++) {
			const transformations = {};
			console.log("starting new round");
			for (let transformation = 0; transformation < options.numberOfTransformations; transformation++) {
				const randomTransformation = addTransformation();
				transformations[transformation.id] = randomTransformation;
				displayItem(randomTransformation.id, randomTransformation.displayValue);
			}
			await setTimeoutAsync(() => {}, options.displayDuration);
			clear();

			let currentSalary = salary;
			if (clickedItemId) {
				clickedTransformation = transformations[clickedItemId];
				const resultingSalary = clickedTransformation.transform(salary);
				currentSalary = resultingSalary;
			}
			setSalary(phase, currentSalary);
			salary = currentSalary;
		}
	}

	restart();
}

function drawSalary(salary) {
	const salaryContainer = document.getElementById("salary");
	salaryContainer.innerHTML = salary;
}

let itemId = 0;
function addTransformation() {
	itemId++;
	const transformation = getRandomTransformation();
	const transformationItem = {
		tranform: transformation.transform,
		id: itemId,
		displayValue: transformation.displayValue,
	};
	return transformationItem;
}

function displayItem(itemId, displayValue) {
	let container = document.getElementById("container");

	const documentWidth = document.documentElement.clientWidth;
	const documentHeight = document.documentElement.clientHeight;

	let popup = document.createElement("div");
	popup.className = "popup";
	popup.style.left = random(0, documentWidth) + "px";
	popup.style.top = random(0, documentHeight) + "px";
	popup.setAttribute("data-itemId", itemId);
	popup.innerHTML = displayValue;

	container.appendChild(popup);

	popup.addEventListener("click", handleClick);
}

function clear() {
	const container = document.getElementById("container");
	container.innerHTML = "";
}

function handleClick(event) {
	clickedItemId = event.target.dataset.itemId;
}

function restart() {
	runGame();
}

document.addEventListener("DOMContentLoaded", function (event) {
	runGame();
});

const API_URL = "http://localhost:3000";

async function getSalary(phase) {
	const result = await fetch(`${API_URL}/salary/${phase}`);
	const json = await result.json();

	const { salary } = json;

	return salary;
}

async function setSalary(phase, salary) {
	const result = await fetch(`${API_URL}/salary/${phase}`, {
		method: "POST",
		body: JSON.stringify({ phase, salary }),
	});
	const json = await result.json();
}
