// Code your solutions in this file
function writeCards(names, eventName) {
    const messages = [];

    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);  
    }

    return messages;
}

function countDown(number) {
    while (number > -1) {
        console.log(number);
        number--;
    }
}