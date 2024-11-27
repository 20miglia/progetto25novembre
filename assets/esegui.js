/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

let num1 = 10
let num2 = 10


function crazySum(evento1,evento2){
  let totale = evento1 + evento2
  if(evento1 === evento2){
    totale = (evento1 + evento2)*3
  }
  return totale
}

let risultato = crazySum(num1,num2)
console.log(risultato)



/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

let n = parseInt(prompt("Inserisci il numero intero"))

function boundary(numero1){
if((numero1 >= 20 && numero1 <= 100) || (numero1 === 400)){
  return true
} else {
  return false
}
}


let ris = boundary(n)
console.log(ris)


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

let words = "EPICODE"

function reverseString(parole){
  let sit = parole.split("")
  let inverse = sit.reverse("")
  let unisci = inverse.join("")

  return unisci
}

let rest = reverseString(words)
console.log(rest)


/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

let whole = "mouse"

function upperFirst(test){
  let inc = test.split("")
  let tex = inc.shift()
  let volt = tex.toUpperCase()
  let set = inc.join("")
  let parolaFinale = volt + set

  return parolaFinale
}

let prodotto = upperFirst(whole)
console.log(prodotto)


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

let tec = 7

function giveMeRandom(n){
  let arr = []
  for(let i = 0; i <= n; i++){
   arr.push(Math.floor(Math.random() * 10)) 
  }
  return arr
}

let visual = giveMeRandom(tec)
console.log(visual)


//Esercizi EXTRA


/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

let val = 20

function crazyDiff(valore){
  let differenza = valore - 19
  if(valore > 19){
    differenza = differenza * 3
  }
    return differenza
}

let evento = crazyDiff(val)
console.log(evento)


/* ESERCIZIO 2
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

let v1 = "codesta"


function codify(valore){
  let web = "code" + " " + valore
  if(valore.startsWith("code")){
    web = valore
  }
 return web   
}

let on = codify(v1)
console.log(on)


/* ESERCIZIO 3
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

let d1 = 20


function check3and7(lith){
  if((lith >= 0) && (lith % 3 === 0 || lith % 7 === 0)){
   return true 
  } else {
    return false
  }
}

let d7 = check3and7(d1)
console.log(d7)


/* ESERCIZIO 4
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

let w1 = "original"


function cutString(testo){
 let c2 = testo.split("")
 let t3 = c2.shift()
 let r4 = c2.pop()
 let z5 = c2.join("")

 return z5
}

let g27 = cutString(w1)
console.log(g27)


/* ESERCIZIO 5
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

let b1 = 3
let b2 = 7


function area(l1,l2){
  let calcolo = l1 * l2

  return calcolo
}

let rr = area(b1,b2)
console.log(rr)



