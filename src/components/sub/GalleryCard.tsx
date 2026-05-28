import { motion } from "motion/react";

export interface GalleryItem {
    title: string;
    category: string;
    location: string;
    description: string;
    visualClass: string;
}

interface GalleryCardProps {
    item: GalleryItem;
}

export default function GalleryCard({ item }: GalleryCardProps) {
    return (
        <motion.article
            key={item.title}
            className="group overflow-hidden rounded-4xl border border-neutral-200 bg-white shadow-sm"
            variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.35 }}
            whileHover={{ y: -6 }}
        >
            <div
                className={`relative h-56 bg-linear-to-br ${item.visualClass}`}
            >
                <div className="absolute left-5 top-5 rounded-full bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-neutral-800 backdrop-blur">
                    {item.category}
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                    <div className="rounded-3xl bg-white/70 p-5 backdrop-blur-xl">
                        <p className="text-sm font-bold text-neutral-600">
                            {item.location}
                        </p>
                        <h2 className="mt-1 text-2xl font-black text-neutral-950">
                            {item.title}
                        </h2>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <p className="leading-7 text-neutral-700">
                    {item.description}
                </p>
            </div>
        </motion.article>
    );
}
