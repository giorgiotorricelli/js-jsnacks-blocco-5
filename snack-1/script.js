const names = ['Edoardo', 'Simone', 'Francesco'];
const output = [];

names.forEach(element => {
    output.push(`'${element}'`);
});

console.log(output.join(', '));

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'