import { Reducer } from "redux";

import { Actions } from "./constants";
import { ActionsType, State } from "./types";

const initialState: State = {
  authUser: {
    token: "",
  },
  isLoading: true,
  error: undefined,
  authError: "",
};

const authReducer: Reducer<State, ActionsType> = (
  state = initialState,
  action
): State => {
  switch (action.type) {
    case Actions.LOGIN_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case Actions.LOGIN_SUCCESS:
      return {
        ...state,
        authUser: action.payload,
        isLoading: false,
      };
    case Actions.LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case Actions.CLEAN_ERROR:
      return {
        ...state,
        authUser: {
          token: "",
        },
      };
    default:
      return state;
  }
};

export default authReducer;
