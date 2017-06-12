
function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
};

var list = ["virgin", "qantas", "jetstar", "tigerair", "etihad"];

var index = list.length;

var randomIndex = getRandomInt(0, index-1);

var word = list[randomIndex].toUpperCase().split("");

var count = word.length;

var guessCount = 9;

for (var i=0; i < count; i++){
  var newListItem = document.createElement('li');
  newListItem.textContent = "_";
  document.querySelector('.hangman').appendChild(newListItem);
};


document.body.addEventListener('keydown', function(event){


  var isInWord = false;
  var letter = String.fromCharCode(event.keyCode);
  var correctGuess = document.querySelector('.hangman').getElementsByTagName('li');

  document.querySelector('h5').textContent = "Turns Left: " + guessCount.toString();

  for(j=0; j< count; j++){
    if (word[j] === letter){
      isInWord = true;
      correctGuess[j].textContent = letter;
      word[j] ='';
    }
  }

  if(!isInWord){
    var newListItem = document.createElement('li');
    newListItem.textContent = letter;
    document.querySelector('.wrong-guesses').appendChild(newListItem);
  }

  if(word.join('') === ''){
    document.querySelector('h3').textContent = "You got it!";
  }
  else if(guessCount === 0){
    document.querySelector('h3').textContent = "Try again!";
  }

  guessCount--;

});