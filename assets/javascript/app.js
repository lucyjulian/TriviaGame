// V A R I A B L E S //
var intervalId;
var clockRunning = false;
var stopwatch = {

    time: 30,
  
    reset: function() {
  
      stopwatch.time = 30;
      
      $("#display").text("00:30");

    },
    start: function() {
  
      // DONE: Use setInterval to start the count here and set the clock to running.
      if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
      }
    },
    stop: function() {
  
      // DONE: Use clearInterval to stop the count here and set the clock to not be running.
      clearInterval(intervalId);
      clockRunning = false;
    },
    count: function() {
  
      stopwatch.time--;

      var converted = stopwatch.timeConverter(stopwatch.time);
      console.log(converted);
  
      $("#display").text(converted);

      if (stopwatch.time === 0){
        outOfTime();
        }
    },
    timeConverter: function(t) {
  
      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);
  
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
  
      if (minutes === 0) {
        minutes = "00";
      }
      else if (minutes < 10) {
        minutes = "0" + minutes;
      }
  
      return minutes + ":" + seconds;
    }
  };

var allQuestions = {
    1: {
        question: "On how many continents are frogs found?",
        choices: ["2", "5", "6", "8"],
        answer: "6"
    },
    2: {
        question: "How can you tell the difference between a male and female frog?",
        choices: ["Female frogs nostrils are parallel to one another while male frog nostrils sit on an angle", "Male frogs don't have webbed feet", "Male frogs ears are bigger than their eyes", "There is no way to know with the naked eye"],
        answer: "Male frogs ears are bigger than their eyes"
    },
    3: {
        question: "How many different species of frogs are there?",
        choices: ["over 5000", "over 6500", "over 8000", "over 9500"],
        answer: "over 5000"
    },
    4: {
        question: "How do frogs drink water?",
        choices: ["They just absorb it through their skin", "Through their nostrils, kind of like the blowhole of a whale", "They lap it up with their tongue like a dog", "They just swallow it while they are swimming"],
        answer: "They just absorb it through their skin"
    },
    5: {
        question: "How do poison dart frogs get their poison?",
        choices: ["It is synthesized in their skin","It is synthesized in a gland in their neck", "They are born with a fixed reserve", "From eating poisonous bugs"],
        answer: "From eating poisonous bugs"
    }
};
var currentQuestionPosition = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var youRanOutOfTime = 0;


// F U N C T I O N S //

//pick a question and display the question and possible answers
function endOfGame(){
    $("#question").html("Hey! You made it to the end of the game...");
    $("#possibleAnswer1").html("You answered " + correctAnswers + " questions right!");
    $("#possibleAnswer2").html("but you got " + incorrectAnswers + " questions wrong...");
    $("#possibleAnswer3").html("You ran out of time " + youRanOutOfTime + " times.");
    $("#possibleAnswer4").html("Want to hop back to the beginning of the game?");
    $("#restart").html("Click here to play again!");
    $("#restart").on("click", function(){
        currentQuestionPosition = 0;
        correctAnswers = 0;
        incorrectAnswers = 0;
        displayQuestion();
        checkAnswer();
    })
}
function outOfTime() {
    youRanOutOfTime++;
    stopwatch.stop();
    $("#question").html("Oh no! You ran out of time!");
    $("#possibleAnswer1").html("The correct answer was");
    $("#possibleAnswer2").html("");
    $("#possibleAnswer3").html(allQuestions[currentQuestionPosition].answer);
    $("#possibleAnswer4").html("");
    setTimeout(displayQuestion, 4000);
}
function displayQuestion(){
    if (currentQuestionPosition < 5){
        stopwatch.reset();
        stopwatch.start();
        currentQuestionPosition++;
        $("#question").html(allQuestions[currentQuestionPosition].question);
        $("#possibleAnswer1").html(allQuestions[currentQuestionPosition].choices[0]);
        $("#possibleAnswer2").html(allQuestions[currentQuestionPosition].choices[1]);
        $("#possibleAnswer3").html(allQuestions[currentQuestionPosition].choices[2]);
        $("#possibleAnswer4").html(allQuestions[currentQuestionPosition].choices[3]);
        $("#restart").html("");
    } else {
        endOfGame();
    }
};
function wrongAnswer(){
    stopwatch.stop();
    incorrectAnswers++;
    $("#question").html("Rut roh you're WRONG :(");
    $("#possibleAnswer1").html("The correct answer was...");
    $("#possibleAnswer2").html(allQuestions[currentQuestionPosition].answer);
    $("#possibleAnswer3").html("...");
    $("#possibleAnswer4").html("Get ready to hop onto the next question...");
    setTimeout(displayQuestion, 4000);
}
function rightAnswer(){
    stopwatch.stop();
    correctAnswers++;
    $("#question").html("CORRECT!");
    $("#possibleAnswer1").html("Good job! Go you! It's true!");
    $("#possibleAnswer2").html(allQuestions[currentQuestionPosition].answer);
    $("#possibleAnswer3").html("...");
    $("#possibleAnswer4").html("Get ready to hop onto the next question...");
    setTimeout(displayQuestion, 4000);
}
function checkAnswer(){
    $("#possibleAnswer1").on("click", function(){
        if ((allQuestions[currentQuestionPosition].choices[0])===(allQuestions[currentQuestionPosition].answer)) {
            rightAnswer();
        } else {
            wrongAnswer();
        }
    });
    $("#possibleAnswer2").on("click", function(){
        if ((allQuestions[currentQuestionPosition].choices[1])===(allQuestions[currentQuestionPosition].answer)) {
            rightAnswer();
        } else {
            wrongAnswer();
        }
    });
    $("#possibleAnswer3").on("click", function(){
        if ((allQuestions[currentQuestionPosition].choices[2])===(allQuestions[currentQuestionPosition].answer)) {
            rightAnswer();
        } else {
            wrongAnswer();
        }
    });
    $("#possibleAnswer4").on("click", function(){
        if ((allQuestions[currentQuestionPosition].choices[3])===(allQuestions[currentQuestionPosition].answer)) {
            rightAnswer();
        } else {
            wrongAnswer();
        }
    });
}


// A C T I O N S //

displayQuestion();
checkAnswer();
