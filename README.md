# Po tonie ton

Portal z narzędziami do ćwiczenia muzyki. Zwykłe pliki HTML, CSS i JavaScript — bez instalacji, budowania i zależności.

## Struktura

```
index.html            strona główna
assets/apps.js        KATALOG APLIKACJI (jedyne miejsce do edycji przy dodawaniu narzędzia)
assets/portal.js      rysuje karty z katalogu, zawiera grafiki kart
assets/portal.css     wygląd portalu
assets/portal-link.js poprawia linki przy otwieraniu z dysku
assets/app-bar.js     wspólny pasek na górze każdej aplikacji (powrót, lista narzędzi)
akordy/               aplikacja „Akordy” (repozytorium Forest_Akordy)
interwaly/            gra „Bramki interwałów” (repozytorium Foerst_Interwals)
metronom/             aplikacja „Metronom” (plik metronom.html)
```

## Podgląd na komputerze

Najprościej: dwuklik na `index.html`. Mikrofon może wtedy nie działać — przeglądarki wymagają HTTPS lub `localhost`.

Z mikrofonem: w folderze portalu uruchom `python -m http.server 8000` i otwórz <http://localhost:8000>.

## Dodanie kolejnej aplikacji

1. Skopiuj jej pliki do nowego folderu, np. `tuner/` (główny plik musi nazywać się `index.html`).
2. Dopisz wpis w `assets/apps.js` (nazwa, opis, ikona, adres `tuner/`, status `dostepna`).
3. W aplikacji, tuż przed `</body>`, dodaj wspólny pasek portalu (przycisk „Strona główna” i lista narzędzi):

```html
<script src="../assets/portal-link.js"></script>
<script src="../assets/apps.js"></script>
<script src="../assets/app-bar.js"></script>
```

Własna grafika karty: dopisz ją w obiekcie `IKONY` w `assets/portal.js`; bez tego użyj `ikona: 'ogolna'`.

Aplikacja używająca dźwięku lub mikrofonu powinna zatrzymywać je w zdarzeniu `pagehide`.

## Publikacja (GitHub Pages, HTTPS w cenie)

1. Załóż na GitHubie repozytorium, np. `Po_tonie_ton`, i wgraj do niego całą zawartość tego folderu.
2. Settings → Pages → Source: „Deploy from a branch”, gałąź `main`, folder `/ (root)`.
3. Po chwili strona działa pod `https://lukas-piano.github.io/Po_tonie_ton/`, a narzędzia pod `/akordy/`, `/interwaly/`, `/metronom/`.

GitHub Pages zawsze używa HTTPS, więc mikrofon będzie działał.

Jeśli adres będzie inny (inna nazwa repozytorium albo własna domena), zamień `https://lukas-piano.github.io/Po_tonie_ton/` na nowy adres w `index.html` oraz w plikach `index.html` trzech aplikacji. Dotyczy to tylko podglądu udostępnianego linku; sama strona działa pod dowolnym adresem.

## Zmiany w oryginalnych aplikacjach

Działanie i układ bez zmian; kolory dopasowane do strony głównej (w Akordach kropki na klawiaturze i lampki ON zostały kolorowe). Dodano:

- wspólny pasek portalu na górze (powrót na stronę główną, przejście do innych narzędzi),
- adresy w metadanych (canonical, Open Graph),
- Akordy: zatrzymanie dźwięku przy opuszczeniu strony,
- Interwały: zakończenie przerwanej gry po powrocie przyciskiem „Wstecz”,
- Metronom: spacja (start/stop) i T (tap) działają także zaraz po kliknięciu przycisku.

### Interwały — rozpoznawanie śpiewu

- Tolerancja trafienia: ±50 centów (wcześniej ±30). Zmienia się ją jedną liczbą `TOLERANCE_CENTS` na początku skryptu w `interwaly/index.html`.
- Wysokość dźwięku liczona jest ze stabilnej części (bez pierwszych 90 ms i skrajnych odczytów), a nie ze średniej z całości.
- Detektor wysokości jest odporniejszy na pomyłki o oktawę i dwa razy dokładniejszy.
- Sekunda mała śpiewana legato lub z vibrato jest rozpoznawana jako dwa dźwięki.
- Komunikat po próbie podaje zaśpiewane dźwięki i odchyłkę w centach („za szeroko” / „za wąsko”).
