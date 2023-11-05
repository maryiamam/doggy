import { Grid } from "@mui/material";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import * as S from "./Authentication.styled";

const Authentication = () => {
  return (
    <S.Authentication container rowGap={5}>
      <Grid item>
        <SignIn />
      </Grid>
      <Grid item>
        <SignUp />
      </Grid>
    </S.Authentication>
  );
};

export default Authentication;
