// PT Planner

var metro = {

alamein: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
glenwaverly: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Toorak'],
sandringham: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
};

var interchange = "Richmond";
var originStop = prompt('Enter your origin');  
var destinationStop = prompt('Enter your destination'); 

// var originLine = 
// var originIndex;
// var destinationLine = 
// var destinationIndex;

    //get origin value, compare to alamein array, return index
var originIndex = metro['alamein'].indexOf(originStop);   // use findIndex

    //get destination value, compare to alamein array, return index
var destinationIndex = metro['alamein'].indexOf(destinationStop) + 1;

    //alamein.indexOf(origin) > -1; (check if true/false)

    // use alamein.slice(originIndex, destinationIndex)
var path = [metro['alamein'].slice(originIndex, destinationIndex)];


var journey = function () {
    if (originStop !== null && originStop !== '' && destinationStop !== null && destinationStop !== "") {
    var diff = metro['alamein'].indexOf(destinationStop) - metro['alamein'].indexOf(originStop);
    var numStops = Math.abs(diff);
        console.log('Origin: ' + originStop);
        console.log('Destination ' + destinationStop);
        console.log(path.join()); //origin + ' ----> ' + destination);
        console.log('Number of stops: ' + numStops);
        
    };
};

journey()


// if destination line === origin line, calculate for index - index stops & path, 
//  else, find destination line
//      find difference of Richmond and Destination stop
//  return origin to Richmond, join Richmond to Destintion  ( path )
//      calculate for stops