import { createAction, createReducer } from "@reduxjs/toolkit";

type Theme = "dark" | "light";

interface State {
  theme: Theme;
}

const localStorageKey = "theme";
const persistedTheme = localStorage.getItem(localStorageKey);

export const themeChanged = createAction<State>("theme/changed");

const initialState: State = { theme: (persistedTheme as Theme) ?? "light" };

const themeReducer = createReducer(initialState, (builder) => {
  builder.addCase(themeChanged, (state, action) => {
    state.theme = action.payload.theme;
    localStorage.setItem(localStorageKey, action.payload.theme);
  });
});

export default themeReducer;
