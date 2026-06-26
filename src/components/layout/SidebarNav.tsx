import {NavLink} from "react-router";
import {navbarItems,} from "../../data/NavData.ts";
import Logo from "../../assets/images/logos/KuA-Logo.png";

export default function SidebarNav() {
    return (
        <aside
            className="hidden fixed left-0 top-0 p-2 z-50 h-screen w-74 flex-col lg:flex border-r-2 border-zinc-800 shadow-2xl shadow-zinc-800 bg-white backdrop-blur-xl pointer-events-auto">
            <NavLink to="/" className="group">
                <div className={"flex flex-row items-center gap-x-2"}>
                    <img
                        src={Logo}
                        alt="Kunst- und Ateliertage Logo"
                        className={"rounded-full"}
                        height={400}
                        width={400}
                    />
                    {/*<span*/}
                    {/*    className="block text-sm font-black leading-tight text-neutral-950 transition sm:text-lg">*/}
                    {/*        14. Kunst- und Ateliertage*/}
                    {/*        <br/>*/}
                    {/*        <p className="pl-2 text-xs">*/}
                    {/*            auf den Elbinseln*/}
                    {/*        </p>*/}
                    {/*</span>*/}
                </div>
            </NavLink>

            <nav className="flex flex-col gap-2 mt-10">
                {navbarItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({isActive}) =>
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