import { ScreenType } from "./typed";

export interface AppState {
  screen: ScreenType;
  fullScreen: boolean;
  lastAccess: string;
}
