import { NavLink } from "react-router";
import {navbarItems,} from "../../data/NavData.ts";
import Logo from "../../assets/images/KuA_Logo.jpg";

export default function SidebarNav() {
    return (
        <aside className="fixed left-0 top-0 hidden h-screen w-72 flex-col border-r-2 border-zinc-800 bg-linear-to-tr from-orange-500 to-orange-400  p-2 backdrop-blur-xl lg:flex">
            <NavLink to="/" className="group">
                <div className={"flex flex-row items-center gap-x-2"}>
                    <img
                        src={Logo}
                        alt="Kunst- und Ateliertage Logo"
                        className={"rounded-full"}
                        height={50}
                        width={50}
                    />
                    <span
                        className="block text-base font-black leading-tight text-neutral-950 transition group-hover:text-blue-700 sm:text-lg">
                            Kunst- und Ateliertage
                            <br/>
                            <p className="pl-2 text-xs">
                                auf den Elbinseln
                            </p>
                        </span>
                </div>
            </NavLink>

            <nav className="flex flex-col gap-2 mt-10">
                {navbarItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            [
                                "rounded-2xl px-4 py-3 text-sm font-semibold transition",
                                isActive
                                    ? "bg-neutral-950 text-zinc-200"
                                    : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950",
                            ].join(" ")
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}