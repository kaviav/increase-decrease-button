// Bro code lectures

// let firstname = "Bro";
// let age = 21;
// let student = true;

// console.log("Hello", firstname);
// console.log("You are", age, "years old");
// console.log("Enrolled:", student);

// document.getElementById("p1").innerHTML = "Hello " + firstname;
// document.getElementById("p2").innerHTML = "You are " + age + " years old";
// document.getElementById("p3").innerHTML = "Enrolled " + student;

// Arithmetic expressions
// let students = 20;
// students = students + 1;
// students = students + 2;
// students = students * 2;
// students = students / 2;
// students = students % 2;

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;

// console.log(students);

/* operator precedence

1. parenthesis()
2. exponentts
3. multiplication or division
4. addition or subtraction
*/

// let result = 1 + 2 * (3 + 4);

// console.log(result);

// /*user input in js*/

// let username = window.prompt("What is your name?");
// console.log(username);

// let username;
// document.getElementById("myButton").onclick = function () {
//   username = document.getElementById("myText").value;
//   console.log(username);

//   document.getElementById("myLabel").innerHTML = "Hello " + username;
// };

/*Type conversion in js*/

// let age = window.prompt("How old are you?");

// age = Number(age);
// age += 1;
// console.log(typeof age);
// console.log("Happy Birthday!, you are " + age + " years old");

/*const in js, finding the circumference of a circle*/

// let PI = 3.14;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius!");
// radius = Number(radius);

// circumference = 2 * PI * radius;
// console.log("The circumference is " + circumference);

/*Hypotenus calculate*/

// first method

// a = window.prompt("Enter side A");
// a = Number(a);

// b = window.prompt("Enter side B");
// b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log("Side C: " + c);

// second method

// document.getElementById("submitButton").onclick = function () {
//   a = document.getElementById("aTextBox").value;
//   a = Number(a);

//   b = document.getElementById("bTextBox").value;
//   b = Number(b);

//   c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
//   document.getElementById("cLabel").innerHTML = "Side C: " + c;
// };

/*calculator sample8*/

let count = 0;

document.getElementById("decreaseBtn").onclick = function () {
  count -= 1;
  document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("resetBtn").onclick = function () {
  count = 0;
  document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("increaseBtn").onclick = function () {
  count += 1;
  document.getElementById("countLabel").innerHTML = count;
};

/* random no generator */

// let x = Math.floor(Math.random() * 6) + 1;
// let y = Math.floor(Math.random() * 6) + 1;
// let z = Math.floor(Math.random() * 6) + 1;

// document.getElementById("rollBtn").onclick = function () {
//   let x = Math.floor(Math.random() * 6) + 1;
//   let y = Math.floor(Math.random() * 6) + 1;
//   let z = Math.floor(Math.random() * 6) + 1;

//   document.getElementById("xLabel").innerHTML = x;
//   document.getElementById("yLabel").innerHTML = y;
//   document.getElementById("zLabel").innerHTML = z;
// };
