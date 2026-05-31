import {motion} from "motion/react";

export default function ContactNotice() {
    return (
        <div className="text-center font-bold flex max-sm:flex-col lg:grid-cols-[0.9fr_1.1fr]">
            <motion.aside
                className="p-10 max-sm:p-6 text-zinc-800"
                initial={{opacity: 0, y: 24}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.35, delay: 0.1}}
            >
                <p className="border-b-2 text-xl uppercase tracking-[0.25em] ">
                    Direktkontakt
                </p>

                <p className="mt-2 text-base">
                    PR-AG des Atelierhaus 23
                </p>

                <a
                    href="mailto:moin@kunstundateliertage.de"
                    className="block text-base "
                >
                    moin@kunstundateliertage.de
                </a>
            </motion.aside>
        </div>
    )
}