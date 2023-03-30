import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import randomWords from "random-words";

import { setActiveWordRef, setCaretRef, setWordLlists } from "../store/action";

export default function Type() {
  const dispatch = useDispatch();
  const activeWordRef = useRef(null);
  const caretRef = useRef(null);
  const { wordList, currentWord, typedWord, typedWordHistory } = useSelector(
    (state) => state.word
  );

  const extraLetters = typedWord.slice(currentWord.length).split("");

  useEffect(() => {
    const words = randomWords(30);
    dispatch(setWordLlists(words));
  }, []);

  useEffect(() => {
    dispatch(setActiveWordRef(activeWordRef));
    dispatch(setCaretRef(caretRef));
  }, []);

  return (
    <div className="text-yellow-600 text-opacity-90">
      <div className="flex w-[700px] flex-wrap h-[140px] overflow-hidden">
        {wordList.map((word, wIdx) => {
          const isActive =
            word === currentWord && typedWordHistory.length === wIdx;
          return (
            <div
              key={word + wIdx}
              ref={isActive ? activeWordRef : null}
              className={`flex mt-[5px] mr-[12px] text-[28px] font-normal relative`}
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
                return <span key={char + cId}>{char}</span>;
              })}
              {isActive
                ? extraLetters.map((char, cIdx) => {
                    return (
                      <span key={char + cIdx} className="text-yellow-900">
                        {char}
                      </span>
                    );
                  })
                : typedWordHistory[wIdx]
                ? typedWordHistory[wIdx]
                    .slice(wordList[wIdx]?.length)
                    .split("")
                    .map((char, cIdx) => {
                      return (
                        <span key={char + cIdx} className="text-yellow-900">
                          {char}
                        </span>
                      );
                    })
                : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
