import {
  setGameStatus,
  setWordLlists,
  setCurrTime,
  setWordHistory,
  setTypedChar,
  setWordLists,
  setActiveWordRef,
} from "@/store/action";
import store from "@/store/store";
import { GenerateWords } from "./GenerateWords";

export function Reset() {
  const { dispatch, getState } = store;
  const {
    word: { currentWord, activeWordRef, wordList },
  } = getState();
  GenerateWords();

  dispatch(setGameStatus("ready"));
  dispatch(setCurrTime(20));
  dispatch(setWordHistory([]));
  dispatch(setTypedChar(""));
  //   dispatch(setActiveWordRef(null));

  document
    .querySelectorAll("text-red-500", "text-yellow-300")
    .forEach((el) => el.classList.remove("text-red-500", "text-yellow-300"));

  activeWordRef.current.scrollIntoView({ block: "end" });
  console.log(activeWordRef);
}
