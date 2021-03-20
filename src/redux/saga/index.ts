import { REHYDRATE } from "redux-persist/lib/constants";
import { fork, take } from "redux-saga/effects";
import { launch } from "./launch";

export default function* root() {
  yield take(REHYDRATE);
  yield fork(launch);
}
