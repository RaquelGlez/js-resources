
///////  map()  //////

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

/* Aquí se explica cómo cambiar el valor this al número 80: */

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












