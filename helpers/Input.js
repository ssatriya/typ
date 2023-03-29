// import { store } from "@/store/store";
// import { setAppendTypedWordHistory, setTypedChar } from "@/store/wordSlice";

import { store } from "@/store2/store";
import { appendTypedWord, setTypedChar } from "@/store2/action";

export function input(key, ctrlKey) {
  const { dispatch, getState } = store;
  const {
    word: { activeWordRef, currentWord, typedWord },
  } = getState();

  const currentWordElement = activeWordRef;
  //   console.log(currentWordElement.innerHtml);

  switch (key) {
    case " ":
      if (typedWord === "") return;
      dispatch(appendTypedWord());
      break;

    default:
      dispatch(setTypedChar(typedWord + key));
      break;
  }
}
