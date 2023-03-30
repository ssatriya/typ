import Result from "@/components/Result";
import Type from "@/components/Type";
import { input } from "@/helpers/Input";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const { typedWord, activeWordRef, currentWord, caretRef } = useSelector(
    (state) => state.word
  );

  useEffect(() => {
    document.onkeydown = (e) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
      } else if (e.ctrlKey && e.key === "r") {
        location.reload();
      } else if (
        e.key.length === 1 ||
        e.key === "Backspace" ||
        e.key === "Tab"
      ) {
        input(e.key, e.ctrlKey);
      }
    };
  }, []);

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
