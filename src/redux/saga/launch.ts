import { call, put } from "@redux-saga/core/effects";
import { store } from "../..";
import { PostApi } from "../../apis/post";
import { isToday } from "../../lib/helpers/moment";
import { updateLastAccess } from "../actions/app";
import { addTask } from "../actions/todo";

function* updateMoment() {
  yield put(updateLastAccess());
}

function* createTodayTasks() {
  // @ts-ignore
  const posts = yield call(PostApi.get);
  for (const data of posts) {
    console.log(`viblo_${data.id}`);
    yield put(
      addTask(
        {
          name: "Read tech post",
          description: data.title,
          isDone: false,
        },
        `viblo_${data.id}`
      )
    );
  }
}

export function* launch() {
  if (!isToday(store.getState().app.lastAccess)) {
    yield call(createTodayTasks);
  }
  yield call(updateMoment);
}
