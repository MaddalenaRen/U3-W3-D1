//1) Quali sono i tipi primitivi principali in TypeScript?

//1) I tipi primitivi principali in ts sono: "string", "number","boolean", "undefined", "null", "any", "never"

//2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

let MyName :string = "Maddalena";
let MyAge :number= 33;
let isStudyingTS: boolean = true;

//3) Tipizza il parametro della seguente funzione:
const greet = (MyName :string) => { return "Ciao " + MyName };

//4) Specifica il tipo di ritorno della seguente funzione: const sum = (a: number, b: number) => { return a + b }

const Sum = (a: number, b: number) :number => { return a + b };

//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const PrezzoConIVA = (prezzo: number): number => {
    return prezzo * 1.22;
  };

//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

const ConcatString = function (s1: string, s2: string) {
    return (s1 + s2).length 
  }
  
//7) Cos'è un Type Union e come si scrive?

//7) Un type union si utilizza, quando si vuole dire che una variabile può assumere più di un tipo e si utilizza | 

let valore1: string |number;
let valore2: number |boolean;

//8) Crea una variabile che possa contenere un numero, null o undefined.

type MyType = number |null |undefined

let valore: MyType;

//9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

type Days= "Lunedì"|"Martedì"|"Mercoledì"|"Giovedì"|"Venerdì"|"Sabato"|"Domenica";

let day:Days = "Lunedì"

//10) Tipizza il seguente array di numeri:  const numbers = [1, 2, 3]
const numbers: number[] = [1, 2, 3];

//11)Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

let array1: [string, string, string,number,number]= ["Aldo","Giovanni", "Giacomo", 10, 20];

//12)Qual è la differenza tra type e interface?

//12) Le interfacce possono essere estese,Ciò significa che quando si usa un'interfaccia 
// non si sa effettivamente cosa contiene 
// perché potrebbe essere stata modificata/estesa a un certo punto - che è la natura dell'interfaccia.

//I tipi non possono essere estesi.  
// Non si può estendere un tipo, ma si possono combinare unioni per combinare tipi in... un nuovo tipo. 
// L'importante distinzione qui è che - non cambia il tipo originale.


//13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age"

interface Persona {
    firstname: string;
    lastname: string;
    age: number;
  }

  const persona1 :Persona ={
    firstname: "Maddalena",
    lastname: "Rennella",
    age: 33
  }

  //14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

  interface Utente {
    email:string;
    phone?:number;
  }

  const utente1 :Utente= {
    email: "email@gmail.com"
  }

  const utente2 :Utente= {
    email: "utente2@gmail.com",
    phone: 123456789
  }


  //15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

  interface Studente {
    firstname:string;
    voto:number;

  }

  const studenti :Studente[] =[
    { firstname: "Maddalena", voto: 30},
    { firstname: "Aldo", voto: 18 },
    { firstname: "Giovanni", voto: 25 },
    { firstname: "Giacomo", voto: 30 }
    { firstname: "Laura", voto: 28 },
    { firstname: "Anna", voto: 30 }
  ]