import type {ReactNode} from "react";
import MobileNav from "./MobileNav";

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

            {/* Decorative background */}
            {/*<div*/}
            {/*    aria-hidden="true"*/}
            {/*    className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"*/}
            {/*>*/}
            {/*    <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"/>*/}
            {/*    <div className="absolute -bottom-32 left-10 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl"/>*/}
            {/*</div>*/}

            {/* Mobile navigation */}
            <div className="">
                <MobileNav/>
            </div>

            {/* Desktop sidebar navigation */}
            {/*<div className="hidden lg:block ml-10">*/}
            {/*    <SidebarNav/>*/}
            {/*</div>*/}

            {/* Main content */}
            <main
                id="main-content"
                tabIndex={-1}
                className="min-h-screen outline-none pt-24 pb-6 px-2 bg-linear-to-tr from-orange-500 to-orange-500"
            >
                <div className="mx-auto w-full max-w-6xl">
                    {children}
                </div>
            </main>
        </div>
    );
}