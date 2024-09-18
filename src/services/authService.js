import axios from "axios";

const api = axios.create({
  baseURL: "https://scoutflair.top:8081",
});

export const signup = async (signupData) => {
  try {
    const response = await api.post("/globeCause/v1/signup", signupData);
    return response.data;
  } catch (error) {
    console.error("Error during signup:", error);
    throw error;
  }
};
