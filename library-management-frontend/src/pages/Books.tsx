import React, { useEffect, useState } from "react";
import { getBooks, addBook } from "../services/bookService";
import BookList from "../components/organisms/BookList";
import CustomButton from "../components/atoms/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Books: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const result = await getBooks();
        setBooks(result);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const handleAddBook = async () => {
    try {
      const newBook = { title: "New Book", authorId: 1 };
      const result = await addBook(newBook);
      setBooks([...books, result]);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Book List
      </Typography>
      <BookList books={books} />
      <CustomButton label="Add Book" onClick={handleAddBook} />
    </Container>
  );
};

export default Books;
