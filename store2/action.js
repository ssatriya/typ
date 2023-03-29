export const SET_TYPED_CHAR = "SETTYPEDCHAR";
export const SET_WORD_HISTORY = "SETWORDHISTORY";
export const APPEND_TYPED_WORD = "APPENDTYPEDWORD";
export const SET_WORDLISTS = "SETWORDLISTS";
export const SET_ACTIVE_WORD_REF = "SETACTIVEWORDREF";
export const SET_CARET_REF = "SETCARETREF";

// Actions
export const setTypedChar = (payload) => ({ type: SET_TYPED_CHAR, payload });
export const setWordHistory = (payload) => ({
  type: SET_WORD_HISTORY,
  payload,
});
export const appendTypedWord = () => ({ type: APPEND_TYPED_WORD });
export const setWordLlists = (payload) => ({ type: SET_WORDLISTS, payload });
export const setActiveWordRef = (payload) => ({
  type: SET_ACTIVE_WORD_REF,
  payload,
});
export const setCaretRef = (payload) => ({ type: SET_CARET_REF, payload });
