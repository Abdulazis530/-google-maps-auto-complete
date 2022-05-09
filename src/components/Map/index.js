import React from "react";
import GoogleMapReact from "google-map-react";
import { Box } from "@mui/material";

import { DEFAULT_LOCATION } from "../../constants";
import Marker from "./Marker";

const Map = ({ coordinate }) => {
  return (
    <Box sx={{ height: "70vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
        }}
        defaultZoom={10}
        defaultCenter={DEFAULT_LOCATION}
        center={coordinate}
      >
        {coordinate && <Marker />}
      </GoogleMapReact>
    </Box>
  );
};

export default Map;
