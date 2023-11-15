import { useRef, useState } from "react";
import { signOutUser } from "../../utils/firebase";
import * as S from "./AccountPopover.styled";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import { useNavigate } from "react-router-dom";

const AccountPopover = () => {
  const anchorRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const popoverId = "account-popover";

  const handleCloseUserMenu = () => {
    setIsPopoverOpen(false);
  };

  const signOut = async () => {
    await signOutUser();
    handleCloseUserMenu();
  };

  const goToAccount = async () => {
    navigate("/account");
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
        <AccountCircleOutlinedIcon />
      </S.AccountIcon>
      <S.Menu
        id={popoverId}
        open={isPopoverOpen}
        keepMounted
        anchorEl={anchorRef.current}
        onClose={handleCloseUserMenu}
        anchorPosition={{ top: 0, left: 0 }}
      >
        <S.MenuItem key="account" onClick={goToAccount}>
          <ManageAccountsOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
          Account
        </S.MenuItem>
        <S.MenuItem key="sign-out" onClick={signOut}>
          <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
          Sign Out
        </S.MenuItem>
      </S.Menu>
    </>
  );
};

export default AccountPopover;
