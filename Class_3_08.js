// Desestructuracion de Arreglos - Explicacion 

Arr = [10, 20, 30]

//const x = Arr[0] - Sin Desestructuracion

// Con destructuracion de arreglos
const [ , y ,] = Arr

console.log(y)

// Desestructuracion de Arreglos con Objetos

const year = 2025

const car ={model:"ford" , year:2024}

const {model,year:año} = car

{year}

// Funciones y como declararlas

function oldRegularFunction (a,b) { // Forma tradicional - Puede redeclarar la variable (...params) -> Es un arreglo.
    return a + b
}

const newRegularFunction = function(a,b){ // Nueva Forma - Guarda la funcion en un nombre y la logica cambia y el orden queda igual
    return a + b
}

const arrowFunction = (a,b) => { // Forma de flecha - La logica sigue siendo la misma
    return a + b
}

console.log(oldRegularFunction(2, 3))
console.log(newRegularFunction(2,3))
console.log(arrowFunction(2,3))