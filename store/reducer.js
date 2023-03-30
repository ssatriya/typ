import { combineReducers } from "@reduxjs/toolkit";
import {
  APPEND_TYPED_WORD,
  SET_ACTIVE_WORD_REF,
  SET_CARET_REF,
  SET_TYPED_CHAR,
  SET_WORDLISTS,
  SET_WORD_HISTORY,
} from "./action";

const initialState = {
  typedWord: "",
  currentWord: "",
  typedWordHistory: [],
  wordList: [],
  activeWordRef: null,
  caretRef: null,
};

const wordReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TYPED_CHAR:
      return { ...state, typedWord: payload };
    case SET_WORD_HISTORY:
      return { ...state, typedWordHistory: payload };
    case APPEND_TYPED_WORD:
      const nextIdx = state.typedWordHistory.length + 1;
      return {
        ...state,
        currentWord: state.wordList[nextIdx],
        typedWord: "",
        typedWordHistory: [...state.typedWordHistory, state.typedWord],
      };
    case SET_WORDLISTS:
      const words = payload;
      return { ...state, currentWord: words[0], wordList: words };
    case SET_ACTIVE_WORD_REF:
      return { ...state, activeWordRef: payload };
    case SET_CARET_REF:
      return { ...state, caretRef: payload };
    default:
      return state;
  }
};

export default combineReducers({
  word: wordReducer,
});
