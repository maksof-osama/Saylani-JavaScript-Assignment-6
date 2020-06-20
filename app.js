// Name: Osama Nasir
// F/Name: Muhammad Nasir
// Email: sheikhosama2020@gmail.com


// Chapter 21 to 25
// Task # 1
// var firstname = prompt("Enter Your First Name");
// var lastname = prompt("Enter Your Last Name");
// var titled =firstname+" "+lastname;
// alert("Hello! "+titled);


// Task # 2
// var str = prompt("What is your Favourite Mobile Phone Model");
// document.write("My Favourite Mobile Phone is : " + str + "<br>" + "Length of String : " + str.length);


// Task # 3
// var city = "Pakistani";
// var n = city.indexOf("n");
// document.write("String: "+ city + "<br>" + "Index of 'n': "+n);


// Task # 4
// var text = "Hello World";
// var segIndex = text.lastIndexOf("l");
// document.write("String: "+ text + "<br>" + "Last Index of 'l': "+segIndex);


// Task # 5
// var city = "Pakistani";
// var n = city.charAt(3);
// document.write("String: "+ city + "<br>" + "Character at index '3': "+n);


// Task # 6
// var hello = "Hello! ";
// var firstname = prompt("Enter Your First Name");
// var lastname = prompt("Enter Your Last Name");
// var titled = hello.concat(firstname,' ', lastname);
// document.write(titled);


// Task # 7
// var city = "Hyderabad";
// var replace = city.replace("Hyder","Islam");
// document.write("City: "+ city + "<br>" + "After Repalacement: " + replace);


// Task # 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace = message.replace(/and/g,"&");
// document.write(replace);


// Task # 9
// var string = "472";
// var parse = parseInt(string);
// document.write("Value: " + string + "<br>" + "Type: string" + "<br>" + "Value: " + parse + "<br>" +"Type: number");


// Task # 10
// var user = prompt("Enter Your Input Letter want to convert caps");
// var user1 = user.toUpperCase();
// document.write("User Input: " + user + "<br>" + "Upper Case: " + user1);


// Task # 11
// var user = prompt("Enter Your Input Letter want to convert caps");
// var firstchar = user.slice(0,1);
// var otherchar = user.slice(1);
// firstchar = firstchar.toUpperCase();
// otherchar = otherchar.toLowerCase();
// var user1 = firstchar+otherchar;
// document.write("User Input: " + user + "<br>" + "Upper Case: " + user1);


// Task # 12
// var num = 35.36 ;
// num = num.toString();
// var rm = num.split('.').join("");
// document.write("Number: " + num + "<br>" + "Result: " + rm);


// Task # 13
// var userName = prompt("Enter your valid usename");
// for (var i = 0; i < userName.length; i++) {
//     if (userName.indexOf("@") !== -1 || userName.indexOf(".") !== -1 || userName.indexOf(",") !== -1 || userName.indexOf("!") !== -1) {
//         alert("Please eneter a valid username");
//         break;
//     }
// }


// Task # 14
// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var item = prompt("Enter Bakery Items").toLowerCase()
// for (var i=0; i<a.length; i++)
// {
// if(item==a[i]){
//     document.write(item + " is available at index " + a.indexOf(item) +" in our bakery");
// break;
// }
// }
// if(item!==a[i]){
// document.write("We are sorry, "+item+" is not available in our bakery")
// }


// Task # 15
// var pass = prompt("Enter Password")
// var passw=  /^[A-Za-z]\w{7,14}$/;
// if(pass.match(passw)) 
// { 
//     alert("Correct Password");
//     document.write("Your Password is: " + pass)
// } else {
//     alert("Password does not match For character codes of a-z,A-Z & 0-9");
//     document.write("Not Valid Password: " + pass)
// }


// Task # 16
// var university = "University of Karachi"
// var b= university.split("")
// document.write("Before: "+ b+"<br>")
// var c= b.join("<br>")
// document.write("After: <br>"+ c+"<br>")


// Task # 17
// var input=prompt("Enter String")
// var b=input.charAt(input.length-1)
// document.write("User input: " +input+" <br>Last character of input: "+ b)


