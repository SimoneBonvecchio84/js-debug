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

// function addNumbers(firstNum, secondNum) {
//     const total = firstNum + secondNum;
//     return total;
// }

// const userNumber = parseInt(prompt("inserisci un numero da sommare"));

// const result = addNumbers(userNumber, 45);
// console.log(result);

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
//        console.log('Accesso negato!');    
//     }
// }
// checkAccess();

// Analisi Esercizio 4 
// Questa funzione cerca di controllare se la mail inserita dall'utente è presente nell arrayMail
// se si consentira l'accesso altrimenti lo negherà.
// In questo codice sono presenti degli errori sintattici, ovvero:
// Le variabili booleane false e true sono scritte sotto forma di stringhe mentre in realta siccome 
// sono un tipo di dato assestante non necessitano di apici.
// In piu c'è un errore di logica ovvero in questo codice è presente una condizione if totalmente inutile.
// Perdipiù al suo interno c'è anche un errore di sintassi invatti se scriviamo grantAccess === true il
// suo valore sarà null 

//CORREZIONE

// function checkAccess(arrMail, userMail) {
     
//     let grantAccess = false;
     
//     if(arrMail.includes(userMail)) {       
//         console.log('Accesso consentito!');
//         grantAccess = true;
//      } else {
//         console.log('Accesso negato!');   
//      }

//      return  grantAccess;
// }

// const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

// const myMail = prompt('Inserisci il tuo indirizzo email');

// const resultAccess = checkAccess(addresses,myMail);

// console.log(resultAccess, myMail)


//--------------------------------------------------------------------------------------------------------
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

// Analisi Esercizio 5 
// Errori sintattici:
// let grantAccess in questa variabile è depoitato il valore booleano false sotto forma di stringa
//  
// In questa funzione c'è sempre un controllo della mail inserita tramite prompt.
// In questo caso l'array delle mail viene iterato tramite un ciclo for nel quale 
// è presente una costante email nella quale viene inserito il valore addresesses[i],
// ovvero l'elemento corrente dell array.
// Durante la condizione userEmail variabile che il cui valore verrà inserito tramite propmt è 
// ad una condizione, ovvero se la sua lunghezza è maggiore di 5 eseguiremo.
// In questa condizione secondo me è assente un else che è indispensabile laddove la mail inserita
// sia inferiore a 5 e non sia presente nell array addresses 
// Un altra condizione
// Se email è strettamente uguale ad userEmail allora grantAccess uguale a true.
// Qui incontriamo il primo errore sintattico. True infatti è scritto sotto forma di strinag come
// nel esercizio precedente.
// Si può notare fin dall inizio del codice che c'è la prima parentesi graffa di colore rosso.
// Tutto cio sta a sottoliniare che il codice è delimitato solo all'inizio e non nella parte finale.
// Si nota che l'ultima condizione si trova all'interno dello scope del ciclo for.
// Questo è un altro errore visto che il risultato dell controllo va stamapto un unica volta
// e non reiterato più volte a causa della sua posizione nel ciclo for.
//CORREZIONE



 function checkAccessImproved() {
        const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    
        const userEmail = prompt('Inserisci il tuo indirizzo email');
    
        let grantAccess = false;
    
        for (let i = 0; i < addresses.length; i++) {
            const email = addresses[i];
    
            if (userEmail.length > 5) {
    
                if (email === userEmail) {
                    grantAccess = true;
    
                }
    
            } else {
                grantAccess = false;
            }
        }    
            if (grantAccess) {
                console.log('Accesso consentito!');
            } else {
                console.log('Accesso negato!');
            }
        }
        checkAccessImproved();

























