import React from "react";
import { useSelector } from "react-redux";

export default function Result() {
  const { wordList, typedWordHistory, typedWord, currentWord } = useSelector(
    (state) => state.word
  );
  const spaces = wordList.indexOf(currentWord);
  let correctChar = 0;

  const result = typedWordHistory.map((typedHistory, idx) => {
    return typedHistory === wordList[idx];
  });

  result.forEach((r, i) => {
    if (r) {
      correctChar += wordList[i].length;
    }
  });

  let totalChar = 0;
  const totalWord = wordList.slice(0, spaces);

  totalWord.forEach((w, i) => {
    totalChar += w.length;
  });

  const wpm = (Number(spaces) + Number(correctChar) / 5) / 1;

  let accuracy = 0;

  if (totalChar !== 0)
    accuracy = (Number(correctChar) / Number(totalChar)) * 100;

  return (
    <div className="text-yellow-600 mt-12">
      <div>{wpm} Word Per Minute</div>
      <div>Correct Words: </div>
      <div>Incorrect Words: </div>
      <div>Accuracy: {Number.parseFloat(accuracy).toFixed(2)} %</div>
    </div>
  );
}
