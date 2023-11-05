import { createAction, createReducer } from "@reduxjs/toolkit";
interface State {
  x: number;
  y: number;
  follow?: boolean;
}

export const cursorMoved = createAction<State>("cursor/moved");
export const cursorFollow = createAction("cursor/follow");
export const cursorUnfollow = createAction("cursor/unfollow");

const initialState: State = { x: 0, y: 0, follow: false };

const cursorReducer = createReducer(initialState, (builder) => {
  builder.addCase(cursorMoved, (state, action) => {
    state.x = action.payload.x;
    state.y = action.payload.y;
  });

  builder.addCase(cursorFollow, (state, action) => {
    state.follow = true;
  });

  builder.addCase(cursorUnfollow, (state, action) => {
    state.follow = false;
  });
});

export default cursorReducer;
