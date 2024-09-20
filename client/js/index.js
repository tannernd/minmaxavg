const formSubmit = (e) => {
  e.preventDefault();

  const values = document.getElementById("values").value;
  fetch("http://localhost:4003/api/minmaxavg/", {
    method: "POST",
    body: JSON.stringify({ values }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("An error has occurred");
      }
    })
    .then((data) => {
      const errorAlert = document.getElementById("error");
      errorAlert.classList.add("hidden");
      document.getElementById("minMath").innerHTML = data.valuesMath.min;
      document.getElementById("maxMath").innerHTML = data.valuesMath.max;
      document.getElementById("avgMath").innerHTML = data.valuesMath.avg;
      document.getElementById("timeMath").innerHTML = data.valuesMath.time;
      document.getElementById("minSort").innerHTML = data.valuesSort.min;
      document.getElementById("maxSort").innerHTML = data.valuesSort.max;
      document.getElementById("avgSort").innerHTML = data.valuesSort.avg;
      document.getElementById("timeSort").innerHTML = data.valuesSort.time;
      document.getElementById("minCustom").innerHTML =
        data.valuesCustomSort.min;
      document.getElementById("maxCustom").innerHTML =
        data.valuesCustomSort.max;
      document.getElementById("avgCustom").innerHTML =
        data.valuesCustomSort.avg;
      document.getElementById("timeCustom").innerHTML =
        data.valuesCustomSort.time;
    })
    .catch((error) => {
      console.error(error);
      const errorAlert = document.getElementById("error");
      errorAlert.classList.remove("hidden");
      errorAlert.innerHTML = error.message;
    });
};

document
  .getElementById("minMacAvgFrom")
  .addEventListener("submit", formSubmit, true);
