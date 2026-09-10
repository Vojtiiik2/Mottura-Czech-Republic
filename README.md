# Mottura Czech Republic

Statická česká prezentace produktových skupin a katalogů Mottura. Web používá čisté HTML, CSS a JavaScript bez sestavovacího procesu.

## Struktura projektu

- `index.html` – struktura jednostránkového webu
- `style.css` – vzhled a responzivní rozložení
- `app.js` – data produktů a katalogů, vykreslení karet a modální detail
- `assets/catalogs/` – PDF katalogy
- `assets/img/catalogs/` – náhledové obrázky katalogů
- `assets/img/products/` – produktové fotografie
- `assets/img/hero/` – fotografie úvodního slideru

## Přiřazení produktů ke katalogům

| Produkt | Katalog |
| --- | --- |
| Venkovní systémy | OUTDOOR |
| Motorické systémy | POWER |
| Dřevěné žaluzie | VENIWOOD |
| Plissé | PLI |
| Střešní systémy | GARDEN |
| Římské rolety | TENDE A PACCHETTO |
| Rolety | TENDE A RULLO |
| Designové systémy | FUTURA |
| Vertikální žaluzie | TENDE VERTICALI |
| Japonské stěny | TENDE A PANNELLO |
| Kolejnicové systémy | DRAPPEGGI |
| Látky | bez katalogu |

## Důležitá poznámka

Produktové fotografie jsou v této verzi provizorní a lze je později nahradit změnou hodnoty `img` u příslušného produktu v souboru `app.js`. Náhledové obrázky katalogů jsou uložené samostatně ve složce `assets/img/catalogs/`.

## Nasazení

Na hosting nebo GitHub Pages nahrajte obsah kořenové složky projektu při zachování celé adresářové struktury. Výchozím souborem je `index.html`.
