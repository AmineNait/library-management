import React from "react";
import AuthorCard from "../molecules/AuthorCard";
import Grid from "@mui/material/Grid";

interface AuthorListProps {
  authors: { id: number; name: string }[];
}

const AuthorList: React.FC<AuthorListProps> = ({ authors }) => {
  return (
    <Grid container spacing={2}>
      {authors.map((author) => (
        <Grid item xs={12} sm={6} md={4} key={author.id}>
          <AuthorCard name={author.name} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AuthorList;
