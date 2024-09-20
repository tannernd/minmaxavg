const formSubmit = (e) => {
  // Prevent the form default submission
  e.preventDefault();

  // Get the entered Values
  const values = document.getElementById("values").value;

  // Fetch the min, max, and avg from the API
  fetch("/api/minmaxavg/", {
    method: "POST",
    body: JSON.stringify({ values }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      // Check for an ok response from the server
      if (response.ok) {
        // Parse JSON response
        return response.json();
      } else {
        // When an error occurs, throw the error,
        throw new Error("An error has occurred");
      }
    })
    .then((data) => {
      // Hide the error alert
      const errorAlert = document.getElementById("error");
      errorAlert.classList.add("hidden");
      // Set the HTML with the response from the API call.
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
      // Error Handling to show the error in the alert
      console.error(error);
      const errorAlert = document.getElementById("error");
      errorAlert.classList.remove("hidden");
      errorAlert.innerHTML = error.message;
    });
};

document
  .getElementById("minMacAvgFrom")
  .addEventListener("submit", formSubmit, true);
