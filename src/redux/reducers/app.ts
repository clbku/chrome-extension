import { today } from "../../lib/helpers/moment";
import { AppAction } from "../actions/app";
import { AppConst } from "../consts";
import { AppState } from "../definitions/app";
import { ScreenType } from "../definitions/typed";

const initState: AppState = {
  screen: ScreenType.NEWS,
  fullScreen: true,
  lastAccess: today(),
};

export function appReducer(
  state: AppState = initState,
  action: AppAction
): AppState {
  switch (action.type) {
    case AppConst.CHANGE_SCREEN:
      return {
        ...state,
        screen: action.payload.screen,
      };
    case AppConst.TOGGLE_FULLSCREEN:
      return {
        ...state,
        fullScreen: action.payload.status,
      };
    case AppConst.LAST_ACCESS:
      return {
        ...state,
        lastAccess: today(),
      };
    default: {
      return state;
    }
  }
}
