import type {ReactNode} from "react";
import MobileNav from "./MobileNav";
import SidebarNav from "./SidebarNav.tsx";

type AppLayoutProps = {
    children: ReactNode;
};

export default function AppLayout({children}: AppLayoutProps) {
    return (
        <div className="min-h-screen overflow-x-hidden">
            {/* Accessibility skip link */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-neutral-950 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
            >
                Zum Inhalt springen
            </a>

            {/* Mobile navigation */}
            <div className="lg:hidden">
                <MobileNav/>
            </div>

            {/* Desktop sidebar navigation */}
            {/* Main content */}
            <main
                id="main-content"
                tabIndex={-1}
                className="min-h-screen outline-none pt-20 px-2 bg-linear-to-tr from-orange-500 to-orange-500 lg:flex lg:flex-row lg:gap-x-32 lg:items-center lg:justify-between"
            >
                <div className="max-sm:hidden ">
                    <SidebarNav/>
                </div>
                <div className="mx-auto w-auto">
                    {children}
                </div>

            </main>
        </div>
    );
}