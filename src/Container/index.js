import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Box } from "@mui/material";
import { HistoryModal, AutoComplete, Map } from "../components";
import Navbar from "../components/Navbar";

export default function Places() {
  const { hydratedLocationObj, locationList } = useSelector(
    (state) => state.locations
  );
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const handleCloseModal = () => {
    setShowHistoryModal(false);
  };
  return (
    <Box>
      <Navbar buttonAction={setShowHistoryModal} />
      <Box px={10}>
        <AutoComplete />
        <Map coordinate={hydratedLocationObj.coordinate} />
      </Box>
      <HistoryModal
        open={showHistoryModal}
        listHistory={locationList}
        onClose={handleCloseModal}
      />
    </Box>
  );
}
