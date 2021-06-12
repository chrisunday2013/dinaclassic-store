import Axios from 'axios';
import {

  MENUS_MENU_FAIL,
  MENUS_MENU_REQUEST,
  MENUS_MENU_SUCCESS,
  
} from '../constants/menuConstants';

export const menu = (name, email, subject, message) => async (dispatch) => {
  dispatch({ type: MENUS_MENU_REQUEST, payload: { name, email, subject, message } });
  try {
    const { data } = await Axios.post('/api/menus/menu', {
      name,
      email,
      subject,
      message,
    });
    dispatch({ type: MENUS_MENU_SUCCESS, payload: data });
    localStorage.setItem('menuInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: MENUS_MENU_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
