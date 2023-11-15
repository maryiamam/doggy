import { Button } from "@mui/material";
import { signOutUser } from "../../utils/firebase";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

const Account = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div>Hi {currentUser?.displayName}!</div>
      <Button onClick={signOutUser}>sign out</Button>
    </>
  );
};

export default Account;
