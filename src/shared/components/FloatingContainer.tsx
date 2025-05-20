import { ReactNode } from "react";
import { motion } from 'framer-motion'
import { useAppContext } from "../context/AppContext";

type FloatingContainerProps = {
    id: string;
    children: ReactNode;
}

const FloatingContainer = ({ id, children }: FloatingContainerProps): JSX.Element => {

    const { isWidthGreaterThan1050 } = useAppContext()

    const variantsBig = {
        // strarting point of the div
        hidden: { opacity: 0, x: '-70vw' },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'tween', duration: 2, ease: 'circOut' }
        }
    };

    return (
        <motion.div id={id}
            className="floating-container"
            initial={isWidthGreaterThan1050 ? "hidden" : ""}
            animate={isWidthGreaterThan1050 ? "visible" : ""}
            variants={isWidthGreaterThan1050 ? variantsBig : {}}
        >
            {/* children is the reserved prop React uses to pass everything between component tags. */}
            {children}
        </motion.div>
    )
}

export default FloatingContainer; 