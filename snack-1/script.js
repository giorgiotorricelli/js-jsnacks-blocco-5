const names = ['Edoardo', 'Simone', 'Francesco'];

//si potrebbe usare semplicemente il metodo join()
console.log(names.join(', '));

//oppure il forEach()
let output = ``;

names.forEach(element => {
    
    if (output.length === 0){
        output += element;
    } else {
        output += `, ${element}`;
    }
    
});

console.log(output);

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'