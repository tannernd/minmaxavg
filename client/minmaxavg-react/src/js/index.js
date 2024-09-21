export const formSubmit = async (values) => {
  // Fetch the min, max, and avg from the API
  try {
    const response = await fetch("/api/minmaxavg/", {
      method: "POST",
      body: JSON.stringify({ ...values }),
      headers: { "Content-Type": "application/json" },
    });
    // Check for an ok response from the server
    if (response.ok) {
      // Parse JSON response
      const data = await response.json();
      return data;
    } else {
      // When an error occurs, throw the error,
      const errorData = await response.json();
      console.log("errorData: ", errorData);
      throw new Error(errorData.msg);
    }
  } catch (error) {
    return { success: false, msg: error.message };
  }
};
