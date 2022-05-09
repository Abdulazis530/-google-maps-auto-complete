import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import { Box } from "@mui/material";
import { addLocationHistory, setSelectedLocation } from "../../store/actions";

const AutoComplete = () => {
  const { locationObj } = useSelector((state) => state.locations);
  const dispatch = useDispatch();

  const handleSelectLocation = async (location) => {
    try {
      const locationName = location.value.description;
      const locationId = location.value.place_id;
      const geocode = await geocodeByAddress(locationName);
      const coordinate = await getLatLng(geocode[0]);
      const hydratedDetailData = {
        locationName,
        coordinate,
        locationObj: location,
        locationId,
      };
      dispatch(setSelectedLocation(hydratedDetailData));
      dispatch(addLocationHistory(hydratedDetailData));
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Box my={5}>
      <GooglePlacesAutocomplete
        selectProps={{
          value: locationObj,
          onChange: handleSelectLocation,
          styles: {
            input: (provided) => ({
              ...provided,
              height: "40px",
            }),
          },
        }}
      />
    </Box>
  );
};

export default AutoComplete;
