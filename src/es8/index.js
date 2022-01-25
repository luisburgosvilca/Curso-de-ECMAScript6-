//Objects entries
const data = {
    frontend : 'Luis',
    backend: 'Carolina',
    design: 'Yesenia'
}

const entries = Object.entries(data);
const values = Object.values(data);
const keys = Object.keys(data);
    console.log(entries);
    console.log(entries.length);
    //devuelve un objeto
    console.log(values);
    console.log(values.length)
    console.log(keys);
    console.log(keys.length);

//Objects entries
const data = [
    {frontend : 'Luis',backend: 'Carolina',design: 'Yesenia'},
    {frontend : 'Carolina',backend: 'Luis',design: 'Romina'},
    {frontend : 'Javier',backend: 'Roberto',design: 'Angel'},
    {frontend : 'Carlos',backend: 'Lucero',design: 'Milagros'}
]


const entries = Object.entries(data);
const values = Object.values(data);
const keys = Object.keys(data);
    console.log(entries);
    console.log(entries.length);
    //devuelve un objeto
    console.log(values);
    console.log(values.length)
    console.log(keys);
    console.log(keys.length);    

//object values
const data = {
    frontend : 'Luis',
    backend: 'Carolina',
    design: 'Yesenia'
}

const values = Object.values(data);
    console.log(values);
    //devuelve un arreglo de string's
    console.log(values.length);

//Padding
const string2 = 'hello';
console.log(string2.padStart(5,'hi'));
console.log(string2.padEnd(12,' ----'));
console.log('food'.padEnd(12, ' ----'));

//ejemplo visto en los comentarios:
const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
console.log(maskedNumber);
console.log(last4Digits);

const log = console.log;
//random hex colours
for (let i = 0; i < 25; i++) {
    let red = Math.floor(Math.random() * 255).toString(16);//toString(16): convierte el número en base 16 o hexadecimal
    let green = Math.floor(Math.random() * 255).toString(16);
    let blue = Math.floor(Math.random() * 255).toString(16);
    let colour = '#' + red.padStart(2, '0') + green.padStart(2, '0') + blue.padStart(2, '0');
    log(red, green, blue, colour);
}
const log = console.log;
log(Math.floor(Math.random()*255).toString(16));

let x =7;
console.log(x.toString(2));//imprime el valor en base 2

let id = 123456; //first 10 chars
let user = 'Bob'; //next 10 chars
let email = 'bob@work.org'; //final 30 chars
let fullLine = id.toString().padStart(10, '0') + user.padStart(10) + email.padStart(30);
console.log(fullLine);

let personal = [
    {id:123456, user:'Luis', email:'luis@gmail.com'},
    {id:145, user: 'Madona', email: 'madona@latinmail.com'},
    {id: 5482, user: 'Lío', email: 'Lío@asdfadfadfadfadf.com'}
];

let workers = personal.map(item=>console.log(item.id.toString().padStart(10,'0')+item.user.padStart(10)+item.email.padStart(30)));
//let workers2= personal.map(item=>console.table(item.id.toString().padStart(10,'0')+item.user.padStart(10)+item.email.padStart(30)));
console.table(personal);
