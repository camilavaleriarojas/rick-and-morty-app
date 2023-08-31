import { Reducer } from "redux";

import { Actions } from "./constants";
import { ActionsType, State } from "./types";

const initialState: State = {
  userData: {
    _id: undefined,
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    favoriteCharacters: undefined,
    firebaseUid: "",
  },
  isLoading: true,
  error: false,
  message: "",
};

const userReducer: Reducer<State, ActionsType> = (
  state = { ...initialState },
  action
): State => {
  switch (action.type) {
    case Actions.REGISTER_PENDING: {
      return {
        ...state,
        isLoading: true,
        message: action.payload?.message,
      };
    }
    case Actions.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: undefined,
      };
    case Actions.REGISTER_ERROR:
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    default:
      return { ...state, message: action.payload?.message };
  }
};

export default userReducer;
