class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }

    opiszKsiazke() {
        let przeczytanaTekst = this.przeczytana ? "została przeczytana" : "nie została przeczytana";
        return `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i ${przeczytanaTekst}.`;
    }
}

const ksiazka1 = new Ksiazka("Wiedźmin", "Andrzej Sapkowski", true);
const ksiazka2 = new Ksiazka("Harry Potter", "J.K. Rowling", false);
const ksiazka3 = new Ksiazka("Pan Tadeusz", "Adam Mickiewicz", false);

const ksiazki = [ksiazka1, ksiazka2, ksiazka3];

function iloscPrzeczytanych(ksiazki) {
    let licznikPrzeczytanych = 0;
    
    ksiazki.forEach(ksiazka => {
        console.log(ksiazka.opiszKsiazke()); 
        if (ksiazka.przeczytana) {
            licznikPrzeczytanych++;
        }
    });
    
    return licznikPrzeczytanych;
}

const przeczytaneKsiazki = iloscPrzeczytanych(ksiazki);
console.log("Ilość przeczytanych książek: " + przeczytaneKsiazki);
