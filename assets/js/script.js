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
let nextButton = document.getElementById('nextButton');
let gameEnd = document.getElementById('endGameScore');

// Event listeners for buttons
playButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);

// Quiz state variable
let currentQuestionIndex = 0;

// Start the quiz when Play Now button is clicked
function startGame() {
    instructionsArea.style.display = "none";
    questionBox.style.display = "block";
    correctAnswers = 0;
    incorrectAnswers = 0;
    showQuestionAndChoices();
}

// When the btn is clicked then the game must show the corect and incorect answers=0 and to show again the instructions menu
function restartGame() {
    instructionsArea.style.display = "block";
    questionBox.style.display = "none";
    correctDisplay.innerText = 0;
    incorrectDisplay.innerText = 0;
    currentQuestionIndex = 0;
    gameEnd.innerHTML = '';
    
}

// Display current question and answer choices
function showQuestionAndChoices() {
    // Adding the first question
    let indexQ = quizQuestions[currentQuestionIndex].question;
    // Representing the question to the div
    questionElement.innerHTML = indexQ
    // To clear previous choices
    answersContainer.innerHTML = '';
    // Adding the first choices and buttons for each choice
    let indexA = quizQuestions[currentQuestionIndex].choices;
    indexA.forEach(element => {
        let btn = document.createElement('button');
        btn.innerHTML = element;
        answersContainer.appendChild(btn);
        // To be every btn clickeable and after that to show function checkAnswer(selectedAnswer)
        btn.setAttribute('onclick', `checkAnswer('${element}')`);
    });
}

// Check selected answer
function checkAnswer(selectedAnswer) {
    // Adding the corect answer
    let correctAnswer = quizQuestions[currentQuestionIndex].answer;
    // If the selected answer it's = to the correct or incorect answer, to be added index +1 to the right span
    if (selectedAnswer === correctAnswer) {
        correctAnswers++;
        correctDisplay.innerText = correctAnswers;
    } else {
        incorrectAnswers++;
        incorrectDisplay.innerText = incorrectAnswers;
    }
    // Countinue with the next function to show the questions and answers
    nextQuestionAndChoices();
}

// Proceed to next question and choices
function nextQuestionAndChoices() {
    // Adding the next index in the array
    currentQuestionIndex++;
    // If statement to show if the index it's smaller and the length to show again function showQuestionAndChoices() for the next question and answer
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestionAndChoices();
    } else {
        finishQuiz()
    }
}

// Function to finish the quiz and to show the corect and incorect answers
function finishQuiz() {
    // Hiding the instructionsArea and questionBox
    instructionsArea.style.display = "none";
    questionBox.style.display = "none";
    // Creating new paragraph and giving content
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = `You Completed the Quiz!<br>Conngratilations!<br>Your Correct Answers are: ${correctAnswers}<br>Your Incorect Answers are: ${incorrectAnswers}`;
    gameEnd.appendChild(newParagraph);
}