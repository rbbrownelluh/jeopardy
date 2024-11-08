
const questions = [
    [{question: "Category 1 - Question 1", points: 100}, {question: "Category 1 - Question 2", points: 200}, {question: "Category 1 - Question 3", points: 300}, {question: "Category 1 - Question 4", points: 400}, {question: "Category 1 - Question 5", points: 500}],
    [{question: "Category 2 - Question 1", points: 100}, {question: "Category 2 - Question 2", points: 200}, {question: "Category 2 - Question 3", points: 300}, {question: "Category 2 - Question 4", points: 400}, {question: "Category 2 - Question 5", points: 500}],
    [{question: "Category 3 - Question 1", points: 100}, {question: "Category 3 - Question 2", points: 200}, {question: "Category 3 - Question 3", points: 300}, {question: "Category 3 - Question 4", points: 400}, {question: "Category 3 - Question 5", points: 500}],
    [{question: "Category 4 - Question 1", points: 100}, {question: "Category 4 - Question 2", points: 200}, {question: "Category 4 - Question 3", points: 300}, {question: "Category 4 - Question 4", points: 400}, {question: "Category 4 - Question 5", points: 500}],
    [{question: "Category 5 - Question 1", points: 100}, {question: "Category 5 - Question 2", points: 200}, {question: "Category 5 - Question 3", points: 300}, {question: "Category 5 - Question 4", points: 400}, {question: "Category 5 - Question 5", points: 500}]
];

function loadGameBoard() {
    const grid = document.getElementById("grid");
    questions.forEach((category, i) => {
        category.forEach((item, j) => {
            const cell = document.createElement("div");
            cell.classList.add("grid-item");
            cell.textContent = item.points;
            cell.onclick = () => openQuestionModal(item.question, item.points);
            grid.appendChild(cell);
        });
    });
}

function openQuestionModal(questionText, points) {
    const modal = document.getElementById("question-modal");
    document.getElementById("question-text").textContent = questionText;
    modal.style.display = "block";
}

function closeQuestionModal() {
    document.getElementById("question-modal").style.display = "none";
}

function startFinalJeopardy() {
    alert("Starting Final Jeopardy!");
    // Additional logic for Final Jeopardy can go here.
}

window.onload = loadGameBoard;
