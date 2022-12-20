var num = 5;
var str = "Angola";
var num2 = 9;
var a = "angola"

console.log(str === a);

let array = ['string', 1, true];
console.log(array);

let array2 = ['string', 1, true, ['array', 3]];
console.log(array2);

let object = {string: 'string', number: 1, boolean: true, array: ['array'], objecto:{objecto: 'objecto'}};
console.log(object);

//if ternário

num > 0 ? console.log("número positivo") : console.log("número negativo");

// for in
for(i in object){
    console.log(i);
}

//for of
for(i of array){
    console.log(i);
}

//for of com objectos
for(i of object.string){
    console.log(i);
}

// expressões de função
var funcao = function(){
    console.log("eu sou uma função");
}
funcao();

//arrow function
var funcao1 = () => {
    console.log("sou uma arrow function");
}
funcao1();