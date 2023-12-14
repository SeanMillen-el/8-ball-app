function shakeMagic8Ball() {
    const question = prompt('Ask the magic 8-ball a question:');

if (question === null) {
    document.getElementsById('response-text').innerText = 'PLEASE ASK A QUESTION!'
    document.getElementsById('response-text').classList = 'text-danger'
    document.getElementsById('response-text').src = '#BAD/BROKENIMG' //fix this
}

if (!question.trim()){
    alert('PLEASE ENTER A VALID QUESTION!')
}


}