// Questions, options and asnwers array
const quizQuestions = [{
        question: "Who promised that they would never lose another fight until they defeated a certain someone?",
        choices: ["Luffy", "Sanji", "Zoro", "Usopp"],
        answer: "Zoro"
    },
    {
        question: "How did Luffy get the scar under his eye?",
        choices: ["Atacked by bandits", "Fight with animals", "Himself", "Fight with another villager"],
        answer: "Himself"
    },
    {
        question: "Who was the first member of the SH crew to try and recruit a new member besides Luffy?",
        choices: ["Nami", "Sanji", "Zoro", "Usopp"],
        answer: "Nami"
    },
    {
        question: "What made Crocodile join Luffy's 'Rescue Ace Crew'?",
        choices: ["Luffy", "Jinbei", "Ace", "Ivancov"],
        answer: "Ace"
    },
    {
        question: "Who was the first marine Admiral to be shown in the series?",
        choices: ["Akainu", "Kizaru", "Aokiji", "Sengoku"],
        answer: "Aokiji"
    },
    {
        question: "Who gave Shanks the scar on his eye?",
        choices: ["Dragon", "Marshall D", "Akainu", "Himself"],
        answer: "Marshall D"
    },
    {
        question: "How many crewmates did Luffy say he wanted at the beginning of the series?",
        choices: ["9", "13", "10", "15"],
        answer: "10"
    },
    {
        question: "Who said- Zoro should cut diamond next?",
        choices: ["Luffy", "Mihawk", "Kuina", "Daz Bones"],
        answer: "Kuina"
    },
    {
        question: "Who was the first recruit of the SH crew?",
        choices: ["Nami", "Sanji", "Zoro", "Usopp"],
        answer: "Zoro"
    },
    {
        question: "How many confirmed D clan members are there?",
        choices: ["8", "14", "11", "18"],
        answer: "14"
    },
];
// Calling the Dom Elements by their ids
let instructionsArea = document.getElementById('instructionsArea');
let playButton = document.getElementById('playButton');
let questionBox = document.getElementById('questionBox');
let questionElement = document.getElementById('question');
let answersContainer = document.getElementById('answersContainer');
let restartButton = document.getElementById('restartButton');
let correctDisplay = document.getElementById('correct');
let incorrectDisplay = document.getElementById('incorrect');

// Event listeners for buttons
playButton.addEventListener('click', startGame);

// Quiz state variables
let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

// Start the quiz when Play Now button is clicked
function startGame() {
    instructionsArea.style.display = "none";
    questionBox.style.display = "block";
    correctAnswers = 0;
    incorrectAnswers = 0;
    score = 0;
    correctDisplay.innerText = correctAnswers;
    incorrectDisplay.innerText = incorrectAnswers;
    showQuestionAndChoices();
    
}


function restartGame() {
    
}


function displayScore() {

}



function showQuestionAndChoices() {
   
}



function checkAnswer() {

}

function nextQuestion() {

}

function finishQuiz() {

}