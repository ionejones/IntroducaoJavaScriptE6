//Exemplo do uso do REDUCE (vai subtrair todos os valores de um array de objetos de um saldo )
const lista = [
  {
  produto : 'sapato',
  preco: 300
},
{
  produto : 'calça',
  preco: 150
},
{
  produto : 'saia',
  preco: 200
}
]

const saldoConta = 1500;

function calculaSaldo (saldoConta, lista) {
   return lista.reduce (function(prev, current,  index)
  {
    console.log ('Rodada : ', index+1);
    console.log ('Item ',current.produto,' ',current.preco);
    return prev - current.preco;
  }, saldoConta);
}

console.log ('O novo saldo da conta é ',calculaSaldo(saldoConta, lista));

//Exemplo do uso do REDUCE (vai somar todos os números do array)
// const oArray = [3, 1, 4, 5];
// const inicial = 2;
// function somaNumeros (arr) {
//   return arr.reduce(function(ant, atual){
//   return ant + atual;
//   } , inicial)

// }

// console.log ('A soma é ',somaNumeros(oArray));

// Exemplo do uso do FILTER
// function filtraPares (arr) {
//    return arr.filter(ehPar);
// } 

// function ehPar(item) {
//   return item % 2 === 0;
// }

// const oArray = [20, 3, 44, 56, 7, 9];

// console.log ('Os valores pares são : ',filtraPares(oArray));

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