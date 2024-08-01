
import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;
export type SignUpUser = {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
};
type LogInUser = {
  email: string;
  password: string;
};

export async function signUp(data: SignUpUser) {
  try {
    const response = await axios.post(`${baseUrl}/sign-up`, data);
    return response.data;
  } catch (error) {
    console.error("Error signing up:", error);
  }
}

export async function logIn(data: LogInUser) {
  try {
    const response = await axios.post(`${baseUrl}/login`, data);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
  }
}

