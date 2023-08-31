import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import authReducer from "./auth/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

export const configureStore = (initialState?: RootState) => {
  const enhancer = composeWithDevTools(applyMiddleware(thunk));
  return initialState
    ? createStore(rootReducer, initialState, enhancer)
    : createStore(rootReducer, enhancer);
};

const store = configureStore();

export default store;
export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
