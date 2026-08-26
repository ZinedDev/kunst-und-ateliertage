export type ProgramCategory =
    | "PERFORMANCE_WORKSHOP"
    | "BILDERBUCHKINO"
    | "CONCERT";

export function getCategoryBadgeStyle(cat: ProgramCategory): string {
    switch (cat) {
        case "PERFORMANCE_WORKSHOP":
            return "bg-blue-400/10 text-zinc-800 border-2 border-blue-400";
        case "BILDERBUCHKINO":
            return "bg-amber-400/10 text-zinc-800 border-2 border-amber-400";
        case "CONCERT":
            return "bg-purple-400/10 text-zinc-800 border-2 border-purple-400";
        default:
            return "bg-orange-400/10 text-zinc-800 border-2 border-orange-400";
    }
}

export type ProgramTime = {
    startTime: string;
    endTime?: string;
};

export type ProgramOccurrence = {
    date: string; // ISO format: YYYY-MM-DD
    times: ProgramTime[];
};

export type ProgramLocation = {
    venue: string;
    room?: string;
    address: string;
    neighborhood: string;
};

export type ProgramEntry = {
    id: string;

    category: ProgramCategory;

    what: string;
    who: string;

    occurrences: ProgramOccurrence[];

    where: ProgramLocation;
};

export const performancesAndWorkshops: ProgramEntry[] = [
    {
        id: "klang-up",

        category: "PERFORMANCE_WORKSHOP",

        what: "\"Klang Up\": Upcycling Musikinstrumentebau",
        who: "Julio Celis Rodriguez",

        occurrences: [
            {
                date: "2026-09-19",
                times: [
                    {
                        startTime: "10:30",
                        endTime: "12:00"
                    }
                ]
            },
            {
                date: "2026-09-20",
                times: [
                    {
                        startTime: "10:30",
                        endTime: "12:00"
                    }
                ]
            }
        ],

        where: {
            venue: "HoFa - Kommunikationszentrum Honigfabrik",
            address: "Industriestr. 125-131",
            neighborhood: "HH-Wilhelmsburg"
        }
    },

    {
        id: "cyanotypie",

        category: "PERFORMANCE_WORKSHOP",

        what: "Cyanotypie - Workshop",
        who: "Katja Sattelkau | Atelier 90 Grad",

        occurrences: [
            {
                date: "2026-09-19",
                times: [
                    {
                        startTime: "12:00",
                        endTime: "13:30"
                    }
                ]
            },
            {
                date: "2026-09-20",
                times: [
                    {
                        startTime: "12:00",
                        endTime: "13:30"
                    }
                ]
            }
        ],

        where: {
            venue: "Atelierhaus 23",
            room: "2. Etage",
            address: "Am Veringhof 23a",
            neighborhood: "HH-Wilhelmsburg"
        }
    },

    {
        id: "tavoli",

        category: "PERFORMANCE_WORKSHOP",

        what: "Tavoli",
        who: "Katharina Einhoff",

        occurrences: [
            {
                date: "2026-09-19",
                times: [
                    {
                        startTime: "15:00",
                        endTime: "17:00"
                    }
                ]
            },
            {
                date: "2026-09-20",
                times: [
                    {
                        startTime: "15:00",
                        endTime: "17:00"
                    }
                ]
            }
        ],

        where: {
            venue: "Windmühle Johanna",
            address: "Schönenfelder Straße 99a",
            neighborhood: "HH-Wilhelmsburg"
        }
    },

    {
        id: "schnuppertoepfern",

        category: "PERFORMANCE_WORKSHOP",

        what: "Schnuppertöpfern für alle",
        who: "Anqi Lyu",

        occurrences: [
            {
                date: "2026-09-19",
                times: [
                    {
                        startTime: "13:30",
                        endTime: "15:00"
                    },
                    {
                        startTime: "16:00",
                        endTime: "17:30"
                    }
                ]
            },
            {
                date: "2026-09-20",
                times: [
                    {
                        startTime: "10:30",
                        endTime: "12:00"
                    },
                    {
                        startTime: "14:00",
                        endTime: "15:30"
                    }
                ]
            }
        ],

        where: {
            venue: "Keramikwerkstatt",
            room: "Puhsthof, Haus 5, Erdgeschoss",
            address: "Neuhöfer Str. 23",
            neighborhood: "HH-Wilhelmsburg"
        }
    },

    {
        id: "takomat",

        category: "PERFORMANCE_WORKSHOP",

        what: "Der TAK'omat",
        who: "TAK Wilhelmsburg",

        occurrences: [
            {
                date: "2026-09-19",
                times: []
            }
        ],

        where: {
            venue: "Zinnwerke e.V.",
            room: "TAK-Büro",
            address: "Am Veringhof 7",
            neighborhood: "HH-Wilhelmsburg"
        }
    },

    {
        id: "capoeira",

        category: "PERFORMANCE_WORKSHOP",

        what: "Level Up - Workshop",
        who: "Capoeira Angola Hamburg Süd",

        occurrences: [
            {
                date: "2026-09-18",
                times: [
                    {
                        startTime: "15:00"
                    }
                ]
            },
            {
                date: "2026-09-19",
                times: [
                    {
                        startTime: "11:00",
                        endTime: "22:00"
                    }
                ]
            },
            {
                date: "2026-09-20",
                times: [
                    {
                        startTime: "11:00",
                        endTime: "15:00"
                    }
                ]
            }
        ],

        where: {
            venue: "Atelierhaus 23",
            room: "Erdgeschoss",
            address: "Am Veringhof 23b",
            neighborhood: "HH-Wilhelmsburg"
        }
    },

    {
        id: "tanzpraesentation",

        category: "PERFORMANCE_WORKSHOP",

        what: "Tanzpräsentationen",
        who: " Kristin Strauß | Scheinwerfer Dance Center",

        occurrences: [
            {
                date: "2026-09-19",
                times: [
                    {
                        startTime: "14:00",
                        endTime: "15:30"
                    }
                ]
            }
        ],

        where: {
            venue: "Atelierhaus 23",
            room: "2. Etage",
            address: "Am Veringhof 23b",
            neighborhood: "HH-Wilhelmsburg"
        }
    },

    {
        id: "clayground",

        category: "PERFORMANCE_WORKSHOP",

        what: "ClayGround - Play with Clay",
        who: "Johanna Sarah Schmidt & Ana Luisa Amaral Lucena",

        occurrences: [
            {
                date: "2026-09-19",
                times: [
                    {
                        startTime: "14:00",
                        endTime: "17:00"
                    }
                ]
            },
            {
                date: "2026-09-20",
                times: [
                    {
                        startTime: "14:00",
                        endTime: "17:00"
                    }
                ]
            }
        ],

        where: {
            venue: "HoFa - Kommunikationszentrum Honigfabrik",
            address: "Industriestr. 125-131",
            neighborhood: "HH-Wilhelmsburg"
        }
    },

    {
        id: "community-dance",

        category: "PERFORMANCE_WORKSHOP",

        what: "Inklusives Tanzen - Workshop",
        who: "Kristin Strauß | Scheinwerfer Dance Center",

        occurrences: [
            {
                date: "2026-09-20",
                times: [
                    {
                        startTime: "14:00",
                        endTime: "16:00"
                    }
                ]
            }
        ],

        where: {
            venue: "Atelierhaus 23",
            room: "2. Etage",
            address: "Am Veringhof 23b",
            neighborhood: "HH-Wilhelmsburg"
        }
    },

    {
        id: "makramee",

        category: "PERFORMANCE_WORKSHOP",

        what: "Makramee",
        who: "Nathalie Hallmann",

        occurrences: [
            {
                date: "2026-09-20",
                times: [
                    {
                        startTime: "14:00",
                        endTime: "17:30"
                    }
                ]
            }
        ],

        where: {
            venue: "Vitacurare Kunstlabor",
            address: "Sanitasstr. 10",
            neighborhood: "HH-Wilhelmsburg"
        }
    },

    {
        id: "stimm-sprechworkshop",

        category: "PERFORMANCE_WORKSHOP",

        what: "Stimm- & Sprechworkshop",
        who: "Paula Zamora | TAK Wilhelmsburg",

        occurrences: [
            {
                date: "2026-09-19",
                times: [
                    {
                        startTime: "15:00",
                        endTime: "15:30"
                    }
                ]
            }
        ],

        where: {
            venue: "Zinnwerke e.V.",
            room: "TAK-Büro",
            address: "Am Veringhof 7",
            neighborhood: "HH-Wilhelmsburg"
        }
    },

    {
        id: "mahl-workshop",

        category: "PERFORMANCE_WORKSHOP",

        what: "Mahl-Workshop",
        who: "Die Museumsmüller",

        occurrences: [
            {
                date: "2026-09-20",
                times: [
                    {
                        startTime: "13:00",
                        endTime: "14:30"
                    },
                    {
                        startTime: "15:00",
                        endTime: "16:30"
                    }
                ]
            }
        ],

        where: {
            venue: "Windmühle Johanna",
            address: "Schönenfelder Straße 99a",
            neighborhood: "HH-Wilhelmsburg"
        }
    }
];

