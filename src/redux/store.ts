import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import cursorReducer from "./cursorReducer";
import resolutionReducer from "./resolutionReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  cursorReducer,
  resolutionReducer,
  themeReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
