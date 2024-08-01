import axios from "axios";
import { getToken } from "./tokenServices";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;

export async function getUsers() {
    try {
      const response = await axios.get(`${baseUrl}/home`, {
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
  
  export const postSwipedUserId = async (swipedId: number) => {
    const token = getToken();
    if (!token) throw new Error("No access token found");
  
    try {
      const response = await axios.post(
        `${baseUrl}/swiper`,
        { swipedId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error posting swiped user ID to database:", error);
      throw error;
    }
  };