$(document).ready(function () {
    // ========================== VARIABLES ========================================

    var questions = [
        {
            question: "What is the most populated city on Earth?",
            answers: ["Shanghai", "New York", "Istanbul", "Beijing"],
            correctAnswer: 0 // "Shanghai"
        },
        {
            question: "What country is Stonehenge located in?",
            answers: ["China", "Germany", "England", "France"],
            correctAnswer: 2 //  "England"
        },
        {
            question: "Which of the following cities is furthest east?",
            answers: ["Boston", "San Juan", "Miami", "New York"],
            correctAnswer: 1 //  "San Juan"
        },
        {
            question: "What is the only city in the United States to have a royal palace?",
            answers: ["Salt Lake City", "Portland", "Boston", "Honolulu"],
            correctAnswer: 3 // "Honolulu"
        },
        {
            question: "What is statistically the safest way to travel?",
            answers: ["Car", "Train", "Plane", "Boat"],
            correctAnswer: 2 // "Plane"
        },
        {
            question: "Which country contains 60% of the world's lakes?",
            answers: ["Canada", "USA", "Russia", "China"],
            correctAnswer: 0 // "Canada"
        },
        {
            question: "An average person in which country consumes 22 pounds of chocalate every year?",
            answers: ["USA", "France", "Belgium", "Switzerland"],
            correctAnswer: 3 // "Switzerland"
        }
    ];

    // COUNTER VARIABLES
    var correctAnswerCount = 0;
    var incorrectAnswerCount = 0;
    var unAnswerCount = 0;

    // TIMER VARIABLES
    var timer = 30;
    var intervalId;
    var isClockRunning = false;

    // ============================= FUNCTIONS ==================================================================

    function initializeGame() {
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
                answerButton.attr("value", j);
                answerButton.attr("name", i);
                answerDiv.append(answerButton);
                questionAnswerDiv.append(answerDiv);
            }
        };

        // hide the game display when the page loads
        $("#game-display").hide();
    }

    function endGame() {
        for (var i = 0; i < questions.length; i++) {
            var userPick = $("input[name = " + i + "]:checked").val();
            // console.log("user pick = " + userPick);
            if (!userPick) {
                unAnswerCount++;
                continue;
            }
            // if user picked correct answer
            if (questions[i].correctAnswer == userPick) {
                // console.log('correct', i);
                correctAnswerCount++;
            }
            else {
                // console.log("NOT correct", i);
                // console.log(questions[i]);
                // console.log(questions[i].correctAnswer);
                // console.log(userPick);
                incorrectAnswerCount++;
            }
        }

        stopTimer();
        $("#submitBtn").hide();

        $("#game-display").hide();
        displayResults();
        $("#results").show();
    }

    function displayResults() {
        $("#correct-count").html("Correct Answers : " + correctAnswerCount);
        $("#incorrect-count").html("Incorrect Answers : " + incorrectAnswerCount);
        $("#unanswered-count").html("Unanswered : " + unAnswerCount);
    }

    function startTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        isClockRunning = true;
    }

    // function to set pace of timer
    function decrement() {
        timer--;
        $("#timer").html("<h2> Time Remaining: " + timer + " Seconds </h2>");
        if (timer === 0) {
            endGame();
        }
    }

    function stopTimer() {
        clearInterval(intervalId);
    }

    // ===================================== PLAY GAME ============================================

    $("#submitBtn").hide();

    $("#results").hide();

    $("#start").on("click", function () {
        $("#start").hide();
        $("#game-display").show();
        startTimer();
        $("#submitBtn").show();
    });

    initializeGame();

    $("#submitBtn").on("click", function () {
        $("#submitBtn").hide();
        stopTimer();
        endGame();
    })

});