/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

// Analisi Esercizio 1 
// E' un ciclo for che compie 5 iterazioni. Internamente c'è un console.log di i che però a schermo
// non restituisce nulla.
// Non ci sono errori sintattici ma c'è un errore di logica infatti se dichiariamo che i è uguale a 0
// poi non possiamo dire che è maggiore di 5.
// CORREZIONE
for (let i = 0; i < 5; i++) {
    // console.log(i);
}




//-----------------------------------------------------------------------------------------------------
// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

// Analisi Esercizio2 
// Questa funzione serve per addizionare al numemero cinque solo esclusivamente un numero paro.
// IL problema qui è di sintasassi e non di logica. Non di può utilizzare l'operatore "=" ovvero 
// operatore di assegnazione in questo caso. Ma serve un operatore relazionale composto da "===".
// Con tale strumento andremo a dire nella condizione che se il num(parametro della nostra funzione)
// da resto strettamente uguale a 0 allora il suo ritorno si potra sommare a 5.
// Ovviamente per poter usare la funzione dobbiamo salvarla in una variabile e inserire tra tonde un numero
// scelto dall utente ES 
// const result = addIfEvan(6);
// console.log(result) ----> output = 11
//CORREZIONE
// function addIfEven(num) {
//     if (num % 2 === 0) {
//         return num + 5;
//     }
//     return num;
// }

// const result = addIfEven(6);
// console.log(result);

//------------------------------------------------------------------------------------------------

// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }
// Analisi Esercizio 3 
// Qui abbiamo una funzione con all interno un ciclo for identico all esercizio uno.
// A differenza del primo in questo caso non ci sono errori di logica ma di sintassi,
// Ovvero, all'interno delle tonde del ciclo for si devono utilizzare ";" per separare le istruzioni
// e non le virgole.
//CORREZIONE
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        // console.log(i);
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

// Analisi Esercizio 4
// Questo esercizio consiste in una funzione che estrare da un array dei numeri pari e li copia 
// In un altro array.
// Ci sono sia errori di sintassi che di logica.
// Gli errori di sintassi sono: ";" dopo i++ e dopo le parentesi tonde della condizione if e.
// All' interno delle tonde dell if l'operatore deve essere relazionale con minimo 2 uguale e non
// di assegnazione

// LOGICA
// numbers.length non deve avere il -1 a destra altrimenti l'ultimo valore dell'array sarà 
// escluso dal controllo. 
// Nell' if il controllo deve essere fatto su numbers[i] e non su numbers visto che quest'ultimo è 
// array e non un elemento corrente dell array come nel caso di numbers[i] per l'appunto
// Anche evenNumbers.push(i) presenta un errore visto che nel nuovo array non dobbiamo pushare gli
// indici ma i valori numerici che passano la condizione.
// Il return della funzione deve essere posizionato al difuori del ciclo for e non all suo interno.
// La funzione dovrebbe avere un argomento all interno delle parentesi tonde ed essere scritta in modo
// più generico per essere riutilizzata e richiamata all interno dello script. Questo ci permette di avere
// un codice molto più intellegibile, sintetico e comprensibile.
// Buona partica suggerisce di dichiarare l'array di partenza con const invece che con let

// CORREZIONE


function displayEvenNumbers(arrFirst, arrSecond) {
    
    for (let i = 0; i < arrFirst.length; i++) {
        if (arrFirst[i] % 2 === 0) {
            arrSecond.push(numbers[i]);
        }

    }
    return arrSecond;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = [];

const resultArr = displayEvenNumbers(numbers,evenNumbers);

console.log(resultArr);



