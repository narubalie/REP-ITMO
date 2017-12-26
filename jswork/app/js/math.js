
// Задача №1

function countMax() {
  var arr = [(document.getElementById("a").value),
            (document.getElementById("b").value),
            (document.getElementById("c").value)]
  console.log(arr);
  alert("Максимальное значение " + Math.max.apply( Math, arr ));
}

function countMin() {
  var arr = [(document.getElementById("a").value),
            (document.getElementById("b").value),
            (document.getElementById("c").value)]
  console.log(arr);
  alert("Минимальное значение " + Math.min.apply( Math, arr ));
}

document.getElementById("maxValue").addEventListener("click", function(){
  countMax("");
});

document.getElementById("minValue").addEventListener("click", function(){
  countMin("");
});

// Задача №2

function whatNum() {
  var num = (document.getElementById("bigNum").value);
  if (num > 0) {
    alert("Это число положительное " + num.length + "x-значное");
  } else if (num < 0) {
    alert("Это число отрицательное " + (num.length - 1) + "x-значное");
  } else {
    alert("Это ноль");
  }
}

document.getElementById("wtf").addEventListener("click", function(){
  whatNum("");
});

// Задача №3

function whatNumName() {
  var num = (document.getElementById("whatNum").value);
  if (num == 0) {
    alert("Ноль");
  } else if (num == 1) {
    alert("Единица");
  } else if (num == 2) {
    alert("Двойка");
  } else if (num == 3) {
    alert("Тройка");
  } else if (num == 4) {
    alert("Четвёрка");
  } else if (num == 5) {
    alert("Пятёрка");
  } else if (num == 6) {
    alert("Шестёрка");
  } else if (num == 7) {
    alert("Семёрка");
  } else if (num == 8) {
    alert("Восьмёрка");
  } else if (num == 9) {
    alert("Девятка");
  } else {
    alert("Введено неверное число");
  }
}

document.getElementById("whatNumText").addEventListener("click", function(){
  whatNumName("");
});

// Задача №4

function Score() {
  var num = (document.getElementById("numScore").value);
  if (num == 1) {
    alert("Плохо");
  } else if (num == 2) {
    alert("Неудовлетворительно");
  } else if (num == 3) {
    alert("Удовлетворительно");
  } else if (num == 4) {
    alert("Хорошо");
  } else if (num == 5) {
    alert("Отлично");
  } else {
    alert("Введено неверное число");
  }
}

document.getElementById("textScore").addEventListener("click", function(){
  Score("");
});

// Задача №5

function pair() {
  var pair1 = (document.getElementById("pair1").value);
  var pair2 = (document.getElementById("pair2").value);
  var pair3 = (document.getElementById("pair3").value);

  if (pair1 == pair2 || pair2 == pair3 || pair3 == pair1) {
    alert("Совпадение!");
  } else {
    alert("Совпадений нет.");
  }
}

document.getElementById("whatPair").addEventListener("click", function(){
  pair("");
});
