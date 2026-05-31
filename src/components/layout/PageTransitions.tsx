import {motion} from "motion/react";
import type {ReactNode} from "react";

type PageTransitionProps = {
    children: ReactNode;
};

export default function PageTransition({children}: PageTransitionProps) {
    return (
        <motion.div
            initial={{opacity: 0, y: 16, filter: "blur(8px)"}}
            animate={{opacity: 1, y: 0, filter: "blur(0px)"}}
            exit={{opacity: 0, y: -12, filter: "blur(8px)"}}
            transition={{
                duration: 0.5,
                ease: "easeInOut"
            }}
        >
            {children}
        </motion.div>
    );
}