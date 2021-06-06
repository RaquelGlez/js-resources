
/* JS methods for Arrays */

/* Las matrices almacenan datos como elementos y 
los recuperan cuando los necesita. */
/* las matrices de JavaScript no tienen una longitud fija. 
Puede cambiar la longitud en cualquier momento 
asignando un valor numérico positivo. */

/* Crear un array */
/* Asignar a una variable un valor de array */
let salad = ["tomato", "mushroom", "broccoli", "corn", "carrot", "avocado"];

/* Utilizar el constructor Array */
const saladC = new Array("tomato", "mushrooms", "broccoli", "corn", "carrot", "avocado")
console.log("saladC", saladC);


/* Crear un array de longitud 2, con ninguno de los 
elementos definidos en ella  */
const arrayConst = new Array(2)
console.log("arrayConst", arrayConst);


/* Crear un array de longitud 2, con los elementos 8,9 en ella */
const arrayConst2 = new Array(8,9)
console.log("arrayConst2", arrayConst2);


/* Se puede acceder a los elementos del array, hacia atras,
utilizando su tamaño */
const lenSalad = salad.length;
console.log("salad[]", salad[lenSalad - 3]);

/* Se puede recorrer, utilizando un bucle for o un forEach */
for(let i=0; i<salad.length; i++){
    console.log(`Element at index ${i} is ${salad[i]} `);
}


/* Agregar elementos al array */
/* Utilizar método push(). Lo agregara al final del array */
salad.push("peanuts");
console.log("salad - push", salad);

/* Para agregar el elemento al principio del array, utilizamos unshift() */
salad.unshift("peanuts");
console.log("salad - unshift", salad);


/* Eliminar elementos del array */
/* Para eliminar un solo elemento, utilizamos pop(), este eleimina
el elemento del final. El método devuelve el elemento eliminado y 
cambia el array original */
salad.pop()
console.log("salad - pop", salad);

/* shift() elimina el elemento del principio. Devuelve el elemento eliminado 
y camabia el array original */
salad.shift();
console.log("salad - shift", salad);


/* Copiar y clonar un array */
/* Método slice(). Este no cambia el array original, crea una copia superficial */
const saladCopy = salad.slice();
console.log("saladCopy", saladCopy);
console.log("comp copy", salad===saladCopy);


/* Determinar si un valor es un array */
/* Método Array.isArray, devuelve true si el valor pasado es un array */
console.log("is array",Array.isArray(salad));
console.log("is array",Array.isArray("tomato"));
console.log("is array",Array.isArray({'tomato':"tomate"}));
console.log("is array",Array.isArray([]));


/* Desestructuración de arrays */
/* Sintaxis que permite extraer multiples propiedades
de una matriz y asignarlas a una variable de una sola vez */
//let [tomato, mushroom, broccoli] = ["tomato", "mushroom", "broccoli"];
//console.log("salad desestr",tomato, mushroom, broccoli);


/* Asignar un valor prederterminado a una variable */
//let [tomato, mushroom="hongo"] = ["tomato"];
//console.log("salad predetr",tomato, mushroom);


/* Omitir el valor de una array */
/* Se puiede omitir o saltarse un valor  */
//let [tomato, , carrot] = ["tomato1", "mushroom1", "carrot1"];
//console.log("salad omt",tomato, carrot);


/* Desestructuracion de arrays anidados */
/* El anidamiento de arrays puede llegar a cualquier profundidad */
let fruits = ["lemon", "pineapple", "banana", "watermelon", ["tomato", "mushroom", "carrot"]]
/* Para acceder al elemento "carrot" */
const veg = fruits[4];
console.log("veg", veg);
const carrot = veg[2];
console.log("carrot", carrot);

/* o bien */
const carrotDst = fruits[4][2]
console.log("carrotDst", carrotDst);

/* La desestructuracion tambien se puede emplear como */
let [,,,,[,,carrot2]] = ["lemon", "pineapple", "banana", "watermelon", ["tomato", "mushroom", "carrot"]]
console.log("carrot2", carrot2);


/* Sintaxis de propagación y el parametro Rest */

/* Para el parametro rest, ... van a la izquierda de la sint. de desestructuracion. */
/* Con Rest Parameter se pueden mapear los elementos de la izquierda 
de un array en un nuevo array. El parametro rest debe ser la ultima
variable en la sintaxis de desestructuración */
/* La variable rest es un nueva matriz que contiene los elementos sobrantes */
const [tom, mush, ...rest] = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
console.log("tom_res", tom);
console.log("mush_res", mush);
console.log("rest-res", rest);

/* Para la sintaxis de propagación ... van a la derecha de la sint. de desestruc.  */
/* Podemos crear un clon/copia de un array existente */
const saladCloned = [...salad];
console.log("saladCloned", saladCloned);
console.log("comp-clon", salad === saladCloned);


/* Desestructuración de casos de uso */
/* Intercambiar valores con la desestructuracion */
//let first = '😔';
//let second = '🙂';
//[first, second] = [second, first];

//console.log(first); 
//console.log(second); 


