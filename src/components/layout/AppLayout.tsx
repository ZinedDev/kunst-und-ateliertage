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

            <div className="hidden lg:block">
                <SidebarNav/>
            </div>

            {/* Desktop sidebar navigation */}
            {/* Main content */}
            <main
                id="main-content"
                tabIndex={-1}
                className="min-h-screen outline-none pt-20 lg:pt-10 px-2 lg:px-10 bg-linear-to-tr from-white to-white flex flex-col justify-start items-start"
            >
                <div className="mx-auto w-auto">
                    {children}
                </div>

            </main>
        </div>
    );
}