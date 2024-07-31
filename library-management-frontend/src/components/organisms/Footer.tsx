import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: 2, textAlign: "center", mt: "auto" }}>
      <Typography variant="body1">
        © 2024 Library Management. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
