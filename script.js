// Exemplo utilizando MAP sem THIS
// const nums = [1,2]

// function mapSemThis (arr) {
//   return arr.map (function(item) {
//     return item * 2;
//   })
// }

// console.log ('A mutiplicação com this é ',mapSemThis(nums));

// Exemplo utilizando MAP com THIS
// const maca = {
//   value: 2
// }

// const laranja = {
//   value: 3
// }

// const nums = [1, 2]; 

// function mapComThis (arr, thisArg) {
//    return  arr.map(function(item) {
//     return item *this.value;
//    }, thisArg)
// }

// console.log('A mutiplicação por maçã é : ',mapComThis(nums, maca));

// console.log('A mutiplicação por laranja é : ',mapComThis(nums, laranja));

// Exemplo utilizando SET
// const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

// function valoresUnicos(arr) {
//   const mySet = new Set(arr);

// //  return mySet;
//   return [...mySet];
// } 

//console.log(valoresUnicos(meuArray));

// Exemplo utilizando MAP
// function getAdministradores(map)  {
//     let admins = [];

//     for ([key, value]  of map) {
//         if (value === 'Admin') {
//             admins.push (key);
//         }
//     } 
//     return admins;
// }

// const usuarios = new Map();

// usuarios.set('Ana', 'Admin');
// usuarios.set('Miguel', 'Usua');
// usuarios.set('Joao', 'Usua');
// usuarios.set('Claudia', 'Admin');
// usuarios.set('Tereza', 'Admin');

// console.log(getAdministradores(usuarios));