import { Objekt } from "./shared/objekt";

export const Objekte:Objekt[]=[

    {
            id: 1,
            name: "Hosenanzug",
            groesse: 40,
            lager: "Garderobe",
            zustand: "neu",
            verloesungsanfang:new Date("24.02.2023"),
            verloesungsende:new Date("28.02.2023"),
            kurz_Beschreibung:"Wurde nur einmal getragen.",
            art_der_Trennung: "verkaufen",
            grund_der_Trennung: "zu eng geworden"
        }, {
            id: 2,
            name: "Jumpsuit",
            groesse: 42,
            lager: "Garderobe",
            zustand: "neu",
            verloesungsanfang:new Date("24.02.2023"),
            verloesungsende:new Date("28.02.2023"),
            kurz_Beschreibung:"Wurde zweinmal getragen.",
            art_der_Trennung: "verkaufen",
            grund_der_Trennung: "zu eng geworden"
        },
        {
            id: 1,
            name: "Rock",
            groesse: 40,
            lager: "Garderobe",
            zustand: "nicht neu",
            verloesungsanfang:new Date("24.02.2023"),
            verloesungsende:new Date("28.02.2023"),
            kurz_Beschreibung:"sehr oft getragen.",
            art_der_Trennung: "verschenken",
            grund_der_Trennung: "langweilig geworden"
        }
    ]


