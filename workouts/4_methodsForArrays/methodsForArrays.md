




/* JS methods for Arrays */

/* Las matrices almacenan datos como elementos y 
los recuperan cuando los necesita. */
/* las matrices de JavaScript no tienen una longitud fija. 
Puede cambiar la longitud en cualquier momento 
asignando un valor numérico positivo. */












///////  map()  //////
/* tomar una matriz y aplicar algún procedimiento a sus 
elementos para obtener una nueva matriz con elementos 
modificados */

/* permite iterar sobre una matriz y modificar sus 
elementos usando una función de devolución de llamada. 
La función de devolución de llamada se ejecutará 
en cada uno de los elementos de la matriz.*/

/* Ejemplo */
/* Queremos multiplicar cada uno de los elementos de la matriz por 3. */


let arr = [3, 4, 5, 6]
console.log('original arr', arr);

///// case 1
/* Podríamos considerar usar un bucle "for" */

/* for(let i=0; i<arr.length; i++){
    arr[i] = arr[i]*3;
}

console.log('arr after for', arr); */


///// case 2
/* Con map podemos obtener el mismo resultado */

let modifiedArr = arr.map((element)=>{
    return element*3
});

console.log('modified arr', modifiedArr);

////////////////////////
/* Otro ejemplo */
/* Uso de map() sobre una matriz de objetos */

let users = [
    {firstName:"Susana", lastName:"Steward"},
    {firstName:"Daniel", lastName:"Longbottom"},
    {firstName:"Jacob", lastName:"Black"},
]


//case
/* Se puede iterar la matriz para unir los valores firstName y lastName */

let userFullNames = users.map((element)=>{
    return `${element.firstName} ${element.lastName}`;
})

console.log('userFullNames', userFullNames);



//////////////////////////

/* El map()método pasa algo más que un elemento. 
Veamos todos los argumentos pasados 
map() a la función de devolución de llamada. */

/* arr.map(function(element, index, array){  }, this); */
/* function()llama a la devolución de llamada en cada elemento 
de la matriz y el map()método siempre le pasa el elemento actual element, 
el indexdel elemento actual y todo el arrayobjeto. */

/* El argumento this se utilizará dentro de la función 
de devolución de llamada. Por defecto, su valor es undefined. 

Aquí se explica cómo cambiar el valor this al número 80: */

let arr2 = [2, 3, 5, 7];

/* arr2.map((element, index, array)=>{
    console.log("this example", this);
}, 80); */   /* arroja todo el objeto window */

arr2.map(function(element, index, array){
    console.log("element", element);
    console.log("index", index);
    console.log("array", array);
    console.log("this example", this);
    return element
}, 80);


///////  map()...  //////












