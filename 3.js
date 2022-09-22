// Задание 3.
// Написать функцию, которая создает пустой объект, но без прототипа.

const createNewObj = () => Object.create(null);

// ПРОВЕРКА :
let randomObj = createNewObj ();
console.log (`Type: ${typeof randomObj}, prototype: ${Object.getPrototypeOf(randomObj)}`);

// добавление данных в объект:
randomObj.city = 'Moscow';
console.log (randomObj.city);