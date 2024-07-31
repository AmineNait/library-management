import axios from "axios";

const API_URL = "http://localhost:5208/api/books";

export const getBooks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const addBook = async (book: { title: string; authorId: number }) => {
  try {
    const response = await axios.post(API_URL, book);
    return response.data;
  } catch (error) {
    console.error("Error adding book:", error);
    throw error;
  }
};
