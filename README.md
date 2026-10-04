# Po tonie ton

Przeglądarkowe narzędzia do ćwiczenia rytmu, harmonii i słuchu muzycznego.

## Aplikacje

- **Metronom** — regulacja tempa, podziały rytmiczne i zanikające kliknięcie.
- **Akordy** — budowa tercjowa, przewroty i układy dźwięków.
- **Bramki interwałów** — gra polegająca na śpiewaniu wskazanych interwałów.
- **Rozpoznawanie interwałów** — posłuchaj dwóch dźwięków i powiedz nazwę interwału; 10 etapów do pucharu.

## Uruchomienie

Otwórz główny plik `index.html` w przeglądarce. Gry interwałowe wymagają dostępu do mikrofonu oraz strony udostępnionej przez HTTPS lub lokalny serwer (`localhost`). „Rozpoznawanie interwałów” korzysta z rozpoznawania mowy przeglądarki (najlepiej Chrome lub Edge, z dostępem do internetu).

Projekt korzysta z HTML, CSS i JavaScript, bez dodatkowych zależności i kompilacji.

## Dodawanie aplikacji

Każda aplikacja ma własny folder z plikiem `index.html`. Kartę na stronie głównej i pozycję we wspólnym pasku dodaje wpis w `assets/apps.js`.
