import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { appReducer } from "./reducers/app";
import { todoReducer } from "./reducers/todo";

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["app", "modal"],
};

// const appPersistConfig = {
//   key: "app",
//   storage,
//   blacklist: ["errors"],
// };

export const rootReducer = combineReducers({
  // app: persistReducer(appPersistConfig, appReducer),
  app: appReducer,
  todo: todoReducer,
});

export const pReducer = persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
