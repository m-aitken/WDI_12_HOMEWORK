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

//     console.log(JSON.stringify(days_of_the_week));

//     // .splice() off the 'weekend' nested array    
//     days_of_the_week.splice(1);

//     //log the shortened week
//     console.log(JSON.stringify(days_of_the_week));

//     // sort the remaining nested array element by alpha
//     days_of_the_week[0].sort();

//     //log the sorted result to console
//     console.log(JSON.stringify(days_of_the_week)); 


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
//  console.log(recipe.ingredients[0]);
//  console.log(recipe.ingredients[1]);
//  console.log(recipe.ingredients[2]);

//// *try loop?



//// The Reading List
//// Create an array of Objects, each contains a book's properties: title, author, alreadyRead(boolean)

var books = [
    {
        title: 'Sphere',
        author: 'Michael Crichton',
        alreadyRead: true
    },
    {
        title: 'The Greatest Show on Earth',
        author: 'Richard Dawkins',
        alreadyRead: false

    },
    {
        title: 'Frank',
        author: 'James Kaplan',
        alreadyRead: true
    }
];

for (var i = 0; i < books.length; i++) {
    log book title + ' by ' + author
}






//// The Movie Database
//// Movie details in array: title(string), duration(number, stars(array of actors)


var movie = {
    title: 'american psycho',
    duration: 120,
    stars: ['Christian Bale', 'Reese Witherspoon', 'Jared Leto', 'Willem Defoe']
} 

var imdbList = function () {
    logtoconsole title + ' lasts for ' + duration + "."
}