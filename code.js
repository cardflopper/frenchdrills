
const PRESENT = 0;
const NUM_VERB_ENDINGS = 3;

const ER = 0;
const IR = 1;
const RE = 2;

var verbs =[];
var conjugations = [];
var verbs_end = [];
var verbs_eng = [];
var answers = [];
var subjects = ['je','tu', 'il','elle', 'nous', 'vous', 'ils','elles'];

verbs_end[ER]='er';
verbs_end[IR]='ir';
verbs_end[RE]='re';

verbs[ER] = ['mang','aim','chant','dans','demand','arriv','cherch','dépens','parl','travaill','regard','trouv','visit'];
verbs[IR] = ['fin','chois','ag','rempl','pun','nourr','avert','maigr','gross'];
verbs[RE] = ['attend','descend','répond','vend','perd','rend','confond','fond','entend'];

conjugations[ER] = ['e','es','e','e','ons', 'ez', 'ent','ent'];
conjugations[IR] = ['is','is','it','it','issons', 'issez', 'issent','issent'];
conjugations[RE] = ['s','s','','','ons', 'ez', 'ent','ent'];

verbs_eng[ER] = ['eat', 'like', 'sing','dance','demand','arrive','search','spend money','talk, speak','work','watch, look at','find','visit (a place)']
verbs_eng[IR] = ['finish','choose','act','fill','punish','feed/nourish','warn','get thin / lose weight','get fat / gain weight'];
verbs_eng[RE] = ['wait for','go down','answer','sell','lose','give back / return','confuse','melt','hear, understand'];

answers[ER] = ['e','es', 'ons', 'ez', 'ent'];
answers[IR] = ['is','it','issons', 'issez', 'issent'];
answers[RE] = ['s','','ons', 'ez','ent'];

var correctAnswer;
var correctAnswerOutput;




generateRandomProblem();

/*var max = 6;
var r= [];
for(var k = 0; k<35 ; k++)
    r.push(randomInt(max));

alert(r.join(","));    
*/

function randomInt(n){
    if (n == 1)
        return Math.round(Math.random());
    else
        return Math.floor(Math.random()*n);
}

function generateRandomProblem(){
    vbEnding = randomInt(NUM_VERB_ENDINGS);
    generateProblem(vbEnding);
}

function generateAnswerOutput(vbEnding,verb,subject){
    return subjects[subject] + " " + verbs[vbEnding][verb] + conjugations[vbEnding][subject];
}

function generateProblem(vbEnding){
    /*select verb */
    var randVerb = randomInt(verbs[vbEnding].length);
    var randSubject = randomInt(subjects.length);
    
    correctAnswerOutput = generateAnswerOutput(vbEnding,randVerb,randSubject);
    
    correctAnswer = answers[vbEnding].indexOf(conjugations[vbEnding][randSubject]);
    displayProblem(vbEnding,randVerb,randSubject);
}

function displayProblem(vbEnding,verb,subject){

    document.getElementById('verb').innerText = verbs[vbEnding][verb] + verbs_end[vbEnding] + " (to "+ verbs_eng[vbEnding][verb] + ")";
    document.getElementById('subject').innerText = subjects[subject];
    var list=[];
    
    for(let i=0; i < answers[vbEnding].length; i++){
        var choice = document.createElement("span");
        var conjugatedEnding = document.createElement("span");
        conjugatedEnding.classList.add("answerEnd");
        conjugatedEnding.innerText = answers[vbEnding][i];
        choice.innerText = verbs[vbEnding][verb];
        choice.append(conjugatedEnding);

        
        let yourAnswer = subjects[subject] + " " + verbs[vbEnding][verb] + answers[vbEnding][i];

        if(i == correctAnswer)
            choice.addEventListener("click", () => evaluateAnswer(true,yourAnswer), true);
        else        
            choice.addEventListener("click", () => evaluateAnswer(false,yourAnswer), true);
        
        list.push(choice);
    }

    shuffle(list);

    removeAllChildNodes(document.getElementById('choices'));
    for(item of list)
       document.getElementById('choices').append(item);
}

function evaluateAnswer(isCorrect,yourAnswer){

    var entry = document.createElement("div");
    var yourAnswerSpan = document.createElement("span");
    yourAnswerSpan.innerText = yourAnswer;
    var answerClass = isCorrect == true ? "correct" : "incorrect";
    yourAnswerSpan.classList.add(answerClass);
    
    
    var correctAnswerSpan = document.createElement("span");
    correctAnswerSpan.innerText = correctAnswerOutput;
    correctAnswerSpan.classList.add("correct");
    entry.append(yourAnswerSpan);
    entry.append(correctAnswerSpan);
    
    document.getElementById("history").prepend(entry);
    
    generateRandomProblem();
}


//from web, not written by myself
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function removeAllChildNodes(pNode) {
    while (pNode.firstChild) {
        pNode.removeChild(pNode.lastChild);
    }
}