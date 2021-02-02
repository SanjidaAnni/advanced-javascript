// Global scope //
let bonus = 20;

function sum(first, second){
    let result = first + second + bonus;
    console.log(bonus);
    return result;
}
const output = sum(3, 5);
console.log(bonus);
console.log(output);

// block scope //
A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever we see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.

// global & local scope //
JavaScript has two scopes – global and local. Any variable declared outside of a function belongs to the global scope, and is therefore accessible from anywhere in code... Because local scope in JavaScript is created by functions, it's also called function scope.
