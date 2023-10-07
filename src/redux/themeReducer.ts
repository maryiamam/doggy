import { createAction, createReducer } from "@reduxjs/toolkit";
interface State {
  theme: "dark" | "light";
}

export const themeChanged = createAction<State>("theme/changed");

const initialState: State = { theme: "light" };

const themeReducer = createReducer(initialState, (builder) => {
  builder.addCase(themeChanged, (state, action) => {
    state.theme = action.payload.theme;
  });
});

export default themeReducer;