/* Fusionar arrays */
const emotion = ['🙂', '😔'];
const veggies = ['🥦', '🥒', '🌽', '🥕'];


const emotionalVeggies = [...emotion, ...veggies]
console.log("emotionalVeggies", emotionalVeggies);


/* Otros metodos para modificar arrays */

/*--- concat() ---*/
/* concat() fusiona una o mas arrays y la devuelve.
Es un método inmutable, es decir no cambia los arrays existentes */
const first = [1, 2, 3];
const second = [4, 5, 6];
const mergedFS = first.concat(second);

console.log("first", first, "second", second);
console.log("mergedFS", mergedFS);
/* se pueden fusionar cualquier numero de arrays
array.concat(arr1, arr2,..,..,..,arrN); */



/*--- join() ---*/
/* Une todos los elementos del array usando un separador y devuelve una cadena */
const emotions = ['🙂', '😍', '🙄', '😟'];
let joined = emotions.join();
console.log("joined", joined);

/* se puede pasar un separador */
joined = emotions.join('<=>');
console.log("joined-sep", joined);

/* invocar join en un array vacio, devuelve una cadena vacia */
console.log("join-v", [].join());



/*--- fill() ---*/
/* fill() llena un array con un valor estático.
Puede cambiar todos los elementos a un valor estatico, 
o cambiar solo algunos seleccionados.
Cambia el array original */
const colors = ["red", "blue", "green"];
//console.log("colors-fill", colors.fill("pink"));

/* Para cambiar solo algunos elementos, se indica el valor con el que se cambia
el indice de inicio que se va a cambiar, el indice donde se 
deja de llenar */
console.log("colors-fill-partial", colors.fill("pink", 1,3));



/*--- includes() ---*/
/* Para determinar la presencia de un elemento en el array.
Si se encuentra el elemento devuelve true, de lo contrario false */
const names = ["tom", "alex", "bob", "john"];
console.log("names", names);
console.log("includes-nom1", names.includes("tom"));
console.log("includes-nom2", names.includes("july"));



/*--- indexOf() ---*/
/* Para conocer la posicion del indice de un elemento en el array.
Devuelve el indice de la primera aparición del elemento.
Si no lo encuentra, devuelve -1 */
console.log("indexOf-nam1", names.indexOf("alex"));
console.log("indexOf-nam2", names.indexOf("rob"));

/* con el metodo lastIndexOf() encontramos el indice de la ultima aparicion de un elemento */



/*--- reverse() ---*/
/* reverse() invierte las posiciones de los elementos en el array, 
para que el ultimo elemento vaya a la primera posicion y el primero a la ultima.
Modifica el array original */
console.log("reverse-nam", names.reverse());



/*--- sort() ---*/
/* El metodo predeterminado convierte los tipos de elementos en cadenas y luego los ordena.
El orden predeterminado es ascendente. Cambia la matriz original.
Hace la comparacion en funciona de los valores UTF-16 */
console.log("sort-nam", names.sort());

/* sort acepta una funcion de comparacion opcional como argumento,
para cambiar, por ejemplo el predeterminado orden ascendente */



/*--- splice() ---*/
/* Permite agregar, actualizar y eliminar elementos del array.
El proposito principal del metodo es eliminar. Devuelve una matriz de los
elementos eliminados. Modifica el array original*/

/* Para agregar elementos usando splice, se debe indicar la posicion dende se quiere
agregar, cuantos elementos eliminar comenzando con la posición y el elemento a agregar */

/* Agregar, sin eliminar */
names.splice(1, 0, "zack")
console.log("splice-names", names);

/* Agregar eliminado un elemento */

const deletedName = names.splice(2, 1, "zackB")
console.log("deletedName", deletedName);
console.log("names-deleted", names);



/*--- Métodos estaticos de array ---*/
/* Array.from() */
/* Convierte un objeto similar en un array, para poder utilizar metodos de array en el */
// const collection = Array.from(document.getElementsByTagName('li'))


/* Array.of() */
/* Crea un nuevo array utilizando cualquier nuemro de elementos,
de cualquier tipo */
console.log("Array.of", Array.of(2, false, 'test', {'name': 'Alex'}))



/*--- Métodos para iterar arrays ---*/
let students = [
    {
       'id': 001,
       'f_name': 'Alex',
       'l_name': 'B',
       'gender': 'M',
       'married': false,
       'age': 22,
       'paid': 250,  
       'courses': ['JavaScript', 'React']
    },
    {
       'id': 002,
       'f_name': 'Ibrahim',
       'l_name': 'M',
       'gender': 'M',
       'married': true,
       'age': 32,
       'paid': 150,  
       'courses': ['JavaScript', 'PWA']
    },
    {
       'id': 003,
       'f_name': 'Rubi',
       'l_name': 'S',
       'gender': 'F',
       'married': false,
       'age': 27,
       'paid': 350,  
       'courses': ['Blogging', 'React', 'UX']
    },
    {
       'id': 004,
       'f_name': 'Zack',
       'l_name': 'F',
       'gender': 'M',
       'married': true,
       'age': 36,
       'paid': 250,  
       'courses': ['Git', 'React', 'Branding']
    } 
 ];


