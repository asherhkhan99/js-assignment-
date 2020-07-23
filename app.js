
//Chapter no 38-42
// Funcitons|switch|while do while
//Task no 1
// function power(a,b){
//     return a**b
// }
// document.write(power(2,3))

//Task no 2
// function leapYear() { 
//     var year= document.getElementById("year").value; 
      
//     document.getElementById("ans").innerHTML  
//         = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0); 

// }

//Task no 3
// var S;
// var A;
// a=6;
// b=6;
// c=6;
// function first(){
//     S = (a+b+c)/2
    
// }
// function area(){
//     A = S*((S-a)*(S-b)*(S-c))
//     document.write("area = "+A)
// }

//Task no 4
// var avg;
// var percent;
// var marks;
// var total = 150;
// function mainFunction(){
//     var avgMarks = average()
//     var percMarks = percentage()
//     document.write("avg marks are:" + avg + "<br>")
//     document.write("percentage is:" + percent +"%")    
// }

// function average(){
//     var x = parseInt(document.getElementById('m1').value)
//     var y = parseInt(document.getElementById('m2').value)
//     var z = parseInt(document.getElementById('m3').value)
//     marks = x+y+z
//     avg = (x+y+z)/3
    
// }
// function percentage(){
//     percent = (marks/total)*100
    
// }

// Task no 6
// function deleteVowels(string) {
//     return string.replace(/[aeiou]/gi, '');
//   }
  
// Task no 7
// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
//   }
  
//   console.log(findOccurrences());

// Task no 8
// function calc(){
//     var a = parseFloat((document.getElementById('input').value))
//     var metre = a * 1000
//     var feet = a * 3280.84
//     var inches = a * 39370.1 
//     var cent = a * 100000
//     document.getElementById('p1').innerHTML = "distance in meter is" + metre + "m<br>"
//     document.getElementById('p2').innerHTML = "distance in feet is" + feet + "ft.<br>"
//     document.getElementById('p3').innerHTML = "distance in inches is" + inches + "inches<br>"
//     document.getElementById('p4').innerHTML = "distance in centimeter is" + cent + "centimeters<br>"

// }


// Task no 9
// function salary(){
//     var a = parseInt((document.getElementById('input').value))
//     var b = 40
//     if(a>b){
//         var x = a - b 
//         var y = x * 12.00
//         document.getElementById("final").innerHTML = "your over time pay is : " + y;
//     }
//     else{
//         document.getElementById("final").innerHTML = "your haven't worked over time! ";
//     }
// }

// Task no 10
// var hundred = 0;
// var fifty = 0;
// function withdraw(){
//     var amount = parseInt((document.getElementById('input').value))
//     while ( amount >= 100){
//         amount = amount - 100
//         hundred = hundred + 1
//     if (amount < 100 && amount >= 50){
//         amount = amount - 50
//         fifty = fifty + 1
//         if(amount < 50){
//             var ten = amount / 10
//         }
//     }
//     else{
//         var ten = amount / 10
//     }
//     }
// document.getElementById("para").innerHTML = "you will get " + hundred + " hundred notes " + fifty + " fifty notes " + ten + " ten notes"
// }





//Chapter no 43-48
//Task no 1
// function link(){
//     alert("Hello")
// }

//Task no 2
// function image(){
//     alert("Thanks for purchasing a phone from us")
// }

//Task no 3
// function delFunc(a){
//     document.getElementById("row").deleteRow(a)
// }
// delFunc(a)

// Task no 4
// In index.html

//Task no 5
// var clicks = 0;
//     function inc() {
//         clicks += 1;
//         document.getElementById("clicks").innerHTML = clicks;
// };
// function dec(){
//     clicks -= 1;
//     document.getElementById("clicks").innerHTML = clicks;
// }



