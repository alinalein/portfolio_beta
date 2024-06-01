import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Background = () => {
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (bubbles.length < 12) {
                const bubble = {
                    id: Math.random(),
                    size: Math.random() * 80 + 30, // Size between 30px and 110px
                    right: Math.random() * 100 + '%',
                    duration: Math.random() * 25 + 10, // Duration between 15s and 40s
                };
                setBubbles(bubbles => [...bubbles, bubble]);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [bubbles]);

    return (
        <div className="background-container"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                zIndex: 1,
            }}>
            <AnimatePresence>
                {bubbles.map(bubble => (
                    <motion.div
                        className='animation_bubbles'
                        key={bubble.id}
                        initial={{ y: '0vh', opacity: 0.2, borderRadius: '50px', rotate: 0 }}
                        animate={{ y: '120vh', opacity: 0.7, borderRadius: '10px', rotate: 360 }}
                        transition={{
                            duration: bubble.duration,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                        style={{
                            position: 'absolute',
                            width: bubble.size,
                            height: bubble.size,
                            right: bubble.right,
                            zIndex: -1,
                            top: '-120px',
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default Background;
