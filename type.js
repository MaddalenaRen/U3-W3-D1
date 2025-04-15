//1) Quali sono i tipi primitivi principali in TypeScript?
//1) I tipi primitivi principali in ts sono: "string", "number","boolean", "undefined", "null", "any", "never"
//2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var MyName = "Maddalena";
var MyAge = 33;
var isStudyingTS = true;
//3) Tipizza il parametro della seguente funzione:
var greet = function (MyName) {
    return "Ciao " + MyName;
};
//4) Specifica il tipo di ritorno della seguente funzione: const sum = (a: number, b: number) => { return a + b }
var Sum = function (a, b) {
    return a + b;
};
//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var PrezzoConIVA = function (prezzo) {
    return prezzo * 1.22;
};
//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var ConcatString = function (s1, s2) {
    return (s1 + s2).length;
};
//7) Cos'è un Type Union e come si scrive?
//7) Un type union si utilizza, quando si vuole dire che una variabile può assumere più di un tipo e si utilizza |
var valore1;
var valore2;
var valore;
var day = "Lunedì";
//10) Tipizza il seguente array di numeri:  const numbers = [1, 2, 3]
var numbers = [1, 2, 3];
//11)Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var array1 = [
    "Aldo",
    "Giovanni",
    "Giacomo",
    10,
    20,
];
var persona1 = {
    firstname: "Maddalena",
    lastname: "Rennella",
    age: 33,
};
var utente1 = {
    email: "email@gmail.com",
};
var utente2 = {
    email: "utente2@gmail.com",
    phone: 123456789,
};
var studenti = [
    { firstname: "Maddalena", voto: 30 },
    { firstname: "Aldo", voto: 18 },
    { firstname: "Giovanni", voto: 25 },
    { firstname: "Giacomo", voto: 30 },
    { firstname: "Laura", voto: 28 },
    { firstname: "Anna", voto: 30 },
];
//17) Crea un oggetto che implementi l'interfaccia Auto.
var MiaAuto = {
    marca: "Fiat",
    modello: "500",
    anno: 2020,
    alimentazione: "diesel",
    porte: 3,
    colore: "Rosso",
};
//18) Cosa sono i Generics in TypeScript?
//i GEnerics permettono di definire funzioni, classi o interfacce che sono in grado di lavorare con diversi tipi di dati
//possono lavorare con diversi tipi di dati, mantenendo però la tipizzazione.
//Sono utili quando vuoi scrivere codice riutilizzabile ma fortemente tipizzato.
//si trovano tra le parentesi angolari
//Migliorano la riusabilità del codice
//Mantengono la sicurezza dei tipi
//Eviti di riscrivere funzioni simili per ogni tipo
//19) È possibile avere più tipi generici in un'interfaccia?
// Sì,in TS si possono avere più tipi generici in un'interfaccia, basta separarli con una virgola
