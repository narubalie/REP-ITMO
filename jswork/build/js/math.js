
// Занятие 1
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
  if (num === 0) {
    alert("Ноль");
  } else if (num === 1) {
    alert("Единица");
  } else if (num === 2) {
    alert("Двойка");
  } else if (num === 3) {
    alert("Тройка");
  } else if (num === 4) {
    alert("Четвёрка");
  } else if (num === 5) {
    alert("Пятёрка");
  } else if (num === 6) {
    alert("Шестёрка");
  } else if (num === 7) {
    alert("Семёрка");
  } else if (num === 8) {
    alert("Восьмёрка");
  } else if (num === 9) {
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
  } else if (num === 2) {
    alert("Неудовлетворительно");
  } else if (num === 3) {
    alert("Удовлетворительно");
  } else if (num === 4) {
    alert("Хорошо");
  } else if (num === 5) {
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

  if (pair1 === pair2 || pair2 === pair3 || pair3 === pair1) {
    alert("Совпадение!");
  } else {
    alert("Совпадений нет.");
  }
}

document.getElementById("whatPair").addEventListener("click", function(){
  pair("");
});

// Занятие 2
// Задача №1

function comp() {
  var x = (document.getElementById("task1x").value);
  var y = (document.getElementById("task1y").value);
  var temp = 0;

  if (x < y) {
    alert("В переменной X и так наименьшее значение");
  } else if (x === y) {
    alert("Введены одинаковые значения");
  }else {
    temp = x;
    x = y;
    y = temp;

    alert("Успешно! X = " + x + ", Y = " + y);
  }
}

document.getElementById("doMin").addEventListener("click", function(){
  comp("");
});

// Задача №2

function rect() {
  var a = document.getElementById("triA").value.split([',']);
  var b = document.getElementById("triB").value.split([',']);
  var c = document.getElementById("triC").value.split([',']);

  var ab2 = Math.pow(a[0] - b[0],2) + Math.pow(a[1] - b[1],2) + Math.pow(a[2] - b[2],2);
  var bc2 = Math.pow(b[0] - c[0],2) + Math.pow(b[1] - c[1],2) + Math.pow(b[2] - c[2],2);
  var ac2 = Math.pow(a[0] - c[0],2) + Math.pow(a[1] - c[1],2) + Math.pow(a[2] - c[2],2);

  if (ab2 === bc2 + ac2 || bc2 === ac2 + ab2 || ac2 === ab2 + bc2) {
    alert("Треугольник прямоугольный");
  } else {
    alert("Треугольник не прямоугольный");
  }
}

document.getElementById("isRect").addEventListener("click", function(){
  rect("");
});

// Задача №3

function month() {
  var x = (document.getElementById("month").value);

  if (x = 12 || x >= 1 && x <= 2) {
    alert("Зима");
  } else if (x >= 3 && x <= 5) {
    alert("Весна");
  } else if (x >= 6 && x <= 8) {
    alert("Лето");
  } else if (x >= 9 && x <= 11) {
    alert("Осень");
  } else {
    alert("Нет такого месяца");
  }
}

document.getElementById("whatMonth").addEventListener("click", function(){
  month("");
});

// Задача №4

function length() {
  var num = parseInt(document.getElementById("lengthN").value);
  var lengthl = parseInt(document.getElementById("lengthL").value);

  switch (lengthl) {
    case 1:
      alert("Длина отрезка в метрах = " + num/10);
      break;
    case 2:
      alert("Длина отрезка в метрах = " + num*1000);
      break;
    case 3:
      alert("Длина отрезка в метрах = " + num);
      break;
    case 4:
      alert("Длина отрезка в метрах = " + num/1000);
      break;
    case 5:
      alert("Длина отрезка в метрах = " + num/100);
      break;
  }
}

document.getElementById("lengthMeter").addEventListener("click", function(){
  length("");
});

// Занятие 3
// Задача №1

document.getElementById("writeTable").addEventListener("click", function(){
  writeTable("");
});

function writeTable() {
  var newWindow = window.open("","","status,height=300,width=300");
  newWindow.document.write("<HTML><HEAD><TITLE>MT</TITLE></HEAD><BODY><H1 text-align='center'>multiplication table</H1>");
  newWindow.document.write("<table>");
  for(var i = 1; i < 10; i++) {
      newWindow.document.write("<tr>");
      for(var j = 1; j < 10; j++) {
          newWindow.document.write("<td>" + i*j + "</td>");
      }
      newWindow.document.write("</tr>");
  }
  newWindow.document.write("</table>");
  newWindow.document.write("</BODY></HTML>");
}

// Задача №2

document.getElementById("whatSum").addEventListener("click", function(){
  whatSum("");
});

function whatSum() {
  var x = parseInt(document.getElementById("sum").value);
  var sum = 0;
  while (x > 0) {
    sum += x % 10;
    x = Math.floor(x/10);
  }
  alert("Сумма числа " + sum);
}

// Задача №3

document.getElementById("whatSum").addEventListener("click", function(){
  whatSum("");
});

function doubleChar() {
    var textvalue = document.getElementById('textvalue').value,
        charvalue = document.getElementById('charvalue').value,
        count = parseInt(document.getElementById('count').value),
        textresult = document.getElementById('textresult'),
        inject = '';

    var regexp = new RegExp(charvalue, 'g');

    for (i=0; i < count; i++) {
        inject += charvalue;
    }

    textresult.value = textvalue.replace(regexp, inject);
}
