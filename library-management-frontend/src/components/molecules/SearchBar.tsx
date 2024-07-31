import React, { useState } from "react";
import CustomButton from "../atoms/Button";
import CustomInput from "../atoms/Input";
import Box from "@mui/material/Box";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <Box display="flex" alignItems="center">
      <CustomInput
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <CustomButton label="Search" onClick={() => onSearch(query)} />
    </Box>
  );
};

export default SearchBar;
