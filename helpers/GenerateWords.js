import randomWords from "random-words";
import store from "@/store/store";
import { setWordLists } from "@/store/action";

export function GenerateWords() {
  const { dispatch, getState } = store;

  const words = randomWords(30);
  dispatch(setWordLists(words));
}
