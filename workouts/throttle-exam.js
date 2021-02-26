// tenemos una funcion logger que imprime el texro en consola
// la función es llamada muchas veces
// se quiere bloquear la llamada de la funcion por 200ms

// una forma

/* const logger = (text) => console.log(text);

logger("hello");

logger("world");

logger("today");

logger("is");

setTimeout(() => {
  logger("friday");
}, 200); */

//Ahora, para bloquear la llamada, el setTimeOut sería suficiente
// se podría asginar su existencia a una variable, para verificar
//si esta corriendo el tiempo y evitar ejecutar la funcion en caso de que sea llamada

const throttle = (fn, delay) => {
  let timeout = undefined;

  return (...args) => {
    if (!timeout) {
      timeout = setTimeout(() => {
        fn(...args);
        timeout = undefined;
      }, delay);
    }
  };
};


const logger = (text) => console.log(text);

const throttledLogger = throttle(logger, 200);

throttledLogger("hello");

throttledLogger("world");

throttledLogger("today");

throttledLogger("is")

setTimeout(()=>{
    throttledLogger("friday");
},200)