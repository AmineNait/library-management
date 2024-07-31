import axios from 'axios';

const API_URL = 'http://localhost:5000/api/borrows';

export const getBorrows = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addBorrow = async (borrow: { bookId: number; userId: number; borrowDate: Date; returnDate: Date | null }) => {
  const response = await axios.post(API_URL, borrow);
  return response.data;
};
