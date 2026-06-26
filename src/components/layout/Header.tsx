import { motion } from "motion/react";
import type { ReactNode } from "react";

interface HeaderProps {
    tagline?: string | null;
    title?: string | null;
    description?: string | null;
    taglineClassName?: string;
    children?: ReactNode;
}

export default function Header({ tagline, title, taglineClassName = "text-blue-700", children
}: HeaderProps) {
    return (
        <header className="max-w-4xl flex flex-col mt-4">
            <motion.p
                className={`block leading-tight mb-1 text-2xl max-sm:text-sm font-bold uppercase tracking-[0.3em] whitespace-pre-wrap ${taglineClassName}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                hidden={!tagline}
            >
                {tagline}
            </motion.p>

            <motion.h1
                className="pl-2 font-black tracking-tight text-neutral-950 max-sm:text-3xl md:text-6xl lg:text-8xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 }}
                hidden={!title}
            >
                {title}
            </motion.h1>

            {/*{description && (*/}
            {/*    <motion.p*/}
            {/*        className="mt-4 max-sm:mt-1 whitespace-pre-wrap max-w-4xl text-lg leading-6 text-zinc-800 max-sm:text-xl"*/}
            {/*        initial={{ opacity: 0, y: 18 }}*/}
            {/*        animate={{ opacity: 1, y: 0 }}*/}
            {/*        transition={{ duration: 0.35, delay: 0.1 }}*/}
            {/*        hidden={!description}*/}
            {/*    >*/}
            {/*        {description}*/}
            {/*    </motion.p>*/}
            {/*)}*/}

            {children}
        </header>
    );
}
