// Null Check Ternary Condiciones particulares sobre los objetos

const myObject = {
    key: "first"
}

let result = false;
if (myObject.key2){
    result = true;
}

result = myObject.key2 ? true : false;

const result2 = myObject.key2 || 'Noting';

const result3 = myObject.latLng?.lat || 'Empty';

console.log(result, result2, result3)

// Loops - Estructura de como se escribe un ciclo
// Revisar diapositivas acerca de cada uno.
// Do, While, For, Foreach

// Ejemplo foreach - Manejo con arreglos permitido

const obj ={a:1, b:2, c:3}

for(let k in obj){
    console.log(k, obj[k])
}

// REACT

// Componente: Funcionalidades 