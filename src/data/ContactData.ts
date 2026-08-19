import type {HeaderData, NoticeData, SectionFacts} from "./Types.ts";
import {getMoinEmail, getMoinMailto} from "../utils/email.ts";

export const contactHeader:HeaderData = {
    tagline: "Schreibe uns,\nwenn du Fragen hast",
    title: "Kontakt",
    description: "...für Fragen, Anfragen und/oder Zusammenarbeit.",
}

export const contactNotice: NoticeData = {
    title: "Kontakt",
    text: "PR-AG des Atelierhaus 23a",
    link: {
        label: getMoinEmail(),
        href: getMoinMailto()
    }
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