import PageTransition from "../components/layout/PageTransitions.tsx";
import Header from "../components/layout/Header.tsx";

export default function Home() {
    return (
        <PageTransition>
            <section className="mx-auto max-w-5xl">
                <Header
                    tagline="19.–20. September 2026"
                    title="Elbinsel Kunst- und Ateliertage"
                    description="Kunst von den Elbinseln dort erleben, wo sie entsteht: in Ateliers, Werkstätten und Studios."
                />
            </section>
        </PageTransition>
    );
}