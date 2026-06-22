import type { NeighborhoodLocations, NeighborhoodArtists, HeaderData } from "./Types.ts";

export const programHeader: HeaderData = {
    tagline: "Kunst und Künstlerinnen \n vor Ort im Quartier",
    title: "Programm & Orte",
    description: "Hier findest du alle Orte und Künstler*innen, die an den Kunst- und Ateliertagen teilnehmen, sortiert nach ihren Stadtteilen."
};

export const neighborhoodLocations: NeighborhoodLocations[] = [
    {
        name: "Veddel",
        locations: [
            "HypC",
            "Veddeler Kirche"
        ]
    },
    {
        name: "Kirchdorf/Georgswerder",
        locations: [
            "Ältestes Wohnhaus Wilhelmsburg",
            "Künstlerhaus Georgswerder",
            "Windmühle Johanna"
        ]
    },
    {
        name: "Wilhelmsburg",
        locations: [
            "Atelier Freistil",
            "Ateliergemeinschaft Kreiskomplex",
            "Atelierhof",
            "Atelierhaus 23",
            "Deichdiele",
            "Galerie 23",
            "Geheimnisvoller Dachboden",
            "Hidden Gallery",
            "HoFa (Kommunikationszentrum Honigfabrik)",
            "Keramikwerkstatt Puhsthof",
            "Rattenloch 4.0",
            "Vitacurare",
            "Zinnwerke"
        ]
    }
];

export const neighborhoodArtists: NeighborhoodArtists[] = [
    {
        name: "Veddel",
        artists: [
            { name: "HypC - local artists" },
            { name: "Lord Nikolaus" }
        ]
    },
    {
        name: "Kirchdorf/Georgswerder",
        artists: [
            { name: "Die Müller" },
            { name: "Katharina Einhoff" },
            { name: "Kunsthandwerker*innen" },
            { name: "Michael Eicks" },
            { name: "Petra Hoppe" },
            { name: "Piselotten - Katarina Jensen" },
            { name: "Valérie Wagner" }
        ]
    },
    {
        name: "Wilhelmsburg",
        artists: [
            { name: "Ana Luisa Amaral Lucena" },
            { name: "Anqi Lyu" },
            { name: "Atelier Freistil - Gruppenausstellung" },
            { name: "Atelier Samtmammut" },
            { name: "Bente Wolke" },
            { name: "Berenice Möller" },
            { name: "Carla Binter" },
            { name: "Catalina González" },
            { name: "Claire Ewbank" },
            { name: "Claudia Eschborn" },
            { name: "Eike Unrat" },
            { name: "Elke Ehninger" },
            { name: "Freya Sarge" },
            { name: "Frieder Falk" },
            { name: "Gosia Machon" },
            { name: "Ilo Toivio" },
            { name: "Insa" },
            { name: "Jann Kaune" },
            { name: "Johanna Sarah Schmidt" },
            { name: "Jonas Gallenkamp" },
            { name: "Julio Celis Rodriguez" },
            { name: "Jürgen Weber" },
            { name: "Karin Kraemer" },
            { name: "Katharina Bick" },
            { name: "Katharina Langer" },
            { name: "Katja Sattelkau" },
            { name: "Klaas Goerges" },
            { name: "Kristin Strauß" },
            { name: "Kuno Seltmann" },
            { name: "La Graffeuse -Tamara Niederweis" },
            { name: "Lena & Galitsch" },
            { name: "Leonor Duque" },
            { name: "Lotte Bräuning" },
            { name: "Mareike Alexander" },
            { name: "Marlene Busch" },
            { name: "Martin Graf – edition 8x8" },
            { name: "Michael Eicks" },
            { name: "Michael Schwarze" },
            { name: "Mika Grunwaldt" },
            { name: "Miriam Elze" },
            { name: "mk539" },
            { name: "mp4zu3" },
            { name: "Nathalie Hallmann" },
            { name: "Nico Manozkow" },
            { name: "Nikita Bürger" },
            { name: "Norman Heck" },
            { name: "Paulina Ohl" },
            { name: "Sabine Hahn-Nicol" },
            { name: "Scheinwerfer Dance Center Team" },
            { name: "Stephanie Krengel" },
            { name: "studioboldo – Berenice Möller" },
            { name: "TAK – Theater am Kulturkanal" },
            { name: "Thomas Kleine" },
            { name: "Von Lani" },
            { name: "Zinnwerke - Gastkünstler*innen" }
        ]
    }
];
