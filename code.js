
var verbData = [
        {
            "inf":"aimer",
            "english":"to like",
            "end":"er",
            "type":"regular",
            "base":"aim",
            "present":["e","es","e","e","ons","ez","ent","ent"]},
        {
            "inf":"chanter",
            "english":"to sing",
            "end":"er",
            "type":"regular",
            "base":"chant",
            "present":["e","es","e","e","ons","ez","ent","ent"]},
        {
            "inf":"danser",
            "english":"to dance",
            "end":"er",
            "type":"regular",
            "base":"dans",
            "present":["e","es","e","e","ons","ez","ent","ent"]},
        {
            "inf": "demander",
            "english":"to demand",
            "end":"er",
            "type":"regular",
            "base":"demand",
            "present":["e","es","e","e","ons","ez","ent","ent"]},
        {   
            "inf": "arriver",
            "english":"to arrive",
            "end":"er",
            "type":"regular",
            "base":"arriv",
            "present":["e","es","e","e","ons","ez","ent","ent"]},
        ];
        

generateRandomProblem();

function randomInt(n){
    if (n == 1)
        return Math.round(Math.random());
    else
        return Math.floor(Math.random()*n);
}

function generateRandomProblem(){
    const randIndexVb = randomInt(verbData.length);
    const subject = randomInt(8);  
    
    currentProblemData = verbData[randIndexVb];
    displayProblem(currentProblemData,subject,"present");
}

function displayProblem(vbData,subject,tense){

    document.getElementById('verb').innerText = vbData.inf + " (" + vbData.english + ")";
    
    document.getElementById('subject').innerText = subjects[subject];
    var list=[];
    
    for(let i=0; i < vbData[tense].length; i++){
        var choice = document.createElement("span");
        
        var conjugatedEnding = document.createElement("span");
        conjugatedEnding.classList.add("answerEnd");
        
        conjugatedEnding.innerText = vbData[tense][subject];
        choice.innerText = vbData.base;
        choice.append(conjugatedEnding);

        if(i == subject)
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
/*
function evaluateAnswer(isCorrect,yourAnswer){
    answeredCount++;
    var entry = document.createElement("div");
    var yourAnswerSpan = document.createElement("span");
    yourAnswerSpan.innerText = answeredCount + ") "+ yourAnswer;
    var answerClass = isCorrect == true ? "correct" : "incorrect";
    yourAnswerSpan.classList.add(answerClass);
    yourAnswerSpan.classList.add("left");
    
    
    var correctAnswerSpan = document.createElement("span");
    correctAnswerSpan.innerText = correctAnswerOutput;
    correctAnswerSpan.classList.add("correct");
    correctAnswerSpan.classList.add("right");
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