import axios from "axios";

const API_URL = "http://localhost:5000/api/authors";

export const getAuthors = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addAuthor = async (author: { name: string }) => {
  const response = await axios.post(API_URL, author);
  return response.data;
};
