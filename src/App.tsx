import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence } from "motion/react";

import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home.tsx";
// import ProgramPage from "./pages/ProgramPage.tsx";
// import ArtistsInfo from "./pages/ArtistsInfo.tsx";
import VisitorsInfo from "./pages/VisitorsInfo.tsx";
// import Gallery from "./pages/Gallery.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import Impressum from "./pages/Impressum.tsx";

export default function App() {
  const location = useLocation();

  return (
      <AppLayout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            {/*<Route path="/programm" element={<ProgramPage />} />*/}
            {/*<Route path="/kuenstlerinnen" element={<ArtistsInfo />} />*/}
            <Route path="/besucherinnen" element={<VisitorsInfo />} />
            {/*<Route path="/galerie" element={<Gallery />} />*/}
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </AnimatePresence>
      </AppLayout>
  );
}
