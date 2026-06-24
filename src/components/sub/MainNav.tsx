import {motion} from "motion/react";
import {mainNavItems} from "../../data/NavData.ts";
import {NavLink} from "react-router";

export default function MainNav() {
    return (
        <div
            key="main-nav"
            className="flex flex-col gap-y-6 max-sm:gap-y-2">
            {mainNavItems.map((item, i) => (
                <motion.div
                    key={i + "-" + item.label}
                    initial={{opacity: 0, x: i % 2 ? 20 : -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.5, delay: (i + 1) * 0.1}}
                >
                    <NavLink
                        key={i + "-" + -item.label + "-link"}
                        to={item.path}
                        end={item.path === "/"}
                        className={"text-xl max-sm:text-sm font-bold uppercase tracking-[0.3em] whitespace-pre-wrap text-blue-700"}
                    >
                        {item.label}
                    </NavLink>
                </motion.div>
            ))}
        </div>
    )
}