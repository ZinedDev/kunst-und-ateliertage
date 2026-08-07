import { motion } from "motion/react";
import type { ReactNode } from "react";

interface HeaderProps {
    tagline?: string | null;
    title?: string | null;
    description?: string | null;
    taglineClassName?: string;
    children?: ReactNode;
}

export default function Header({ tagline, title, taglineClassName = "text-blue-800"
}: HeaderProps) {
    return (
        <header className="mt-16 w-full max-w-5xl flex flex-col items-center justify-center max-sm:mt-4">
            <motion.p
                className={`text-xl max-sm:text-xs font-bold uppercase tracking-[0.2em] whitespace-pre-wrap ${taglineClassName}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                hidden={!tagline}
            >
                {tagline}
            </motion.p>
            <motion.h1
                className="font-black text-neutral-950 max-sm:text-4xl md:text-6xl lg:text-8xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 }}
                hidden={!title}
            >
                {title}
            </motion.h1>
        </header>
    );
}
