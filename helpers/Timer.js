import { timerDecrement, setTImerId } from "@/store/action";
import store from "@/store/store";

export function Timer() {
  const { dispatch, getState } = store;

  const {
    word: { gameStatus },
  } = getState();

  const timerId = setInterval(() => {
    if (gameStatus === "start") {
      dispatch(timerDecrement());
    }
  }, 1000);
  dispatch(setTImerId(timerId));
}
