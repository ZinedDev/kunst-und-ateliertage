import {motion} from "motion/react";

export default function ParticipationNotice() {

    return (
        <div className="text-center font-bold flex max-sm:flex-col lg:grid-cols-[0.9fr_1.1fr]">
            <motion.aside
                className="p-10 max-sm:p-6 text-zinc-800"
                initial={{opacity: 0, y: 24}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.35, delay: 0.1}}
            >
                <p className="border-b-2 text-xl uppercase tracking-[0.25em] text-green-800">
                    Wichtig!!!
                </p>

                <p className="mt-2 text-base text-blue-800">
                    Gemeinsam sichtbar werden durch...
                </p>

                <p className="text-base text-zinc-800 whitespace-pre-wrap">
                    {"Verbreitung der Infos,\n" +
                        "persönliche Einladungen,\n" +
                        "offene Türen! "}
                </p>
            </motion.aside>
        </div>
    )
}