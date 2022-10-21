

//CHIEDO ALL'UTENTE I KM CHE VUOLE PERCORRERE
const km = Number(prompt("Inserisci i km che vuoi percorrere"));
//CHIEDO ALL'UTENTE LA SUA ETA'
const age = Number(prompt("Inserisci la tua età"));
//CALCOLO IL PREZZO DEL BIGLIETTO INTERO (0.21 EURO AL KM)
let price = km * 0.21;
let message = "Prezzo del biglietto intero";




if (age < 18) {
    
    price = price - (price * 0.2)
    message = "Prezzo tariffa minorenni";
    
} else if (age >= 65){
    price = price - (price * 0.4)
    message = "Prezzo tariffa over 65"
} 

console.log(`${price.toFixed(2)}€`);
console.log(message);

document.getElementById("prezzo-biglietto").innerHTML=`${price.toFixed(2)}€`;



