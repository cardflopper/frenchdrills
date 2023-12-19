

        

generateRandomProblem();

function randomInt(n){
    if (n == 1)
        return Math.round(Math.random());
    else
        return Math.floor(Math.random()*n);
}

function generateRandomProblem(){
    const randIndexVb = randomInt(verbData.length);
    const randSubject = randomInt(8);  
    const randTense = randomInt(4);  
    
    displayProblem(verbData[randIndexVb],randSubject,randTense);
}

function displayProblem(vbData,subject,tense_){

    
    var tense = tenses[tense_];

    document.getElementById('tips').innerText = tips[tense];

    document.getElementById('infinitive').innerText = vbData.inf + " : " +vbData.english.inf
    document.getElementById('tense').innerText = tense+ " : " + vbData.english[tense] ;
    
    document.getElementById('subject').innerText = subjects[subject];
    var list=[];

    for(let i=0; i < vbData[tense].length; i++){
        var choice = document.createElement("span");
        
        var conjugatedEnding = document.createElement("span");
        conjugatedEnding.classList.add("answerEnd");
        
        conjugatedEnding.innerText = vbData[tense][i];
        
        
        choice.innerText = vbData.base[tense];
        choice.append(conjugatedEnding);

        
        if(i == vbData[tense].indexOf(vbData[tense][subject]))
            choice.addEventListener("click", () => evaluateAnswer(true,vbData.base[tense] + vbData[tense][i]), true);
        else        
            choice.addEventListener("click", () => evaluateAnswer(false,vbData.base[tense] + vbData[tense][i]), true);

        if(i == vbData[tense].indexOf(vbData[tense][i]))
            list.push(choice);
        
    }
    
    shuffle(list);

    removeAllChildNodes(document.getElementById('choices'));
    for(item of list)
       document.getElementById('choices').append(item);
}


function isFirstOccurence(arr,value){

}


function countOccurences(arr,value){
    return arr.filter(x => x==value).length;
}


function evaluateAnswer(isCorrect,yourAnswer){
    
    
    var entry = document.createElement("div");
    var yourAnswerSpan = document.createElement("span");
    yourAnswerSpan.innerText = yourAnswer;
    var answerClass = isCorrect == true ? "correct" : "incorrect";
    yourAnswerSpan.classList.add(answerClass);
    yourAnswerSpan.classList.add("left");
    
    entry.append(yourAnswerSpan);
    
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
