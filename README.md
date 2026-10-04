# Po tonie ton

Strona z aplikacjami do ćwiczenia rytmu, harmonii i słuchu muzycznego:

- **Metronom** — tempo, podziały rytmiczne i zanikające kliknięcie.
- **Akordy** — budowa tercjowa, przewroty i układy dźwięków.
- **Bramki interwałów** — gra z rozpoznawaniem interwałów śpiewanych do mikrofonu.

Projekt korzysta z HTML, CSS i JavaScript. Nie wymaga instalowania zależności ani kompilacji.

## Uruchomienie

Otwórz `index.html` w przeglądarce. Aby korzystać z mikrofonu podczas lokalnych testów, uruchom w folderze projektu serwer (wymaga Pythona):

```bash
python -m http.server 8000
```

Następnie otwórz [localhost:8000](http://localhost:8000). Gra interwałowa wymaga zgody na dostęp do mikrofonu. W internecie udostępniaj ją przez HTTPS.

## Publikacja na GitHub Pages

1. Wgraj zawartość projektu do publicznego repozytorium. Główny `index.html` musi znajdować się w jego katalogu głównym.
2. W **Settings → Pages** wybierz **Deploy from a branch**, gałąź `main` i folder **/(root)**, a następnie **Save**.
3. Po zakończeniu publikacji adres strony pojawi się w sekcji **Pages**.

Dostosuj adresy w metadanych `canonical` i Open Graph w głównym `index.html` oraz w aplikacjach do docelowego adresu strony.

## Struktura projektu

| Ścieżka | Zawartość |
| --- | --- |
| `index.html` | Strona główna |
| `assets/` | Style, katalog aplikacji i wspólna nawigacja |
| `metronom/` | Metronom |
| `akordy/` | Aplikacja akordowa |
| `interwaly/` | Gra interwałowa |

## Dodawanie aplikacji

Umieść aplikację w osobnym folderze z plikiem `index.html` i dodaj jej wpis w `assets/apps.js`. Dla domyślnej grafiki karty użyj `ikona: 'ogolna'`.

Aby dołączyć wspólną nawigację, dodaj przed `</body>` aplikacji:

```html
<script src="../assets/portal-link.js"></script>
<script src="../assets/apps.js"></script>
<script src="../assets/app-bar.js"></script>
```

Aplikacje korzystające z dźwięku lub mikrofonu powinny zwalniać te zasoby przy opuszczaniu strony (`pagehide`).
