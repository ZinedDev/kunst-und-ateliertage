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
            className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm break-words sm:p-6"
            variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3 }}
        >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-500">
                {fact.label}
            </p>
            <p className="mt-3 text-xl font-black text-neutral-950">
                {fact.value}
            </p>
        </motion.article>
    );
}
