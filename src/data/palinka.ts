import type { ListaAdat, TablaSor, GyumolcsKepek } from "../types/palinka";

export const listak: ListaAdat[] = [
    {
        cim: "Gyakori alapanyagok",
        elemek: [
            "Alma",
            "Körte",
            "Szilva",
            "Meggy",
            "Kajszibarack"
        ],
        szamozott: false
    },

    {
        cim: "Népszerű pálinkák",
        elemek: [
            "Szilvapálinka",
            "Barackpálinka",
            "Körtepálinka",
            "Almapálinka",
            "Birsalmapálinka"
        ],
        szamozott: true
    },

    {
        cim: "Íz- és illatjegyek",
        elemek: [
            "Gyümölcsös",
            "Illatos",
            "Érett gyümölcsre jellemző",
            "Harmonikus",
            "Tiszta lecsengésű"
        ],
        szamozott: true
    }
];



export const tablaSor: TablaSor[] = [
    {
        elso: "Alma",
        masodik: "Körte",
        harmadik: "Szilva"
    },
    {
        elso: "Meggy",
        masodik: "Kajszi",
        harmadik: "Birsalma"
    },
    {
        elso: "Cseresznye",
        masodik: "Őszibarack",
        harmadik: "SZőlő"
    }
]





export const gyumolcsok: GyumolcsKepek[] = [

    {
        nev: "Banán",
        kep: "/images/Banán.jpg",
        alt: "Banán",
        leiras: " A banán trópusi gyümölcs, amely Magyarországon nem jellemző pálinkaalapanyag.",
    },

    {
        nev: "Birsalma",
        kep: "/images/birsalma.jpg",
        alt: "Birsalma",
        leiras: " A birsalma jellegzetes illatú gyümölcs, amelyből gyümölcspárlat is készíthető.",
    },

    {
        nev: "Mogyoró",
        kep: "/images/mogyoro.jpg",
        alt: "Mogyoró",
        leiras: "A mogyoró olajos mag, ezért nem a hagyományos gyümölcspárlatok alapanyagai közé tartozik.",
    },

    {
        nev: "Gránátalma",
        kep: "/images/granatalma.jpg",
        alt: "Gránátalma",
        leiras: "A gránátalma gyümölcs, jellegzetes édes-savanykás ízzel és sok apró maggal.",
    },

]



export const fontosTudnivalok: string[] = [
    "A pálinka gyümölcsből készített párlat.",

    "Az alapanyag minősége jelentősen befolyásolja a késztermék tulajdonságait.",

    "A gyümölcsöt először elő kell készíteni és erjeszteni kell.",

    "Az erjesztett gyümölcscefréből lepárlással készül a párlat.",

    "A pálinka megnevezés használatát jogszabály szabályozza."
];

