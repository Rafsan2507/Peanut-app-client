// install axios
//add env varible for backend url
//write signup login function
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;
type SignUpUser = {
  firstname: string;
  lastname: string;
  username: string;
  age: number;
  email: string;
  password: string;
};
type LogInUser = {
  email: string;
  password: string;
};

export async function signUp(data: SignUpUser) {
  try {
    const response = await axios.post(`${baseUrl}/register`, data);
    console.log(response.data);
  } catch (error) {
    console.error("Error signing up:", error);
  }
};

export const logIn = async function logIn(data: LogInUser) {
  try {
    const response = await axios.post(`${baseUrl}/login`, data);
    console.log(response.data);
  } catch (error) {
    console.error("Error logging in:", error);
  }
};
