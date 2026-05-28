import type {HeaderData} from "./HeaderData.ts";

export const contactHeader:HeaderData = {
    tagline: "Schreibe uns wenn du frage hast",
    title: "Kontakt",
    description: "Für Fragen, Anfragen oder Zusammenarbeit mit den Kunst- und Ateliertagen.",
}

export const contactOptions = [
    {
        title: "Allgemeine Fragen",
        text: "Für Fragen zur Veranstaltung, zum Programm oder zur Organisation.",
        href: "mailto:moin@kunstundateliertage.de?subject=Frage%20zu%20den%20Kunst-%20und%20Ateliertagen",
        label: "E-Mail schreiben",
    },
    {
        title: "Künstler*innen-Anmeldung",
        text: "Für Rückfragen zur Teilnahme, Anmeldung oder zu offenen Ateliers.",
        href: "mailto:moin@kunstundateliertage.de?subject=Anmeldung%20Kunst-%20und%20Ateliertage%202026",
        label: "Anmeldung anfragen",
    },
    {
        title: "Presse & Kooperation",
        text: "Für Presseanfragen, Kooperationen oder Material zur Kommunikation.",
        href: "mailto:moin@kunstundateliertage.de?subject=Presse%20und%20Kooperation",
        label: "Kontakt aufnehmen",
    },
];