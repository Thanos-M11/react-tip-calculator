import { useRef, useEffect } from "react";

export function useClickOut() {
  const parentRef = useRef();
  const inputRef = useRef();

  useEffect(function () {
    function callback(e) {
      if (e.target !== inputRef.current) {
        parentRef.current.style.border = "1px solid transparent";
      }
    }
    document.addEventListener("click", callback);
    return () => document.removeEventListener("click", callback);
  }, []);

  useEffect(function () {
    function callback(e) {
      if (e.key === "Enter") {
        parentRef.current.style.border = "1px solid transparent";
        inputRef.current.blur();
      }
    }
    document.addEventListener("keydown", callback);
    return () => document.removeEventListener("keydown", callback);
  }, []);

  return [parentRef, inputRef];
}
