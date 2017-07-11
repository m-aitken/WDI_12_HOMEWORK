// Q1
$('h1').eq(1)

// Q2
$('h1').html("Friend")

// Q3

var $div = $('div');
$('button').on('click', function(event) {
  $div.css('backgroundColor', 'red');
})

// Q4

var favouriteColor = $('#favCol').val()

// Q5

$('.my-articles').append('<p>')

// Q6

$('ul')[0].childElementCount

// Q7

$('button').on('click', function(event) {
  var minNum = 1;
  var maxNum = 100;
  var rando = Math.floor(Math.random() * (maxNum + 1) + minNum)
  $('.lucky-numbers').append('<li>' + rando + '</li>'); 
});