const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(words);
console.log(tail(words));
console.log(assertEqual(words.length, 3)); 