export const bilderbuchkino: ProgramEntry[] = [
    {
        id: "haenky-megamonsterbanausen",

        category: "BILDERBUCHKINO",

        what: "Hänky und die vier Megamonsterbanausen",
        who: "Benjamin Gottwald | Bilderbuchkino mit Sabine von Eitzen",

        occurrences: [
            {
                date: "2026-09-19",
                times: [
                    {
                        startTime: "15:30"
                    }
                ]
            }
        ],

        where: {
            venue: "Atelierhaus 23",
            room: "2. Etage | Yoga Studio Jannika Kühn",
            address: "Am Veringhof 23b",
            neighborhood: "HH-Wilhelmsburg"
        }
    },

    {
        id: "abenteuer-in-krabbelstadt",

        category: "BILDERBUCHKINO",

        what: "Abenteuer in Krabbelstadt",
        who: "Sandra Rutschi & Martina Liebig | Bilderbuchkino mit Sabine von Eitzen",

        occurrences: [
            {
                date: "2026-09-19",
                times: [
                    {
                        startTime: "16:30"
                    }
                ]
            }
        ],

        where: {
            venue: "Atelierhaus 23",
            room: "2. Etage | Yoga Studio Jannika Kühn",
            address: "Am Veringhof 23b",
            neighborhood: "HH-Wilhelmsburg"
        }
    }
];

export const concerts: ProgramEntry[] = [
    {
        id: "chor-auftritt",

        category: "CONCERT",

        what: "Chor Auftritt",
        who: "Neuer Chor im Viertel",

        occurrences: [
            {
                date: "2026-09-20",
                times: [
                    {
                        startTime: "16:00"
                    }
                ]
            }
        ],

        where: {
            venue: "Atelierhof",
            address: "Veringstr. 22 im Hinterhof",
            neighborhood: "HH-Wilhelmsburg"
        }
    }
];

export const allEvents: ProgramEntry[] = [
    ...performancesAndWorkshops,
    ...bilderbuchkino,
    ...concerts
];