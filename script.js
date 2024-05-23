const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const questions = [
	{ question: "Test?", answer: "Test" }
];

const answer_input = document.getElementById("answer-input");
const score_element = document.getElementById("score");

let active_questions = [{ question: questions[0], position: 0 }];
let speed = 0.1;
let score = 0;

const start_time = Date.now();

// ctx.fillStyle = "red";
// ctx.fillRect(10, 10, 150, 100);
document.getElementById("form").onsubmit = () => {
	let input_answer = answer_input.value;
	let matching_index = active_questions.findIndex((question) => question.question.answer == input_answer)
	if (matching_index != -1) {
		active_questions.splice(matching_index, 1);
		score += 100;
	}
};
try {
	function update() {
		const time_running = Date.now() - start_time;

		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		for (let i = 0; i < active_questions.length; i++) {
			ctx.fillStyle = "#f7f9fc";
			ctx.fillRect(10, active_questions[i].position + 10, 75, 50);
			ctx.fillStyle = "black";
			ctx.font = "16px serif";
			ctx.fillText(active_questions[i].question.question, 10, active_questions[i].position + 25);
			active_questions[i].position += speed;
		}

		if (time_running % 1000 == 0) {
			alert("here")
			active_questions.push(random_question)
		}
		requestAnimationFrame(update);
	}

	update();
} catch (error) {
	alert(error)
}

function random_question() {
	try {
		let random = Math.random();

		let index = Math.floor(random * (questions.length - 1));
		return questions[index];
	}
	catch (error) {
		alert(error)
	}
}
