import { TYPES } from "../constants";

const initialState = {
  locationList: [],
  locationObj: null,
  hydratedLocationObj: {
    locationObj: null,
    coordinate: null,
    locationName: null,
    locationId: null,
  },
};

const locations = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_SELECTED_LOCATION_DETAIL:
      const { locationObj } = action.payload;
      return {
        ...state,
        locationObj,
        hydratedLocationObj: action.payload,
      };
    case TYPES.ADD_LOCATION_TO_HISTORY: {
      return {
        ...state,
        locationList: [action.payload, ...state.locationList],
      };
    }
    case TYPES.DELETE_LOCATION:
      return {
        ...state,
        locationList: [
          ...state.locationList.filter(
            (location) => location.locationId !== action.payload
          ),
        ],
      };
    default:
      return {
        ...state,
        isLoading: false,
      };
  }
};
export default locations;
