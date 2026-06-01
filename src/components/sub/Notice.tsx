import {motion} from "motion/react";
import type {NoticeData} from "../../data/Types.ts";

interface NoticeProps {
    data: NoticeData;
}

export default function Notice({ data }: NoticeProps) {
    return (
        <div className="mt-12 text-center font-bold flex max-sm:flex-col lg:grid-cols-[0.9fr_1.1fr]">
            <motion.aside
                className="px-6 text-zinc-800"
                initial={{opacity: 0, y: 24}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.35, delay: 0.1}}
            >
                <p className={`border-b-2 text-xl uppercase tracking-[0.25em] ${data.titleClassName || ""}`}>
                    {data.title}
                </p>

                {data.text && (
                    <p className={`mt-2 text-base whitespace-pre-wrap ${data.textClassName || ""}`}>
                        {data.text}
                    </p>
                )}

                {data.link && (
                    <a
                        className="block text-base"
                        href={data.link.href}
                        target={data.link.href.startsWith("http") || data.link.href.endsWith(".pdf") ? "_blank" : undefined}
                        rel={data.link.href.startsWith("http") || data.link.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                    >
                        {data.link.label}
                    </a>
                )}
            </motion.aside>
        </div>
    )
}
