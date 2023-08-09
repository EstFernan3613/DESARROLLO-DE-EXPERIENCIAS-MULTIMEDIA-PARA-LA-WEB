// Homework - Research and use all array functions - Proyecto para GIT - JEFC 2/08

// Antes de iniciar, se crea el Array para las pruebas de las funciones

const myArray = [1, 2, 3, 4, 5];

// 1: Length: Permite retornar la cantidad de elementos de un arreglo.

console.log(myArray.length); // Output: 5

// 2: At: Recibe un valor numérico entero y devuelve el elemento en esa posición.

let index = 2;

console.log(myArray.at(index)); // Output: 3

let indexA = 4;

console.log(myArray.at(indexA)); // Output: 5

// 3: Concat: se usa para unir dos o más arrays.

const myArrayB = [6, 7, 8];
const myArrayC = myArray.concat(myArrayB);

console.log(myArrayC); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// 4: Constructor: Se utiliza para crear objetos Array.






