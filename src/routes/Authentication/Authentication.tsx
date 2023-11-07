import { Grid } from "@mui/material";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import * as S from "./Authentication.styled";
import Divider from "@mui/material/Divider";

const Authentication = () => {
  return (
    <S.Authentication container rowGap={5}>
      <Grid item>
        <SignIn />
      </Grid>
      <Divider flexItem>or</Divider>
      <Grid item>
        <SignUp />
      </Grid>
    </S.Authentication>
  );
};

export default Authentication;
