
// 1)Write a program to take input remaining fuel in the car (in liters) from the user. If the fuel is less than 0.25, display "Please refill the fuel in your car."

<button onclick="myFunction()"> Check your fuel</button>
function myFunction(){
    let inputFuel=prompt("Please enter your remaining fuel in the car.");
    if(inputFuel<=0.25)
    {
      document.write("Please refill the fuel in your car.");
    }
    else {
      document.write("Have a safe journey.");
    }
  }

// 2)Run this script and check whether alert messages would be displayed or not (various conditions provided).

// 3)Write a program to take input marks obtained in three subjects and the total marks. Calculate the percentage and display the grade and remarks based on the percentage obtained.

<html>

<script>
function grade() {
let urduMarks=prompt("Enter marks obtained in Urdu subject.");
document.write(urduMarks + "<br>")
let mathsMarks=prompt("Enter marks obtained in Maths subject.");
document.write(mathsMarks + "<br>")
let englishMarks=prompt("Enter marks obtained in English subject.");
document.write(englishMarks + "<br>")
let totalMarks=prompt("Enter Total marks.")
let percentage=(urduMarks+mathsMarks+englishMarks)/totalMarks;
  let finalPerc=percentage*100;
  if(finalPerc >90)
  {
    document.write("You have A Grade." + "<br>")
  }
  else if(finalPerc >70 && percentage <90)
  {
     document.write("You have B Grade." + "<br>")
  }
  else if (finalPerc <70)
  {
     document.write("You have c Grade." + "<br>")
  }
  
  else
  {
 document.write("You have D Grade.")
  }
  
  document.write("Your percentage is" + finalPerc + "<br>")
}
</script>
<body>
<button onclick="grade()"> Check your Grade</button>
</body>
</html>
// 4)Initialize arrays with various data types (literalArr, stringArr, numberArr, boolArr, mixedArr, qualificationArr).
const literalArr=[1,2,3,4];
const stringArr=["Red","Green","Blue","Orange"];
// 5)Write a program to store phone manufacturers in an array.
const storeManufacturers=["Iphone","Samsung","Nokia","Oppo"];
for(let i=0;i<=storeManufacturers.length;i++)
  {
    document.write(storeManufacturers[i] + "<br>");
  }
// 6)Write a program to store student scores in an array and sort the array in ascending order using Array's sort method.
const studentScores=[50,80,95,40,77,65];
document.write(studentScores + "<br>");
studentScores.sort(function(a, b){return a - b});
document.write(studentScores);
// 7)Write a program to create a single string from the given array ["This", "is", "my", "cat"].
const stringArray=["This","is","my","Cat"];

document.write(stringArray.toString());

// 8)Implement the FIFO (First In First Out) approach using arrays.
//Shift method for FIFo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits +"<br>");
fruits.shift();
document.write(fruits);
// 9)// Implement the LIFO (Last In First Out) approach using arrays.
//Pop method for LIFO
const colors=["Red","Green","Orange","Purple"];
document.write(colors + "<br>");
let colorsPop=colors.pop();
document.write(colorsPop);
// 10)Write a program to enable "search by user input" in an array and prompt the user whether the item is found in the list or not.
<html>
<body>
<p>Click "Check the number"and prompt the user whether the item is found in the list or not.</p>

<p><input type="number" id="numberToCheck" value="1"></p>

<button onclick="myFunction()">Check the number</button>

<p id="n"></p>

<script>
const numbers = [4, 12, 16, 20];

function checkNumber(number) {
  return number == document.getElementById("numberToCheck").value;
}

function myFunction() {
  document.getElementById("n").innerHTML = numbers.find(checkNumber);
}
</script>

</body>
</html>
// 11)Write a program to identify the largest number in the given array.
const number = [20,25,12,22,1,0,56];
number.sort(function(a, b){return b-a});
document.write(number[0]);
// 12)Write a program to identify the smallest number in the given array.
const number = [20,25,12,22,1,0,56];
number.sort(function(a, b){return a-b});
document.write(number[0]);
// 13)Write a program to print multiples of 5 ranging from 1 to 100.
for(i=0;i<=100;i+=5)
{
document.write(i +"<br>")
}
// Write a program that takes two numbers & adds them to a new variable. Show the result in your browser.
const x = 10;
const y = 20;
const z=(x + y);
document.write("The result is: "  + z);
// 14)Repeat task1 for subtraction, multiplication, division & modulus.
<p id="demo"></p>

<script>
let x = prompt("Enter 1st value.");
let y = prompt("Enter 2nd value.");
let z = prompt("Enter arithmetic operators from (-,*,/,%).");

if(z=="-")
{
document.getElementById("demo").innerHTML = (x-y);
}
else if(z=="*")
{
document.getElementById("demo").innerHTML = (x*y);
}
else if(z=="/")
{
document.getElementById("demo").innerHTML = (x/y);
}
else
{
document.getElementById("demo").innerHTML = (x%y);
}


</script>
//15) Write a program to take "city" name as input from the user. If the user enters "Karachi", welcome the user like this: "Welcome to the city of lights."

<button onclick="cityName()">Click here</button>

<script>

function cityName()
{
const city=prompt("Write your city name.")
if(city=="karachi")
{
document.write("Welcome to the city of lights")
}
else
{
document.write("Good Evening!")
}
}
</script>
// 16)Write a program to take "gender" as input from the user. If the user is "Male," display "Good Morning Sir." If the user is "Female," display "Good Morning Ma'am."
<button onclick="genderName()">Click here</button>

<script>

function genderName()
{
const gender=prompt("Write your Gender.");
if(gender=="male")
{
document.write("Good Morning Sir!");
}
else if(gender=="female")
{
document.write("Good Morning Mam!")
}
else
{
document.write("Sorry data is undefined.")
}
}
</script>
//17) Write a program to take input color of the road traffic signal. If the color is "Red," display "Must Stop." If the color is "Yellow," display "Ready to move." If the color is "Green," display "Move now."
<button onclick="traffic()">Click here</button>

<script>

function traffic()
{
const trafficSignals=prompt("write one traffic color to check the traffic status.Red, Green, Yellow");
if(trafficSignals=="red")
{
document.write("Must Stop!")
}
else if(trafficSignals=="green")
{
document.write("Move on!")
}
else if(trafficSignals=="yellow")
{
document.write("Ready to move!")
}
else
{
document.write("Try again with appropriate data.");
}
}
</script>