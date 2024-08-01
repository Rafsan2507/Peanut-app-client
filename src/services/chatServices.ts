import axios from "axios";
import { getToken } from "./tokenServices";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;

export async function getConnections() {
    try {
      const response = await axios.get(`${baseUrl}/connection`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching connections:", error);
      throw error;
    }
};

export async function postMessage(receiver_Id: number, content: string) {
  try {
    const response = await axios.post(
      `${baseUrl}/chat/${receiver_Id}`,
      { content},
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error posting message:', error);
    throw error;
  }
};

export const fetchMessages = async (receiver_Id: number) => {

  try {
     const response = await axios.get(`${baseUrl}/chat/${receiver_Id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};