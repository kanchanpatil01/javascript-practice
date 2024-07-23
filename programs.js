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