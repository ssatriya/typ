import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setActiveWordRef, setCaretRef, setWordLists } from "../store/action";
import { GenerateWords } from "@/helpers/GenerateWords";

export default function Type() {
  const dispatch = useDispatch();
  const activeWordRef = useRef(null);
  const caretRef = useRef(null);
  const { wordList, currentWord, typedWord, typedWordHistory } = useSelector(
    (state) => state.word
  );

  const extraLetters = typedWord.slice(currentWord.length).split("");

  useEffect(() => {
    GenerateWords();
    console.log("Test");
  }, []);

  useEffect(() => {
    dispatch(setActiveWordRef(activeWordRef));
    dispatch(setCaretRef(caretRef));
  }, [dispatch]);

  console.log(wordList);

  return (
    <div className="text-yellow-600 text-opacity-90">
      <div className="flex w-[700px] flex-wrap h-[150px] overflow-hidden">
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
