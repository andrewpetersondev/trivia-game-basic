var card = $("#quiz-area")

var questions = [
  {
    question: "What is the most populated city on Earth?",
    answers: ["Shanghai", "New York", "Istanbul", "Beijing"],
    correctAnswer: "Shanghai",
  },
  {
    question: "What country is Stonehenge located in?",
    answers: ["China", "Germany", "England", "France"],
    correctAnswer: "England",
  },
  {
    question: "Which of the following cities is furthest east?",
    answers: ["Boston", "San Juan", "Miami", "New York"],
    correctAnswer: "San Juan",
  },
  {
    question:
      "What is the only city in the United States to have a royal palace?",
    answers: ["Salt Lake City", "Portland", "Boston", "Honolulu"],
    correctAnswer: "Honolulu",
  },
  {
    question: "What is statistically the safest way to travel?",
    answers: ["Car", "Train", "Plane", "Boat"],
    correctAnswer: "Plane",
  },
  {
    question: "Which country contains 60% of the world's lakes?",
    answers: ["Canada", "USA", "Russia", "China"],
    correctAnswer: "Cananda",
  },
  {
    question:
      "An average person in which country consumes 22 pounds of chocolate every year?",
    answers: ["USA", "France", "Belgium", "Switzerland"],
    correctAnswer: "Switzerland",
  },
]

var timer

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function () {
    game.counter--
    $("#counter-number").html(game.counter)
    if (game.counter === 0) {
      console.log("time is up!")
      game.done()
    }
  },
  start: function () {
    timer = setInterval(game.countdown, 1000)
    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds </h2>"
    )
    $("#start").remove()

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>")
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append(
          "<input type='radio' name='question-" +
            i +
            "' value='" +
            questions[i].answers[j] +
            "'>" +
            questions[i].answers[j]
        )
      }
    }
    card.append("<button id='done'>Done</button>")
  },
  done: function () {
    var inputs = card.children("input:checked")
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++
      } else {
        game.incorrect++
      }
    }
    this.result()
  },
  result: function () {
    clearInterval(timer)
    $("#sub-wrapper h2").remove()
    card.html("<h2>All Done!</h2>")
    card.append("<h3>Correct Answers: " + this.correct + "</h3>")
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>")
  },
}

$(document).on("click", "#start", function () {
  game.start()
})

$(document).on("click", "#done", function () {
  game.done()
})
