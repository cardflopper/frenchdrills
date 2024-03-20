var subjects = ["je","tu","il","elle","nous","vous","ils","elles"];
var tenses = ["pastImperfect","present","futureSimple","conditional"];
var tips = {
    "pastImperfect":"start with present-tense stem of nous form, add the imperfect endings: je/tu = ais, il = ait, ions, iez, ils = aient (identical for verbs of all groups)",
    "present":"basic",
    "futureSimple":"start with infinitive, add endings: je = ai, tu = as, il = a, ons, ez, ils = ont. (for -re verbs,  remove  final e)",
    "conditional": "start with stem of the futureSimple (usually infinitive), add imperfect endings"
}

var regularVerbData = {
    "er": {
        "pastImperfect":["ais","ais","ait","ait","ions","iez","aient","aient"],
        "present":["e","es","e","e","ons","ez","ent","ent"],
        "futureSimple":["ai","as","a","a","ons","ez","ont","ont"],
        "conditional":["ais","ais","ait","ait","ions","iez","aient","aient"]},
    "ir":{
        "pastImperfect":["ais","ais","ait","ait","ions","iez","aient","aient"],
        "present":["is","is","it","it","issons","issez","issent","issent"],
        "futureSimple":["ai","as","a","a","ons","ez","ont","ont"],
        "conditional":["ais","ais","ait","ait","ions","iez","aient","aient"]},
    "re":{
        "pastImperfect":["ais","ais","ait","ait","ions","iez","aient","aient"],
        "present":["s","s","","","ons","ez","ent","ent"],
        "futureSimple":["ai","as","a","a","ons","ez","ont","ont"],
        "conditional":["ais","ais","ait","ait","ions","iez","aient","aient"]}
}



