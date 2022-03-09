// Code your solution in this file!
const feetInBlock = 264;
const hq = 42;
function distanceFromHqInBlocks(someValue){
    if (someValue > hq) {return someValue -= hq;}
    else if (someValue < hq) {return -1 * (someValue -= hq);}
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * feetInBlock;
}

function distanceTravelledInFeet(start, destination) {
    let distance = destination - start;
    // if (distance > 0) {return distance * feetInBlock;}
    // if (distance < 0) { return -1 * (distance * feetInBlock);}

    return distance > 0 ? (distance*feetInBlock) : (-1 *(distance*feetInBlock));
} 

function calculatesFarePrice(start, destination) {
/*    const farePerFeet = 0.02;
    const overTwoThousand = 25;
    let travelled = distanceTravelledInFeet (start,destination);
    let fare = (travelled - 400) * farePerFeet; 

    if (travelled < 400) {return 0;} 
    if (travelled > 400 && travelled < 2000) {return fare;}
    if (travelled > 2000 && travelled < 2500) {return overTwoThousand;}
    if (travelled > 2500) {return 'cannot travel that far';}
*/
    const farePerFeet = 0.02;
    let travelled = distanceTravelledInFeet (start,destination);
    let fare = travelled < 400 ? 0 : (travelled - 400) * farePerFeet;

    if (travelled > 2500) {return 'cannot travel that far';}
    if (travelled > 2000 && travelled < 2500) {return 25;}
    return fare;

    
}

