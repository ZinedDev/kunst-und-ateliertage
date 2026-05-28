import type {ReactNode} from "react";
import SidebarNav from "./SidebarNav";
import MobileNav from "./MobileNav";

type AppLayoutProps = {
    children: ReactNode;
};

export default function AppLayout({children}: AppLayoutProps) {
    return (
        <div className="min-h-screen overflow-x-hidden bg-neutral-50 text-neutral-950">
            {/* Accessibility skip link */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-neutral-950 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
            >
                Zum Inhalt springen
            </a>

            {/* Decorative background */}
            <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
            >
                <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"/>
                <div className="absolute -bottom-32 left-10 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl"/>
            </div>

            {/* Mobile navigation */}
            <div className="lg:hidden">
                <MobileNav/>
            </div>

            {/* Desktop sidebar navigation */}
            <div className="hidden lg:block">
                <SidebarNav/>
            </div>

            {/* Main content */}
            <main
                id="main-content"
                className="min-h-screen px-4 pb-16 pt-24 xs:px-5 sm:px-6 md:px-8 md:pb-20 md:pt-28 lg:ml-5 lg:px-12 lg:py-12 xl:px-20 2xl:px-24 bg-linear-to-tr from-amber-600 to-green-200"
            >
                <div className="mx-auto w-full max-w-6xl">{children}</div>
            </main>
        </div>
    );
}