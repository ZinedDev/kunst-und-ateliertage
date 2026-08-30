import type {ReactNode} from "react";
import MobileNav from "./MobileNav";

type AppLayoutProps = {
    children: ReactNode;
};

export default function AppLayout({children}: AppLayoutProps) {
    return (
        <div className="min-h-screen lg:h-screen lg:overflow-hidden overflow-x-hidden">
            {/* Accessibility skip link */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-neutral-950 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
            >
                Zum Inhalt springen
            </a>

            {/* Mobile navigation */}
            <div className="">
                <MobileNav/>
            </div>

            {/* Main content */}
            <main
                id="main-content"
                tabIndex={-1}
                className="outline-none lg:ml-0 lg:h-full mt-16 lg:mt-10 px-2 lg:px-10 bg-white flex flex-col items-center lg:overflow-y-auto w-full overflow-x-hidden"
            >
                {children}
            </main>
        </div>
    );
}