const descriptionPhrases = require('./mm-description-array');
const relationPhrases = require('./mm-relation-array');
const actionPhrases = require('./mm-action-array');
const reasonPhrases = require('./mm-reason-array');

//select a random phrase from array
function selectPhrase (array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

//put random phrases together into a fortune
function revealFortune() {
    let fortunePhrase = [];
    let description = selectPhrase(descriptionPhrases);
    let relation = selectPhrase(relationPhrases);
    let action = selectPhrase(actionPhrases);
    let reason = selectPhrase(reasonPhrases);
    fortunePhrase.push(`A ${description} ${relation} is going to ${action} because ${reason}.`);
    
    //check for certain phrases and add advice to fortune
    if (description === 'dubious') {
        fortunePhrase.push('ADVICE: Beware of dubious people.');
    };
    if (description === 'distant') {
        fortunePhrase.push('ADVICE: This could be a good opportunity to improve this distant relationship.');
    };
    if (action === 'ask for your advice') {
        fortunePhrase.push('ADVICE: Think carefully before you impart your wisdom!');
    };
    if (action === 'impose on you') {
        fortunePhrase.push('ADVICE: Beware of those who would impose on you.');
    };
    if (action === 'bring you flowers') {
        fortunePhrase.push('ADVICE: Make sure you have a vase handy!');
    };
    
    //print complete fortune
    console.log(fortunePhrase.join('\n'));
};

revealFortune()