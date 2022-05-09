import { TYPES } from "../constants";

export const setSelectedLocation = (selectedLocationObj) => (dispatch) => {
  dispatch({
    type: TYPES.SET_SELECTED_LOCATION_DETAIL,
    payload: selectedLocationObj,
  });
};

export const addLocationHistory = (locationDetail) => (dispatch) => {
  dispatch({
    type: TYPES.ADD_LOCATION_TO_HISTORY,
    payload: locationDetail,
  });
};

export const deleteLocationHistory = (locationId) => (dispatch) => {
  dispatch({ type: TYPES.DELETE_LOCATION, payload: locationId });
};
