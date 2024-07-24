// closuresss
function z() {
  var b = 900;

  function x() {
    var a = 7;

    function y() {
      // console.log(a, b);
    }
    y();
  }
  x();
}
z();

// setTimeout 
// with let
function a() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      // console.log(i);
    }, i * 1000);
  }
  console.log("Hello Kanchan");
}
a();
// let allows -> call back function forms  aclosure with a new variable in it ->it creates a new copy everytime when loop executes, ->block allows you to store new value for each iteration

// with var
function b() {
  for (var j = 1; j <= 5; j++) {
    function close(j) {
      setTimeout(function () {
        // console.log(j);
      }, j * 1000);
    }
    close(j);  //-->> this function will have a new copy of j everytime loop executes
  }
  console.log("Hello Kanchan1");
}
b();

//  Functions ->
// function statement == function declaration
function fs() {
  console.log("This is just function statement");
}

// function expression
var fe = function () {
  console.log("This is function expression");
}

// Anonymous function
var af = function () {
  console.log("This is anonymous function");
}

// Named function expression

var af = function nFE() {
  console.log("This is Named function expression");
}
af();
// nFE(); // this line will throw an error

// First class function -> First class citizens -> Ability to be used as values

var qq = function (param1) {
  return function xyz() {
  }
}
console.log(qq());

// Callback Functions

setTimeout(function () {
  console.log("Timer!!!");
}, 5000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});


// Event Listeners
//  & count the numbers of times a button is clicked using closures

function attachEventListener() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function abc() {
    console.log("Butoon Clicked!!!", ++count);
  });
}
attachEventListener();