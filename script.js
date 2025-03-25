let countCorrect = 0;
let countCombo = 0;
let count = 0;
let combo = 0;
let soundEnabled = false; // Default sound off

var correctSound = new Audio('correct.mp3');
var incorrectSound = new Audio('incorrect.mp3');


document.getElementById('toggleSound').classList.add('strikeOff');

document.getElementById('toggleSound').addEventListener('click', function () {
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
        this.classList.remove('strikeOff');
    } else {
        this.classList.add('strikeOff');
    }
});

// Function to generate a question
function generateQuestion() {
    
    count++;
    const verbs = Object.keys(conjugations);
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const tenses = Object.keys(conjugations[verb].tenses);
    
    // Choose a random subject pronoun
    const subjectPronouns = ['je', 'tu', 'il/elle', 'nous', 'vous', 'ils/elles'];
    const subjectIndex = Math.floor(Math.random() * subjectPronouns.length); // Random subject index
    const subjectPronoun = subjectPronouns[subjectIndex];

    // Select one correct tense
    const correctTense = tenses[Math.floor(Math.random() * tenses.length)];
    const correctConjugation = conjugations[verb].tenses[correctTense].find(conj => {return subjectPronoun == 'je' ? conj.startsWith('j'):conj.startsWith(subjectPronoun)});

    // Generate incorrect options
    const incorrectTenses = tenses.filter(tense => tense !== correctTense);
    const incorrectConjugations = [];
    incorrectTenses.forEach(tense => {
        //extra ? is a "safeguard not sure what this is"
        const conjugation = conjugations[verb].tenses[tense]?.find(conj => {return subjectPronoun == 'je' ? conj.startsWith('j'):conj.startsWith(subjectPronoun)});
        if (conjugation) {
            incorrectConjugations.push(conjugation);
        }
    });
    
    // Combine correct and incorrect options
    let options = [correctConjugation, ...incorrectConjugations];

    /*
    // Add one more random incorrect option
    while (options.length < 5) {
        const randomTense = tenses[Math.floor(Math.random() * tenses.length)];
        const randomConjugation = conjugations[verb][randomTense].find(conjugation => conjugation.startsWith(subjectPronoun));
        if (randomConjugation && !options.includes(randomConjugation)) {
            options.push(randomConjugation);
        }
    }*/

    // Shuffle options
    const shuffledOptions = options.sort(() => Math.random() - 0.5);

    const correctIndex = shuffledOptions.indexOf(correctConjugation);

    // Display question and options

    const link = `<a target="_blank" href="https://www.collinsdictionary.com/dictionary/french-english/${verb}">${verb}</a>`;

    document.getElementById('question').innerHTML = ` ${subjectPronoun} - ${link} - ${correctTense.replace('_', ' ')}`;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    shuffledOptions.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => checkAnswer(option, correctConjugation, correctIndex);
        optionsContainer.appendChild(optionElement);
    });

    const feedback = document.getElementById('feedback');
    feedback.style = '';
    feedback.innerText = 'select your answer';
    
}

// Function to check the answer
function checkAnswer(selected, correct) {
    const feedback = document.getElementById('feedback');
    const options = document.querySelectorAll('.option');

    // Disable click event for all options
    options.forEach(option => {
        option.onclick = null; // Disable click event
    });


    const correctOptionIndex = [...options].findIndex(opt => opt.innerHTML === correct);
    const selectedOptionIndex = [...options].findIndex(opt => opt.innerHTML === selected);
    
    let delay = 500;

    if (selected === correct) {
        if (soundEnabled) correctSound.play();
        feedback.innerText = 'Correct!';
        feedback.style.color = 'green';
        countCorrect++;
        countCombo++;
    } else {
        if (soundEnabled)  incorrectSound.play();
        feedback.innerText = `Incorrect!`;// The correct answer is: ${correct}`;
        feedback.style.color = 'red';
        options[selectedOptionIndex].classList.add('incorrect');
        delay = 2000;
        countCombo = 0;
    }
    combo = countCombo > combo ? countCombo: combo; //set combo if new record achieved

    options[correctOptionIndex].classList.add('correct');

    document.getElementById("score").innerHTML = `score: ${countCorrect}/${count} - combo: ${countCombo} - record: ${combo}`;

    setTimeout(() => {
        // Generate the next question
        generateQuestion();
    }, delay); // Load the next question after 2 seconds
}

// Automatically start a drill when the page loads
window.onload = generateQuestion;
