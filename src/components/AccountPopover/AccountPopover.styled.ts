import {
  IconButton,
  styled,
  MenuItem as MaterialMenuItem,
  Menu as MaterialMenu,
} from "@mui/material";

export const AccountIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginLeft: 17,
}));

export const Menu = styled(MaterialMenu)(({ theme }) => ({
  "&.MuiMenu-root": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background,
  },
}));

export const MenuItem = styled(MaterialMenuItem)(({ theme }) => ({
  "&.MuiMenuItem-root": {
    color: theme.palette.primary.main,
    padding: "5px",
    "&:hover": {
      backgroundColor: theme.palette.background,
    },
  },
}));
