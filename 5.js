// Задание 5.
// Переписать консольное приложение из предыдущего юнита на классы.

class ElectricDevices {
	constructor(name, power) {
	this.name = name;
	this.power = power;
	this.pricePerHour = power * 6.2/1000;
	this.isPlugged = false;
}

	// метод, который определяет прибор как включенный в розетку
plugIn() {
	console.log(`${this.name} is plugged! Power consumption is ${this.power} W`);
	this.isPlugged = true;
}

// метод, который определяет прибор как выключеный из розетки
unplug() {
	console.log(`${this.name} is unplugged!`);
	this.isPlugged = false;
}

// метод, который определяет стоимость электроэнергии включенного прибора в зависимости от количества часов
totalPrice(hour) {
	this.isPlugged = true;
	console.log (`Total price of ${this.name} plugged for ${hour} hours is ${(this.pricePerHour * hour).toFixed(2)} rub`);
}
}

// создаем подкласс кухонной техники
class KitchenAppliance extends ElectricDevices {
	constructor(name, power) {
	super(name,power);
	this.room = 'kitchen';
}

// меняем метод включенного прибора для кухонной техники
plugIn() {
	console.log(`${this.name} in ${this.room} is plugged! Power consumption is ${this.power} W`);
	this.isPlugged = true;
}
}

// вводим приборы
const myRefrigerator = new KitchenAppliance ("refrigerator", 200);
const myMicrowave = new KitchenAppliance("microwave", 1270);
const myTv = new ElectricDevices ("TV", 55);
const myComputer = new ElectricDevices ("computer", 180);

// проверка методов
myRefrigerator.plugIn();
myComputer.plugIn();
myTv.totalPrice(8);
myMicrowave.totalPrice(8);
myComputer.totalPrice(8);
myMicrowave.unplug();
myTv.unplug();