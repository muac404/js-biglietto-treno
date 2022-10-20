//CHIEDO ALL'UTENTE I KM CHE VUOLE PERCORRERE
const km = Number(prompt("Inserisci i km che vuoi percorrere"));
//CHIEDO ALL'UTENTE LA SUA ETA'
const age = Number(prompt("Inserisci la tua età"));
//CALCOLO IL PREZZO DEL BIGLIETTO INTERO (0,21 EURO AL KM)
const fullPrice = km * 0.21
console.log("prezzo di listino",fullPrice);
//CONDIZIONI DI SCONTO

if (age < 18) {
     
    let finalPrice = fullPrice - (fullPrice * 0.2)
    let roundedPrice = finalPrice.toFixed(2)
    console.log("prezzo con sconto giovane",roundedPrice)
} else {
    let roundedPrice = fullPrice.toFixed(2)
    
} 

if (age >= 65) {
     
    let finalPrice = fullPrice - (fullPrice * 0.4)
    let roundedPrice = finalPrice.toFixed(2)
    console.log("prezzo con sconto over",roundedPrice)
} else {
    let roundedPrice = fullPrice.toFixed(2)
    
}



//MOSTRO IL PREZZO FINALE 