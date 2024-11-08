// Array of categories and questions
const categories = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5"
];

// Populate grid with question values
function loadBoard() {
    const grid = document.getElementById("grid");
    grid.innerHTML = ""; // Clear grid

    // Loop through each category
    for (let i = 0; i < categories.length; i++) {
        // Loop through point values
        for (let j = 1; j <= 5; j++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridItem.textContent = j * 100; // 100, 200, 300, 400, 500
            gridItem.dataset.category = categories[i];
            gridItem.dataset.value = j * 100;
            gridItem.onclick = () => showQuestion(gridItem);
            grid.appendChild(gridItem);
        }
    }
}

// Show the question in the modal
function showQuestion(gridItem) {
    const questionText = document.getElementById("question-text");
    questionText.textContent = `Question for ${gridItem.dataset.category}, ${gridItem.dataset.value} points`;
    document.getElementById("question-modal").style.display = "block";
}

// Close the question modal
function closeQuestionModal() {
    document.getElementById("question-modal").style.display = "none";
}

// Answer question (placeholder function)
function answerQuestion() {
    alert("Answer submitted!");
    closeQuestionModal();
}

// Initialize the board on page load
document.addEventListener("DOMContentLoaded", loadBoard);
