import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence as AnimatePresenceRaw } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import styles from './Background.module.scss';

const AnimatePresence = AnimatePresenceRaw as unknown as React.FC<{ children: React.ReactNode }>;

type BubleType = {
  id: number;
  duration: number;
  size: number;
  right: string; // because of '%' , when set the right
};

const Background = () => {
  const [bubbles, setBubbles] = useState<BubleType[]>([]);

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      if (bubbles.length < 10) {
        const bubble = {
          id: Math.random(),
          size: Math.random() * 80 + 30, // Size between 30px and 110px
          right: Math.random() * 100 + '%', // Bubbles appear across the entire width
          duration: Math.random() * 35 + 15, // Duration between 20s and 55s
        };
        setBubbles((bubbles) => [...bubbles, bubble]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [bubbles]);

  return (
    // dark theme css is in App.css
    <div aria-hidden="true" className={`bubbles_container ${styles.bubbles_container}`}>
      <AnimatePresence>
        {!shouldReduceMotion && bubbles.length > 0 ? (
          <>
            {bubbles.map((bubble) => (
              <motion.div
                className={`bubbles_animation ${styles.bubbles_animation}`}
                key={bubble.id}
                initial={{ y: '0vh', rotate: 0 }}
                animate={{ y: '120vh', opacity: 0.7, borderRadius: '10px', rotate: 360 }}
                transition={{
                  duration: bubble.duration,
                  ease: 'linear',
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                style={{
                  width: bubble.size,
                  height: bubble.size,
                  right: bubble.right,
                }}
              />
            ))}
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Background;
