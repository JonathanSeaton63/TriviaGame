var correct = 0;
var incorrect = 0; 
var questions = [
    {
        question: "1. Who is the greatest Jazz player of all time?",
        answerChoices: ["Raja Bell", "Gordan Gerrick", "Karl Malone", "Joe Ingles"],
        correctAnswer: "Joe Ingles"
    },
    {
        question: "2. What year did the Jazz go to the NBA Finals?",
        answerChoices: ["97,98", "96,97", "98,08", "They haven't at all."],
        correctAnswer: "97,98"
    },
    {
        question: "3. What Jazz player was in the 2017 NBA All-Star game?",
        answerChoices: ["Rudy Gobert", "Derrick Favors", "Joel Bolomboy", "Gordon Hayward"],
        correctAnswer: "Gordon Hayward"
    },
    {
        question: "4. What year did the Jazz come to Utah?",
        answerChoices: ["1972", "1991", "1979", "1989"],
        correctAnswer: "1979"
    }
]
$(document).ready(function () {
    $('#start').on('click', function () {
        $('.jazzNote').hide();
        $('.display-3').hide();
        var timer = $("<h1>")
        timer.text("Time Remaining: ")
        var timeLeft = $("<span>")
        $(timeLeft).attr("id", "timer");
        timer.append(timeLeft);
        $(".display-3").replaceWith(timer);
        var count = 30;
        // var intId = function counter() { 
        //     document.getElementById("#time-left")
        //     count++;
        // }
        $("#timer").text(count)
        setInterval(function(){
             count --; 
             $("#timer").text(count)
             if (count === 0) {
                 scoreGame();
                 clearInterval(fucntion())
             }
             
            }, 1000);

            
            startGame();
    });
    function scoreGame() {
        var radioBtn = $('input:checked');
        console.log(radioBtn);
        var score = 0;
        for (var j = 0; j < radioBtn.length; j++) {
            if ($(radioBtn[j]).attr("choice") === questions[j].correctAnswer) {
                score+=1;
            }
        }
        alert("you win you got" + score);
    }
    function makeButton() {
        var newBtn = $("<button>")
        newBtn.text("Score the game");
        newBtn.on("click", scoreGame);
        return newBtn;
    }
    function startGame() {
        var questionZone = $("#question-zone")
        for (var i = 0; i < questions.length; i++) {
            var currentQuestion = questions[i];
            var questionBox = $("<div>");
            questionBox.addClass("text-center");
            var questionStem = $("<p>");
            questionStem.addClass("text-center");
            var answerBox = $("<div>");
            answerBox.addClass("text-center")
            for (var j = 0; j < currentQuestion.answerChoices.length; j++) {
                var currentAnswer = currentQuestion.answerChoices[j];
                var answerChoice = $('<input type="radio" name = "question"> ' + currentAnswer + '</input>');
                answerChoice.attr({
                    name: ("question" + i),
                    choice: currentAnswer
                })
                answerBox.append(answerChoice);
            }
            questionStem.text(questions[i].question)
            questionBox.append(questionStem)
            questionBox.append(answerBox);
            questionZone.append(questionBox);
        }
        var submitBtn = makeButton();
        questionZone.append(submitBtn);
    }

});

// if else statements to check user imput to correct answer and update the correct and incorrect totals.

