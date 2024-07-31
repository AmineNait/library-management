import React, { createContext, useState, useContext, ReactNode } from "react";

interface Author {
  id: number;
  name: string;
}

interface AuthorContextProps {
  authors: Author[];
  addAuthor: (author: Author) => void;
}

const AuthorContext = createContext<AuthorContextProps | undefined>(undefined);

export const AuthorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authors, setAuthors] = useState<Author[]>([]);

  const addAuthor = (author: Author) => {
    setAuthors([...authors, author]);
  };

  return (
    <AuthorContext.Provider value={{ authors, addAuthor }}>
      {children}
    </AuthorContext.Provider>
  );
};

export const useAuthors = (): AuthorContextProps => {
  const context = useContext(AuthorContext);
  if (!context) {
    throw new Error("useAuthors must be used within an AuthorProvider");
  }
  return context;
};
