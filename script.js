let countCorrect = 0;
let count = 0;

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
        const conjugation = conjugations[verb].tenses[tense].find(conj => {return subjectPronoun == 'je' ? conj.startsWith('j'):conj.startsWith(subjectPronoun)});
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

    const correctIndex = options.indexOf(correctConjugation);

    // Display question and options
    document.getElementById('question').innerText = `Conjugate the verb "${verb}" for "${subjectPronoun}" in ${correctTense.replace('_', ' ')} tense`;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    shuffledOptions.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerText = option;
        optionElement.onclick = () => checkAnswer(option, correctConjugation, correctIndex);
        optionsContainer.appendChild(optionElement);
    });

    document.getElementById('result').innerText = '';

}

// Function to check the answer
function checkAnswer(selected, correct) {
    const result = document.getElementById('result');
    const options = document.querySelectorAll('.option');

    // Disable click event for all options
    options.forEach(option => {
        option.onclick = null; // Disable click event
    });


    let correctOptionIndex = -1;
    for(let i = 0; i < options.length; i++){
        if(options[i].innerHTML == correct){
            correctOptionIndex = i;
            break;
        }
    }

    let selectedOptionIndex = -1;
    for(let i = 0; i < options.length; i++){
        if(options[i].innerHTML == selected){
            selectedOptionIndex = i;
            break;
        }
    }


    let delay = 500;

    if (selected === correct) {
        result.innerText = 'Correct!';
        result.style.color = 'green';
        countCorrect++;
    } else {
        result.innerText = `Incorrect!`;// The correct answer is: ${correct}`;
        result.style.color = 'red';
        options[selectedOptionIndex].classList.add('incorrect');
        delay = 8500;
    }

    options[correctOptionIndex].classList.add('correct');

    document.getElementById("score").innerHTML = `score: ${countCorrect}/${count}`;

    setTimeout(() => {
        // Generate the next question
        generateQuestion();

        // Clear result message and re-enable options for the next question
        result.innerText = '';
    }, delay); // Load the next question after 2 seconds
}

// Automatically start a drill when the page loads
window.onload = generateQuestion;
