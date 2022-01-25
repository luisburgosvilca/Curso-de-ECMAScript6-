let numbers = [1,2,3,7,8];

if(numbers.includes(9)){
    console.log('Sí se encuentra');
}else{
    console.log('No se encuentra');
}

//pow o potencia
let base = 4;
let exponent = 3;
let result = base ** exponent;
console.log(result);

//antes de es7
const arr = [1, 2, 3, 4, 5];
arr.indexOf(1) !== -1; // true
arr.indexOf(10) !== -1; // false
console.log(arr.indexOf(10));// si el resultado era igual a 0 (cero), sí estaba en el array, y si era -1 (uno negativo) no estaba en el array