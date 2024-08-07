import React from "react";
import TextField from "@mui/material/TextField";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <TextField
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
    />
  );
};

export default CustomInput;
