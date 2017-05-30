// wk01 - Tuesday - Homework - Loops
//commentary applied to activate/deactivate desired segment:


//The Even/Odd Reporter
//Check for Even & Odd numbers

// for (var num = 1; num <= 20; num++) {
//  console.log(num);

//     if (num % 2 === 0) { 
//     //if number is evenly divisible by 2, display message
//         console.log(num + ' is Even');
     
//     } 
//     else {
//     //Other must be 'Odd', display message
//         console.log(num + ' is Odd'); 

//     }   
// }



// Multiplication Tables
// Simple 9x multiplicaton table

// for (var num = 0; num <= 10; num++) {
//     //num will iterate from 0 to 10

//     if (num <= 10) { //where num is less/equal to 10:
//         console.log(num + ' * 9 =')  //log "'num' * 9 ="
//         console.log(num * 9)    //multiply num by 9 and log the result
//     } 
// }     



//Top Choices
//Collection of favourite things, logged with number of preference

// for (var id = 1; id <= 3; id++){ //Loop iterates 1 - 3
//     var dogs = ['dachsund', 'pug', 'corgi']; //element array of fave dog breeds

// //For each value of ID (max 3), return index# element and comment 
//     if (id = 1) {
//         console.log('My #1 choice of dog breed is a ' + dogs[0]);
//         }
//     if (id = 2) {
//         console.log('My #2 choice of dog breed is a ' + dogs[1]);
//         }
//     if (id = 3) {
//         console.log('My #3 choice of dog breed is a ' + dogs[2]);
//         }
// }



//JS Else If

//var year = Number(prompt('Enter your year'));

for (var year = Number(prompt('Enter your year')); year >= 1900; year <= 3000) {
    if (year === 2017) {
        console.log("I'm in the present");
        //log we're in the present
        } 
    
    else if (year < 2017) {
    console.log('Whoa! Blast from the past!');
    //log "from the past"
    }

    else if (year > 2017) {
    console.log('Greetings from the future!');
    //log "greetings from the future"

var date = new Date(); 
 var anno = date.getFullYear();      
       if (anno !== year) {
        console.log('Current year is ' + anno);
    }    
    }
    break;
};

// //use JS date method to return current year + log 'year' confirmed
// var date = new Date(); 
//  var anno = date.getFullYear();      
//        if (anno !== year) {
//         console.log('Current year is ' + anno);
//     };

// //getYear example
// var date = new Date();
//  var anno = date.getFullYear();
//     console.log(anno);