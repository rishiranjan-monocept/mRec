import apiService from "../api/apiService";

export const testGet = async () => {
  const res = await apiService({
    url: "/users",
    method: "GET",
  });

  console.log("testGet response : ", res);
};

export const testPost = async () => {
  const res = await apiService({
    url: "/users",
    method: "POST",
    data: { name: "John Doe", job: "Developer" },
  });
  console.log("testPost response : ", res);
};
