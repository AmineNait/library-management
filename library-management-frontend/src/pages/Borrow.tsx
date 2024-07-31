import React, { useEffect, useState } from "react";
import { getBorrows, addBorrow } from "../services/borrowService";

const Borrow: React.FC = () => {
  const [borrows, setBorrows] = useState<any[]>([]);

  useEffect(() => {
    const fetchBorrows = async () => {
      const result = await getBorrows();
      setBorrows(result);
    };

    fetchBorrows();
  }, []);

  const handleAddBorrow = async () => {
    const newBorrow = {
      bookId: 1,
      userId: 1,
      borrowDate: new Date(),
      returnDate: null,
    };
    const result = await addBorrow(newBorrow);
    setBorrows([...borrows, result]);
  };

  return (
    <div>
      <h1>Borrow List</h1>
      <ul>
        {borrows.map((borrow) => (
          <li
            key={borrow.id}
          >{`Book ID: ${borrow.bookId}, User ID: ${borrow.userId}, Borrow Date: ${borrow.borrowDate}`}</li>
        ))}
      </ul>
      <button onClick={handleAddBorrow}>Add Borrow</button>
    </div>
  );
};

export default Borrow;
