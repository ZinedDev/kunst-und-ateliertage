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
      {
        name: "HypC",
        adresse: "Sieldeich 36, 20539 Hamburg",
        lat: 53.52682,
        lng: 10.02827
      },
      {
        name: "Veddeler Kirche",
        adresse: "Wilhelmsburger Straße 73, 20539 Hamburg",
        lat: 53.525589,
        lng: 10.017181
      }
    ]
  },
  {
    name: "Kirchdorf/Georgswerder",
    locations: [
      {
        name: "Ältestes Wohnhaus Wilhelmsburg",
        adresse: "Schönenfelder Straße 33, 21109 Hamburg",
        lat: 53.503992,
        lng: 10.015822
      },
      {
        name: "Künstlerhaus Georgswerder",
        adresse: "Rahmwerder Straße 3, 21109 Hamburg",
        lat: null,
        lng: null
      },
      {
        name: "Windmühle Johanna",
        adresse: "Schönenfelder Straße 99a, 21109 Hamburg",
        lat: 53.49982,
        lng: 10.02316
      }
    ]
  },
  {
    name: "Wilhelmsburg",
    locations: [
      {
        name: "Atelier Freistil",
        adresse: "Am Veringhof 15–17, 21107 Hamburg",
        lat: 53.5143,
        lng: 9.98396
      },
      {
        name: "Ateliergms. Kreiskomplex",
        adresse: null,
        lat: null,
        lng: null
      },
      {
        name: "Atelierhof",
        adresse: "Veringstraße 22, 21107 Hamburg",
        lat: null,
        lng: null
      },
      {
        name: "Atelierhaus 23",
        adresse: "Am Veringhof 23, 21107 Hamburg",
        lat: 53.514917,
        lng: 9.983862
      },
      {
        name: "Deichdiele",
        adresse: "Veringstraße 156, 21107 Hamburg",
        lat: 53.505358,
        lng: 9.98618
      },
      {
        name: "Galerie 23",
        adresse: "Am Veringhof 23a, 21107 Hamburg",
        lat: 53.514917,
        lng: 9.983862
      },
      {
        name: "Geheimnisvoller Dachboden",
        adresse: "Karl-Kunert-Straße 3, 21107 Hamburg",
        lat: null,
        lng: null
      },
      {
        name: "Hidden Gallery",
        adresse: "Am Veringhof 23, 21107 Hamburg",
        lat: 53.514917,
        lng: 9.983862
      },
      {
        name: "HoFa",
        adresse: "Industriestraße 125–131, 21107 Hamburg",
        lat: 53.515877,
        lng: 9.982554
      },
      {
        name: "Keramikwerkstatt Puhsthof",
        adresse: "Neuhöfer Straße 23, Puhsthof, 21107 Hamburg",
        lat: 53.5103,
        lng: 9.98551
      },
      {
        name: "Rattenloch 4.0",
        adresse: null,
        lat: null,
        lng: null
      },
      {
        name: "Vitacurare",
        adresse: "Sanitasstraße 10, 21107 Hamburg",
        lat: null,
        lng: null
      },
      {
        name: "Zinnwerke",
        adresse: "Am Veringhof 7, 21107 Hamburg",
        lat: 53.513175,
        lng: 9.984564
      }
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
            { name: "Atelier Freistil" },
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