/* Los metodos para iterar toman una funcion como argumento.
Se debe especificar la logica para iterar y aplicar esa funcion */


/* --- filter() ---*/
/* Crea un nuevo array con todos los elementos que satisfacen la coondicion
mencionada en la funcion */
/* exam. buscar al estudiante que es mujer */
const femaleStudents = students.filter((element, index) => {
   return element.gender === "F";
});

console.log("femaleStudents", femaleStudents);



/* --- map() ---*/
/* Crea un nuevo array iterando a través de los elementos y aplicando
la logica de la funcion  */
/* exam. crear array con nombres completos de los estudiantes */
const fullNames = students.map((element, index) => {
   return {'fullName': element['f_name']+' '+element['l_name']}
});

console.log("fullNames", fullNames);
/* Asegúrese siempre de que su devolución de llamada contenga la declaración return */


/* --- reduce() ---*/
/* Aplica una funcion "reductora" en cada uno de los elementos del array 
y devuelve un valor de salida. */
/* exam. calcular la cantidad total pagada por todos los estudiantes */
const totalPaid  = students.reduce(
   (accumulator, student, currentIndex, array) => {
      accumulator = accumulator + student.paid;
      return (accumulator);
   },
0)

console.log("totalPaid", totalPaid);
/* Se inicializo el contador en 0, se aplico reduce a cada objeto del alumno, se devolvio el acumulado */



/* --- some() ---*/
/* Devuelve un valor boleano, basado en al menos un elemento del array que pasa
la condicion en la funcion */
/* exam. revisar si hay estudiantes menores de 30 años */
let hasStudentBelow30 = students.some((element, index) => {
   return element.age < 30;
})

console.log("hasStudentBelow30", hasStudentBelow30);



/* --- find() ---*/
/* Devuelve el primer elemento coincidente del array que satisface la condicion 
de la función.
Otro método relacionado es findIndex(), que devuelve el indice del elemento que encontramos usando find().
Si ningun elemento coincide con la condicion, findIndex() devuelve -1 */
/* exam. buscamos alumnos < de 30a */
let studentFind = students.find((element, index) => {
   return element.age < 30;
});

console.log("studentFind", studentFind);
/* Devuelve el alumno emparejado cuando se cumple la condición. */



/* --- every() ---*/
/* Detecta si cada elemento del array satisface la condicion pasada en la funcion. */
/* exam. comprobar si los estudiantes se han inscrito en al menos dos cursos */

const atLeastTwoCourses = students.every((elements, index) => {
   return elements.courses.length >= 2;
})

console.log("atLeastTwoCourses", atLeastTwoCourses);



/* metodo propuesto: at() */
/* Ayudaría a acceder a los elementos de una matriz utilizando un número de índice negativo */




/* Exam- 
1. Recoger dos días de tareas.
2. Convertir las duraciones de las tareas en horas, en lugar de minutos.
3. Filtrar todo lo que tomó dos horas o más.
4. Sumar todo.
5. Multiplique el resultado por una tarifa por hora para facturación.
6. Produce una cantidad formateada en dólares. */

const monday = [
   {
       'name': 'Write a tutorial',
       'duration': 180
   },
   {
       'name': 'Some web development',
       'duration': 120
   }
];

const tuesday = [
   {
       'name': 'Keep writing that tutorial',
       'duration': 240
   },
   {
       'name': 'Some more web development',
       'duration': 180
   },
   {
       'name': 'A whole lot of nothing',
       'duration': 240
   }
];

let tasks = [monday, tuesday];


/* Concatenar nuestra matriz 2D en una sola lista */
/* let result = tasks.reduce((acc, current) => {
   return acc.concat(current)
}) */
/* Extraer la duración de la tarea, y convertir los minutos en horas */
/* .map((task) => {
   return task.duration / 60
}) */
/* Filtrar cualquier tarea que haya durado menos de dos horas */
/* .filter((duration) => {
   return duration >= 2
}) */
/* Multiplicar la duración de cada tarea por nuestra tarifa horaria */
/* .map((duration) => {
   return duration * 25
}) */
/* Combinar las sumas en un único importe en dólares */
/* .reduce((acc, current) => {
   return [(+acc) + (+current)]
}) */
/* Convertirlo en una cantidad de dólares "bien impresa". */
/* .map((amount) => {
   return ('$' + amount.toFixed(2))
}) */
/* Obtener el único elemento de la matriz que obtuvimos del mapa */
/* .reduce((formattedAmount) => {
   return formattedAmount
}) */

let result = tasks.reduce((acc, current) => acc.concat(current))
               .map((task) => task.duration/60)
               .filter((duration) => duration >= 2)
               .map((duration) => duration * 25)
               .reduce((acc, current) => [(+acc) + (+current)])
               .map((amount) => '$' + amount.toFixed(2))
               .reduce((formattedAmount) =>formattedAmount)


console.log("result tasks", result);









