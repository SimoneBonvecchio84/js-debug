/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
// function checkAge() {
//     const myAge = 32;
//     const message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
// }
// checkAge();

// Analisi Esercizio 1
// In questo codice è presente una funzione che controlla l'eta dell utente.
// La costante myAge ha di partenza un valore fisso che rende la funzione totalmente inutile la 
// condizione presente nelle righe sottostanti.
// Se hai meno di 18 passera il messaggio del if
// Altrimenti passera il messaggio in else
// Per rendere la funzione più riutilizzabile è preferibile dargli dei parametri in ingresso
// e inserire la logica all interno delle graffe rendeno òa funzione riutilizzabile come nell
// Esempio qui sotto.
//CORREZIONE

// function checkAge(userAge, resultMess) {
//     if(userAge < 18) {
//         userMess = `Sei troppogiovane! Hai ${userAge} anni!`
//     } else {
//         userMess = 'Hai più di 18 anni!';
//     }

//     return userMess;
// }

// let myAge = parseInt(prompt("quanti anni hai"));

// const message = " ";

// const messageRestul = checkAge(myAge, message);

// console.log(messageRestul);

//-----------------------------------------------------------------------------------

// ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }
// printColorsNumber();

// Analisi Esercizio 2
// Questa funzione detemrmina quanti colori ci sono nell array colors
// L'unico errore presente è la parola length scritta male.
//CORREZIONE
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.length} colori!`);
// }
// printColorsNumber();

//------------------------------------------------------------------------------------------


// ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

//Analisi Esercizio 3
// Questa funzione tramite prompt cerca di sommare il numero inserito dall'utente con il
// valore numerico 12 depositato nella cosante total
// L' errore principale sta nel non aver utilizzato il metodo parseIn che converte il valore 
// numerico inserito nel propmt in number, cosi in fatti non si ha una somma ma una concatenazione
// visto che il numero viene considerato una stringa.
// In più come negli altri casi già visti pure qua potremmo migliorare il codice rendendo la funzione
// più generica e quindi riutilizzabile
// sostituendo il valore 12 con un parametro in ingresso insieme al primo parametro che corrispondera 
// al valore numerico che l'utenete inserirà tramite prompt.
//CORREZIONE

function addNumbers(firstNum, secondNum) {
    const total = firstNum + secondNum;
    return total;
}

const userNumber = parseInt(prompt("inserisci un numero da sommare"));

const result = addNumbers(userNumber, 45);
console.log(result);

//-------------------------------------------------------------------------------------------------------


// ESERCIZIO 4
// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
// function checkAccessImproved() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     for (let i = 0; i < addresses.length; i++) {
//         const email = addresses[i];

//         if (userEmail.length > 5) {

//             if (email === userEmail) {
//                 grantAccess = 'true';

//             }

//         }

//         if (grantAccess) {
//             console.log('Accesso consentito!');
//         } else {
//             console.log('Accesso negato!');
//         }
//     }
//     checkAccessImproved();





























