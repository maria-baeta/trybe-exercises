// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult = 43;

//-------------------------------------------------
const anodeNasc = books[0].author.birthYear;
// console.log(anodeNasc);
// ------------------------------------------------- Logica com FOR 
// let arr = [];

// for (let index = 0; index < books.length; index += 1) {
//   arr.push(books[index].author.birthYear)
//   // console.log(books[index].author.birthYear)
// }
// // console.log(arr);

// let releaseYear = [];
// for (let index = 0; index < books.length; index += 1) {
//   releaseYear.push(books[index].releaseYear)
//   // console.log(books[index].author.birthYear)
// }
// // console.log(releaseYear)
// let idade = []
// for (let index = 0; index < arr.length; index += 1) {
//   let sub = arr[index] - releaseYear[index]
//   idade.push(sub * (-1))
// }
// // console.log(idade);
// let media = 0;
// let sum = 0
// for (let index = 0; index < idade.length; index += 1) {
//   sum += idade[index]
// }
// media = sum / idade.length
// // console.log(sum)
// console.log(media);


//------------------------------------------------- Projeto de Refatoração
// const birthYear = () => {
//   let birthYear  = [];
//   for (let index = 0; index < books.length; index += 1) {
//     birthYear .push(books[index].author.birthYear)
//     // console.log(books[index].author.birthYear)
//   }
//   return birthYear 
// }
// // console.log(birthYear());
// //---
// const releaseYear = () =>{
//   let releaseYear = [];
//   for (let index = 0; index < books.length;index +=1) {
//     releaseYear.push(books[index].releaseYear)
//       // console.log(books[index].author.birthYear)
//   }
// return releaseYear
// }
// // console.log(releaseYear())

//-----------------------------------------------------------

function averageAge() {
  let arr = [];

for (let index = 0; index < books.length; index += 1) {
  arr.push(books[index].author.birthYear)
  // console.log(books[index].author.birthYear)
}
// console.log(arr);

let releaseYear = [];
for (let index = 0; index < books.length; index += 1) {
  releaseYear.push(books[index].releaseYear)
  // console.log(books[index].author.birthYear)
}
// console.log(releaseYear)
let idade = []
for (let index = 0; index < arr.length; index += 1) {
  let sub = arr[index] - releaseYear[index]
  idade.push(sub * (-1))
}
// console.log(idade);
let media = 0;
let sum = 0
for (let index = 0; index < idade.length; index += 1) {
  sum += idade[index]
}
media = sum / idade.length
// console.log(sum)
return media;
}
console.log(averageAge());

assert.strictEqual(averageAge(), expectedResult);