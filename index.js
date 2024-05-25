const words = "Hey , there my name is Srajan Saxena , i am a 19 year old Computer Science student at National Post Graduate College, Lucknow!! , this is a typing speed tester built by me for practice of Javascript , i hope you have enjoyed using it".split(' ')

const wordCount = words.length;


function randomWord(){
    const randomWord = Math.ceil(Math.random() * wordCount);
    return words[randomWord];
}

function newGame(){
    var textArea = document.getElementById('field');
    textArea.innerHTML = '';

    for(var i = 0 ; i < wordCount; i++){
        // textArea.innerHTML += randomWord() + ' '; // adding space after each word
        textArea.setAttribute('placeholder' , randomWord() + ' ');
    }
}

newGame();