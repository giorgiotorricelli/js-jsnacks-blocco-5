const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];


//callback della map
function cbPeople(element, index){
  return element.name;
}

//utilizzo una map che mi restituisce un array con solo i nomi

const output = people.map(cbPeople);

//uso join per dividerli con le virgole
console.log(output.join(', '));



// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'