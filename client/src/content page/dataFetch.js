import axios from "axios";
export const fetchNotifications = async ({ queryKey }) => {
  try {
    const id = queryKey[1];
    const response = await axios.get("http://localhost:3000/");
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

