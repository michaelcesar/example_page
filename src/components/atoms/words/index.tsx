'use client';

import { useState, useEffect, useMemo } from 'react';
import styles from './words.module.css';

export default function Words() {
  const texts = useMemo(
    () => ['TRANSFORMAÇÃO', 'INOVAÇÃO', 'CRIATIVIDADE', 'TECNOLOGIA'],
    []
  );

  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const currentWord = texts[textIndex];

    if (!isTyping) {
      const typingDelay = setTimeout(() => {
        setIsTyping(true);
      }, 500);

      return () => clearTimeout(typingDelay);
    }

    if (letterIndex < currentWord.length && isTyping) {
      const timeoutId = setTimeout(() => {
        setCurrentText((prev) => prev + currentWord[letterIndex]);
        setLetterIndex(letterIndex + 1);
      }, 100);

      return () => clearTimeout(timeoutId);
    } else if (isTyping) {
      const timeoutId = setTimeout(() => {
        setIsTyping(false);
        setCurrentText('');
        setLetterIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [letterIndex, textIndex, texts, isTyping]);

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        {currentText}
        <span className={styles.cursor}></span>
      </p>
    </div>
  );
}
