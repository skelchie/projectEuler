/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? */

function smallestDivider(startNumber, endNumber) {
  //check if number is divisible by all the numbers
  function checkDivider(number, n, m) {
    for (let i = n; i <= m; i++) {
      if (number % i !== 0) {
        return false;
      }
      if (i === m && number % i === 0) {
        return true;
      }
    }
  }

  let numberCount = 1;
  while (!checkDivider(numberCount, startNumber, endNumber)) {
    numberCount += 1;
  }

  return numberCount;
}

console.log(smallestDivider(1, 20));
