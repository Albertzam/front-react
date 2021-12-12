import { MenuType } from "./authActionTypes";

const toggleMenu = (status: boolean) => (dispatch: any) => {
  if (status) {
    dispatch({
      type: MenuType.OPEN,
      payload: status,
    });
  } else {
    dispatch({
      type: MenuType.CLOSE,
      payload: status,
    });
  }
};

export const MenuActions = {
  toggleMenu,
};
