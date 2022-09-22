// Задание 1.
// Написать функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.

const userInfo = {show:'The IT Crowd', year: 2006, country:'UK', series: 4, genre: 'sitcom'};

const printOwnProp = randomObj => {

for (let key in randomObj) {
	if (randomObj.hasOwnProperty(key)) {
		console.log(key + ':' + randomObj[key]);
	}
}
};

printOwnProp(userInfo);