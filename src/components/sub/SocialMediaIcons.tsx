import {motion} from "motion/react";
import type {Variants} from "motion";
import {socialMediaIcons} from "./icons/SocialMediaIcons.tsx";


export default function SocialMediaIcons() {

    const variants: Variants = {
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                duration: 0.4,
                delay: i * 0.1,
                type: "spring",
                stiffness: 100,
                scale: {delay:0}
            },
        }),
        hidden: {
            opacity: 0,
            x: -50,
        },
    }

    return (
        <div
            key="social-media"
            className={'mt-1 flex items-center justify-center gap-x-5 text-red-600 text-shadow-lg'}>
            {socialMediaIcons.map((icon, i) => (
                <motion.a
                    className={"rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-200"}
                    href={icon.url}
                    aria-label={icon.label}
                    key={icon.id}
                    target={icon.url.startsWith("http") || icon.url.startsWith("www") || icon.url.startsWith("mailto:") ? "_blank" : "_self"}
                    rel={icon.url.startsWith("http") || icon.url.startsWith("www") || icon.url.startsWith("mailto:") ? "noreferrer" : ""}
                    initial="hidden"
                    whileInView="visible"
                    custom={i}
                    variants={variants}
                    whileHover={{scale: 1.1}}
                    viewport={{once: true}}
                >
                    <icon.icon/>
                </motion.a>
            ))}
        </div>
    )
}