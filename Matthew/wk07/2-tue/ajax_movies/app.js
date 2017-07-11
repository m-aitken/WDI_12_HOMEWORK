var $btn = $('button');

$btn.on('click', function(event) {
  event.preventDefault();

  var movieName = $('input').value
  
  var settings = {
  url: 'http://omdbapi.com/?',
  data: { s: movieName, type: type='movie', apikey: apikey='2f6435d9'}
  }

  $.ajax(settings).done(function (response) { // response is JSON
    var newList = document.createElement('li');
    newList.textContent = response['Search'][0].Title;
    $('.result').append(newList);
    });
});

// response['Search'][0].Title returns Title of first object
// loop through each object in Search array, return the Title

// create <li> for each, including A HREF to IMDB page