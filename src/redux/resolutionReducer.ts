import { createAction, createReducer } from "@reduxjs/toolkit";
interface State {
  width: number;
  height: number;
}

export const resolutionChanged = createAction<State>("resolution/changed");

const initialState: State = { width: 0, height: 0 };

const resolutionReducer = createReducer(initialState, (builder) => {
  builder.addCase(resolutionChanged, (state, action) => {
    state.width = action.payload.width;
    state.height = action.payload.height;
  });
});

export default resolutionReducer;
