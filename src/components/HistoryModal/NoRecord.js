import * as React from "react";
import { Box } from "@mui/material";

export default function NoRecord() {
  return (
    <Box>
      <Box
        src={`${process.env.PUBLIC_URL}/assets/images/NoData.jpg`}
        sx={{
          maxHeight: { xs: 233, md: 500 },
          maxWidth: { xs: 350, md: 500 },
        }}
        component="img"
      />
      <h2 style={{ textAlign: "center" }}>No Record Available!</h2>
    </Box>
  );
}
