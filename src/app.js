// CommonJS Module Syntax
// const person = require('./mymodule1');

// ES2015 Module
// import { person, sayHello } from './mymodule2';
// import * as mod from './mymodule2';
import greeting from './mymodule2.js';

// console.log(mod.person.name);

// console.log(mod.sayHello());

console.log(greeting);

// const greeting = 'Hello World';
// console.log(greeting);

// const getData = async (url) => {
//   const response = await fetch(url);
//   const result = await response.json();
//   console.log(result);
// };

// getData('https://jsonplaceholder.typicode.com/posts');