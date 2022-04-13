import React from "react";
import { Box, AppBar, InputBase } from "@mui/material";
import { LogoutButton, MenuLink, AppNav } from "./Header.styled";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Header({ logout }) {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <>
      <AppBar position="fixed" padding="0px">
        <Box
          marginLeft="10%"
          marginRight="10%"
          paddingTop={1}
          paddingBottom={1}
        >
          <Box
            marginLeft="1%"
            marginRight="1%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <AppNav>
              <Link style={{ textDecoration: "none" }} to="/events">
                <MenuLink>Events</MenuLink>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/myevents">
                <MenuLink>My Events</MenuLink>
              </Link>
            </AppNav>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <LogoutButton
              size="small"
              variant="outlined"
              onClick={() => logout()}
            >
              Logout{<LogoutIcon style={{marginLeft: 5}}/>}
            </LogoutButton>
          </Box>
        </Box>
      </AppBar>
    </>
  );
}
