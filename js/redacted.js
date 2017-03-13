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
    question: "Who had access to Richard's office?",
    choices: ["Alice, Edwin, and Theodore", "Alice and Simon", "Simon, Walter, and Edwin", "Everyone"],
    correctAnswer: 3
};
allQuestions[1] = {
    question: "Coroner's report shows the time of death at?",
    choices: ["5:30pm", "7:00pm", "8:30pm", "10:00pm"],
    correctAnswer: 2
};
allQuestions[2] = {
    question: "Richard had signs of irritation on/in his?",
    choices: ["Stomach", "Throat", "Hands", "Eyes"],
    correctAnswer: 0
};
allQuestions[3] = {
    question: "How did Robert recieve the chemical?",
    choices: ["Absorbed", "Ingested", "Inhaled", "Injected"],
    correctAnswer: 1
};
allQuestions[4] = {
    question: "Who risked ruining their family reputation?",
    choices: ["Ethan", "Simon", "William", "Alice" ],
    correctAnswer: 3
};
allQuestions[5] = {
    question: "How did they risk ruining their family reputation?",
    choices: ["Selling company information", "Stealing from the company", "Having an affair with Robert", "Having an affair with William"],
    correctAnswer: 0
};
allQuestions[6] = {
    question: "Who risked ruining their family reputation?",
    choices: ["his", "her"],
    correctAnswer: 1
};
allQuestions[7] = {
    question: "Who was believed to be sabotaging Raytheon Technologies?",
    choices: ["Simon","Ethan", "Alice", "Theodore"],
    correctAnswer: 3
};
allQuestions[8] = {
    question: "Why was this person thought to be sabotaging Raytheon Technologies?",
    choices: ["A vendetta against Robert", "Ties to Germany", "Too close to Robert"],
    correctAnswer: 1
};
allQuestions[9] = {
    question: "Who was resentful towards Robert?",
    choices: ["Theodore","Ethan", "Alice", "Simon"],
    correctAnswer: 1
};
allQuestions[10] = {
    question: "Who was resentful towards Robert?",
    choices: ["him", "her"],
    correctAnswer: 0
};
allQuestions[11] = {
    question: "Who was resentful of how their life turned out?",
    choices: ["Ethan", "Simon", "Alice", "Theodore"],
    correctAnswer: 1
};
allQuestions[12] = {
    question: "Where did this person need money from?",
    choices: ["Selling company information", "Embezzling company money", "An inheritance"],
    correctAnswer: 2
};
allQuestions[13] = {
    question: "Who was constantly belittled by Robert?",
    choices: ["William", "Alice", "Ethan",  "Theodore"],
    correctAnswer: 0
};
allQuestions[14] = {
    question: "What was found at the crime scene that would anger the employees? ",
    choices: ["A speech announcing who would take Robert’s place", "A hint to an affair", "A champagne glass"],
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

    $("#choice0").html("a) " + allQuestions[questionNum].choices[0]);

    $("#choice1").html("b) " + allQuestions[questionNum].choices[1]);

    $("#choice2").html("c) " + allQuestions[questionNum].choices[2]);
    
    $("#choice3").html("d) " + allQuestions[questionNum].choices[3]);
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
$(".choice").click(function() {
    
    var selected = event.target.id;
    var selectedTxt = allQuestions[questionNum].choices[selected[6]];
    var correct = allQuestions[questionNum].correctAnswer;

    if(selected[6] == correct) {
        userScore++;
        console.log('Now your score is: ' + userScore);
    }
    modal.style.display = "none";
    $('#' + questionNum).html(selectedTxt);
    $('#' + questionNum).css('color', '#161616');
    
    localStorage.setItem(questionNum, selected[6]);
});

$('.redact').each(function(i, obj) {
    //console.log("Counting " + i);
    var savedSelec = localStorage.getItem(i);
    $("#" + i).html(allQuestions[i].choices[savedSelec]);
    if (localStorage.getItem(i) != null) {
        $('#' + i).css('color', '#161616');
    }
});









