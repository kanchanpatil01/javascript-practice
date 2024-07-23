// 1 -> average of numbers from the array
function calculateAverage(array) {
  if (array.length === 0) return 0;
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }

  const average = sum / array.length;

  return average;

}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const average = calculateAverage(numbers);
console.log(average);

// using reduce method

function calculateAverageReduce(array) {
  const sum = array.reduce((acc, currentValue) => acc + currentValue, 0);
  const average = sum / array.length;
  return average;
}

const numbers1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const average1 = calculateAverageReduce(numbers1);
console.log(average1);

// 2 -> count the occurences
function countOccurences(array) {

  const occurences = {};

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    console.log(value, occurences);
    if (occurences[value]) {
      occurences[value]++;
    } else {
      occurences[value] = 1;
    }
  }

  return occurences;

}

const numbers2 = [1, 1, 1, 2, 2, 3, 3, 3, 4, 5, 6, 7, 8, 8, 8, 8, 9];
const occurences = countOccurences(numbers2);
console.log(occurences);