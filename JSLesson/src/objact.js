// let user = new Object();
/*let fruit = prompt("Введите свой любимый фрукт");


let user = {
    name: "Taiko",
    age: 27,
    english_lvl: "A1",
    having_a_cat: true,
    height: 163,
    favorite_game: "Honkai Star Rail",
    hobby: "Postcrossing",
    alive: true,
    [fruit]: "favorite",
};

console.log(user.name);
console.log(user["age"]);

// user.isAdmin = true;
// delete user.age

console.log(user);*/

let rectangle = {
    A: '1,2',
    B: '3,2',
    C: '3,1',
    D: '1,1',
};

function set_recatangle(o){
    A = prompt("Введите координаты первой точки через запятую");
    o.A = A;
    B = prompt("Введите координаты второй точки через запятую");
    o.B = B;
    C = prompt("Введите координаты третьей точки через запятую");
    o.C = C;
    D = prompt("Введите координаты четвёртой точки через запятую");
    o.D = D;
}

function recatangleinfo(o){
    alert(`Точка A: (${o.A})\nТочка B: (${o.B})\nТочка C: (${o.C})\nТочка D: (${o.D})`);
}

function w(o){
    o.w = Number(o.C[0]) - Number(o.D[0]);
    alert(`Ширина прямоугольника: ${o.w}`);
}

function h(o) {
    o.h = Number(o.A[2]) - Number(o.D[2]);
    alert(`Высота прямоугольника: ${o.h}`);
}

function s(o){
    o.w = Number(o.C[0]) - Number(o.D[0]);
    o.h = Number(o.A[2]) - Number(o.D[2]);
    alert(`Площадь прямоугольника: ${o.h*o.w}`);
}

function getPerimetr(o){
    alert(
      `Периметр равен: ${
        (Number(o.B[0]) - Number(o.A[0])) * 2 +
        (Number(o.A[2]) - Number(o.D[2])) * 2
      } `
    );
}

