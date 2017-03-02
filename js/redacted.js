// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Create an array to store all questions.
var allQuestions = [];
// Store each question in an object.
allQuestions[0] = {
    question: "Who hade access to Richard's office?",
    choices: ["Alice, Edwin, and Theodore", "Alice and Simon", "Simon, Walter, and Edwin", "Everyone"],
    correctAnswer: 4
};
allQuestions[1] = {
    question: "Coroner's report shows the time of death at?",
    choices: ["5:30pm", "7:00pm", "8:30pm", "10:00pm"],
    correctAnswer: 2
};
allQuestions[2] = {
    question: "Richard had signs of iritation on/in his?",
    choices: ["Stomach", "Throat", "Hands", "Eyes"],
    correctAnswer: 0
};

// Create a variable to store the index of the current question
var questionNum = 1;

// When the user clicks the button, open the modal 
$('.redact').on('click',function(){ 
    
    questionNum = event.target.id;
    console.log('id = ' + questionNum);
    
    modal.style.display = "block";
    // Display first question
    $("#question").html(allQuestions[questionNum].question);

    $("#choice0").html(allQuestions[questionNum].choices[0]);

    $("#choice1").html(allQuestions[questionNum].choices[1]);

    $("#choice2").html(allQuestions[questionNum].choices[2]);
    
    $("#choice3").html(allQuestions[questionNum].choices[3]);
});


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Create a variable to store the user's score
var userScore = 0;

// When the NEXT button is clicked, the user's score is updated, the current question is hidden, and the next question is revealed.
$("#next").click(function() {
    
  if($("form input[name=answer]:checked").val() == allQuestions[questionNum].correctAnswer) {
    userScore++;
  }
    modal.style.display = "none";
    
});