//Chaoter no 49-52
//Task no 1
// function submit(){
//     var fname = document.getElementById('fname').value
//     var lname = document.getElementById('lname').value
//     var number = document.getElementById('number').value
//     var email = document.getElementById('email').value  
//     document.getElementById('p1').innerHTML = "Full Name: " + fname + " " + lname + "<br>"
//     document.getElementById('p2').innerHTML = "Number: " + number + "<br>"
//     document.getElementById('p3').innerHTML = "Email: " + email + "<br>"  
// }

//Task  no 2
// function readMore(){
//     var text = "Honda : Civic <br> Model : 2020 <br> Color : White <br> Type : Sedan <br> HP : 250bhp"
//     var para = document.getElementById('para')
//     para.innerHTML = text  //innerhtml para div m kaam ata or vlaue m input se kaam lete hain

// }

//Task no 3
//  var list = document.getElementById('list')
// function details() {
//     var name = document.getElementById('name')
//     var age = document.getElementById('age')
//     var li = document.createElement('li')
//       var liText = document.createTextNode(name.value)
//     var liText2 = document.createTextNode(age.value)
    
//     li.appendChild(liText)
//     li.appendChild(liText2)
    
//     var delBtn = document.createElement('button')
//     var delText = document.createTextNode('delete')
//     delBtn.setAttribute("class", "btn")
//     delBtn.setAttribute("onclick", "deleteItem(this)")
//     delBtn.appendChild(delText)
//     li.appendChild(delBtn)

//     var editBtn = document.createElement('button')
//     var editText = document.createTextNode("edit")
//     editBtn.setAttribute("class", "btn")
//     editBtn.setAttribute("onclick", "editItem(this)")
//     editBtn.appendChild(editText)
//     li.appendChild(editBtn)

//     list.appendChild(li)
//     name.value = ""
// }

// function deleteItem(e) {
//     e.parentNode.remove()
// }
// function editItem(e){
//     var editVal = prompt("enter new value",val)
//     e.parentNode.firstChild.nodeValue = editVal

// }




//Chaoter no 52-57
//Task no 1
// function showImage(e){
//     console.log(e.src)
//     var modalimg = document.getElementById('modalimg')
//     modalimg.src = e.src
// }

//Task no 2
// function zoomin(e) {
//     document.getElementById("para").style.fontSize =   "35px"
// }
// function zoomout() {
//     document.getElementById("para").style.fontSize =   "15px"
// }




//Chapter no 58-67
//Task no 1
//Part 1
// var a = document.getElementById('main-content')

//Part2
// var a = document.getElementById('main-content')
// console.log(a.childNodes)  or //console.log(document.all[15])

//Part 3
// var a = document.getElementsByClassName('render')
// console.log(a[0].innerHTML)
// console.log(a[0].childNodes)
// console.log(a[1].innerHTML)
// console.log(a[1].childNodes)
// console.log(a[2].innerHTML)
// console.log(a[2].childNodes)
// console.log(a[3].innerHTML)
// console.log(a[3].childNodes)
// console.log(a[4].innerHTML)
// console.log(a[4].childNodes)

//Part 4
// a = document.getElementById("first-name").value = "My First name";

//Part 5
// document.getElementById("last-name").value = "My last name";
// document.getElementById("email").value = "abc@gmail.com";



// Task no 2

// Part 1
//Node type will be 1
// var a = document.getElementById("form-content")
// console.log(a.nodeType)

// Part 2
// var a = document.getElementById("lastName")
// console.log(a.nodeType)
// console.log(a.childNodes)

//Part 3
// a= document.getElementById('lastName').innerHTML = "New Last Name : abc"


//Part 4
// var a = document.getElementById('main-content')
// console.log(a.firstChild)
// console.log(a.lastChild)

//Part 5
// var a = document.getElementById('lastName')
// console.log(a.previousSibling)
// console.log(a.nextSibling)

//Part 6
// var a = document.getElementById('email')
// console.log(a.nodeType)
// console.log(a.parentNode)