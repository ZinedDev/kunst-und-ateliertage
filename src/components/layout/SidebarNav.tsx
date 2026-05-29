import { NavLink } from "react-router";
import {navbarItems,} from "../../data/NavData.ts";

export default function SidebarNav() {
    return (
        <aside className="fixed left-0 top-0 hidden h-screen w-72 flex-col border-r-2 border-zinc-800 bg-linear-to-tl from-amber-600 to-cyan-200 p-2 backdrop-blur-xl lg:flex">
            <NavLink to="/" className="mb-10 block">
        <span className="block text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
          Elbinsel
        </span>
                <span className="mt-2 block text-2xl font-black leading-tight">
          Kunst- und Ateliertage
        </span>
            </NavLink>

            <nav className="flex flex-col gap-2">
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

            <div className="mt-auto rounded-3xl bg-blue-50 p-4 text-sm text-blue-950">
                <strong>Anmeldung bis 31.05.2026</strong>
                <p className="mt-1 text-blue-900/80">Termin: 19.–20.09.2026</p>
            </div>
        </aside>
    );
}