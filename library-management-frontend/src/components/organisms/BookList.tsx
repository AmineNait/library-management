import React from "react";
import BookCard from "../molecules/BookCard";
import Grid from "@mui/material/Grid";

interface BookListProps {
  books: { id: number; title: string; author: string }[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <Grid container spacing={2}>
      {books.map((book) => (
        <Grid item xs={12} sm={6} md={4} key={book.id}>
          <BookCard title={book.title} author={book.author} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;
