import React, { useEffect, useState } from "react";
import { getAuthors, addAuthor } from "../services/authorService";
import AuthorList from "../components/organisms/AuthorList";
import CustomButton from "../components/atoms/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Authors: React.FC = () => {
  const [authors, setAuthors] = useState<any[]>([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      const result = await getAuthors();
      setAuthors(result);
    };

    fetchAuthors();
  }, []);

  const handleAddAuthor = async () => {
    const newAuthor = { name: "New Author" };
    const result = await addAuthor(newAuthor);
    setAuthors([...authors, result]);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Author List
      </Typography>
      <AuthorList authors={authors} />
      <CustomButton label="Add Author" onClick={handleAddAuthor} />
    </Container>
  );
};

export default Authors;
