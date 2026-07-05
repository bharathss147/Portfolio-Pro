import { useState, useEffect, useCallback } from "react";

export function useTypewriter(
  words: string[],
  typingSpeed = 60,
  deletingSpeed = 40,
  pauseTime = 1400,
  initialDelay = 1200
) {
  const [text, setText] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsStarted(true), initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);


  useEffect(() => {
    if (!isStarted) return;
    const delay = isDeleting ? deletingSpeed : typingSpeed;
    const actualDelay =
      !isDeleting && text === words[wordIndex] ? pauseTime : delay;

    const timer = setTimeout(() => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        const newText = currentWord.slice(0, text.length - 1);
        setText(newText);
        if (newText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        const newText = currentWord.slice(0, text.length + 1);
        setText(newText);
        if (newText.length === currentWord.length) {
          setIsDeleting(true);
        }
      }
    }, actualDelay);

    return () => clearTimeout(timer);
  }, [
    text,
    wordIndex,
    isDeleting,
    isStarted,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return text;
}
