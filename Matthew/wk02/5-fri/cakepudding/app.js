
function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
};
// source list
var list = ["virgin", "qantas", "jetstar", "tigerair", "etihad"];
// list length
var index = list.length;

//get random index key in list array
var randomIndex = getRandomInt(0, index-1);

//get random word using random index key
var word = list[randomIndex].toUpperCase().split("");

// random word length
var count = word.length;

var guessCount = 9;

// for word length, create listItems as " _ "
for (var i=0; i < count; i++){
  var newListItem = document.createElement('li');
  newListItem.textContent = "_";
  document.querySelector('.hangman').appendChild(newListItem);
};


// listen on page for KB
document.body.addEventListener('keydown', function(event){


  var isInWord = false;

  // letter equals the KB key pressed as string
  var letter = String.fromCharCode(event.keyCode);
  var correctGuess = document.querySelector('.hangman').getElementsByTagName('li');

  document.querySelector('h5').textContent = "Turns Left: " + guessCount.toString();

  for(j=0; j< count; j++){
    if (word[j] === letter){    // loop through word letters, check if same as key press
      isInWord = true;
      correctGuess[j].textContent = letter;   // replace for correct letter
      word[j] ='';      // for that correct letter, remove from word
    }
  }

  if(!isInWord){
    var newListItem = document.createElement('li');  // create new list item
    newListItem.textContent = letter;     // list item is letter pressed
    document.querySelector('.wrong-guesses').appendChild(newListItem);  // add letter to wrong guesses list
  }

  if(word.join('') === ''){     // if word is successfully cleared, game won
    document.querySelector('h3').textContent = "You got it!";
  }
  else if(guessCount === 0){    // if guess count runs out game is lost
    document.querySelector('h3').textContent = "Try again!";
  }
  // each loop remove 1 from guess counter
  guessCount--;

});