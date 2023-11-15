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
  "&.MuiMenu-root .MuiPaper-root.MuiMenu-paper.MuiPopover-paper": {
    backgroundColor: theme.palette.background.default,
    backgroundImage: "none",
    color: theme.palette.primary.main,

    "& ul": {
      padding: 0,

      "& li": {
        "& svg": {
          fontSize: "0.8rem",
        },
      },
    },
  },
}));

export const MenuItem = styled(MaterialMenuItem)(({ theme }) => ({
  "&.MuiMenuItem-root": {
    padding: "5px 10px",
    fontSize: "0.8rem",
    minHeight: "fit-content",
  },
}));
