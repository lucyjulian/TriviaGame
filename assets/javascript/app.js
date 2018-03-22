// V A R I A B L E S //
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
    }
};
var currentQuestionPosition = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;


// F U N C T I O N S //

//pick a question and display the question and possible answers
function endOfGame(){
    $("#question").html("Hey! You made it to the end of the game...");
    $("#possibleAnswer1").html("You answered this many questions right..." + correctAnswers);
    $("#possibleAnswer2").html("and this many questions wrong..." + incorrectAnswers);
    $("#possibleAnswer3").html("Do you wanna play again?");
    $("#possibleAnswer4").html("click here to hop back to the beginning of the game!");
    $("#possibleAnswer4").on("click", function(){
        currentQuestionPosition = 0;
        correctAnswers = 0;
        incorrectAnswers = 0;
        displayQuestion();
        checkAnswer();
    })
}
function displayQuestion(){
    if (currentQuestionPosition < 4){
        currentQuestionPosition++;
        $("#question").html(allQuestions[currentQuestionPosition].question);
        $("#possibleAnswer1").html(allQuestions[currentQuestionPosition].choices[0]);
        $("#possibleAnswer2").html(allQuestions[currentQuestionPosition].choices[1]);
        $("#possibleAnswer3").html(allQuestions[currentQuestionPosition].choices[2]);
        $("#possibleAnswer4").html(allQuestions[currentQuestionPosition].choices[3]);
    } else {
        endOfGame();
    }
};
function wrongAnswer(){
    incorrectAnswers++;
    $("#question").html("you got it WRONG");
    $("#possibleAnswer1").html("The correct answer");
    $("#possibleAnswer2").html("was");
    $("#possibleAnswer3").html(allQuestions[currentQuestionPosition].answer);
    $("#possibleAnswer4").html("!!!!!!!!");
    setTimeout(displayQuestion, 4000);
}
function rightAnswer(){
    correctAnswers++;
    $("#question").html("you got it RIGHT");
    $("#possibleAnswer1").html("Good job!");
    $("#possibleAnswer2").html("Go you! It's true:");
    $("#possibleAnswer3").html(allQuestions[currentQuestionPosition].answer);
    $("#possibleAnswer4").html("Get ready to hop onto the next question!!!!!!!!");
    setTimeout(displayQuestion, 4000);
}
function checkAnswer(){
    $("#possibleAnswer1").on("click", function(){
        if ((allQuestions[currentQuestionPosition].choices[0])===(allQuestions[currentQuestionPosition].answer)) {
            correctAnswers++;
            rightAnswer();
        } else {
            incorrectAnswers++;
            wrongAnswer();
        }
    });
    $("#possibleAnswer2").on("click", function(){
        if ((allQuestions[currentQuestionPosition].choices[1])===(allQuestions[currentQuestionPosition].answer)) {
            correctAnswers++;
            rightAnswer();
        } else {
            incorrectAnswers++;
            wrongAnswer();
        }
    });
    $("#possibleAnswer3").on("click", function(){
        if ((allQuestions[currentQuestionPosition].choices[2])===(allQuestions[currentQuestionPosition].answer)) {
            correctAnswers++;
            rightAnswer();
        } else {
            incorrectAnswers++;
            wrongAnswer();
        }
    });
    $("#possibleAnswer4").on("click", function(){
        if ((allQuestions[currentQuestionPosition].choices[3])===(allQuestions[currentQuestionPosition].answer)) {
            correctAnswers++;
            rightAnswer();
        } else {
            incorrectAnswers++;
            wrongAnswer();
        }
    });
}



// A C T I O N S //

displayQuestion();
checkAnswer();