const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
  const mySet = new Set(arr);

  return mySet;
} 

console.log(valoresUnicos(meuArray));

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