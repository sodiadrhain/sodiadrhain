var totalScore = document.querySelector(".totalScore");

start = () => {
    const start = document.querySelector("#start");
    const classQuesionOne = document.querySelector("#questionOne");
    const classScore = document.querySelector(".div-score");
    start.style.display = "none";  
    classQuesionOne.style.display = "block";
    classScore.style.display = "block";
}

questionOne = (oneClass) => {

    let answerClass = document.querySelector("."+oneClass);
    let optionA = document.querySelector(".options-a");
    let optionB = document.querySelector(".options-b");
    let optionC = document.querySelector(".options-c");
    let optionD = document.querySelector(".options-d");
    let score = document.querySelector(".userScore");
    
    if(answerClass.className === "options-c"){
        answerClass.className = "correctAns";
        score.innerHTML = parseInt(score.innerHTML)+1;
        
    } else {
        answerClass.className = "wrongAns";
        optionC.className = "correctAns";
    }

    optionA.disabled = true;
    optionB.disabled = true;
    optionC.disabled = true;
    optionD.disabled = true;
    
    totalScore.innerHTML = score.innerHTML;
}

nextOne = () => {
    const classQuesionOne = document.querySelector("#questionOne");
    const classQuesionTwo = document.querySelector("#questionTwo");
    classQuesionOne.style.display = "none";
    classQuesionTwo.style.display = "block";
}

questionTwo = (twoClass) => {

    let answerClass = document.querySelector("." + twoClass);
    let optionA = document.querySelector(".options-a-two");
    let optionB = document.querySelector(".options-b-two");
    let optionC = document.querySelector(".options-c-two");
    let optionD = document.querySelector(".options-d-two");
    let score = document.querySelector(".userScore");

    if (answerClass.className === "options-d-two") {
        answerClass.className = "correctAns";
        score.innerHTML = parseInt(score.innerHTML) + 1;

    } else {
        answerClass.className = "wrongAns";
        optionD.className = "correctAns";
    }

    optionA.disabled = true;
    optionB.disabled = true;
    optionC.disabled = true;
    optionD.disabled = true;

    totalScore.innerHTML = score.innerHTML;
}

nextTwo = () => {
    const classQuesionTwo = document.querySelector("#questionTwo");
    const classQuesionThree = document.querySelector("#questionThree");
    classQuesionTwo.style.display = "none";
    classQuesionThree.style.display = "block";
}

questionThree = (threeClass) => {

    let answerClass = document.querySelector("." + threeClass);
    let optionA = document.querySelector(".options-a-three");
    let optionB = document.querySelector(".options-b-three");
    let optionC = document.querySelector(".options-c-three");
    let optionD = document.querySelector(".options-d-three");
    let score = document.querySelector(".userScore");

    if (answerClass.className === "options-a-three") {
        answerClass.className = "correctAns";
        score.innerHTML = parseInt(score.innerHTML) + 1;

    } else {
        answerClass.className = "wrongAns";
        optionA.className = "correctAns";
    }

    optionA.disabled = true;
    optionB.disabled = true;
    optionC.disabled = true;
    optionD.disabled = true;

    totalScore.innerHTML = score.innerHTML;
}

nextThree = () => {
    const classQuesionThree = document.querySelector("#questionThree");
    const classQuesionFour = document.querySelector("#questionFour");
    classQuesionThree.style.display = "none";
    classQuesionFour.style.display = "block";
}

questionFour = (fourClass) => {

    let answerClass = document.querySelector("." + fourClass);
    let optionA = document.querySelector(".options-a-four");
    let optionB = document.querySelector(".options-b-four");
    let optionC = document.querySelector(".options-c-four");
    let optionD = document.querySelector(".options-d-four");
    let score = document.querySelector(".userScore");

    if (answerClass.className === "options-d-four") {
        answerClass.className = "correctAns";
        score.innerHTML = parseInt(score.innerHTML) + 1;

    } else {
        answerClass.className = "wrongAns";
        optionD.className = "correctAns";
    }

    optionA.disabled = true;
    optionB.disabled = true;
    optionC.disabled = true;
    optionD.disabled = true;

    totalScore.innerHTML = score.innerHTML;

}

nextFour = () => {
    const classQuesionFour = document.querySelector("#questionFour");
    const classQuesionFive = document.querySelector("#questionFive");
    classQuesionFour.style.display = "none";
    classQuesionFive.style.display = "block";
}

questionFive = (fiveClass) => {

    let answerClass = document.querySelector("." + fiveClass);
    let optionA = document.querySelector(".options-a-five");
    let optionB = document.querySelector(".options-b-five");
    let optionC = document.querySelector(".options-c-five");
    let optionD = document.querySelector(".options-d-five");
    let score = document.querySelector(".userScore");

    if (answerClass.className === "options-b-five") {
        answerClass.className = "correctAns";
        score.innerHTML = parseInt(score.innerHTML) + 1;

    } else {
        answerClass.className = "wrongAns";
        optionB.className = "correctAns";
    }

    optionA.disabled = true;
    optionB.disabled = true;
    optionC.disabled = true;
    optionD.disabled = true;

    totalScore.innerHTML = score.innerHTML;

}

nextFive = () => {
    const classQuesionFive = document.querySelector("#questionFive");
    const classEnd = document.querySelector("#end");
    const classScore = document.querySelector(".div-score");
    classQuesionFive.style.display = "none";
    classEnd.style.display = "block";
    classScore.style.display = "none";

}

end = () => {
    location.reload();
}