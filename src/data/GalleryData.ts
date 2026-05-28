import type { GalleryItem } from "../components/sub/GalleryCard.tsx";
import type {HeaderData} from "./HeaderData.ts";

export const galleryHeader:HeaderData = {
    tagline: "Eindrücke von Kunst, Orten und Begegnungen.",
    title: "Galerie",
    description: "Eine Sammlung von Projekten und Experimenten verschiedener Künstler*innen.",
}

export const galleryItems: GalleryItem[] = [
    {
        title: "Offene Ateliers",
        category: "Atelier",
        location: "Wilhelmsburg",
        description:
            "Einblicke in Arbeitsräume, Skizzen, Prozesse und neue künstlerische Positionen.",
        visualClass: "from-blue-200 via-white to-neutral-200",
    },
    {
        title: "Werkstätten & Studios",
        category: "Werkstatt",
        location: "Veddel",
        description:
            "Orte, an denen Material, Handwerk und künstlerische Experimente sichtbar werden.",
        visualClass: "from-amber-200 via-white to-neutral-200",
    },
    {
        title: "Ausstellungen",
        category: "Ausstellung",
        location: "Kirchdorf",
        description:
            "Präsentationen von Malerei, Fotografie, Installation, Druck, Objekt und mehr.",
        visualClass: "from-rose-200 via-white to-neutral-200",
    },
    {
        title: "Begegnungen",
        category: "Gespräch",
        location: "Georgswerder",
        description:
            "Direkter Austausch mit Künstler*innen über Ideen, Arbeitsweisen und Geschichten.",
        visualClass: "from-emerald-200 via-white to-neutral-200",
    },
    {
        title: "Workshops",
        category: "Mitmachen",
        location: "Elbinseln",
        description:
            "Kreative Formate für Besucher*innen, Familien und neugierige Entdecker*innen.",
        visualClass: "from-purple-200 via-white to-neutral-200",
    },
    {
        title: "Programm 2025",
        category: "Archiv",
        location: "Rückblick",
        description:
            "Der Flyer von 2025 gibt einen ersten Eindruck von Atmosphäre, Orten und Vielfalt.",
        visualClass: "from-orange-200 via-white to-neutral-200",
    },
];