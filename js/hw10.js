// Задание 1
let auto = {
    Manufacturer: "Volvo",
    Model: "S60",
    Year: 2018,
    Speed: 110,
};

// 1. Вывод на экран информации об автомобиле
function teh(o) {
    let res = ""
    for (let i in o) {
        res+= i +" : "+ o[i] + "\n"
    }
    alert(res)
};



// 2. Подсчёт времени в пути
function time(o) {
    let n = 4;
    let s = +prompt("Ввведите расстояние, которое необходимо преодалеть в км!");
    let t = s/o.Speed;
    function elif() {
        if (t <= n){
            t = t;
        } else if (t > n){
            t += 1;
            n += 5;
            elif();
        } else {
            t = "error"
        }
    };
    elif();
    alert("\nВремя в пути: "+Math.floor(t)+" часов "+Math.floor((t-Math.floor(t))*60) +" минут "+Math.round((((t-Math.floor(t))*60)-(Math.floor((t-Math.floor(t))*60)))*60)+" секунд");
};

// Задание 2
function foo () {
    let x1 = +prompt("Задайте числитель первой дроби")
    let y1 = +prompt("Задайте знаменатель первой дроби")
    let x2 = +prompt("Задайте числитель второй дроби")
    let y2 = +prompt("Задайте знаменатель второй дроби")
    let fra1 = {
        num: x1,
        den: y1,
    };
    let fra2 = {
        num: x2,
        den: y2,
    };
};

// 5. Функция сокращения дроби
function red (o) {
    for (i = 1; i <= 1000; i++) {
        if (o.num%i == 0 && o.den%i == 0) {
            o.num = o.num/i
            o.den = o.den/i
        } else if (o.num%i != 0 || o.den%i != 0) {
            o.num = o.num
            o.den = o.den
        } else {
            o.num = "error"
            o.den = "error"
        }
    };
    alert("Результат вычисления: "+o.num+"/"+o.den);
}

// 1. Функция сложения
function sum(o1, o2) {
    let nu = o1.num*o2.den + o2.num*o1.den
    let de = o1.den*o2.den
    let res = {
        num: nu,
        den: de,
    };
    red(res)
};

// 2. Функция вычитания
function diff(o1, o2) {
    let nu = o1.num*o2.den - o2.num*o1.den
    let de = o1.den*o2.den
    let res = {
        num: nu,
        den: de,
    };
    red(res)
};

// 3. Функция умножения
function mul(o1, o2) {
    let nu = o1.num*o2.num
    let de = o1.den*o2.den
    let res = {
        num: nu,
        den: de,
    };
    red(res)
};

// 4. Функция деления
function div(o1, o2) {
    let nu = o1.num*o2.den
    let de = o1.den*o2.num
    let res = {
        num: nu,
        den: de,
    };
    red(res)
};

// Задание 3
let times = {
    hours: 5,
    minuts: 15,
    seconds: 50, 
};

function t (o) {
    alert("Заданное время: "+o.hours+" часов "+o.minuts+" минут "+o.seconds+" секунд.")
};

function secon (times) {
    let s = +prompt("Укажите количество секунд, на которое необходимо произвести изменение")
    let fun = prompt("Укажите -, если секунды нужно отнять, или +, если прибавить")
    if (fun == "-") {
        if ((times.seconds - s)<0 && (times.seconds - s)>=(-60)) {
            times.minuts = times.minuts - 1
            times.seconds = 60+(times.seconds - s)
        } else if ((times.seconds - s)<0 && (times.seconds - s)<(-60)) {
            times.minuts = times.minuts + Math.ceil((times.seconds - s)/60) - 1
            times.seconds = 60+((times.seconds - s)%60)
            if (times.minuts<0) {
                times.hours = times.hours + Math.ceil(times.minuts/60) - 1
                times.minuts = 60+(times.minuts%60)
            }
        } else if ((times.seconds - s)>=0) {
            times.seconds = times.seconds - s
        }
    } else if (fun == "+") {
        if ((times.seconds + s)>=(60)) {
            times.minuts = times.minuts + Math.floor((times.seconds + s)/60)
            if ((times.seconds + s)==(60)) {
                times.seconds = 0
            } else {
                times.seconds = ((times.seconds + s)%60)
            }
            if (times.minuts >=60){
                times.hours = times.hours + Math.floor(times.minuts/60)
                times.minuts = (times.minuts%60)
            } if (times.minuts == 60) {
                times.minuts = 0
            } else {
                times.minuts = times.minuts
            }
        } else if ((times.seconds + s)<(60)) {
            times.seconds = times.seconds + s
        }
    }
    alert("Итоговое время: "+times.hours+" часов "+times.minuts+" минут "+times.seconds+" секунд.")
}
