import axios from "axios";
import { getToken } from "./tokenServices";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;

export async function getUserProfile(id: number) {
    try {
      const response = await axios.get(`${baseUrl}/profile/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };
  
  export async function getUserPreferences(id: number) {
    try {
      const response = await axios.get(`${baseUrl}/activity/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching users preferences:", error);
      throw error;
    }
};

export async function getOwnProfile() {
  try {
    const response = await axios.get(`${baseUrl}/profile/self-profile`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching own profile:", error);
    throw error;
  }
};

export async function getOwnPreferences() {
  try {
    const response = await axios.get(`${baseUrl}/profile/self-activity`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching self preferences:", error);
    throw error;
  }
};
