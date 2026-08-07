import type { NeighborhoodData, HeaderData } from "./Types.ts";

export const programHeader: HeaderData = {
    tagline: "Wer, wo, was?",
    title: "Programm",
    description: "Hier findest du alle Orte und Künstler*innen, die an den Kunst- und Ateliertagen teilnehmen, sortiert nach ihren Stadtteilen."
};

export const neighborhoodData: NeighborhoodData[] = [
    {
        name: "Veddel",
        locations: [
            {
                name: "HYCP VEDDEL SPACE",
                adresse: "Sieldeich 36, 20539 Hamburg",
                lat: 53.52682,
                lng: 10.02827,
                artists: [{ name: "Gruppenausstellung local artists" }]
            },
            {
                name: "IMMANUELKIRCHE",
                adresse: "Wilhelmsburger Straße 73, 20539 Hamburg",
                lat: 53.525589,
                lng: 10.017181,
                artists: [{ name: "Lord Nikolaus" }]
            }
        ]
    },
    {
        name: "Kirchdorf / Georgswerder",
        locations: [
            {
                name: "KÜNSTLERHAUS GEORGSWERDER",
                adresse: "Rahmwerder Straße 3, 21109 Hamburg",
                lat: null,
                lng: null,
                artists: [{ name: "Valérie Wagner" }]
            },
            {
                name: "WINDMÜHLE JOHANNA",
                adresse: "Schönenfelder Straße 99a, 21109 Hamburg",
                lat: 53.49982,
                lng: 10.02316,
                artists: [
                    { name: "Die Müller" },
                    { name: "Katharina Einhoff" },
                    { name: "kleiner Kunsthandwerkermarkt" }
                ]
            },
            {
                name: "ÄLTESTES WOHNHAUS WILHELMSBURG",
                adresse: "Schönenfelder Straße 33, 21109 Hamburg",
                lat: 53.503992,
                lng: 10.015822,
                artists: [{ name: "Piselotten | Katarina Jensen" }]
            }
        ]
    },
    {
        name: "Wilhelmsburg",
        locations: [
            {
                name: "ATELIER FREISTIL",
                adresse: "Am Veringhof 15–17, 21107 Hamburg",
                lat: 53.5143,
                lng: 9.98396,
                artists: [{ name: "gemeinschaftsausstellung" }]
            },
            {
                name: "ATELIERGEM. KREISKOMPLEX",
                adresse: null,
                lat: null,
                lng: null,
                artists: [
                    { name: "Norman Heck" },
                    { name: "Freya Sarge" },
                    { name: "Insa" },
                    { name: "mk539" },
                    { name: "mp4zu3" },
                    { name: "Eike Unrat" }
                ]
            },
            {
                name: "ATELIERHAUS 23",
                adresse: "Am Veringhof 23, 21107 Hamburg",
                lat: 53.514917,
                lng: 9.983862,
                artists: [
                    { name: "Capoeira Angola Hamburg Süd" },
                    { name: "Carla Binter" },
                    { name: "Catalina González González" },
                    { name: "Claire Suliman" },
                    { name: "Claudia Eschborn" },
                    { name: "Elke Ehninger" },
                    { name: "Frieder Falk" },
                    { name: "Jann Kaune" },
                    { name: "Katharina Langer" },
                    { name: "Katja Sattelkau" },
                    { name: "Kristin Strauß" },
                    { name: "Martin Graf" },
                    { name: "Melanie Cramer" },
                    { name: "Michael Schwarze" },
                    { name: "Miriam Elze" },
                    { name: "Sabine Hahn-Nicol" },
                    { name: "Stephanie Krengel" },
                    { name: "Thomas Kleine" },
                    { name: "Katharina Bick" }
                ]
            },
            {
                name: "ATELIERHOF",
                adresse: "Veringstraße 22, 21107 Hamburg",
                lat: null,
                lng: null,
                artists: [
                    { name: "Bente Wolke" },
                    { name: "Mareike Alexander" },
                    { name: "Lotte Bräuning" },
                    { name: "Nikita Bürger" },
                    { name: "Lena & Galitsch" },
                    { name: "Karin Kraemer" },
                    { name: "Gosia Machon" }
                ]
            },
            {
                name: "DACHBODEN",
                adresse: "Karl-Kunert-Straße 3, 21107 Hamburg",
                lat: null,
                lng: null,
                artists: [{ name: "Jürgen Weber" }]
            },
            {
                name: "DEICHDIELE",
                adresse: "Veringstraße 156, 21107 Hamburg",
                lat: 53.505358,
                lng: 9.98618,
                artists: [
                    { name: "Nico Manozkow" },
                    { name: "Paulina Ohl" }
                ]
            },
            {
                name: "HIDDEN GALLERY",
                adresse: "Am Veringhof 23, 21107 Hamburg",
                lat: 53.514917,
                lng: 9.983862,
                artists: [
                    { name: "Jonas Gallenkamp" },
                    { name: "Mika Grunwaldt" }
                ]
            },
            {
                name: "KERAMIKWERKSTATT",
                adresse: "Neuhöfer Straße 23, Puhsthof, 21107 Hamburg",
                lat: 53.5103,
                lng: 9.98551,
                artists: [{ name: "Anqi Lyu" }]
            },
            {
                name: "HONIGFABRIK",
                adresse: "Industriestraße 125–131, 21107 Hamburg",
                lat: 53.515877,
                lng: 9.982554,
                artists: [
                    { name: "Johanna Sarah Schmidt" },
                    { name: "Ana Luisa Amaral Lucena" },
                    { name: "Julio Celis Rodriguez" },
                    { name: "Leonor Duque" },
                    { name: "Tamara Niederweis" }
                ]
            },
            {
                name: "RATTENLOCH",
                adresse: null,
                lat: null,
                lng: null,
                artists: [
                    { name: "Ilo Toivio" },
                    { name: "Kuno Seltmann" },
                    { name: "Marlene Busch" }
                ]
            },
            {
                name: "VITACURARE",
                adresse: "Sanitasstraße 10, 21107 Hamburg",
                lat: null,
                lng: null,
                artists: [
                    { name: "Klaas Goerges, vitaCurare" },
                    { name: "Nathalie Hallmann" }
                ]
            },
            {
                name: "ZINNWERKE",
                adresse: "Am Veringhof 7, 21107 Hamburg",
                lat: 53.513175,
                lng: 9.984564,
                artists: [
                    { name: "Berenice Möller" },
                    { name: "Nicole Rzepka" },
                    { name: "Michael Heim" },
                    { name: "TAK" },
                    { name: "Weitere Gastkünstler" }
                ]
            }
        ]
    }
];

export const flyerData = {
    label: "Programm/Flyer 2025",
    href: "/KuA_2025_Programm_Flyer_Web-2.pdf"
}