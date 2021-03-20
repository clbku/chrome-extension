import { AppConst } from "../consts";
import { ScreenType, typedAction } from "../definitions/typed";

export const switchScreen = (screen: ScreenType) => {
  return typedAction(AppConst.CHANGE_SCREEN, { screen });
};

export const toggleFullScreen = (status: boolean) => {
  return typedAction(AppConst.TOGGLE_FULLSCREEN, { status });
};

export const updateLastAccess = () => {
  return typedAction(AppConst.LAST_ACCESS);
};

export const appLaunched = () => {
  return typedAction(AppConst.LAUNCH);
};

export type AppAction = ReturnType<
  | typeof switchScreen
  | typeof toggleFullScreen
  | typeof updateLastAccess
  | typeof appLaunched
>;
