function ejercicio(dataA,dataB){
    const FuncionPromesa = new Promise((resolve, reject) => {
        const resultado = dataA - dataB; 
        if (resultado >= 0){
            resolve(resultado)
        } else{
            reject(new Error("Hay un error"));
        }
})
return FuncionPromesa
}

ejercicio(10, 4).then(resultado => {
    console.log("Resultado de la resta:", resultado);
  })
  .catch(error => {
    console.error("Error:", error.message);
  })


const MetodoNuevo = async() =>{
    try{
        const resultado = await ejercicio(10, 11);
        console.log(resultado);
    } catch(error){
        console.log(error);
    }
} 

MetodoNuevo()








