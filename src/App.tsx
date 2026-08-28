import {Route, Routes, useLocation, Navigate} from "react-router";
import {AnimatePresence} from "motion/react";

import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home.tsx";
import Impressum from "./pages/Impressum.tsx";
import MapPage from "./pages/MapPage.tsx";
import ProgramPage from "./pages/ProgramPage.tsx";

export default function App() {
    const location = useLocation();
    const routeTransitionKey = location.pathname.replace(/\/+$/, "") || "/";

    return (
        <AppLayout>
            <AnimatePresence mode="wait">
                <Routes location={location} key={routeTransitionKey}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/programm" element={<ProgramPage/>}/>
                    <Route path="/karte" element={<MapPage/>}/>
                    <Route path="/impressum" element={<Impressum/>}/>
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </AnimatePresence>
        </AppLayout>
    );
}
