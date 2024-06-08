import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Background = () => {
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (bubbles.length < 10) {
                const bubble = {
                    id: Math.random(),
                    size: Math.random() * 80 + 30, // Size between 30px and 110px
                    right: Math.random() * 100 + '%', // Bubbles appear across the entire width 
                    duration: Math.random() * 35 + 15, // Duration between 20s and 55s
                };
                setBubbles(bubbles => [...bubbles, bubble]);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [bubbles]);

    return (
        // dark theme css is in App.css
        <div className="background-container_bubbles"
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
