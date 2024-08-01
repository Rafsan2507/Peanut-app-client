import axios from "axios";
import { getToken } from "./tokenServices";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;

export async function getHobbyList() {
    try {
      const response = await axios.get(`${baseUrl}/allActivities`, {
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