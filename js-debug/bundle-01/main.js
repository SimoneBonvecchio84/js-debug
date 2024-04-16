/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

//Esercizio 1 
// E' un ciclo for che compie 5 iterazioni. Internamente c'è un console.log di i che però a schermo
// non restituisce nulla.
// Non ci sono errori sintattici ma c'è un errore di logica infatti se dichiariamo che i è uguale a 0
// poi non possiamo dire che è maggiore di 5.

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

//Esercizio2 
// Questa funzione serve per addizionare al numemero cinque solo esclusivamente un numero paro.
// IL problema qui è di sintasassi e non di logica. Non di può utilizzare l'operatore "=" ovvero 
// operatore di assegnamento in questo caso. Ma serve un operatore relazionale composto da "===".
// Con tale strumento andremo a dire nella condizione che se il num(parametro della nostra funzione)
// da resto strettamente uguale a 0 allora il suo ritorno si potra sommare a 5.
// Ovviamente per poter usare la funzione dobbiamo salvarla in una variabile e inserire tra tonde un numero
// scelto dall utente ES 
// const result = addIfEvan(6);
// console.log(result) ----> output = 11

//------------------------------------------------------------------------------------------------

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

//----------------------------------------------------------------------------------------------------


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// for (let i = 0; i < 9; i++) {
//     console.log(i);
//   }
  

