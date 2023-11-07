import { Button } from "@mui/material";
import { signOutUser } from "../../utils/firebase";

const Account = () => {
  const signOut = async () => {
    await signOutUser();
  };

  return (
    <>
      this is account <Button onClick={signOut}>sign out</Button>
    </>
  );
};

export default Account;
