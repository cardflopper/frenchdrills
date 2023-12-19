var subjects = ["je","tu","il","elle","nous","vous","ils","elles"];
var tenses = ["present","futureSimple","conditional"];
var englishForm = ["to","will","would"];

var verbData = [
        {
            "inf":"manger",
            "english":"eat",
            "end":"er",
            "type":"irregular",
            "base": {"pastImperfect":"mang","present":"mang","futureSimple":"manger","conditional":"manger"},
            "pastImperfect":["eais","eais","eait","eait","ions","iez","aient","eaient"],
            "present":["e","es","e","e","eons","ez","ent","ent"],
            "futureSimple":["ai","as","a","a","ons","ez","ont","ont"],
            "conditional":["ais","ais","ait","ait","ions","iez","aient","aient"]},
        {
            "inf":"aimer",
            "english":"like",
            "end":"er",
            "type":"regular",
            "base": {"pastImperfect":"aim","present":"aim","futureSimple":"aimer","conditional":"aimer"},
            "pastImperfect":["ais","ais","ait","ait","ions","iez","aient","aient"],
            "present":["e","es","e","e","ons","ez","ent","ent"],
            "futureSimple":["ai","as","a","a","ons","ez","ont","ont"],
            "conditional":["ais","ais","ait","ait","ions","iez","aient","aient"]},
        {
            "inf":"chanter",
            "english":"sing",
            "end":"er",
            "type":"regular",
            "base": {"pastImperfect":"chant","present":"chant","futureSimple":"chanter","conditional":"chanter"},
            "pastImperfect":["ais","ais","ait","ait","ions","iez","aient","aient"],
            "present":["e","es","e","e","ons","ez","ent","ent"],
            "futureSimple":["ai","as","a","a","ons","ez","ont","ont"],
            "conditional":["ais","ais","ait","ait","ions","iez","aient","aient"]},
        {
            "inf":"danser",
            "english":"dance",
            "end":"er",
            "type":"regular",
            "base": {"pastImperfect":"dans","present":"dans","futureSimple":"danser","conditional":"danser"},
            "pastImperfect":["ais","ais","ait","ait","ions","iez","aient","aient"],
            "present":["e","es","e","e","ons","ez","ent","ent"],
            "futureSimple":["ai","as","a","a","ons","ez","ont","ont"],
            "conditional":["ais","ais","ait","ait","ions","iez","aient","aient"]},
        {
            "inf": "demander",
            "english":"demand",
            "end":"er",
            "type":"regular",
            "base": {"pastImperfect":"demand","present":"demand","futureSimple":"demander","conditional":"arriver"},
            "pastImperfect":["ais","ais","ait","ait","ions","iez","aient","aient"],
            "present":["e","es","e","e","ons","ez","ent","ent"],
            "futureSimple":["ai","as","a","a","ons","ez","ont","ont"],
            "conditional":["ais","ais","ait","ait","ions","iez","aient","aient"]},
        {   
            "inf": "arriver",
            "english":"arrive",
            "end":"er",
            "type":"regular",
            "base": {"pastImperfect":"arriv","present":"arriv","futureSimple":"arriver","conditional":"arriver"},
            "pastImperfect":["ais","ais","ait","ait","ions","iez","aient","aient"],
            "present":["e","es","e","e","ons","ez","ent","ent"],
            "futureSimple":["ai","as","a","a","ons","ez","ont","ont"],
            "conditional":["ais","ais","ait","ait","ions","iez","aient","aient"]},
 
 
        {   
            "inf": "finir",
            "english":"finish",
            "end":"ir",
            "type":"regular",
            "base": {"pastImperfect":"finiss","present":"fin","futureSimple":"finir","conditional":"finir"},
            "pastImperfect":["ais","ais","ait","ait","ions","iez","aient","aient"],
            "present":["is","is","it","it","issons","issez","issent","issent"],
            "futureSimple":["ai","as","a","a","ons","ez","ont","ont"],
            "conditional":["ais","ais","ait","ait","ions","iez","aient","aient"]},
    
        {   
            "inf": "choisir",
            "english":"choose",
            "end":"ir",
            "type":"regular",
            "base": {"pastImperfect":"choisiss","present":"chois","futureSimple":"choisir","conditional":"choisir"},
            "pastImperfect":["ais","ais","ait","ait","ions","iez","aient","aient"],
            "present":["is","is","it","it","issons","issez","issent","issent"],
            "futureSimple":["ai","as","a","a","ons","ez","ont","ont"],
            "conditional":["ais","ais","ait","ait","ions","iez","aient","aient"]},           
 
        {   
            "inf": "agir",
            "english":"act",
            "end":"ir",
            "type":"regular",
            "base": {"pastImperfect":"agiss","present":"ag","futureSimple":"agir","conditional":"agir"},
            "pastImperfect":["ais","ais","ait","ait","ions","iez","aient","aient"],
            "present":["is","is","it","it","issons","issez","issent","issent"],
            "futureSimple":["ai","as","a","a","ons","ez","ont","ont"],
            "conditional":["ais","ais","ait","ait","ions","iez","aient","aient"]},     
 
        {   
            "inf": "avertir",
            "english":"warn",
            "end":"ir",
            "type":"regular",
            "base": {"pastImperfect":"avertiss","present":"avert","futureSimple":"avertir","conditional":"avertir"},
            "pastImperfect":["ais","ais","ait","ait","ions","iez","aient","aient"],
            "present":["is","is","it","it","issons","issez","issent","issent"],
            "futureSimple":["ai","as","a","a","ons","ez","ont","ont"],
            "conditional":["ais","ais","ait","ait","ions","iez","aient","aient"]},     
 
 
 
 
        ];
 