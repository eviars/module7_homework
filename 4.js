// Задание 4.
// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 
// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// План:
//	Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
//	Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
//	У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
//	Создайте экземпляры каждого прибора.
//	Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)


function ElectricDevices(name, power) {
	this.name = name;
	this.power = power;
	this.pricePerHour = power * 6.2/1000;
	this.isPlugged = false;
}

// метод, который определяет прибор как включенный в розетку
ElectricDevices.prototype.plugIn = function () {
	console.log(`${this.name} is plugged! Power consumption is ${this.power} W`);
	this.isPlugged = true;
};

// метод, который определяет прибор как выключеный из розетки
ElectricDevices.prototype.unplug = function () {
	console.log(`${this.name} is unplugged!`);
	this.isPlugged = false;
};

// метод, который определяет стоимость электроэнергии включенного прибора в зависимости от количества часов
ElectricDevices.prototype.totalPrice = function (hour) {
	this.isPlugged = true;
	console.log (`Total price of ${this.name} plugged for ${hour} hours is ${(this.pricePerHour * hour).toFixed(2)} rub`);
};

// создаем подкласс кухонной техники
function KitchenAppliance (name, power) {
	this.name = name;
	this.power = power;
	this.room = 'kitchen';
	this.pricePerHour = power * 6.2/1000;
}

KitchenAppliance.prototype = new ElectricDevices();

// меняем метод включенного прибора для кухонной техники
KitchenAppliance.prototype.plugIn = function () {
	console.log(`${this.name} in ${this.room} is plugged! Power consumption is ${this.power} W`);
	this.isPlugged = true;
};

// вводим приборы
const myRefrigerator = new KitchenAppliance ("refrigerator", 200);
const myMicrowave = new KitchenAppliance("microwave", 1270);
const myTv = new ElectricDevices ("TV", 55);
const myComputer = new ElectricDevices ("computer", 180);

// проверка методов
myRefrigerator.plugIn();
myComputer.plugIn();
myTv.totalPrice(8);
myComputer.totalPrice(8);
KitchenAppliance.prototype.totalPrice.call(myRefrigerator,8);
myMicrowave.unplug();