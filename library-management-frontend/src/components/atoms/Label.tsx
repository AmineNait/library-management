import React from "react";
import Typography from "@mui/material/Typography";

interface LabelProps {
  text: string;
}

const CustomLabel: React.FC<LabelProps> = ({ text }) => {
  return <Typography variant="body1">{text}</Typography>;
};

export default CustomLabel;
