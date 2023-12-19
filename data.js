var subjects = ["je","tu","il","elle","nous","vous","ils","elles"];
var tenses = ["pastImperfect","present","futureSimple","conditional"];
var tips = {
    "pastImperfect":"To conjugate the imperfect tense in French, we take the present-tense stem of the 1st person plural form of the verb (the nous form), and add the following endings: je/tu = ais, il/elle = ait, ions, iez, aient (identical for verbs of all groups)",
    "present":"basic",
    "futureSimple":"To conjugate the futur simple, we take the infinitive of the verb and add the following endings: je = ai, tu = as, il/elle = a, ons, ez, ont. (for -re verbs, we remove the final e):",
    "conditional": "We form the conditionnel présent by adding the imparfait endings to the stem of the futur simple form of the verb"
}


var verbData = [
        {
            "inf":"manger",
            "english": {"inf":"to eat","pastImperfect":"was eating","present":"[am/are/is] eating","futureSimple":"will eat","conditional":"would eat"},
            "end":"er",
            "type":"irregular",
            "base": {"pastImperfect":"mang","present":"mang","futureSimple":"manger","conditional":"manger"},
            "pastImperfect":["eais","eais","eait","eait","ions","iez","aient","eaient"],
            "present":["e","es","e","e","eons","ez","ent","ent"],
            "futureSimple":["ai","as","a","a","ons","ez","ont","ont"],
            "conditional":["ais","ais","ait","ait","ions","iez","aient","aient"]},
        {
            "inf":"aimer",
            "english": {"inf":"to like","pastImperfect":"was liking","present":"[am/are/is] liking","futureSimple":"will like","conditional":"would like"},
            "end":"er",
            "type":"regular",
            "base": {"pastImperfect":"aim","present":"aim","futureSimple":"aimer","conditional":"aimer"},
            "pastImperfect":["ais","ais","ait","ait","ions","iez","aient","aient"],
            "present":["e","es","e","e","ons","ez","ent","ent"],
            "futureSimple":["ai","as","a","a","ons","ez","ont","ont"],
            "conditional":["ais","ais","ait","ait","ions","iez","aient","aient"]},
        {
            "inf":"chanter",
            "english": {"inf":"to sing","pastImperfect":"[was/were] singing","present":"[am/are/is] singing","futureSimple":"will sing","conditional":"would sing"},
            "end":"er",
            "type":"regular",
            "base": {"pastImperfect":"chant","present":"chant","futureSimple":"chanter","conditional":"chanter"},
            "pastImperfect":["ais","ais","ait","ait","ions","iez","aient","aient"],
            "present":["e","es","e","e","ons","ez","ent","ent"],
            "futureSimple":["ai","as","a","a","ons","ez","ont","ont"],
            "conditional":["ais","ais","ait","ait","ions","iez","aient","aient"]},
        {
            "inf":"danser",
            "english": {"inf":"to dance","pastImperfect":"[was/were] dancng","present":"[am/are/is] dancing","futureSimple":"will dance","conditional":"would dance"},
            "end":"er",
            "type":"regular",
            "base": {"pastImperfect":"dans","present":"dans","futureSimple":"danser","conditional":"danser"},
            "pastImperfect":["ais","ais","ait","ait","ions","iez","aient","aient"],
            "present":["e","es","e","e","ons","ez","ent","ent"],
            "futureSimple":["ai","as","a","a","ons","ez","ont","ont"],
            "conditional":["ais","ais","ait","ait","ions","iez","aient","aient"]},
        {
            "inf": "demander",
            "english": {"inf":"to demand","pastImperfect":"[was/were] demanding","present":"[am/are/is] demanding","futureSimple":"will demand","conditional":"would demand"},
            "end":"er",
            "type":"regular",
            "base": {"pastImperfect":"demand","present":"demand","futureSimple":"demander","conditional":"arriver"},
            "pastImperfect":["ais","ais","ait","ait","ions","iez","aient","aient"],
            "present":["e","es","e","e","ons","ez","ent","ent"],
            "futureSimple":["ai","as","a","a","ons","ez","ont","ont"],
            "conditional":["ais","ais","ait","ait","ions","iez","aient","aient"]},
        {   
            "inf": "arriver",
            "english": {"inf":"to arrive","pastImperfect":"[was/were] arriving","present":"[am/are/is] arriving","futureSimple":"will arrive","conditional":"would arrive"},
            "end":"er",
            "type":"regular",
            "base": {"pastImperfect":"arriv","present":"arriv","futureSimple":"arriver","conditional":"arriver"},
            "pastImperfect":["ais","ais","ait","ait","ions","iez","aient","aient"],
            "present":["e","es","e","e","ons","ez","ent","ent"],
            "futureSimple":["ai","as","a","a","ons","ez","ont","ont"],
            "conditional":["ais","ais","ait","ait","ions","iez","aient","aient"]},
 
 
        {   
            "inf": "finir",
            "english": {"inf":"to finish","pastImperfect":"[was/were] finishing","present":"[am/are/is] finishing","futureSimple":"will finish","conditional":"would finish"},
            "end":"ir",
            "type":"regular",
            "base": {"pastImperfect":"finiss","present":"fin","futureSimple":"finir","conditional":"finir"},
            "pastImperfect":["ais","ais","ait","ait","ions","iez","aient","aient"],
            "present":["is","is","it","it","issons","issez","issent","issent"],
            "futureSimple":["ai","as","a","a","ons","ez","ont","ont"],
            "conditional":["ais","ais","ait","ait","ions","iez","aient","aient"]},
    
        {   
            "inf": "choisir",
            "english": {"inf":"to choose","pastImperfect":"[was/were] choosing","present":"[am/are/is] choosing","futureSimple":"will choose","conditional":"would choose"},
            "end":"ir",
            "type":"regular",
            "base": {"pastImperfect":"choisiss","present":"chois","futureSimple":"choisir","conditional":"choisir"},
            "pastImperfect":["ais","ais","ait","ait","ions","iez","aient","aient"],
            "present":["is","is","it","it","issons","issez","issent","issent"],
            "futureSimple":["ai","as","a","a","ons","ez","ont","ont"],
            "conditional":["ais","ais","ait","ait","ions","iez","aient","aient"]},           
 
        {   
            "inf": "agir",
            "english": {"inf":"to act","pastImperfect":"[was/were] acting","present":"[am/are/is] acting","futureSimple":"will act","conditional":"would act"},
            "end":"ir",
            "type":"regular",
            "base": {"pastImperfect":"agiss","present":"ag","futureSimple":"agir","conditional":"agir"},
            "pastImperfect":["ais","ais","ait","ait","ions","iez","aient","aient"],
            "present":["is","is","it","it","issons","issez","issent","issent"],
            "futureSimple":["ai","as","a","a","ons","ez","ont","ont"],
            "conditional":["ais","ais","ait","ait","ions","iez","aient","aient"]},     
 
        {   
            "inf": "avertir",
            "english": {"inf":"to warn","pastImperfect":"[was/were] warning","present":"[am/are/is] warning","futureSimple":"will warn","conditional":"would warn"},
            "end":"ir",
            "type":"regular",
            "base": {"pastImperfect":"avertiss","present":"avert","futureSimple":"avertir","conditional":"avertir"},
            "pastImperfect":["ais","ais","ait","ait","ions","iez","aient","aient"],
            "present":["is","is","it","it","issons","issez","issent","issent"],
            "futureSimple":["ai","as","a","a","ons","ez","ont","ont"],
            "conditional":["ais","ais","ait","ait","ions","iez","aient","aient"]},     
   
        ];
 