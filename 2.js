// Задание 2.
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false

const checkObjectProp = (randomString, randomObject) => {
	for (let key in randomObject) {
		if (key.toString() === randomString) {
			return true;
		} else {
			return false;
		}
	}
};

const userInfo = {city: 'Moscow', name: 'Ivan'};
console.log (checkObjectProp ('city', userInfo));
