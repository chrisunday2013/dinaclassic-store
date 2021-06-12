import {

  MENUS_MENU_FAIL,
  MENUS_MENU_REQUEST,
  MENUS_MENU_SUCCESS,
  
} from '../constants/menuConstants';

export const menuReducer = (state = {}, action) => {
  switch (action.type) {
    case MENUS_MENU_REQUEST:
      return { loading: true };
    case MENUS_MENU_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case MENUS_MENU_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};