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

//uso filter per filtrare tra gli id

function cbStudents(student, index){
  return student.id === 2;
}

const output = students.filter(cbStudents);
const output2 = students.filter(student => student.id === 2)

console.log(output, output2);


// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }