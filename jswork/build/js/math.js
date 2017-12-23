document.getElementById("maxValue").addEventListener("click", function(){
  countMax("");
});

document.getElementById("minValue").addEventListener("click", function(){
  countMin("");
});

document.getElementById("wtf").addEventListener("click", function(){
  whatNum("");
});


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

function whatNum() {
  var num = (document.getElementById("bigNum").value);
  if (num > 0) {
    alert("Это число положительное " + num.length + "x-значное");
  } else if (num < 0) {
    alert("Это число отрицательное " + num.length + "x-значное");
  } else {
    alert("Это ноль");
  }
}
