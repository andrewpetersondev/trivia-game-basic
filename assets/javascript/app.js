$(document).ready(function () {
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

    $("#submitBtn").hide();
    $("#results").hide();

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
                answerButton.attr("value", j); // change this to work with strings
                // answerButton.attr("button-value", questions[i].answers[j]);
                answerDiv.append(answerButton);
                questionAnswerDiv.append(answerDiv);

            }

        };

        $("#game-display").hide();
    }



    // check if answer is correct
    function checkAnswers() {
        userAnswer = $(this).attr("value");
        if (userAnswer === questions[i].correctAnswer) {
            correctAnswerCount++;
            console.log("correct answer count = " + correctAnswerCount);
        }
    }

    // game over
    // function gameOver () {}

    // function to start timer
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
            stopTimer();
            // lockGame();// ?
            // gameOver();
        }
    }

    // function to stop timer
    function stopTimer() {
        clearInterval(intervalId);
    }

    // ===================================== PLAY GAME ============================================


    // click start button
    $("#start").on("click", function () {
        $("#start").hide();
        $("#game-display").show();
        startTimer();
        $("#submitBtn").show();
    });



    displayQuestions();

    // pick an answer
    $(".answer-choice").on("click", function () {

        // create a variable to hold the user answer
        var userAnswer = $(this).val();
        console.log("You clicked = " + userAnswer);

        // checkAnswers();

    })

    $("#submitBtn").on("click", function () {
        $("#results").show();
    })

});