// Task # 18
// var text = "the quick brown fox jumps over the lazy dog";
// var t = 0;
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 3) === "the") {
//         t++;
//     }
// }
// document.write("Text: " + text + "</br>" + "There are " + t + " occurrences of word 'the' ");




// ____________________________________________________________________________________________________ //



// Chapter 26 to 30
// Task # 1
// var a = prompt("Enter a positive floating point number");
// var b = Math.round(a);
// var c = Math.floor(a);
// var d = Math.ceil(a);
// document.write("number: " + a + "</br>" + "round off value: " + b + "</br>" + "floor value: " + c + "</br>" + "ceil value: " + d + "</br>" + "</br>");


// Task # 2
// var a = prompt("Enter a negative floating point number");
// var b = Math.round(a);
// var c = Math.floor(a);
// var d = Math.ceil(a);
// document.write("number: " + a + "</br>" + "round off value: " + b + "</br>" + "floor value: " + c + "</br>" + "ceil value: " + d + "</br>" + "</br>");


// Task # 3
// var Math = Math.abs(-4);
// document.write(Math);


// Task # 4
// var randomNumber = Math.random()*6;
// var randomNumber1 = Math.ceil(randomNumber)
// alert(randomNumber1);


// Task # 5
// var k = Math.random() * 2;
// var o = k + 1;
// var p = Math.floor(o);
// if (p == 2) {
//     document.write("random coin value: Heads")
// }
// if (p == 1) {
//     document.write("random coin value: Tails")
// }


// Task # 6
// var randomNumber = Math.random()*100;
// var randomNumber1 = Math.ceil(randomNumber)
// document.write("random number between 1 and 100: "+randomNumber1);


// Task # 7
// var w = prompt("Enter your weight");
// var x = parseFloat(w);
// document.write("The weigth of user is: " + x + " kilogram");


// Task # 8
// var t = prompt("Guess a number between 1 to 10");
// var u = Math.random() * 10 + 1;
// var v = Math.floor(u);
// if (t == v) {
//     alert("Congratulation!");
// }
// else {
//     alert("Try Again");
// }



// ____________________________________________________________________________________________________ //



// Chapter 31 to 35
// Task # 1
// var date = new Date();
// document.write(date);


// Task # 2
// var d = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";''
// month[10] = "November";
// month[11] = "December";
// var n = month[d.getMonth()];
// alert("Current Month is "+n);


// Task # 3
// var weekday = new Array(7);
// weekday[0] = "Sun";
// weekday[1] = "Mon";
// weekday[2] = "Tue";
// weekday[3] = "Wed";
// weekday[4] = "Thu";
// weekday[5] = "Fri";
// weekday[6] = "Sat";
// var n = weekday[d.getDay()];
// alert("Today is "+n);


// Task # 4
// var day=Date();
// var days=day.slice(0,3);
// if(days=="Sat" || days=="Sun")
// {
// document.write("It's Fun Day ")    
// }
// else{
// document.write("Today is Not Sat or Sun")    
// }


// Task # 5
// var date = new Date();
// var d = date.getDate();
// if (d === 1 || d === 2 || d === 3 || d === 4 || d === 5 || d === 6 || d === 7
//     || d === 8 || d === 9 || d === 10 || d === 11 || d === 12 || d === 13 || d === 14 || d === 15 ){
//     document.write("First Fifteen Days of the Month");
// }
// else{
// document.write("Last Days of the Month");
// }


// Task # 6
// console.log("Assignment Example!");
// var myDate = new Date("12/05/2015 22:32:23");
// console.log("My Date : " + myDate);
// var miliSeconds = myDate.getTime();
// console.log("Elapsed miliseconds since January 1, 1970 : " + miliSeconds);
// var minutes = (miliSeconds / 6000) / 600;
// console.log("Elapsed minutes since January 1, 1970 : " + minutes);


// Task # 7
// var hours = new Date().getHours();
// var mid='am';
// if(hours==0){ //At 00 hours we need to show 12 am
// hours=12;
// }
// else if(hours>12)
// {
// hours=hours%12;
// mid='pm';
// }
// alert (mid);


// Task # 8
// d = new Date(); 
// d.setFullYear(2020, 5, 0);
// document.write(d);


// Task # 9
// var i = new Date() - new Date("June 18, 2019");
// var j = i / (1000 * 60 * 60 * 24);
// var k = Math.floor(j);
// document.write(k + " days have passed since 1st Ramadan, 2019" + "<br>" + "<br>");


// Task # 10
// var i = new Date("Jan 01, 2015");
// var j = new Date("Dec 05, 2015");
// var k = j - i;
// var l = k/(1000*60)
// document.write("Our Referece Date " + j + "," + l + "seconds had passed since beginning of 2015");


// Task # 11
// var currentDate = new Date();
// document.write("Current Date & Time : " + currentDate + "<br><br>");
// var getCurrentHour = currentDate.getHours();
// var agoTime = parseInt(prompt("_____ Hour ago time ?"));
// var resetHour = getCurrentHour - agoTime;
// currentDate.setHours(resetHour);
// document.write(agoTime + " hour ago, it was " + currentDate);


// Task # 12
// var n = new Date("December 3, 2019");
// document.write("Current Date: " + n + "<br>");
// var p = n.setFullYear(1919);
// document.write("100 years back, it was " + n + "<br> <br>");


// Task # 13
// var birthYear = prompt("Enter Your Birth Year")
// if (birthYear == "" || birthYear.match(/[A-Za-z]/g)) {
//     alert("Please Enter a Birth Year!");
// } else {
//     var currentdate = new Date(),
//         currentYear = currentdate.getFullYear();
//     var age = currentYear - birthYear;
//     document.write("Your Age is: "+ age + "<br>" + "Your Birth Year is: " + birthYear);
// }


// Task # 14
// var cusnam = prompt("Enter Customer Name");
// var currmonth = prompt("Enter Current Month");
// var numunits = prompt("Enter Number of Units");
// var chargesperunit = 16;
// var netam = numunits * chargesperunit;
// var late = 350;
// var gross = netam+late;
// document.write("<h1>"+"K Electric Bill"+"</h1>"+"<br>"+"<br>"+"Customer Name: "+cusnam+"<br>"+"Month: "+currmonth+"<br>"+
//                 "Number of Units: "+numunits+"<br>"+"Charges Per Unit: "+chargesperunit+"<br>"+"<br>"+
//                 "Net Amount Payable (Within Due Date): "+netam+"<br>"+"Late Payment Surcharge: "+late+"<br>"+
//                 "Gross Amount Payable (After Due Date): "+gross);     



// ____________________________________________________________________________________________________ //



// Chapter 31 to 35
// Task # 1
// var a = new Date();
// document.write(a);


// Task # 2
// var first = prompt("Enter First Name");
// var last = prompt("Enter Last Name");
// function greeting(){
//     alert("Hello! "+first+" "+last)
// }
// greeting();


// Task # 3
// var a = prompt("Enter First Value");
// var b = prompt("Enter Second Value");
// function add(){
//     var z = +a + +b;
//     alert(z);
// }
// add();


// Task # 4
// function calc(a,b,c){
// if(b==="+"){
//     return a + c
// }
// else if(b==="-"){
//     return a - c
// }
// else if(b==="*"){
//     return a * c
// }
// else if(b==="/"){
//     return a / c
// }
// else {
//     return "Incorrect Operator"
// }
// }
// var result = calc(5,"-",5);
// var result2 = calc(5,"*",5);
// var result3 = calc(5,"+",5);
// var result4 = calc(5,"/",5);
// var result5 = calc(5,"%",5);
// document.write(result+"<br>"+result2+"<br>"+result3+"<br>"+result4+"<br>"+result5)


// Task # 5
// const square = function(x) {
//     return x * x;
//   };
// console.log(square(12));


// Task # 6
// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
// let n = 4;
// answer = factorial(n)
// console.log("The factorial of " + n + " is " + answer);


// Task # 7
// var start = prompt("Enter Start No.");
// var end = prompt("Enter End No.");
// function table(){
//     for (var i=start; i<=end; i++){
//     document.write(i);
//     document.write("<br>");
//     }
// }
// table();


// Task # 8
// var a = prompt("Enter Base of a Right angle Triangle");
// var b = prompt("Enter Perpendicular of a Right angle Triangle");
// function hypotenuse(a, b) {
//     function square(x) { return x*x; }
//     return Math.sqrt(square(a) + square(b));
//  }
//  function secondFunction(){
//     var result;
//     result = hypotenuse(a,b);
//     document.write ( result );
//  }
//  secondFunction();
 

// Task # 9
// var val01 = prompt("Please give the width of the rectangle:");
// var val02 = prompt("Please give the length of the rectangle:");
// function calcAreaOfRectange(wid, hei) {
//     var area = wid * hei;
//     document.write("Width is : " + wid + "<br>");
//     document.write("Height is : " + hei + "<br>");
//     document.write("The area of the Rectangle is : " + area);
// }
// calcAreaOfRectange(val01, val02);


// Task # 10
// function isPalindrome(inStr) {
//     for (let a = 0; a < inStr.length; a += 1) {
//         if (inStr[a] !== inStr[inStr.length - 1 - a]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPalindrome(instr));


// Task # 11
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];   
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));


// Task # 12
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];
//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));


// Task # 13
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }
// console.log(char_count('JSResourceS.com', 'o'));


// Task # 14
// var radius = parseInt(prompt("Enter Radius!"));
// function findCircumference(findCircum) {
//     var circumference = Math.PI * 2 * findCircum;
//     console.log("Circumference of Circle = " + circumference);
// }
// findCircumference(radius);
// function findAreaOfCircle(findArea) {
//     var area = Math.PI * findArea * findArea;
//     console.log("Area of Circle = " + area);
// }
// findAreaOfCircle(radius);