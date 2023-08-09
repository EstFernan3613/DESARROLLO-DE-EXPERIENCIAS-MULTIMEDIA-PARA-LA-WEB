// Imports and Exports

//animals.js - Tiene que estar en la misma carpeta padre

export const animals = [
    {
        breed: 'Canine',
        name: 'Angel'
    },
]

//import {animals} from "./animals"; - Este import se utiliza cuando el export viene de otro archivo

console.log(animals)

// Promises 

// Es una tarea, va a futuro, y cuando se realiza, puede resolverse o no
// Cada una tira diferentes datos, dependiendo si se cumplio o no

const promesa = new Promise((resolve, reject) => {
    /// TODO
    resolve(); // If promise is OK
    reject(); // If promise is Fails

});

promesa.then((data) =>{ // Invocacion
    console.log(data)
}).catch(err =>{
    console.log(err)
});

const getPromesa = () => { // 
    return new Promise((resolve, reject) => {
        resolve('Hello World');
    })
}

getPromesa()
.then(data => {
    console.log(data)
})
.catch(error => {
    console.error(error)
});

const getPromesaNew = () => { // 
    return new Promise((resolve, reject) => {
        reject('Internal Error');
    })
}

getPromesaNew()
.then( data => {
    console.log(data)
})
.catch( error => {
    console.log(error) // Tambien console.error para dar en consola ( Tal Vez)
});

// Async - Await Habilita mi codigo de forma asincrona - Permite un codigo mas limpio ( Mirar Diapositivas )

