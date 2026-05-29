import { motion } from "motion/react";

interface ParticipationFact {
    label: string;
    value: string;
}

interface ParticipationCardProps {
    fact: ParticipationFact;
}

export default function ParticipationCard({ fact }: ParticipationCardProps) {
    return (
        <motion.article
            key={fact.label}
            className="bg-transparent wrap-break-words"
            variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
        >
            <p className="text-xl max-sm:text-base font-bold uppercase tracking-[0.2em] text-zinc-700">
                {fact.label}
            </p>
            <p className="mt-1 pl-1 text-base max-sm:text-sm font-black text-neutral-950">
                {fact.value}
            </p>
        </motion.article>
    );
}
