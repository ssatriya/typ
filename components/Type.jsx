import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import randomWords from "random-words";

import { setActiveWordRef, setCaretRef, setWordLlists } from "../store2/action";
import Letter from "./Letter";

export default function Type() {
  const dispatch = useDispatch();
  const wordRef = useRef(null);
  const caretRef = useRef(null);
  const { wordList, currentWord, typedWord, typedWordHistory } = useSelector(
    (state) => state.word
  );

  const extraLetters = typedWord.slice(currentWord.length).split("");

  useEffect(() => {
    const words = randomWords(10);
    dispatch(setWordLlists(words));
  }, []);

  useEffect(() => {
    dispatch(setActiveWordRef(wordRef));
    dispatch(setCaretRef(caretRef));
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex">
        {wordList.map((word, wIdx) => {
          const isActive =
            word === currentWord && typedWordHistory.length === wIdx;
          return (
            <div
              key={word + wIdx}
              ref={isActive ? wordRef : null}
              className="flex mt-[5px] mr-[12px] text-[28px] font-normal relative"
            >
              {isActive ? (
                <span
                  ref={caretRef}
                  className="animate-blink absolute ml-[-7.29165px] text-white"
                  style={{
                    left: typedWord.length * 16.5,
                  }}
                >
                  |
                </span>
              ) : null}
              {word.split("").map((char, cId) => {
                return <Letter key={char + cId}>{char}</Letter>;
              })}
              {isActive
                ? extraLetters.map((char, cIdx) => {
                    return <span key={char + cIdx}>{char}</span>;
                  })
                : typedWordHistory[wIdx]
                ? typedWordHistory[wIdx]
                    .slice(wordList[wIdx]?.length)
                    .split("")
                    .map((char, cIdx) => {
                      return <span key={char + cIdx}>{char}</span>;
                    })
                : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
