let name = prompt("Как вас зовут?");
alert("Привет, "+name);

const ytd = 2024;
let year = Number(prompt("Укажите год вашего рождения"));
alert("Вам "+(ytd-year)+" лет!");

let a = Number(prompt("Укажите длинну стороны квадрата"));
alert("Периметр квадрата равен "+a*4);

const p = 3.14;
let r = Number(prompt("Укажите радиус окружности"));
alert("Площадь окружности равна "+p*(r**2));

let l = Number(prompt("Укажите расстояние межу городами в км"));
let t = Number(prompt("Укажите количество часов, за которое вы хотите добраться"));
alert("Требуемая скорость: "+(l/t)+" км/ч");

const curs = 0.90;
let usd = Number(prompt("Укажите сумму в долларах"));
alert("Ваша сумма составляет "+usd*curs+" евро");

const mb = 1024/820;
let gb = Number(prompt("Укажите объём флешки в Гб"));
alert("На вашу флешку поместится "+Math.floor(gb*mb)+" файлов по 820 Мб");

let sum = Number(prompt("Укажите сумму денег в кошельке"));
let price = Number(prompt("Укажите цену шоколадки"));
alert("Вы можете купить "+Math.floor(sum/price)+" шоколадок!\nИ даже останется "+sum%price+" денег сдачи!")

let n = Number(prompt("Введите трёхначное число"))
if (99<n && n<1000){
    alert("Ваше число в обратном порядке: "+n%10+""+Math.floor((n%100)/10)+""+Math.floor(n/100))
} else {
    alert("Ваше число не трёхзначное")
}

let nu = Number(prompt("Введите целое число"))
alert(nu%2 == 0 && "Ваше число чётное" || "Ваше число нечётное")