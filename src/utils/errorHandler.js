const handleApiError = (error) => {
  let message = "Something went wrong";

  if (error.response) {
    // Server responded with an error
    message = error.response.data?.message || error.response.statusText;
  } else if (error.request) {
    // No response from server
    message = "No response from server. Please try again.";
  } else {
    // Other errors
    message = error.message;
  }

  return { success: false, error: message };
};

export default handleApiError;
