import { createAction, createReducer } from "@reduxjs/toolkit";
interface State {
  x: number;
  y: number;
}

export const cursorMoved = createAction<State>("cursor/moved");

const initialState: State = { x: 0, y: 0 };

const cursorReducer = createReducer(initialState, (builder) => {
  builder.addCase(cursorMoved, (state, action) => {
    state.x = action.payload.x;
    state.y = action.payload.y;
  });
});

export default cursorReducer;
