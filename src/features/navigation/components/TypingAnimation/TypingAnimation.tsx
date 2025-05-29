import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './TypingAnimation.module.scss';

const TypingAnimation: React.FC = () => {
  const fullText = 'Web Developer';
  const [text, setText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [blink, setBlink] = useState<boolean>(true);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (text.length < fullText.length) {
          setText(fullText.slice(0, text.length + 1));
          setBlink(false); // Stop blinking when typing
        } else {
          setTimeout(() => setIsDeleting(true), 3000); // Pause before deleting
          setBlink(true);
        }
      } else {
        if (text !== '') {
          setText(fullText.slice(0, text.length - 1));
          setBlink(false); // Stop blinking when deleting
        } else {
          setIsDeleting(false); // Reset to start typing again
          setBlink(true); // Blink when text is empty
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 150;
    const interval = setInterval(handleTyping, typingSpeed);

    return () => clearInterval(interval);
  }, [text, isDeleting]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'linear', duration: 0.5 }}
      className={styles.typing_section}
      aria-live="polite"
    >
      {text}
      <motion.span
        aria-hidden="true"
        animate={{ opacity: blink ? 0 : 1 }}
        transition={{
          repeat: Infinity,
          duration: 0.85,
          repeatType: 'reverse',
        }}
        className={styles.typing_section__text}
      >
        | {/* represents the cursor */}
      </motion.span>
    </motion.div>
  );
};

export default TypingAnimation;
