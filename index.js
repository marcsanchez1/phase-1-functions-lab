// Code your solution in this file!
let hq = 42;
function distanceFromHqInBlocks(pickUp) {
  if (hq >= pickUp) {
    return hq - pickUp;
  } else {
    return pickUp - hq;
  }

  // return hq >= pickUp ? hq - pickUp : pickUp - hq;

  // return Math.abs(pickUp - 42);
}


function distanceFromHqInFeet (distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, end) {
  // if (start > end) {
  //   return (start - end) * 264;
  // } else {
  //   return (end - start) * 264;
  // }

// Tenary
return start > end ? (start - end) * 264 : (end - start) * 264;
}

/* Calculate fare price
  - Use distanceTravelledInFeet() for start/end
  - First 4 hundred ft. are free
  - Distance between 400 - 2000 ft. - 2¢ per foot (exclude 400 ft.)
  - Flat fare of 25 for distance > 2000 < 2500 ft.
  - No rides over 2500 ft - return 'cannot travel that far
*/
function calculatesFarePrice(start, end) {
  const distanceTravelled = distanceTravelledInFeet(start, end);

  // if (distanceTravelled > 400 && distanceTravelled < 2000) {
  //   return (distanceTravelled - 400) * .02;
  // } else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
  //     return 25;
  //   } else if (distanceTravelled < 400) {
  //     return 0;
  //   } else {
  //     return `cannot travel that far`;
  //   }
    if (distanceTravelled < 400) {
      return 0;
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
       return (distanceTravelled - 400) * .02;
    } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
        return 25;
    } else {
      return `cannot travel that far`;
    }
}




