import { motion } from "motion/react";

interface FlyerDownloadProps {
    label: string;
    href: string;
}

export default function FlyerDownload({ label, href }: FlyerDownloadProps) {
    return (
        <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-4 py-2 bg-transparent border-zinc-700 text-black rounded-full border-2 hover:bg-zinc-500/5 hover:scale-110 transition-all duration-300"
            >
                <span className="text-lg font-medium tracking-wide">
                    {label}
                </span>
                <motion.span
                    animate={{ y: [0, 2, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="text-xl"
                >
                    ↓
                </motion.span>
            </a>
        </motion.div>
    );
}
