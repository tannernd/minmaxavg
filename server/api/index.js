const router = require("express").Router();
const {
  findMinMaxAvgMath,
  findMinMaxAvgArraySort,
  findMinMaxAvgArrayCustomSort,
} = require("../utils/helper");

router.post("/minmaxavg", (req, res) => {
  // Split the values into an array
  valuesArray = req.body.values.split(",");
  try {
    // Map each value and replace string values with numbers
    valuesArray = valuesArray.map(Number);
    // Validate user input to ensure only numbers were entered
    valuesArray.forEach((value, key) => {
      if (isNaN(value)) {
        // If a NaN value is found from parse, throw an error.
        throw new Error(`Invalid entry, please only enter numbers`);
      }
    });
    // Perform functions to get min, max, avg via the defined methods
    const valuesMath = findMinMaxAvgMath(valuesArray);
    const valuesSort = findMinMaxAvgArraySort(valuesArray);
    const valuesCustomSort = findMinMaxAvgArrayCustomSort(valuesArray);
    // return the results
    res
      .status(200)
      .json({ success: true, valuesMath, valuesSort, valuesCustomSort });
  } catch (error) {
    // Error Handling.
    res.status(500).json({ success: false, msg: error.message });
  }
});

module.exports = router;
