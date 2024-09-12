//alert("Hello from JavaScript!")
//confirm("Согласны? Узнали?")
// alert("Укажите вашеи имя")

// let ans;
// ans = prompt("Укажите вашеи имя");
// alert("Ваше имя - " + ans);

// let ans;
// ans = prompt("Ведите код операции");
// if (ans == '6453'){
//     alert("Молодец! Правильный ответ");
// }
// else{
//     alert("Код неверный! Не молодец ;с");
//     location.reload();
// }

// let x;
// x = prompt("Введите число");
// x = Number(x);
// alert("Ваше число в квадрате: " + x ** 2);

// let x, y, s;
// x = prompt("Введите 1 число");
// y = prompt("Введите 2 число");
// x = Number(x);
// y = Number(y);
// s = (x+y)/2;
// alert("Среднее орифметическое ваших чисел: " + s);

// 0.621371

// const mile = 0.621371;
// let km = Number(prompt("Введите значение в км"));
// alert("В милях: " + km * mile + " миль");

/*let x = prompt("Введите пятизначное число:");
let last = x.slice(4);
let res = last + x.slice(0,4);
alert("Ваше число: " + res)*/

// let x = Number(prompt("Введите первое число"));
// let y = Number(prompt("Введите второе число"));
// alert("Сумма: "+ (x+y) + "\nРазность: " + (x-y) + "\nПроизведение: "+ x*y + "\nДеление: "+ x/y)

// window.onload = function () {
//     function foo(){
//         const k = 2.548;
//         let a = Number(prompt("Введите первое число"));
//         let x = Number(prompt("Введите второе число"));
//         alert("y=kx+ax2\nk="+k+"\nx="+x+"\na="+a+"\ny="+k+"*"+x+"+"+a+"*"+x*x+"\ny="+(k*x+a*(x**2)));
//     }
//     foo();
// }

function calc(a, b, operation){
    if (operation == "+") {
      return a + b;
    } else if (operation == "-") {
      return a - b;
    } else if (operation == "*") {
      return a * b;
    } else if (operation == "/") {
      if (b==0){
        return "Делить на ноль нельзя!";
      } else {
        return a / b;
      }
    } else {
        return "Неизвестная операция. Попробуйте ещё раз";
    }
}

// window.onload = ()=> {
//     let x = Number(prompt("Введите первое число"));
//     let y = Number(prompt("Введите второе число"));
//     let op = prompt("Введите тип операции (+,-,*,/)");
//     let res = calc(x, y, op);
//     alert("Результат вашей операции: "+ res);
// }

function calcPaS() {
    let x = Number(document.getElementsByName("nam1")[0].value);
    let y = Number(document.getElementsByName("nam2")[0].value);
    let op = document.getElementsByName("operation")[0].value;
    let res = calc(x, y, op);
    alert("Результат операции: " + res);
}

window.onload = ()=> {
    let buttonCalc = document.getElementById("calculate");
    buttonCalc.addEventListener("click", calcPaS);
}