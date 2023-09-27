import {
  FETCH_USER_DATA_FAILURE,
  FETCH_USER_DATA_REQUEST,
  FETCH_USER_DATA_SUCCSESS,
} from "./UserTypes";
const initialState = {
  loading: false,
  user: [],
  error: "",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
        user: [],
      };
    case FETCH_USER_DATA_SUCCSESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: "",
      };
    case FETCH_USER_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        user: [],
        error: action.payload,
      };

    default: return {...state}
      
  }
};
export default userReducer;
