// a.   

function counter() {
    var counter = 0;
  
    function IncreaseCounter() {
      return (counter += 1);
    }
  
    return IncreaseCounter;
  }
  
  var counter = counter();
   alert(counter());
   alert(counter());
   alert(counter());
   alert(counter());

  // O/P - 1 2 3 4
  
  // b.
  let count = 0;
  (function () {
    if (count === 0) {
      let count = 1;
      console.log(count); // What is logged?
    }
    console.log(count); // What is logged?
  })();

  // O/P -  1 0
  
  // c.
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }

  // O/P - 3 3 3
  
  // d. Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.
  const AreaOfRectangle = (len) => {
    fun = function (bre) {

      console.log(len * bre);
    };
  };
  
  AreaOfRectangle(2);
  fun(1);
  // O/P - 2
  
  // e. Take a variable in outer function and create an inner function to increase the counter every time it is called
  const variable1 = () => {
    let num = 0;
    variable2 = function () {
      return num++;
    };
    return variable2;
  };
  
  const result = variable1();
  console.log(result());
  console.log(result());
  
  // O/P - 0 1 
  
  // f. Print Output
  var a = 12;
  (function () {
    alert(a);
  })();

 // O/P - 12
  
  // g.
  var a = 10;
  var x = (function () {
    var a = 12;
    return function () {
      alert(a);
    };
  })();
  x(); 
  
   // O/P - 12

  // h.
  var globalVar = "xyz";
  
  (function outerFunc(outerArg) {
    var outerVar = "a";
  
    (function innerFunc(innerArg) {
      var innerVar = "b";
  
      console.log(
        "outerArg = " +
          outerArg +
          "\n" +
          "innerArg = " +
          innerArg +
          "\n" +
          "outerVar = " +
          outerVar +
          "\n" +
          "innerVar = " +
          innerVar +
          "\n" +
          "globalVar = " +
          globalVar
      );
    })(456);
  })(123);
  
  //O/P :
      //outerArg = 123
      //innerArg = 456
      //outerVar = a
      //innerVar = b
      //globalVar = xyz
