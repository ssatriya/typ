export const SET_TYPED_CHAR = "SETTYPEDCHAR";
export const SET_WORD_HISTORY = "SETWORDHISTORY";
export const APPEND_TYPED_WORD = "APPENDTYPEDWORD";
export const SET_WORDLISTS = "SETWORDLISTS";
export const SET_ACTIVE_WORD_REF = "SETACTIVEWORDREF";
export const SET_CARET_REF = "SETCARETREF";

// Word Actions
export const setTypedChar = (payload) => ({ type: SET_TYPED_CHAR, payload });
export const setWordHistory = (payload) => ({
  type: SET_WORD_HISTORY,
  payload,
});
export const appendTypedWord = () => ({ type: APPEND_TYPED_WORD });
export const setWordLists = (payload) => ({ type: SET_WORDLISTS, payload });
export const setActiveWordRef = (payload) => ({
  type: SET_ACTIVE_WORD_REF,
  payload,
});
export const setCaretRef = (payload) => ({ type: SET_CARET_REF, payload });

// Timer Action
export const SET_GAME_STATUS = "SETGAMESTATUS";
export const TIMER_DECREMENT = "TIMERDECREMENT";
export const SET_TIMER_ID = "SETTIMERID";
export const SET_CURR_TIME = "SETCURRTIME";

export const setGameStatus = (payload) => ({ type: SET_GAME_STATUS, payload });
export const timerDecrement = () => ({ type: TIMER_DECREMENT });
export const setTImerId = (payload) => ({ type: SET_TIMER_ID, payload });
export const setCurrTime = (payload) => ({ type: SET_CURR_TIME, payload });
