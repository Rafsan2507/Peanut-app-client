
import axios from "axios";
import { getToken } from "./tokenServices";

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

export async function getHobbyList() {
  try {
    const response = await axios.get(`${baseUrl}/likes`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching hobby list:", error);
    throw error;
  }
}

export async function postPreferences(preferences: number[]) {
  try {
    const response = await axios.post(
      `${baseUrl}/preferences`,
      { preferences },
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting preferences:", error);
    throw error;
  }
}
