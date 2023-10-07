import { Button } from "@mui/material";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <Button onClick={logGoogleUser}>Sign in with Google</Button>
    </>
  );
};

export default SignIn;