var verbData = [
        {
            "inf":"manger",
            "english": {"inf":"to eat","pastImperfect":"was eating","present":"[am/are/is] eating","futureSimple":"will eat","conditional":"would eat"},
            "end":"er",
            "type":"irregular",
            "base": {"pastImperfect":"mang","present":"mang","futureSimple":"manger","conditional":"manger"},
            "pastImperfect":["eais","eais","eait","eait","ions","iez","eaient","eaient"],
            "present":["e","es","e","e","eons","ez","ent","ent"],
            "futureSimple":["ai","as","a","a","ons","ez","ont","ont"],
            "conditional":["ais","ais","ait","ait","ions","iez","aient","aient"]},
        {
            "inf":"aimer",
            "english": {"inf":"to like","pastImperfect":"was liking","present":"[am/are/is] liking","futureSimple":"will like","conditional":"would like"},
            "end":"er",
            "type":"regular",
            "base": {"pastImperfect":"aim","present":"aim","futureSimple":"aimer","conditional":"aimer"}},
        {
            "inf":"chanter",
            "english": {"inf":"to sing","pastImperfect":"[was/were] singing","present":"[am/are/is] singing","futureSimple":"will sing","conditional":"would sing"},
            "end":"er",
            "type":"regular",
            "base": {"pastImperfect":"chant","present":"chant","futureSimple":"chanter","conditional":"chanter"}},
        {
            "inf":"chercher",
            "english": {"inf":"to look for","pastImperfect":"[was/were] looking for","present":"[am/are/is] looking for","futureSimple":"will look for","conditional":"would look for"},
            "end":"er",
            "type":"regular",
            "base": {"pastImperfect":"cherch","present":"cherch","futureSimple":"chercher","conditional":"chercher"}},
        {
            "inf":"danser",
            "english": {"inf":"to dance","pastImperfect":"[was/were] dancng","present":"[am/are/is] dancing","futureSimple":"will dance","conditional":"would dance"},
            "end": "er",
            "type": "regular",
            "base": {"pastImperfect":"dans","present":"dans","futureSimple":"danser","conditional":"danser"}},
        {
            "inf": "demander",
            "english": {"inf":"to demand","pastImperfect":"[was/were] demanding","present":"[am/are/is] demanding","futureSimple":"will demand","conditional":"would demand"},
            "end": "er",
            "type": "regular",
            "base": {"pastImperfect":"demand","present":"demand","futureSimple":"demander","conditional":"demander"}},
        {   
            "inf": "arriver",
            "english": {"inf":"to arrive","pastImperfect":"[was/were] arriving","present":"[am/are/is] arriving","futureSimple":"will arrive","conditional":"would arrive"},
            "end": "er",
            "type": "regular",
            "base": {"pastImperfect":"arriv","present":"arriv","futureSimple":"arriver","conditional":"arriver"}},
        {   
            "inf": "agir",
            "english": {"inf":"to act","pastImperfect":"[was/were] acting","present":"[am/are/is] acting","futureSimple":"will act","conditional":"would act"},
            "end": "ir",
            "type": "regular",
            "base": {"pastImperfect":"agiss","present":"ag","futureSimple":"agir","conditional":"agir"}},
        {   
            "inf": "avertir",
            "english": {"inf":"to warn","pastImperfect":"[was/were] warning","present":"[am/are/is] warning","futureSimple":"will warn","conditional":"would warn"},
            "end": "ir",
            "type": "regular",
            "base": {"pastImperfect":"avertiss","present":"avert","futureSimple":"avertir","conditional":"avertir"}},
        {   
            "inf": "choisir",
            "english": {"inf":"to choose","pastImperfect":"[was/were] choosing","present":"[am/are/is] choosing","futureSimple":"will choose","conditional":"would choose"},
            "end": "ir",
            "type": "regular",
            "base": {"pastImperfect":"choisiss","present":"chois","futureSimple":"choisir","conditional":"choisir"}},
        {   
            "inf": "finir",
            "english": {"inf":"to finish","pastImperfect":"[was/were] finishing","present":"[am/are/is] finishing","futureSimple":"will finish","conditional":"would finish"},
            "end": "ir",
            "type": "regular",
            "base": {"pastImperfect":"finiss","present":"fin","futureSimple":"finir","conditional":"finir"}},
        {   
            "inf": "investir",
            "english": {"inf":"to invest","pastImperfect":"[was/were] investing","present":"[am/are/is] investing","futureSimple":"will invest","conditional":"would invest"},
            "end": "ir",
            "type": "regular",
            "base": {"pastImperfect":"investiss","present":"invest","futureSimple":"investir","conditional":"investir"}},
        {   
            "inf": "nourrir",
            "english": {"inf":"to feed","pastImperfect":"[was/were] feeding","present":"[am/are/is] feeding","futureSimple":"will feed","conditional":"would feed"},
            "end": "ir",
            "type": "regular",
            "base": {"pastImperfect":"nourriss","present":"nourr","futureSimple":"nourrir","conditional":"nourrir"}},
        {   
            "inf": "punir",
            "english": {"inf":"to punish","pastImperfect":"[was/were] punishing","present":"[am/are/is] punishing","futureSimple":"will punish","conditional":"would punish"},
            "end": "ir",
            "type": "regular",
            "base": {"pastImperfect":"puniss","present":"pun","futureSimple":"punir","conditional":"punir"}},    
        {   
            "inf": "réfléchir",
            "english": {"inf":"to think/reflect","pastImperfect":"[was/were] thinking/reflecting","present":"[am/are/is] thinking/reflecting","futureSimple":"will think/reflect","conditional":"would think/reflect"},
            "end": "ir",
            "type": "regular",
            "base": {"pastImperfect":"réfléchiss","present":"réfléch","futureSimple":"réfléchir","conditional":"réfléchir"}},        
        {   
            "inf": "attendre",
            "english": {"inf":"to wait-for / expect","pastImperfect":"[was/were] waiting-for / expecting","present":"[am/are/is] waiting-for / expecting","futureSimple":"will wait-for / expect","conditional":"would wait-for / expect"},
            "end": "re",
            "type": "regular",
            "base": {"pastImperfect":"attend","present":"attend","futureSimple":"attendr","conditional":"attendr"}},        
        {   
            "inf": "descendre",
            "english": {"inf":"to go down","pastImperfect":"[was/were] going down","present":"[am/are/is] going down","futureSimple":"will go down","conditional":"would go down"},
            "end": "re",
            "type": "regular",
            "base": {"pastImperfect":"descend","present":"descend","futureSimple":"descendr","conditional":"descendr"}},                    
        {   
            "inf": "vendre",
            "english": { "inf":"to sell", "pastImperfect":"[was/were] selling", "present":"[am/are/is] selling", "futureSimple":"will sell", "conditional":"would sell"},
            "end": "re",
            "type": "regular",
            "base": { "pastImperfect":"vend" ,"present":"vend", "futureSimple":"vendr", "conditional":"vendr"}},
        ];
 