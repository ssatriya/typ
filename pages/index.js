import Type from "@/components/Type";
import { input } from "@/helpers/Input";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.onkeydown = (e) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
      } else if (
        e.key.length === 1 ||
        e.key === "Backspace" ||
        e.key === "Tab"
      ) {
        input(e.key, e.ctrlKey);
      }
    };
  }, []);

  return <Type />;
}
