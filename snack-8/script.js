const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

const student = students.filter(student => student.name === 'Marco Lanci');
console.log(student);

const studClass = student[0].class; //devo mettere [0] perchè filter restituisce comunque un array anche se di un solo elemento
console.log(studClass);


// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'