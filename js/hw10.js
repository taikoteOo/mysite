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
    alert("\nВремя в пути: "+Math.floor(t)+" часов "+Math.floor((t-Math.floor(t))*60) +" минут");
};

// Задание 2
let fra1 = {
        num: 0,
        den: 0,
};
let fra2 = {
        num: 0,
        den: 0,
};
function foo (o) {
    o.num = +prompt("Задайте числитель дроби")
    o.den = +prompt("Задайте знаменатель дроби")
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
    if (o.num==o.den) {
        alert("Результат вычисления: 1")
    } else if (o.num == 0) {
        alert("Результат вычисления: 0")
    } else {
        alert("Результат вычисления: "+o.num+"/"+o.den);
    }
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
  hours: 0,
  minuts: 0,
  seconds: 0, 
};
function timese(o) {
    o.hours = +prompt("Задайте количество часов");
    o.minuts = +prompt("Задайте количество минут");
    o.seconds = +prompt("Задайте количество секунд");
}

// 1. Функция вывода времени на экран
function t(o) {
    alert("Заданное время: "+o.hours+" часов "+o.minuts+" минут "+o.seconds+" секунд.")
};

// 2. Функция изменения времени на определённое количество секунд
function secon(o) {
    let s = +prompt("Укажите количество секунд, на которое необходимо произвести изменение")
    let fun = prompt("Укажите -, если секунды нужно отнять, или +, если прибавить")
    if (fun == "-") {
        o.seconds = o.seconds - s
        if (o.seconds<0) {
            o.minuts = o.minuts + Math.floor(o.seconds/60)
            o.seconds = Math.floor(o.seconds/60)*(-60) + o.seconds
            if (o.minuts<0) {
                o.hours = o.hours + Math.floor(o.minuts/60)
                o.minuts = Math.floor(o.minuts/60)*(-60) + o.minuts
                if (o.hours < 0) {
                    o.hours = 0;
                    o.minuts = 0;
                    o.seconds = 0;
                    alert ("Не ступай на путь отрицательного времпени!")
                }
            }
        }
    } else if (fun == "+"){
        o.seconds = o.seconds + s
        if (o.seconds>=60){
            o.minuts = o.minuts + Math.floor(o.seconds/60)
            o.seconds = o.seconds - Math.floor(o.seconds/60)*(60)
            if (o.minuts>=60) {
                o.hours = o.hours + Math.floor(o.minuts/60)
                o.minuts = o.minuts - Math.floor(o.minuts/60)*(60)
                if (o.hours>=24) {
                    alert("Мы выходим за рамки суток, дальше только бесконечность!")
                }
            }
        }
    }
    alert("Итоговое время: "+o.hours+" часов "+o.minuts+" минут "+o.seconds+" секунд.")
}

// 3. Функция изменения времени на определённое количество минут
function min(o) {
    let m = +prompt("Укажите количество минут, на которое необходимо произвести изменение")
    let fun = prompt("Укажите -, если минуты нужно отнять, или +, если прибавить")
    if (fun == "-") {
        o.minuts = o.minuts - m
        if (o.minuts<0) {
            o.hours = o.hours + Math.floor(o.minuts/60)
            o.minuts = Math.floor(o.minuts/60)*(-60) + o.minuts
            if (o.hours < 0) {
                o.hours = 0;
                o.minuts = 0;
                o.seconds = 0;
                alert ("Не ступай на путь отрицательного времпени!")
            }
        }
    } else if (fun == "+"){
        o.minuts = o.minuts + m
        if (o.minuts>=60) {
            o.hours = o.hours + Math.floor(o.minuts/60)
            o.minuts =o.minuts - Math.floor(o.minuts/60)*(60)
            if (o.hours>=24) {
                alert("Мы выходим за рамки суток, дальше только бесконечность!")
            }
        }
    }
    alert("Итоговое время: "+o.hours+" часов "+o.minuts+" минут "+o.seconds+" секунд.")
}

// 3. Функция изменения времени на определённое количество часов
function hor(o) {
    let h = +prompt("Укажите количество часов, на которое необходимо произвести изменение")
    let fun = prompt("Укажите -, если часы нужно отнять, или +, если прибавить")
    if (fun == "-") {
        o.hours = o.hours - h
        if (o.hours < 0) {
            o.hours = 0;
            o.minuts = 0;
            o.seconds = 0;
            alert ("Не ступай на путь отрицательного времпени!")
        }
    } else if (fun == "+"){
        o.hours = o.hours + h
        if (o.hours>=24) {
            alert("Мы выходим за рамки суток, дальше только бесконечность!")
        }
    }
    alert("Итоговое время: "+o.hours+" часов "+o.minuts+" минут "+o.seconds+" секунд.")
}
