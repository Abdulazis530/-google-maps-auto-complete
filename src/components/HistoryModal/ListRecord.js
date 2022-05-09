import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
  ListItemAvatar,
} from "@mui/material";
import { useDispatch } from "react-redux";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import DeleteIcon from "@mui/icons-material/Delete";
import NoRecord from "./NoRecord";
import {
  deleteLocationHistory,
  setSelectedLocation,
} from "../../store/actions";
import ConfirmationModal from "../ConfirmationModal";

export default function ListRecord({ listHistory, onClose }) {
  const [openChildModal, setOpenChildModal] = useState(false);
  const [deletedId, setDeletedId] = useState(null);
  const dispatch = useDispatch();

  const handleSelectFromHistory = (detail) => {
    dispatch(setSelectedLocation(detail));
    onClose();
  };

  const handleDeleteHistory = ({ locationId }) => {
    dispatch(deleteLocationHistory(locationId));
    setOpenChildModal(false);
  };

  const handleOpenConfirmationModal = ({ locationId }) => {
    setDeletedId(locationId);
    setOpenChildModal(true);
  };
  if (listHistory.length === 0) {
    return (
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <NoRecord />
      </Box>
    );
  }
  const renderListItem = () => {
    return listHistory.map((detailLocation) => (
      <Box key={detailLocation.locationId}>
        <ListItem
          sx={{
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "#DFDFDE",
            },
          }}
        >
          <ListItemAvatar>
            <Avatar>
              <LocationOnIcon
                color="error"
                sx={{ width: "25px", height: "25px" }}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={detailLocation.locationName}
            onClick={() => {
              handleSelectFromHistory(detailLocation);
            }}
          />
          <ListItemAvatar
            onClick={() => {
              handleOpenConfirmationModal({
                locationId: detailLocation.locationId,
              });
            }}
          >
            <DeleteIcon color="error" sx={{ width: "25px", height: "25px" }} />
          </ListItemAvatar>
        </ListItem>
        <Divider variant="inset" component="li" />
      </Box>
    ));
  };

  return (
    <List
      sx={{
        width: "100%",
      }}
    >
      {renderListItem()}
      <ConfirmationModal
        open={openChildModal}
        onClose={() => setOpenChildModal(false)}
        handleYes={() => {
          handleDeleteHistory({ locationId: deletedId });
        }}
      />
    </List>
  );
}
