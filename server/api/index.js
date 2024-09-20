const router = require("express").Router();
const {
  findMinMaxAvgMath,
  findMinMaxAvgArraySort,
  findMinMaxAvgArrayCustomSort,
} = require("../utils/helper");

router.post("/minmaxavg", (req, res) => {
  valuesArray = req.body.values.split(",");
  try {
    valuesArray = valuesArray.map(Number);
    valuesArray.forEach((value, key) => {
      if (isNaN(value)) {
        throw new Error(`Invalid entry, please only enter numbers`);
      }
    });
    const valuesMath = findMinMaxAvgMath(valuesArray);
    const valuesSort = findMinMaxAvgArraySort(valuesArray);
    const valuesCustomSort = findMinMaxAvgArrayCustomSort(valuesArray);
    res
      .status(200)
      .json({ success: true, valuesMath, valuesSort, valuesCustomSort });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
});

module.exports = router;
