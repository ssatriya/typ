import { combineReducers } from "@reduxjs/toolkit";
import {
  APPEND_TYPED_WORD,
  SET_ACTIVE_WORD_REF,
  SET_CARET_REF,
  SET_GAME_STATUS,
  TIMER_DECREMENT,
  SET_TYPED_CHAR,
  SET_WORDLISTS,
  SET_WORD_HISTORY,
  SET_TIMER_ID,
  SET_CURR_TIME,
} from "./action";

const initialState = {
  typedWord: "",
  currentWord: "",
  typedWordHistory: [],
  wordList: [],
  activeWordRef: null,
  caretRef: null,
  gameStatus: "ready",
  currentTime: 20,
  timerId: null,
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
      return { ...state, wordList: words, currentWord: words[0] };
    case SET_ACTIVE_WORD_REF:
      return { ...state, activeWordRef: payload };
    case SET_CARET_REF:
      return { ...state, caretRef: payload };
    case SET_GAME_STATUS:
      return { ...state, gameStatus: payload };
    case TIMER_DECREMENT:
      const curTimer = state.currentTime - 1;
      return { ...state, currentTime: curTimer };
    case SET_TIMER_ID:
      return { ...state, timerId: payload };
    case SET_CURR_TIME:
      return { ...state, currentTime: payload };
    default:
      return state;
  }
};

export default combineReducers({
  word: wordReducer,
});
