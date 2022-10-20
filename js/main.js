

//CHIEDO ALL'UTENTE I KM CHE VUOLE PERCORRERE
const km = Number(prompt("Inserisci i km che vuoi percorrere"));
//CHIEDO ALL'UTENTE LA SUA ETA'
const age = Number(prompt("Inserisci la tua età"));
//CALCOLO IL PREZZO DEL BIGLIETTO INTERO (0.21 EURO AL KM)
const fullPrice = km * 0.21
console.log("prezzo di listino",fullPrice);
//CONDIZIONI DI SCONTO


if (age < 18) {
    console.log("requisito sconto minorenne") 
    let finalPrice = fullPrice - (fullPrice * 0.2)
    let roundedPrice = finalPrice.toFixed(2)
    console.log("prezzo con sconto young",roundedPrice)
    document.getElementById("prezzo-biglietto").innerHTML=roundedPrice + " €";
} else {
    let roundedPrice = fullPrice.toFixed(2)
    document.getElementById("prezzo-biglietto").innerHTML=roundedPrice + " €";
    
} 

if (age >= 65) {
    console.log("requisito sconto over65")  
    let finalPrice = fullPrice - (fullPrice * 0.4)
    let roundedPrice = finalPrice.toFixed(2)
    console.log("prezzo con sconto over65",roundedPrice)
    document.getElementById("prezzo-biglietto").innerHTML=roundedPrice + " €";
} else {
    let roundedPrice = fullPrice.toFixed(2)
    document.getElementById("prezzo-biglietto").innerHTML=roundedPrice + " €";
    
}






//MOSTRO IL PREZZO FINALE 