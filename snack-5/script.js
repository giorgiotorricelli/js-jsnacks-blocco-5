const nums = [2, 8, 4, 7, 12, 87];

//utilizzo il metodo filter per filtrare solo i numeri pari in 
//un nuovo array

//utilizzo una arrow function per fare il figooooo

//nella cb del metodo filter sono richiesti solo valori booleani

const output = nums.filter((current, index) => {
    return current % 2 === 0; //restituisce solo i numeri pari, se true
});

console.log(output);

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]