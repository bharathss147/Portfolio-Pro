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

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      setText(currentWord.slice(0, text.length - 1));
      if (text.length === 1) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      setText(currentWord.slice(0, text.length + 1));
      if (text.length === currentWord.length) {
        setIsDeleting(true);
        return pauseTime;
      }
    }
    return isDeleting ? deletingSpeed : typingSpeed;
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);

  useEffect(() => {
    if (!isStarted) return;
    const delay = tick();
    const timer = setTimeout(() => {
      tick();
    }, delay);

    return () => clearTimeout(timer);
  });

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
