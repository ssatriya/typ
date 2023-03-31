import Result from "@/components/Result";
import Type from "@/components/Type";
import { input } from "@/helpers/Input";
import { Reset } from "@/helpers/Reset";
import { Timer } from "@/helpers/Timer";
import { setGameStatus } from "@/store/action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const {
    typedWord,
    activeWordRef,
    currentWord,
    gameStatus,
    currentTime,
    timerId,
  } = useSelector((state) => state.word);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentTime !== 0) {
      if (gameStatus === "start") {
        Timer();
      }
    } else {
      dispatch(setGameStatus("finish"));
    }
    clearInterval(timerId);
  }, [currentTime, gameStatus]);

  useEffect(() => {
    document.onkeydown = (e) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
      } else if (e.ctrlKey && e.key === "r") {
        location.reload();
      } else if (e.key.length === 1 || e.key === "Backspace") {
        if (currentTime === 0) return;
        e.preventDefault();
        input(e.key, e.ctrlKey);
      } else if (e.key === "Tab") {
        Reset();
      }
    };

    console.log(currentTime, gameStatus);

    return () => {
      document.onkeydown = null;
    };
  }, [currentTime]);

  useEffect(() => {
    const idx = typedWord?.length - 1;

    const currWordEl = activeWordRef?.current;
    if (currWordEl) {
      currWordEl?.children[idx + 1].classList.add(
        currentWord[idx] !== typedWord[idx] ? "text-red-500" : "text-yellow-300"
      );
    }
  }, [activeWordRef, typedWord, currentWord]);

  useEffect(() => {
    const idx = typedWord?.length;

    const currWordEl = activeWordRef?.current;
    if (currWordEl && idx < currentWord.length) {
      currWordEl.children[idx + 1].classList.remove(
        "text-red-500",
        "text-yellow-300"
      );
    }
  }, [typedWord, activeWordRef, currentWord]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Type />
      <Result />
    </div>
  );
}
