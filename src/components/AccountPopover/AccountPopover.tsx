import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, Menu, MenuItem } from "@mui/material";
import { useRef, useState } from "react";
import { signOutUser } from "../../utils/firebase";
import * as S from "./AccountPopover.styled";
import LogoutIcon from "@mui/icons-material/Logout";

const AccountPopover = () => {
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const popoverId = "account-popover";

  const handleCloseUserMenu = () => {
    setIsPopoverOpen(false);
  };

  const signOut = async () => {
    await signOutUser();
    handleCloseUserMenu();
  };

  return (
    <>
      <S.AccountIcon
        ref={anchorRef}
        aria-describedby={popoverId}
        onClick={() => {
          setIsPopoverOpen(!isPopoverOpen);
        }}
      >
        <AccountCircleIcon />
      </S.AccountIcon>
      <S.Menu
        id={popoverId}
        open={isPopoverOpen}
        keepMounted
        anchorEl={anchorRef.current}
        onClose={handleCloseUserMenu}
        anchorPosition={{ top: 0, left: 0 }}
      >
        <S.MenuItem key="account">
          <Link underline="none" href="/account">
            Account
          </Link>
        </S.MenuItem>
        <S.MenuItem key="sign-out" onClick={signOut}>
          <LogoutIcon />
          Sign Out
        </S.MenuItem>
      </S.Menu>
    </>
  );
};

export default AccountPopover;
