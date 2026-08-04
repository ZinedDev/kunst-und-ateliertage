import {motion} from "motion/react";
import type {NoticeData} from "../../data/Types.ts";
import {Copy, Check} from "lucide-react";
import {useState} from "react";

interface NoticeProps {
    data: NoticeData;
}

export default function Notice({ data }: NoticeProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        if (!data.link) return;
        try {
            await navigator.clipboard.writeText(data.link.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <div className="mt-12 max-sm:mt-12 underline text-center font-bold flex max-sm:flex-col lg:grid-cols-[0.9fr_1.1fr]">
            <motion.aside
                className="px-6 text-zinc-800 flex items-center gap-2"
                initial={{opacity: 0, y: 24}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.35, delay: 0.1}}
            >
                {/*{data.text && (*/}
                {/*    <p className={`mt-2 text-base whitespace-pre-wrap ${data.textClassName || ""}`}>*/}
                {/*        {data.text}*/}
                {/*    </p>*/}
                {/*)}*/}

                {data.link && (
                    <>
                        <a
                            className="block text-3xl max-sm:text-xl"
                            href={data.link.href}
                            target={data.link.href.startsWith("http") || data.link.href.endsWith(".pdf") ? "_blank" : undefined}
                            rel={data.link.href.startsWith("http") || data.link.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                        >
                            {data.link.label}
                        </a>
                        <button
                            onClick={handleCopy}
                            className="hover:bg-zinc-100 rounded-full transition-colors cursor-pointer"
                            title="In die Zwischenablage kopieren"
                        >
                            {copied ? (
                                <Check className="w-5 h-5 text-green-600" />
                            ) : (
                                <Copy className="w-5 h-5 text-zinc-500" />
                            )}
                        </button>
                    </>
                )}
            </motion.aside>
        </div>
    )
}
