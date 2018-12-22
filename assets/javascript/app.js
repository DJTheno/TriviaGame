
//this Starts the JS on the HTML page//
$(document).ready(function () {

    var correct = 0;
    var incorrect = 0;
    var counter = 30;


    var answers = [];
    //Array of questions//
    var game = [
        {
            question: "Who is Batmans sidekick??",
            possibles: ["Robin", "BlueJay", "Speedy", "Aqua ladd"],
            id: "Q",
            answer: 1
        },
        {
            question: "Who was Batmans original sidekick??",
            possibles: ["Jason Todd", "Tim Drake", "Damien Wayne", "Dick Grayson"],
            id: "Q2",
            answer: 4
        },

        {
            question: "Who Raised Bruce Wayne??",
            possibles: ["Bane", "Alfred", "Martha Kent", "The Joker"],
            id: "Q3",
            answer: 2
        },

        {
            question: "What does Batman Drive??",
            possibles: ["Corvette", "Invisible Jet", "Tank", "Bat Mobile"],
            id: "Q4",
            answer: 4
        },
    ]

    //Button that starts Game//
    $(document).on('click', '#start', function () {
        game.startGame();
        // call start()
        //   which populates the page with questions
        //  done button 
        $('#done').on('click', function () {
            checkAnswers();
            stop();
            $("#response").html("Game Over!");


            //tells timer to start//
            function start() {
                counter = setInterval(timer, 1000);
                countdown: function() {
                    game.counter--;
                    $('#timer').html(game.counter);
                    if (game.counter === 0) {
                        game.timeUP();
                    }
                };

                //append questions to html
                startGame: function() {
                    timer = setInterval(game.countdown, 1000);
                    $('#start').remove();
                    for (var i = 0; i < questions.length; i++) {
                        $("#container").append('<h3>' + questions[i].question + '</h3>');
                        for (var j = 0; j < questions[i].answers.length; j++) {
                            $("#container").append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);

                        }
                    }
                }

                //alert done if you finish before time is up
                //append var game to html 


                function updateScore() {
                    document.querySelector("#score").innerHTML = "Score: " + score;
                }


                //for loop that runs through the length of the questions after start button is clicked//
                for (var i = 0; i < questions.length; i++); {

                    $.each($("input[name='answer1']:checked"), function () {

                        if ($(this).val() == questions[1].correctAnswer) {
                            game.correct++;
                        } else {
                            game.incorrect++;
                        }
                    });
                    $.each($("input[name='answer2']:checked"), function () {

                        if ($(this).val() == questions[2].correctAnswer) {
                            game.correct++;
                        } else {
                            game.incorrect++;
                        }
                    });
                    $.each($("input[name='answer3']:checked"), function () {

                        if ($(this).val() == questions[3].correctAnswer) {
                            game.correct++;
                        } else {
                            game.incorrect++;
                        }
                    });
                    $.each($("input[name='answer4']:checked"), function () {

                        if ($(this).val() == questions[4].correctAnswer) {
                            game.correct++;
                        } else {
                            game.incorrect++;
                        }
                    });
                    game.result();
                }
                result: function() {
                    clearInterval(timer);
                    $("#response").empty();
                    $("#response").append("Correct answers: " + game.correct + "<br/>");
                    $("#response").append("Incorrect answers: " + game.incorrect);

                }

            }
        });
    });
});












});