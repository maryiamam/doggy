import { styled } from "@mui/material";

// .app {
//   text-align: center;
//   min-height: 100vh;
//   color: white;

//   .app-header {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     font-size: calc(10px + 2vmin);
//   }

//   .app-body {
//     height: calc(100vh - 50px);
//   }
// }

export const AppWrapper = styled("div")(({ theme }) => ({
  textAlign: "center",
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
  // color: white;
}));

export const AppHeader = styled("div")(({ theme }) => ({
  //     display: flex;
  //     flex-direction: column;
  //     align-items: center;
  //     justify-content: center;
  //     font-size: calc(10px + 2vmin);
}));

export const AppBody = styled("div")(({ theme }) => ({
  height: "calc(100vh - 50px)",
}));

export default { AppWrapper };
