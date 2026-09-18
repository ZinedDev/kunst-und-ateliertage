import {motion} from "motion/react";
import type {ReactNode} from "react";

type PageTransitionProps = {
    children: ReactNode;
};

export default function PageTransition({children}: PageTransitionProps) {
    return (
        <motion.div
            initial={{opacity: 0, y: 16}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -12}}
            transition={{
                duration: 0.4,
                ease: "easeInOut"
            }}
            className="w-full flex flex-col items-center"
        >
            {children}
        </motion.div>
    );
}