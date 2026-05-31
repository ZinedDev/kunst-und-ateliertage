import { motion } from "motion/react";

interface ParticipationFact {
    label: string;
    value: string;
}

interface ParticipationCardProps {
    fact: ParticipationFact;
}

export default function Fact({ fact }: ParticipationCardProps) {
    return (
        <motion.article
            key={fact.label}
            className="bg-transparent whitespace-pre-wrap font-bold"
            variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
            <p className="text-xl max-sm:text-base uppercase tracking-[0.2em] text-zinc-700">
                {fact.label}
            </p>
            <p className="pl-2 max-sm:pl-1.5 text-base max-sm:text-sm text-neutral-950">
                {fact.value}
            </p>
        </motion.article>
    );
}
