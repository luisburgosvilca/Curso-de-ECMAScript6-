function newFunction(name, age, country){
    var name = name || "Luis";
    var age = age || 32;
    var country = country || "Perú";
    console.log(name, age, country);
}

//ec6
function newFunction2(name = "Luis", age = 32, country= 'PE'){
    console.log(name, age, country);
}

newFunction();
newFunction2();
newFunction2("Roberto",52,'USA');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;//comilla francesa
console.log(epicPhrase2);

let lorem = "lorem ipsum dolor sit amet, consectetur adipiscing \n"
+ "esto es otra frase épica.";

//ec6
let lorem2 = `lorem ipsum dolor sit amet, consectetur adipiscing
esto es otra línea épica.`;

console.log(lorem);
console.log(lorem2);

let person = {
    name : 'Luis',
    'age' : 32,
    'country' : 'PE'
}

console.log(person.name, person.age);

//es6
let {name, age} = person;
console.log(name);
console.log(age);

let team1 = ["Juan", "Ramiro", "Carla"];
let team2 = ["Rigoberto", "Daniela", "Maritza"];

let education = ["Luis", ...team1, ...team2];
console.log(education);

{
    var globalVar = "Soy un var, de alcance global";
}

{
    let globalLet = "Soy un let, de alcance local";
    console.log(globalLet);
}

console.log(globalVar);
console.log(globalLet);

const a = 'b';
a='a';
console.log(a);

let name = "Luis";
let age = 32;

//es5
obj = {name:name,age:age};
//es6
obj2 = {name,age};
console.log(obj2);

const names = [
    {name : 'Luis',age : 32},
    {name : 'Milagritos', age : 17}
];
//los arrow function son funciones anónimas
let listOfNames = names.map(function(item){
    console.log(item.name);
});
//es6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {//array function
    console.log(name, age);
};

listOfNames3('Juan',32, 'CO');
//formas de llamar al array function
const listOfNames4 = name => {
    console.log(name);
}

listOfNames4('Ramiro');

const listOfNames5 = () => console.log("Qué bonito día es hoy");
listOfNames5();

const square = num => console.log(num*num);
square(5);

const helloPromise = () => {
    return new  Promise((resolve, reject) => {
        if(true){
            resolve('Hey!')
        }else{
            reject('Ups')
        }
    })
}
helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))

class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    suma(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.suma(2,3));

import {hello} from './module.js';
hello();

const hello2 = require('./module');
console.log(hello2());

function* helloWorld(){
    if(true){
        yield 'hello, ';
    }
    if(true){
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

//serie de fibonacci

function* fibonacci(){
    var fn1 = 1;
    var fn2 = 1;
    while (true){  
      var actual = fn2;
      fn2 = fn1;
      fn1 = fn1 + actual;
      var reset = yield actual;
      if (reset){
          fn1 = 1;
          fn2 = 1;
      }
    }
  }
  
  var secuencia = fibonacci();
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 2
  console.log(secuencia.next().value);     // 3
  console.log(secuencia.next().value);     // 5
  console.log(secuencia.next().value);     // 8
  console.log(secuencia.next().value);     // 13
  console.log(secuencia.next(true).value); // 1
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 2
  console.log(secuencia.next().value);     // 3
  