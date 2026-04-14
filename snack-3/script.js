const numbers = [2, 8, 4, 7, 2, 87];

//qua mi conviene usare ancora la map

function cbNumbers(numb, index){
    return numb + 1;  //incrementa ogni numero di uno
}

const output = numbers.map(cbNumbers); //restituisce il nuovo array
console.log(output);


// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]