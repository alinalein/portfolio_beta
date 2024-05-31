import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingEffect = () => {
    const fullText = "Junior Developer";
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [blink, setBlink] = useState(true);

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
            transition={{ ease: "linear", duration: 0.5 }}
            style={{ fontFamily: 'monospace', fontSize: '16px', position: 'relative', whiteSpace: 'nowrap', color: 'var(--main-color)', padding: '2% 0' }}
        >
            {text}
            <motion.span
                animate={{ opacity: blink ? 0 : 1 }}
                transition={{
                    repeat: Infinity,
                    duration: 0.85,
                    repeatType: "reverse"
                }}
                style={{ fontWeight: 'bold', marginLeft: '2px' }}
            >
                |  {/* represents the cursor */}
            </motion.span>
        </motion.div>
    );
};

export default TypingEffect;
