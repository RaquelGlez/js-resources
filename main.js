// Binary Search

// Tener una lista ordenada
// el mínimo, inicia en el indice 0
// el maximo es el length de la lista - 1
// el pivote es el punto medio entre los rangos min y max

/* const binarySearch = (list, toFind) => {
    let min = 0;
    let max = list.length -1;
    let pivot;
} */

//con un while buscamos que min y max se encuentren
// al inicio de cada ciclo, calculamos el punto medio de min y max

/* const binarySearch = (list, toFind) => {
    let min = 0;
    let max = list.length -1;
    let pivot;

    while(min <= max){
        pivot = Math.floor((min+max)/2);
        const num = list[pivot]
    }
} */

// si el número que se encuentra en este ciclo es menor al número a buscar
//reducimos max, lo que va a descartar la lista a la derecha

//Si es menor, incrementamos min y se descarta la lista a la izquierda

const binarySearch = (list, toFind) => {
  let min = 0;
  let max = list.length - 1;
  let pivot;

  while (min <= max) {
    pivot = Math.floor((min + max) / 2);
    const num = list[pivot];
    console.log("es el resultado?", list[pivot]);

    if (toFind === num) {
      console.log("pivot", pivot);
      return pivot;
    }

    if(toFind < num){
        max--;
    }

    if(toFind > num){
        min++;
    }
  }
};


const list = [23, 36, 3, 5, 9, 10, 15, 73, 54, 91];
const sortedList = list.sort((a, b) => {
  return a - b;
});

console.log('sortedList',sortedList);

binarySearch(sortedList, 36);

