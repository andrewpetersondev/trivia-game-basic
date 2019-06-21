// global variables
// ======================================================================================================================

var questions = [
    {
        question: "What is the most populated city on Earth?",
        answers: ["Shanghai", "New York", "Istanbul", "Beijing"],
        correctAnswer: 0
    },
    {
        question: "What country is Stonehenge located in?",
        answers: ["China", "Germany", "England", "France"],
        correctAnswer: 2
    },
    {
        question: "Which of the following cities is furthest east?",
        answers: ["Boston", "San Juan", "Miami", "New York"],
        correctAnswer: 1
    },
    {
        question: "What is the only city in the United States to have a royal palace?",
        answers: ["Salt Lake City", "Portland", "Boston", "Honolulu"],
        correctAnswer: 3
    },
    {
        question: "What is statistically the safest way to travel?",
        answers: ["Car", "Train", "Plane", "Boat"],
        correctAnswer: 2
    },
    {
        question: "Which country contains 60% of the world's lakes?",
        answers: ["Canada", "USA", "Russia", "China"],
        correctAnswer: 0
    },
    {
        question: "An average person in which country consumes 22 pounds of chocolate every year?",
        answers: ["USA", "France", "Belgium", "Switzerland"],
        correctAnswer: 3
    }
];

// game object
// var game = {}

// counters
var correctAnswerCount = 0;
var incorrectAnswerCount = 0;
var unAnswerCount = 0;

// timer variables
var timer = 30;
var intervalId;
var isClockRunning = false;

// functions
// ======================================================================================================================

function startGame() {

    // select the div with matching id 
    var gameDisplay = $("#game-questions-display");

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
            answerButton.attr("value", j);
            answerButton.attr("name", i);
            answerDiv.append(answerButton);
            questionAnswerDiv.append(answerDiv);
        }
    };

    // hide the game display when the page loads
    $("#game-questions-display").hide();
};

function endGame() {
    // loop through questions 
    // on each loop store selected answer as userPick then check if answer is correct
    for (var i = 0; i < questions.length; i++) {

        var userPick = $("input[name = " + i + "]:checked").val();

        // if user does not select an answer
        if (!userPick) {
            unAnswerCount++;
            continue;
        }
        // if user picked correct answer
        if (questions[i].correctAnswer == userPick) {
            // console.log('correct', i);
            correctAnswerCount++;
        }
        // if user picks incorrect answer
        else {
            incorrectAnswerCount++;
        }
    }

    stopTimer();
    $("#submitBtn").hide();

    $("#game-questions-display").hide();
    displayResults();
    $("#results").show();
};

// function to display results to html 
function displayResults() {
    $("#correct-count").html("Correct Answers : " + correctAnswerCount);
    $("#incorrect-count").html("Incorrect Answers : " + incorrectAnswerCount);
    $("#unanswered-count").html("Unanswered : " + unAnswerCount);
};

// function to start timer
function startTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    isClockRunning = true;
};

// function to set pace of timer
function decrement() {
    timer--;
    $("#timer").html("<h2> Time Remaining: " + timer + " Seconds </h2>");
    if (timer === 0) {
        endGame();
    }
};

// function to stop timer
function stopTimer() {
    clearInterval(intervalId);
};

// main processes
// ======================================================================================================================
$(document).ready(function () {

    // on page load
    startGame();
    $("#submitBtn").hide();
    $("#results").hide();

    // clicking start 
    $("#start").on("click", function () {
        $("#start").hide();
        $("#game-questions-display").show();
        startTimer();
        $("#submitBtn").show();
    });

    // clicking submit
    $("#submitBtn").on("click", function () {
        $("#submitBtn").hide();
        stopTimer();
        endGame();
    });

});

