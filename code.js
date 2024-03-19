

var count = 0;      
var countCorrect = 0;      

generateRandomProblem();

function randomInt(n){
    if (n == 1)
        return Math.round(Math.random());
    else
        return Math.floor(Math.random()*n);
}

function generateRandomProblem(){
    const randIndexVb = randomInt(verbData.length);
    const randSubject = randomInt(subjects.length);  
    const randTense = randomInt(tenses.length);  
    
    displayProblem(verbData[randIndexVb],randSubject,randTense);
}

function startsWithVowel(str){
 return "aeiouAEIOU".indexOf(str.charAt(0)) != -1;
}


function displayProblem(vbData,subject_,tense_){

    var tense_ans = tenses[tense_];
    
    document.getElementById('tips').innerText = tips[tense_ans];

    document.getElementById('infinitive').innerText = vbData.inf + " : " +vbData.english.inf
    document.getElementById('tense').innerText = tense_ans + " : " + vbData.english[tense_ans] ;
    
    if(startsWithVowel(vbData.inf) && subject_ == 0)
        sub = "j'";
    else 
        sub = subjects[subject_];
    document.getElementById('subject').innerText = sub;
    var list=[];

    
    for(let i=0; i < tenses.length; i++){

        var choice = document.createElement("div");
        choice.classList.add('choice');
        
        var conjugatedEnding = document.createElement('span');
        conjugatedEnding.classList.add('answerEnd');
        
        conjugatedEnding.innerText = vbData[tenses[i]][subject_];
        
        choice.innerText = vbData.base[tenses[i]];
        choice.append(conjugatedEnding);

        if(i == tense_)
            choice.addEventListener("click", () => evaluateAnswer(true, tenses[i]+": "+sub + " " + vbData.base[tenses[i]] + vbData[tenses[i]][subject_]), true);
        else        
            choice.addEventListener("click", () => evaluateAnswer(false, tenses[i]+": "+sub + " " + vbData.base[tenses[i]] + vbData[tenses[i]][subject_]), true);
        
        list.push(choice);
    }

    
    shuffle(list);

    removeAllChildNodes(document.getElementById('choicesFlex'));
    for(item of list)
       document.getElementById('choicesFlex').append(item);
}


function evaluateAnswer(isCorrect,yourAnswer){

    removeAllChildNodes(document.getElementById("feedbackContainer"));
    
    //global
    count++;

    if (isCorrect)
        countCorrect++;

    document.getElementById("score").innerHTML = countCorrect + " out of " + count;

    
    var feedback = document.createElement("span");
    var answerClass = isCorrect == true ? "correct" : "incorrect";
    var mark =  isCorrect == true ? " &check;" : " &cross;";
    

    feedback.innerHTML = yourAnswer + mark;
    
    feedback.classList.add(answerClass);
        
    document.getElementById("feedbackContainer").prepend(feedback);
    feedback.classList.add("feedback");
    
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
