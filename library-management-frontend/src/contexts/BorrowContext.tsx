import React, { createContext, useState, useContext, ReactNode } from "react";

interface Borrow {
  id: number;
  bookId: number;
  userId: number;
  borrowDate: Date;
  returnDate: Date | null;
}

interface BorrowContextProps {
  borrows: Borrow[];
  addBorrow: (borrow: Borrow) => void;
}

const BorrowContext = createContext<BorrowContextProps | undefined>(undefined);

export const BorrowProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [borrows, setBorrows] = useState<Borrow[]>([]);

  const addBorrow = (borrow: Borrow) => {
    setBorrows([...borrows, borrow]);
  };

  return (
    <BorrowContext.Provider value={{ borrows, addBorrow }}>
      {children}
    </BorrowContext.Provider>
  );
};

export const useBorrows = (): BorrowContextProps => {
  const context = useContext(BorrowContext);
  if (!context) {
    throw new Error("useBorrows must be used within a BorrowProvider");
  }
  return context;
};
