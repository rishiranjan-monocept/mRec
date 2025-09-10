import axiosInstance from "./axiosInstance";
import handleApiError from "../utils/errorHandler";

const apiService = async ({
  url,
  method = "GET",
  data = null,
  params = null,
  headers = {},
}) => {
  try {
    const response = await axiosInstance({
      url,
      method,
      data,
      params,
      headers,
    });
    return { success: true, data: response };
  } catch (error) {
    return handleApiError(error);
  }
};

export default apiService;
