import React from "react";
import { Modal, Box } from "@mui/material";
import ListRecord from "./ListRecord";

export default function HistoryModal({
  open,
  onClose,
  customStyle = {},
  listHistory = [],
}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    width: "60vw",
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
        <h2>Search History</h2>
        <ListRecord listHistory={listHistory} onClose={onClose} />
      </Box>
    </Modal>
  );
}
