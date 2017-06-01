//// Days of the week array


// var days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//     //remove Sunday for last position
//    days_of_the_week.pop();

//     //insert 'Sunday' to first position
//    days_of_the_week.unshift('Sunday');

//     //log new day order
//    console.log(days_of_the_week);


////
// Nest arrays for weekdays and weekend, remove either array element, sort the remaining days by alpha


// var days_of_the_week = [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], ['Saturday', 'Sunday']];

//     console.log(toString(days_of_the_week));

//     // .splice() off the 'weekend' nested array    
//     days_of_the_week.splice(1);

//     //log the shortened week
//     console.log(toString(days_of_the_week));

//     // sort the remaining nested array element by alpha
//     days_of_the_week[0].sort();

//     //log the sorted result to console
//     console.log(toString(days_of_the_week)); 


////////////////////




//// The Recipe Card
//// Object to hold properties of a recipe; title, servings, ingredients

// var recipe = {
//     title: 'Mole',
//     servings: 2,
//     ingredients: ['cinnamon', 'cumin', 'cocoa']
// }

//  console.log(recipe.title);
//  console.log('Serves: ' + recipe.servings);
//  console.log('Ingredients:');
//  for (i = 0; i < ingredients.length; i++)
//  // .join(\n) "join together with connect 'new line"
//
//  console.log(recipe.ingredients[0]);
//  console.log(recipe.ingredients[1]);
//  console.log(recipe.ingredients[2]);



//// The Reading List
//// Create an array of Objects, each contains a book's properties: title, author, alreadyRead(boolean)

// var books = [
//     {
//         title: 'Sphere',
//         author: 'Michael Crichton',
//         alreadyRead: true
//     },
//     {
//         title: 'The Greatest Show on Earth',
//         author: 'Richard Dawkins',
//         alreadyRead: false

//     },
//     {
//         title: 'Frank',
//         author: 'James Kaplan',
//         alreadyRead: true
//     }];

// for (var i = 0; i < books.length; i++) {
//     log book title + ' by ' + author
// }


// var book = {
//     title: 'cooking for dummies',
//     author: 'unknown',
//     alreadyRead: false
// }

// var book2 = {
//     title: '1984',
//     author: 'George Orwell',
//     alreadyRead: false
// }

// var = books [book, book2]

// for (index = 0; index < books.length; index++) {
//     if (books[index].alreadyRead) {
//         console.log('already read ' + books[index].title + ' by' + books[index].author)
//     } else {
//         console.log('you should read ' + books[index].title);
//     }
// }


//// The Movie Database
//// Movie details in array: title(string), duration(number, stars(array of actors)


var movie = {
    title: 'American Psycho',
    duration: '120 minutes',
    stars: ['Christian Bale', 'Reese Witherspoon', 'Jared Leto', 'Willem Defoe']
} 

var imdbList = function(movie) {
    return movie.title + ' lasts for ' + movie.duration + ' stars ' + movie.stars.join(', ')
}
console.log(imdbList(movie) );

