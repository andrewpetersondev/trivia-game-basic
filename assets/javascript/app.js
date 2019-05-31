// 1. click button to start game
// all game content is created and displayed dynamically
// 2. page shows timer, all questions in sequential order and answers with radio buttons
// 2b. player can only select one answer per question
// 3. end game by 1 of the following
// 3b. when time remaining = 0
// 3c. click done button
// 4. display results (All Done!Correct Answer Count, Incorrect Answer Count, Unanswered Count)

// ========================== VARIABLES ========================================

var questions = [
    {
        question: "What is the most populated city on Earth?",
        answers: ["Shanghai", "New York", "Istanbul", "Beijing"],
        correctAnswer: "Shanghai"
    },
    {
        question: "What country is Stonehenge located in?",
        answers: ["China", "Germany", "England", "France"],
        correctAnswer: "England"
    },
    {
        question: "Which of the following cities is furthest east?",
        answers: ["Boston", "San Juan", "Miami", "New York"],
        correctAnswer: "San Juan"
    },
    {
        question: "What is the only city in the United States to have a royal palace?",
        answers: ["Salt Lake City", "Portland", "Boston", "Honolulu"],
        correctAnswer: "Honolulu"
    },
    {
        question: "What is statistically the safest way to travel?",
        answers: ["Car", "Train", "Plane", "Boat"],
        correctAnswer: "Plane"
    },
    {
        question: "Which country contains 60% of the world's lakes?",
        answers: ["Canada", "USA", "Russia", "China"],
        correctAnswer: "Canada"
    },
    {
        question: "An average person in which country consumes 22 pounds of chocalate every year?",
        answers: ["USA", "France", "Belgium", "Switzerland"],
        correctAnswer: "Switzerland"
    }
];

// COUNTER VARIABLES
var correctAnswerCount = 0;
var incorrectAnswerCount = 0;
var unAnswerCount = questions.length; // = 0;
var questionIndex;
// TIMER VARIABLES
var timer = 30;
var intervalId;
var isClockRunning = false;
// USER INPUT VARIABLES
var userAnswer;

// display questions and answers dynamically
function displayQuestions() {

    // select the div with matching id 
    var gameDisplay = $("#game-display");

    // 1. create container to hold question and answer 
    for (var i = 0; i < questions.length; i++) {

        // create a div container for each question and answer
        var questionAnswerDiv = $("<div>");
        questionAnswerDiv.addClass("object-container");
        gameDisplay.append(questionAnswerDiv);

        var questionDiv = $("<div>" + questions[i].question + "</div>");
        questionDiv.addClass("question");
        questionAnswerDiv.append(questionDiv);


        // 2. create a container to hold answers and insert into questionAnswerDiv
        for (var j = 0; j < questions[i].answers.length; j++) {
            var answerDiv = $("<div>" + questions[i].answers[j] + "</div>");
            answerDiv.addClass("answers");
            // dynamically create input buttons
            var answerButton = $("<input>");
            answerButton.addClass("answer-choice");
            answerButton.attr("type", "radio");
            answerDiv.append(answerButton);
            questionAnswerDiv.append(answerDiv);
            // answerButton.attr("button-value", j); // change this to work with strings
            //     answerButton.attr("button-value", questions[i].answers[j]);
            
        }

    };

}



// check if answer is correct
function checkAnswers() {
    userAnswer = $(this).attr("button-value");
    if (userAnswer === questions[i].correctAnswer) {
        correctAnswerCount++;
        console.log("correct answer count = " + correctAnswerCount);
    }
}

// ===================================== PLAY GAME ============================================

// click start button
$("#start").on("click", function () {
    $("#start").hide();
    displayQuestions();
});

// pick an answer
$(".answer-choice").on("click", function () {

    checkAnswers();
})