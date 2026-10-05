# Po tonie ton

Przeglądarkowe narzędzia do ćwiczenia rytmu, harmonii i słuchu muzycznego.

## Aplikacje

- **Metronom** — regulacja tempa, podziały rytmiczne i zanikające kliknięcie.
- **Akordy** — budowa tercjowa, przewroty i układy dźwięków.
- **Bramki interwałów** — gra polegająca na śpiewaniu wskazanych interwałów.
- **Rozpoznawanie interwałów** — posłuchaj dwóch dźwięków i powiedz nazwę interwału; 10 etapów do pucharu.

## Uruchomienie

Otwórz główny plik `index.html` w przeglądarce. Gry interwałowe wymagają dostępu do mikrofonu oraz strony udostępnionej przez HTTPS lub lokalny serwer (`localhost`). „Rozpoznawanie interwałów” rozpoznaje mowę w samej aplikacji: przy pierwszym użyciu pobiera ok. 38 MB danych z folderu `rozpoznawanie-interwalow/mowa/` (biblioteka Vosk i polski model, licencje w `LICENCJE.txt`). W aplikacji można też przełączyć się na rozpoznawanie mowy przeglądarki (Chrome lub Edge, z dostępem do internetu).

Projekt korzysta z HTML, CSS i JavaScript, bez dodatkowych zależności i kompilacji.

## Bramki interwałów — jak działa ocena

Oceniana jest odległość między dwoma zaśpiewanymi dźwiękami (`1200 × log2(f2 / f1)` centów), a nie wysokość bezwzględna — tonacja jest dowolna. Próba jest zaliczona, gdy odległość różni się od celu o najwyżej ±50 centów (stała `TOLERANCE_CENTS` w `interwaly/index.html`). Pod grą jest przycisk **Diagnostyka** (albo adres z dopiskiem `?diag=1`): pokazuje ustawienia mikrofonu, wykryte dźwięki, pewność pomiaru, odchyłkę w centach i przyczynę braku zaliczenia.

## Dodawanie aplikacji

Każda aplikacja ma własny folder z plikiem `index.html`. Kartę na stronie głównej i pozycję we wspólnym pasku dodaje wpis w `assets/apps.js`.
