function ejercicio(dataA,dataB){
    const FuncionPromesa = new Promise((resolve, reject) => {
        const resultado = dataA - dataB; 
        if (resultado >= 0){
            resolve(resultado)
        } else{
            reject(new Error("La resta de los dos digitos da un numero negativo"));
        }
})
return FuncionPromesa
}

ejercicio(10, 2).then(resultado => {
    console.log("Resultado de la resta:", resultado);
  })
  .catch(error => {
    console.log(error);
  })


const MetodoNuevo = async() =>{
    try{
        const resultado = await ejercicio(10, 2);
        console.log("Resultado de la resta:", resultado);
    } catch(error){
        console.log(error);
    }
}

MetodoNuevo()








