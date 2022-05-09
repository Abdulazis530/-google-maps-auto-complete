import * as React from "react";
import { Box, Button, Toolbar, AppBar } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PublicIcon from "@mui/icons-material/Public";

export default function Navbar({ buttonAction }) {
  const handleOnPress = () => {
    buttonAction(true);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <PublicIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Google Places App
          </Typography>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleOnPress()}
          >
            Show History
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
