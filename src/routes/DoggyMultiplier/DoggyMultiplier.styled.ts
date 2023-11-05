import { Button, styled } from "@mui/material";

// .doggy-multiplier {
//   height: 100%;

//   &::before {
// content: " ";
// display: block;
// position: absolute;
// left: 0;
// top: 30px;
// width: 100%;
// height: 100%;
// opacity: 0.1;
// background-image: url("../../doggy-light-b.svg");
// background-position: 50% 0;
// background-size: cover;
//   }

//   .add-doggy-btn {
//     margin-top: 10px;
//   }
// }

export const DoggyMultiplier = styled("div")(({ theme }) => ({
  height: "100%",
}));

export const AddDoggyBtn = styled(Button)(({ theme }) => ({
  marginTop: 10,
}));

export default { DoggyMultiplier, AddDoggyBtn };
