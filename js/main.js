//CHIEDO ALL'UTENTE I KM CHE VUOLE PERCORRERE
const km = Number(prompt("Inserisci i km che vuoi percorrere"));
//CHIEDO ALL'UTENTE LA SUA ETA'
const age = Number(prompt("Inserisci la tua età"));
//CALCOLO IL PREZZO DEL BIGLIETTO INTERO (0,21 EURO AL KM)
const fullPrice = km * 0.21
console.log(fullPrice);
//SE L'ETA' E MINORE DI 18 ANNI APPLICO SCONTO 20%
if (age < 18) {
     
    const discountedPrice = fullPrice - (fullPrice * 0.2)
    console.log(discountedPrice)
} else {
    const finalPrice = Fullprice
}

if (age >= 65) {
     
    const discountedPrice = fullPrice - (fullPrice * 0.4)
    console.log(discountedPrice)
} else {
    const finalPrice = Fullprice
}
// ALTRIMENTI PREZZO INTERO
//SE L'ETA' E' MAGGIORE O UGUALE A 65 ANNI APPLICO SCONTO DEL 40%
// ALTRIMENTI PREZZO INTERO

//MOSTRO IL PREZZO FINALE 