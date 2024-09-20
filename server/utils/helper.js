const findMinMaxAvgMath = (values) => {
  const startTimer = Date.now();
  const min = Math.min(...values);
  const max = Math.max(...values);
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    total += values[i];
  }
  const avg = total / values.length;
  const endTimer = Date.now();
  const time = endTimer - startTimer;

  return { min, max, avg, time };
};

const findMinMaxAvgArraySort = (values) => {
  const startTimer = Date.now();
  const sortedValues = values.sort((a, b) => a - b);
  const total = sortedValues.reduce((total, n) => total + n);
  const min = sortedValues[0];
  const max = sortedValues[sortedValues.length - 1];
  const avg = total / sortedValues.length;
  const endTimer = Date.now();
  const time = endTimer - startTimer;

  return { min, max, avg, time };
};

const findMinMaxAvgArrayCustomSort = (values) => {
  const startTimer = Date.now();
  const sortedValues = values;
  let minCount = 0,
    maxCount = values.length - 1;
  while (minCount < maxCount) {
    let index = minCount + 1;
    while (index < values.length - 1) {
      if (sortedValues[minCount] > sortedValues[index]) {
        sortedValues.splice(minCount, index, sortedValues[index]);
      }
      index++;
    }
    minCount++;
  }
  const total = sortedValues.reduce((total, n) => total + n);
  const min = sortedValues[0];
  const max = sortedValues[sortedValues.length - 1];
  const avg = total / sortedValues.length;
  const endTimer = Date.now();
  const time = endTimer - startTimer;
  return { min, max, avg, time };
};

module.exports = {
  findMinMaxAvgMath,
  findMinMaxAvgArraySort,
  findMinMaxAvgArrayCustomSort,
};
