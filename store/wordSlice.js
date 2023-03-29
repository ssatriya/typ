const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  typedWord: "",
  currentWord: "",
  typedWordHistory: [],
  wordList: [],
  activeWordRef: null,
  caretRef: null,
};

const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    setTypedChar(state, action) {
      state.typedWord = action.payload;
    },
    // setTypedWordHistory(state, action) {
    //   state.typedWordHistory = [...state.typedWordHistory, action.payload];
    // },
    setAppendTypedWordHistory(state) {
      const nextIdx = state.typedWordHistory.length + 1;
      state.typedWordHistory = [...state.typedWordHistory, state.typedWord];
      state.typedWord = "";
      state.currentWord = state.wordList[nextIdx];
    },
    setWordList(state, action) {
      state.wordList = action.payload;
      state.currentWord = state.wordList[0];
    },
    setActiveWordRef(state, action) {
      state.activeWordRef.push(action.payload);
    },
    setCaretRef(state, action) {
      state.caretRef = action.payload;
    },
  },
});

export const {
  setTypedChar,
  setAppendTypedWordHistory,
  setWordList,
  setActiveWordRef,
  setCaretRef,
} = wordSlice.actions;
export default wordSlice.reducer;
