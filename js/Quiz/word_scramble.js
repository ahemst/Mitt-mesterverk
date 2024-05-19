const wordText = document.querySelector(".ord");
const hintText = document.querySelector(".hint");
const guessInput = document.getElementById("guess-input");
const resultText = document.getElementById("result");

const words = [
    { word: "Datasikkerhet", hint: "Fagområde knyttet til konfidensialitet, integritet og tilgjengelighet." },
    { word: "Demokrati", hint: "En styreform der folket har en direkte eller indirekte innflytelse på beslutningsprosesser." },
    { word: "Teknologi", hint: "Noe som gjør ting enklere for oss." },
    { word: "Personvern", hint: "Retten til et privatliv og retten til å bestemme over egne personopplysninger." },
    { word: "Internett", hint: "Et kommunikasjonsnett." },
    { word: "Ekkokammer", hint: "Et sted der meninger forsterkes." }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let combinedWordsAndHints = words.map(({ word, hint }) => ({ word, hint }));

shuffleArray(combinedWordsAndHints);

let currentWordIndex = 0;
let previousWordIndex = -1; 

function shuffleWord(word) {
    const characters = word.split('');
    for (let i = characters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    return characters.join('');
}        

function refreshWord() {
    let nextWordIndex;
    do {
        nextWordIndex = Math.floor(Math.random() * combinedWordsAndHints.length);
    } while (nextWordIndex === previousWordIndex);

    previousWordIndex = currentWordIndex;
    currentWordIndex = nextWordIndex;

    const wordObj = combinedWordsAndHints[currentWordIndex];
    const shuffledWord = shuffleWord(wordObj.word);
    wordText.textContent = shuffledWord;
    hintText.textContent = `Hint: ${wordObj.hint}`;
    guessInput.value = "";
    resultText.textContent = "";
}

function checkGuess() {
    const wordObj = combinedWordsAndHints[currentWordIndex];
    const guess = guessInput.value.trim();
    if (guess.toLowerCase() === wordObj.word.toLowerCase()) {
        resultText.textContent = "Riktig!";
        refreshWord(); 
    } else {
        resultText.textContent = "Feil. Prøv igjen!";
    }
}

refreshWord();
