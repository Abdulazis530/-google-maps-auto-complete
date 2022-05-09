import React from "react";
import { Modal, Box, Grid, Button } from "@mui/material";

export default function ConfirmationModal({
  open,
  onClose,
  handleYes,
  customStyle = {},
}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    width: "30vw",
    pt: 2,
    px: 4,
    pb: 3,
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, ...customStyle }}>
        <h3>Are you sure want to delete this address?</h3>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleYes()}
            >
              Yes
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="success"
              onClick={() => onClose()}
            >
              No
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
