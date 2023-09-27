import axios from "axios";
import {
  FETCH_USER_DATA_FAILURE,
  FETCH_USER_DATA_REQUEST,
  FETCH_USER_DATA_SUCCSESS,
} from "./UserTypes";

export function fetchUserRequest(payload) {
  return { type: FETCH_USER_DATA_REQUEST };
}
export function fetchUserSuccsess(users) {
  return { type: FETCH_USER_DATA_SUCCSESS, payload: users };
}
export function fetchUserFailure(error) {
  return { type: FETCH_USER_DATA_FAILURE, payload: error };
}

export function fetchUsers() {
  return (dispatch) => {
    dispatch(fetchUserRequest());

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((user) => {
        const userData = user.data;
        dispatch(fetchUserSuccsess(userData));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message));
        console.log(error);
      });
   
  };
}
