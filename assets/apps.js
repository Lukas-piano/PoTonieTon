/*
 * KATALOG APLIKACJI — jedyne miejsce, które trzeba edytować, żeby dodać narzędzie.
 *
 * Pola:
 *   id      – krótki identyfikator (bez spacji i polskich znaków)
 *   nazwa   – tytuł karty
 *   opis    – jedno–dwa zdania: do czego służy narzędzie
 *   ikona   – nazwa grafiki z assets/portal.js (metronom, akordy, interwaly, rozpoznawanie, ogolna)
 *   adres   – folder aplikacji zakończony ukośnikiem, np. "tuner/"
 *   status  – "dostepna"  → karta z przyciskiem „Uruchom”
 *             "wkrotce"   → karta bez przycisku, oznaczona jako chwilowo niedostępna
 *   krotko  – (opcjonalnie) krótsza nazwa na pasek nawigacji w aplikacjach
 *   uwaga   – (opcjonalnie) krótka informacja, np. „Wymaga mikrofonu”
 */
window.FOREST_APPS = [
  {
    id: 'metronom',
    nazwa: 'Metronom',
    opis: 'Równy puls w dowolnym metrum, z podziałami rytmicznymi, tap tempo i zanikającym kliknięciem.',
    ikona: 'metronom',
    adres: 'metronom/',
    status: 'dostepna',
    uwaga: 'Tap tempo i podziały'
  },
  {
    id: 'akordy',
    nazwa: 'Akordy',
    opis: 'Zbuduj akord tercjami, zobacz go na klawiaturze lub gryfie gitary i posłuchaj przewrotów.',
    ikona: 'akordy',
    adres: 'akordy/',
    status: 'dostepna',
    uwaga: 'Klawiatura i gitara'
  },
  {
    id: 'interwaly',
    nazwa: 'Interwały wokalne',
    krotko: 'Interwały',
    opis: 'Zaśpiewaj wskazany interwał i rozbij nadlatującą bramkę. Siedem etapów, coraz mniej czasu.',
    ikona: 'interwaly',
    adres: 'interwaly/',
    status: 'dostepna',
    uwaga: 'Wymaga mikrofonu'
  },
  {
    id: 'rozpoznawanie-interwalow',
    nazwa: 'Rozpoznawanie interwałów',
    opis: 'Posłuchaj dwóch dźwięków i powiedz nazwę interwału',
    ikona: 'rozpoznawanie',
    adres: 'rozpoznawanie-interwalow/',
    status: 'dostepna',
    uwaga: 'Wymaga mikrofonu'
  }
];
