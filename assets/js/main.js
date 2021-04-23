//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
var distance = prompt('Inserisci i km da percorrere');
var age = parseInt(prompt('Inserisci l\'età'));

if (isNaN(distance) || isNaN(age)) {
    alert('Per favore, inserisci solo numeri al fine di poter calcolare il costo del biglietto');
}

document.getElementById('distance').innerHTML = distance + ' km';
document.getElementById('age').innerHTML = age + ' anni';


//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
var coefficiente = 0.21;
var prezzoInt = distance * coefficiente;

//va applicato uno sconto del 20% per i minorenni
var sconto;
if (age < 18) {
sconto = 20;
promo = 'promozione dedicata agli Under 18'
} 
//va applicato uno sconto del 40% per gli over 65.
else if (age > 65) {
sconto = 40;
promo = 'promozione dedicata agli Over 65'
}

//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

if (age < 18 || age > 65) {
prezzo = prezzoInt - ((prezzoInt * sconto) / 100);
document.getElementById('ticket').innerHTML = 'Il prezzo del tuo biglietto è di € ' + Math.round((prezzo + Number.EPSILON) * 100) / 100 + ' anzichè € ' + Math.round((prezzoInt + Number.EPSILON) * 100) / 100 + ' grazie alla ' + promo;
} else {
prezzo = prezzoInt
document.getElementById('distance').innerHTML = distance;
document.getElementById('ticket').innerHTML = 'Il prezzo del tuo biglietto è di € ' + Math.round((prezzo + Number.EPSILON) * 100) / 100;
}