# Classroom Feud Online Version

Deze versie gebruikt GitHub Pages voor hosting en Firebase Realtime Database voor live synchronisatie tussen apparaten.

## Bestanden

- `index.html` = لوحة التحكم
- `display.html` = شاشة الأسئلة
- `players.html` = شاشة اللاعبين
- `firebase-config.js` = Firebase configuratie

## Firebase instellen

1. Ga naar Firebase Console.
2. Maak een nieuw project.
3. Voeg een Web App toe.
4. Kopieer de Firebase config naar `firebase-config.js`.
5. Maak Realtime Database aan.
6. Kies bij voorkeur regio `europe-west1` als beschikbaar.
7. Zet tijdelijke testregels tijdens ontwikkeling:

```json
{
  "rules": {
    "rooms": {
      "$roomId": {
        ".read": true,
        ".write": true
      }
    }
  }
}
```

Let op: deze regels zijn alleen geschikt voor een privé/testproject. Voor publieke gebruik moet authenticatie of een geheime room-code worden toegevoegd.

## Online zetten via GitHub Pages

1. Upload alle bestanden naar een GitHub repository.
2. Ga naar `Settings > Pages`.
3. Kies branch `main` en folder `/root`.
4. Open de GitHub Pages link.
5. Open `index.html` op het apparaat van de controller.
6. Open `display.html` en `players.html` op andere schermen.

## Room ID

In `firebase-config.js` staat:

```js
window.FIREBASE_ROOM_ID = "default-room";
```

Gebruik een andere waarde als je aparte spellen wilt, bijvoorbeeld:

```js
window.FIREBASE_ROOM_ID = "klas-1";
```
