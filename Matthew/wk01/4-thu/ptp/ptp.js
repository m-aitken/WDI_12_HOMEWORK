var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
//var glenwaverley = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Toorak'];
//var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];

var origin = prompt('Enter your origin');  
var destination = prompt('Enter your destination'); 
    
    //get origin value, compare to alamein array, return index
    var originIndex = alamein.indexOf(origin);

    //get destination value, compare to alamein array, return index
    var destinationIndex = alamein.indexOf(destination) + 1;

    //alamein.indexOf(origin) > -1; (check if true/false)

    // use alamein.slice(originIndex, destinationIndex)
    var path = [alamein.slice(originIndex, destinationIndex)];

var journey = function () {
    if (origin !== null && origin !== '' && destination !== null && destination !== "") {
        console.log('Origin: ' + origin);
        console.log('Destination ' + destination);
        console.log(path.join()); //origin + ' ----> ' + destination);
    };
};

journey()

