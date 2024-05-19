const questions = [
    {
        question: "Hva er et ekkokammer?",
        answers: [
            { text: "Møteplass på internett der dine meninger forsterkes", correct: true},
            { text: "Et stille rom med bra volum", correct: false},
            { text: "Et gammel videospill", correct: false},
            { text: "Politisk propaganda", correct: false}
        ]
    },
    {
        question: "Hva er et annet ord for cookies?",
        answers: [
            { text: "Kjeks", correct: false},
            { text: "Personvern", correct: false},
            { text: "Informasjonskapsler", correct: true},
            { text: "Data", correct: false}
        ]
    },
    {
        question: "Hvor har bruken av internett økt mest?",
        answers: [
            { text: "I arbeid", correct: false},
            { text: "I hjemmet", correct: true},
            { text: "I utdanning", correct: false},
            { text: "De har økt like mye", correct: false}
        ]
    },
    {
        question: "Hva kaller man false fremstillinger som ser ut som nyhetssaker?",
        answers: [
            { text: "Sosiale medier", correct: false},
            { text: "Falske nyheter", correct: true},
            { text: "Dagsrevyen", correct: false},
            { text: "Informasjonskapsler", correct: false}
        ]
    }
];

const questionEl = document.querySelector("#question");
const answerBtns = document.querySelector("#answer-buttons");
const nextBtn = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Neste";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionEl.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState() {
    nextBtn.style.display = "none";
    while(answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBtns.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore() {
    resetState();
    questionEl.innerHTML = `Din score ble ${score} ut av ${questions.length}!`; 
    nextBtn.innerHTML = "Prøv igjen";
    nextBtn.style.display = "block";
}

function handleNextBtn() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

nextBtn.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextBtn();
    }
    else {
        startQuiz();
    }
})

startQuiz()