import React from "react";
import { SideBar, SideBarProps } from "../../components/shared/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { useGlobalStyles } from "../../../styles/global";
import { State } from "../../../redux/reducers";
import { MenuActions } from "../../../redux/actions/statusBar";
import { Apartment, Home, LocalShipping, Person } from "@material-ui/icons";
import { ConfirmProvider } from "material-ui-confirm";
import { SnackbarProvider } from "notistack";
import { NavBar } from "../../components/shared/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export const Test = () => {
  const dispatch = useDispatch();
  const globalClasses = useGlobalStyles();
  const { isLoggedIn } = useSelector<State>((store) => store.auth) as any;
  const sidebarProps: SideBarProps = {
    onClose: () => {
      dispatch(MenuActions.toggleMenu(false));
    },
    userRole: "MAESTRO",
    items: [
      {
        icon: <Home style={{ fill: "#fff" }} />,
        url: "/dashboard",
        text: "Dashboard",
        allowedRoles: ["MAESTRO"],
      },
      {
        icon: <LocalShipping style={{ fill: "#fff" }} />,
        url: "/supply",
        text: "Insumos",
        allowedRoles: ["MAESTRO"],
      },
      {
        icon: <Apartment style={{ fill: "#fff" }} />,
        url: "/branches",
        text: "Sucursales",
        allowedRoles: ["MAESTRO"],
      },
      {
        icon: <Person style={{ fill: "#fff" }} />,
        url: "/user",
        text: "Usuarios",
        allowedRoles: ["MAESTRO"],
      },
    ],
  };
  return isLoggedIn ? (
    <ConfirmProvider>
      <SnackbarProvider maxSnack={1}>
        <Router>
          <NavBar
            onOpen={() => {
              dispatch(MenuActions.toggleMenu(true));
            }}
            onLogOut={() => {
              //dispatch(AuthActions.logout())
            }}
          />
          <SideBar {...sidebarProps} />
        </Router>
      </SnackbarProvider>
    </ConfirmProvider>
  ) : (
    <span></span>
  );
};
