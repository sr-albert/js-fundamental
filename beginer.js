// var - global scope / function scope. Have initial value of undefined
// let & const - block scope. They are not initial value of undefined
// const must be initialized during declaration

var nameVar = "John Doe";
{
    var nameVar = "Albert";
}
console.log(nameVar); // Albert


let nameLet = "John Doe";
{
    let nameLet = "Albert";

    console.log(nameLet); // Albert
}

console.log(nameLet) // John Doe


const nameConst = "Albert";
{
    const nameConst = "Join";

    console.log(nameConst); // Join 
}

console.log(nameConst) // Albert


var initialValue;
console.log(initialValue); // undefined BUT this is initial value

let noneInitialValue;
console.log(noneInitialValue); // undefined

const noneInitialValueConst = 0; // SyntaxError: Missing initializer in const declaration
console.log(noneInitialValueConst); // undefined