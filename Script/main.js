// code here!!



const nombrePromesa = new Promise((resolve, reject)=>
{

var edad = parseInt(prompt('Ingresa tu edad'));
var peso = parseInt(prompt('Ingresa tu peso'));
 

setTimeout( () => peso>100 
? resolve ("Su edad es "+edad+" años,"+" y usted tiene Sobrepeso")
: reject (new Error ("Su edad es "+edad+" años")),1000)

})
nombrePromesa.then((resolve) => {
 let respuesta = document.querySelector('div')
 respuesta.innerHTML = resolve;
}).catch( (error) => {
    let respuesta = document.querySelector('div')
 respuesta.innerHTML = error;
});


