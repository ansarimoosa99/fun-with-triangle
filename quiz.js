const quizForm = document.querySelector(".quiz-container");
const submitAnswerbtn = document.querySelector("#submit-answer-button");
const outputMsg = document.querySelector("#output");

const correctAnswers = ["90°","right angled"];

function calculateScore(){
    let  score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    // console.log(formResults[0].value); 
    for(let value of formResults.values()){
        // console.log(value);
        if(value === correctAnswers[0]){
            score +=1;
        }
        index +=1;
    }
    // console.log(score);
    outputMsg.innerText = "Your score is " + score;
    // formResults.entries()
    // formResults.values()
}

submitAnswerbtn.addEventListener('click', calculateScore);