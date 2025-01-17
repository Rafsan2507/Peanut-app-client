import axios from "axios";
import { getToken } from "./tokenServices";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;

export const uploadImageToCloudinary = async (imageSelected: File) => {
  const formData = new FormData();
  formData.append("file", imageSelected);
  formData.append("upload_preset", "i0exppmi");

  try {
    const response = await axios.post("https://api.cloudinary.com/v1_1/dm3h1yveh/image/upload", formData);
    return response.data.secure_url;
  } catch (error) {
    console.error("Error uploading image: ", error);
    throw error;
  }
};

export const postImageUrl = async (imageUrl: string) => {
  const token = getToken();
  if (!token) throw new Error("No access token found");

  try {
    const response = await axios.put(
      `${baseUrl}/image`,
      { image: imageUrl },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error saving image URL to database: ", error);
    throw error;
  }
};

export const postDueValue = async (dueValue: number) => {
  const token = getToken();
  if (!token) throw new Error("No access token found");

  try {
    const response = await axios.put(
      `${baseUrl}/due`,
      { due: dueValue },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error saving due value to database: ", error);
    throw error;
  }
};
