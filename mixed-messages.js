//fortune components
const fortunePhrases = {
    description: ['faithful', 'dubious', 'distant', 'special', 'good'],
    relation: ['friend', 'family member', 'partner', 'lover', 'acquaintance', 'collegue'],
    action: ['ask for money', 'enter your life', 'ask for your advice', 'impose on you', 'bring you flowers', 'share some news'],
    reason: ['it is difficult to resist your persuasive manner', 'they want to try something new', 'you are precious', 'things happen']
};

//will contain final fortune
let fortune = [];

//select a random number for index
function randomIndex (arrayLength) {
    let indexNum = Math.floor(Math.random() * arrayLength);
    return indexNum;
};

//iterate through object
function createFortune(object) {
    for (let key in object) {
        let index = randomIndex(object[key].length);
        
        //add each random component to the fortune
        switch(key) {
            case 'description':
                fortune.push(`A ${object[key][index]}`);
                break;
            case 'relation':
                fortune.push(`${object[key][index]} is going to`);
                break;
            case 'action':
                fortune.push(`${object[key][index]} because`);
                break;
            case 'reason':
                fortune.push(`${object[key][index]}.`)
                break;
            };
        };
    return fortune;
    };

//check for certain phrases and add advice
function addAdvice(array) {
    
    //check for certain description phrases
    if (array.includes('A dubious')) {
        fortune.push('ADVICE: Beware of dubious people.');
    } else if (array.includes('A distant')) {
        fortune.push('ADVICE: This could be a good opportunity to improve this distant relationship.');
    };
    
    //check for certain actions
    if (array.includes('ask for your advice because')) {
        fortune.push('ADVICE: Think carefully before you impart your wisdom!');
    } else if (array.includes('impose on you because')) {
        fortune.push('ADVICE: Beware of those who would impose on you.');
    } else if (array.includes('bring you flowers because')) {
        fortune.push('ADVICE: Make sure you have a vase handy!');
    };
    return fortune;
};

//format final fortune
function revealFortune(object, array) {
    createFortune(object);
    addAdvice(array);
    console.log(array.join(' ')); 
}

revealFortune(fortunePhrases, fortune);