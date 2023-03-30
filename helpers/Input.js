import store from "@/store/store";
import { appendTypedWord, setTypedChar } from "@/store/action";

function handleBackspace(key) {
  const { dispatch, getState } = store;
  const {
    word: { typedWord, typedWordHistory },
  } = getState();

  const currIdx = typedWordHistory.length - 1;

  if (typedWord) {
    const newTypedWord = typedWord.slice(0, typedWord.length - 1);
    dispatch(setTypedChar(newTypedWord));
  }
}

export function input(key, ctrlKey) {
  const { dispatch, getState } = store;
  const {
    word: { activeWordRef, typedWord },
  } = getState();

  const currWordEl = activeWordRef.current;

  switch (key) {
    case " ":
      const scroll = currWordEl.nextElementSibling;
      scroll.scrollIntoView({ behavior: "smooth", block: "center" });
      if (typedWord === "") return;
      dispatch(appendTypedWord());
      break;
    case "Backspace":
      if (typedWord === "") return;
      handleBackspace(key);
      break;
    default:
      dispatch(setTypedChar(typedWord + key));
      break;
  }
}
