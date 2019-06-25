// global variables
// ======================================================================================================================
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
        correctAnswer: "Cananda"
    },
    {
        question: "An average person in which country consumes 22 pounds of chocolate every year?",
        answers: ["USA", "France", "Belgium", "Switzerland"],
        correctAnswer: "Switzerland"
    }
];

var game = {
    // variables
    correctAnswerCount: 0,
    incorrectAnswerCount: 0,
    unAnswerCount: 0,
    counter: 30,
    // method : countdown
    countdown: function() {
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter <= 0) {
            console.log("time is up!");
            game.done();
        }
    },
    // method : start
    start: function() {
        timer = setInterval(game.countdown, 1000);
        $("#game-container").prepend("<h2> Time Remaining: <span id='counter'>30 </span> Seconds </h2>");
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#game-container").append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#game-container").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
            }
        }
    },
    // method : done
    done: function() {
        $.each($("input[name='question-0':checked"), function() {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correctAnswerCount++;
            } else {
                game.incorrectAnswerCount++;
            }
        });
        this.result();
    },
    result: function() {
        clearInterval(timer);
        $("#game-container h2").remove();
        $("#game-container").html("<h2>All Done!</h2>");
        $("#game-container").append("<h3>Correct Answers: " + this.correctAnswerCount + "</h3>");
        $("#game-container").append("<h3>Incorrect Answers: " + this.incorrectAnswerCount + "</h3>");
        $("#game-container").append("<h3>Unanswered : " + questions.length - (this.incorrectAnswerCount + this.correctAnswerCount) + "</h3>");
    }
};

$("#start").on("click", function(){
    game.start();
})

// // timer variables
// // var timer = 30;
// var intervalId;
// var isClockRunning = false;
// // functions
// // ======================================================================================================================
// function startGame() {
//     // select the div with matching id 
//     var gameDisplay = $("#game-questions-display");
//     // 1. create container to hold question and answer 
//     for (var i = 0; i < questions.length; i++) {
//         // create a div container for each question and answer
//         var questionAnswerDiv = $("<div>");
//         questionAnswerDiv.addClass("object-container");
//         gameDisplay.append(questionAnswerDiv);
//         var questionDiv = $("<div>" + questions[i].question + "</div>");
//         questionDiv.addClass("question");
//         questionAnswerDiv.append(questionDiv);
//         // 2. create a container to hold answers and insert into questionAnswerDiv
//         for (var j = 0; j < questions[i].answers.length; j++) {
//             var answerDiv = $("<div>" + questions[i].answers[j] + "</div>");
//             answerDiv.addClass("answers");
//             // dynamically create input buttons
//             var answerButton = $("<input>");
//             answerButton.addClass("answer-choice");
//             answerButton.attr("type", "radio");
//             answerButton.attr("value", j);
//             answerButton.attr("name", i);
//             answerDiv.append(answerButton);
//             questionAnswerDiv.append(answerDiv);
//         }
//     };
//     // hide the game display when the page loads
//     $("#game-questions-display").hide();
// };
// function endGame() {
//     // loop through questions 
//     // on each loop store selected answer as userPick then check if answer is correct
//     for (var i = 0; i < questions.length; i++) {
//         var userPick = $("input[name = " + i + "]:checked").val();
//         // if user does not select an answer
//         if (!userPick) {
//             unAnswerCount++;
//             continue;
//         }
//         // if user picked correct answer
//         if (questions[i].correctAnswer == userPick) {
//             // console.log('correct', i);
//             correctAnswerCount++;
//         }
//         // if user picks incorrect answer
//         else {
//             incorrectAnswerCount++;
//         }
//     }
//     stopTimer();
//     $("#submitBtn").hide();
//     $("#game-questions-display").hide();
//     displayResults();
//     $("#results").show();
// };
// // function to display results to html 
// function displayResults() {
//     $("#correct-count").html("Correct Answers : " + correctAnswerCount);
//     $("#incorrect-count").html("Incorrect Answers : " + incorrectAnswerCount);
//     $("#unanswered-count").html("Unanswered : " + unAnswerCount);
// };
// // function to start timer
// function startTimer() {
//     clearInterval(intervalId);
//     intervalId = setInterval(decrement, 1000);
//     isClockRunning = true;
// };
// // function to set pace of timer
// function decrement() {
//     timer--;
//     $("#timer").html("<h2> Time Remaining: " + timer + " Seconds </h2>");
//     if (timer === 0) {
//         endGame();
//     }
// };
// // function to stop timer
// function stopTimer() {
//     clearInterval(intervalId);
// };
// main processes
// ======================================================================================================================
// $(document).ready(function () {
//     // on page load
//     startGame();
//     $("#submitBtn").hide();
//     $("#results").hide();
//     // clicking start 
//     $("#start").on("click", function () {
//         $("#start").hide();
//         $("#game-questions-display").show();
//         startTimer();
//         $("#submitBtn").show();
//     });
//     // clicking submit
//     $("#submitBtn").on("click", function () {
//         $("#submitBtn").hide();
//         stopTimer();
//         endGame();
//     });
// });
