// Function to find the min and max using the Math function in JS
// Average is found through a forEach loop, this could also be done with a reducer
const findMinMaxAvgMath = (values) => {
  //Start a timer in ms to see how quickly the Math functions run
  const startTimer = Date.now();
  const min = Math.min(...values);
  const max = Math.max(...values);
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    total += values[i];
  }
  const avg = total / values.length;
  // End the timer and find how many ms the process took
  const endTimer = Date.now();
  const time = endTimer - startTimer;

  return { min, max, avg, time };
};

const findMinMaxAvgArraySort = (values) => {
  //Start a timer in ms to see how quickly the Sort function method runs
  const startTimer = Date.now();
  // Use the JS sort ro iterate through the array, passing a function since they are numbers.
  const sortedValues = values.sort((a, b) => a - b);
  // Get the total of all values though a reducer
  const total = sortedValues.reduce((total, n) => total + n);
  const min = sortedValues[0];
  const max = sortedValues[sortedValues.length - 1];
  const avg = total / sortedValues.length;
  // End the timer and find how many ms the process took
  const endTimer = Date.now();
  const time = endTimer - startTimer;

  return { min, max, avg, time };
};

const findMinMaxAvgArrayCustomSort = (values) => {
  //Start a timer in ms to see how quickly the custom sort logic method runs
  const startTimer = Date.now();
  const sortedValues = values;
  let minCount = 0,
    maxCount = values.length - 1;
  // First loop to move the initial index through the array to get the first value for comparison.
  while (minCount < maxCount) {
    let index = minCount + 1;
    // Second loop to iterate through all values in the array to check if the value is less than the the start index (minCount)
    while (index < values.length - 1) {
      if (sortedValues[minCount] > sortedValues[index]) {
        //  When the value is less that the start value, the item is removed from its current index and replaced in the start index.
        sortedValues.splice(minCount, index, sortedValues[index]);
      }
      index++;
    }
    // Iterate through the start index
    minCount++;
  }
  // Get the total of all values though a reducer
  const total = sortedValues.reduce((total, n) => total + n);
  const min = sortedValues[0];
  const max = sortedValues[sortedValues.length - 1];
  const avg = total / sortedValues.length;
  // End the timer and find how many ms the process took
  const endTimer = Date.now();
  const time = endTimer - startTimer;
  return { min, max, avg, time };
};

module.exports = {
  findMinMaxAvgMath,
  findMinMaxAvgArraySort,
  findMinMaxAvgArrayCustomSort,
};
