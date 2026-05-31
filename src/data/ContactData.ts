import type {HeaderData, SectionFacts} from "./Types.ts";

export const contactHeader:HeaderData = {
    tagline: "Schreibe uns, \n wenn du Fragen hast",
    title: "Kontakt",
    description: "...für Fragen, Anfragen und/oder Zusammenarbeit.",
}

export const contactFacts:SectionFacts[] = [
    {
        label: "Allgemeine Fragen",
        value: "Fragen zur Veranstaltung, zum Programm oder zur Organisation.",
    },
    {
        label: "Anmeldung",
        value: "Rückfragen zur Teilnahme oder Anmeldung.",
    },
    {
        label: "Presse & Kooperation",
        value: "Presseanfragen, Kooperationen oder Material zur Kommunikation.",
    },
];