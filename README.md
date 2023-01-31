<<<<<<< HEAD
# Projekt-Februar-2022
Get-Rid-Of-It-App







                                              Dokumentation des Projekts

                                    Projektname: Get-Rid-Of-It-App
		                 Projektteam : Cécile Prigge
		                 Projektdauer: 3 Wochen



















			Gliederung:

		

	1-Aufgabenstellung:

Get-Ride-Of-it ermöglicht es Menschen, sich auf spielerische und Motivierende  Art von Dingen zu trennen. Dafür erinnert die App die NutzerInnen regelmäßig daran, ihren Besitz zu prüfen und sich von nicht mehr erforderlichen Dingen zu trennen.
1-1 Anforderungen an das Backend
1-1-1: Die Objekte werden in einer Datenbank oder in einer JSON-Datei gespeichert und an das Frontend geschickt , wo sie angezeigt werden sollen.

1-1-2: Das Backend stellt Die REST-API zu Verfügung, um die JSON -objekten zu verwalten. Eine Liste aller Kategorien von Objekten, die ich besitze und die entsorgt werden müssen wird erstellt. 

1-1-3: In jeder Kategorie ist eine Liste von Objekten gleicher Art

1-1-4: Ein Objektgerüst  wird mit Name, Ort, Zustand, Kurz
 Beschreibung, Datum der vorgesehenen Trennung,  Art der Trennung.(Wenn der Zustand neu ist wird das Objekt verkauft, wenn der Zustand noch gut und brauchbar ist wird es verschenkt, wenn der Zustand alt und unbrauchbar ist wird es in den Müll geworfen)  , Grund der Trennung und ein Objektbild definiert.

1-1-5: Ein Motivation -slogan wird gespeichert und für Anzeige im Frontend fertig gestellt.mich zu erinnern warum ich die Objekten los werden will.

1-1-6: Das Backend ermöglicht es das Erinnerungsintervall festzulegen

   1-1-7: Das Backend liefert das Startdatum eines Erinnerungsintervalls

1-1-8: Das Backend berechnet anhand des Startdatums eines Erinnerungsintervalls bis zum Ende dieses Intervalls. Ist das Intervall beendet und das Objekt nicht los geworden, wird es wieder aktiviert und der Vorgang geht wieder los bis es tatsächlich weg ist. 
1-2 Anforderungen an das Frontend
1-2 -1: Formular zur Verfügung stellen.
1-2-2:  Eine Slogan für Motivation anzeigen.
1-2-3: Liste von Kategorien anzeigen.
1-2-4: Liste von Objekten anzeigen,von denen ich mich trennen möchte.
1-2-5 Das Frontend zeigt das Intervall eines Entsorgungsprozesses an.
1-2-6: Ein Kalender/ Datum wird in das Form eingetragen.
1-2-7: Ist das Objekt weg vom Lager, so wird es von der Liste gelöscht, wurde es verkauft, wird der Gewinn angezeigt und zwar ein Betragssumme wird für alle verkauften Objekte berechnet und angezeigt , 


2- use case Beispiel:
Formular ausfüllen
 Kategorie :  Bekleidung 
Name: Z.B: Damen Hosenanzug
Lagerort: Garderobe 
Zustand: fast Neu
Kurz Beschreibung:(vor 5 Jahren gekauft ein mal getragen)
Datum:01.06.2023 -01.07.2023
Art der Trennung: zu verkaufen 40€. 
Grund: z.B. : Zu eng geworden
Foto: Ein Bild ,
Motivation:
ZB: Familienausflug. Ende Juli (Kosten: 500€ )
3- Use-case diagram

4- Ein Beispiel API des App mit NodeJS-Express Framework



			4-Erste Api-mit Express Framework


4-1: Ein Objekt hinzufügen

app.post("/Objekt/name", (req, res) => {
 res.send("hier wird ein Objekt hinzugefügt")

})
 
4-2: Ein Objekt verändern

app.put("/Objekt/Id/*", (req, res) => {
 res.send("hier wird ein Objekt anhand einer Id geändert")

})
 
4-3: Ein Objekt löschen
app.delete("/Objekt/id/*", (req, res) => {
 res.send("hier wird ein Objekt  anhand einer Id gelöscht")

})
 
4-4:  Kategorie erstellen

app.post("/Kategorie/id/*", (req, res) => {
 res.send("hier wird eine einzelne Kategorie hinzugefügt")

})



4-5: Einzelne Kategorie löschen
app.delete("/Kategorie/id/*", (req, res) => {
 res.send("hier wird eine einzelne Kategorie gelöscht")

})

	4-6: Eine Kategorie ändern
app.put("/Kategorie/id/*", (req, res) => {
 res.send("hier wird eine Kategorie anhand einer Id geändert")

})
 
4-7:  Alle Kategorien anzeigen

app.get("/Kategorien", (req, res) => {
    res.send("Hier Liste aller Kategorien ausgeben")
})


4-8: Alle Kategorien löschen

app.delete("/Kategorien", (req, res) => {
    res.status(200).send("löscht alle Kategorien")

})



















=======
# ZweiteApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
>>>>>>> 9c09c9a (initial commit)
