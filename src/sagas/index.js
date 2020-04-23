import { fork } from "redux-saga/effects";
import watchAppActions from "./watchers";

export default function* startForman() {
  yield fork(watchAppActions);
}
