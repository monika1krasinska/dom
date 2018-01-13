'use strict'
class Ogloszenie {
    
    constructor (tytul, opis, kategoria, status, cena){
        this.tytul = tytul;
        this.opis = opis; 
        this.kategoria = kategoria; 
        this.status = status;
        this.cena = cena;
    }
pobierzTytul (){
    return this.tytul;
    
}
}
var ogloszenie1 = new Ogloszenie ("Sprzedam Opla","Kombi 2009 w dobrym stanie", "Motoryzacja", "aktywne", 15000)
var ogloszenie2 = new Ogloszenie ("Sprzedam Passata", "Igła, nie bity od Niemca", "Motoryzacja", "nieaktywne", 5000)
var ogloszenie3 = new Ogloszenie ("Mieiszkanie M4", "Super lokalizacja", "Nieruchomosci","aktywne","500000")
//console.log(ogloszenie1);
//console.log(ogloszenie2);
//console.log(ogloszenie3);
console.log(ogloszenie2.pobierzTytul())
var arr = [
    {tytul: "W pustyni i w puszczy",stan: true},
    {tytul: "Rura", stan:false}
]
for(var i = 0; i<arr.length; i++) {
    if (arr[i].stan == true) {
        console.log("Huraaaa")
        
    }
    else {
        console.log("Nie huraaa")
    }
}