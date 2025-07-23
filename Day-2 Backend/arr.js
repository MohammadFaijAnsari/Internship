// App Method
//    1)Push :-Insert the last index of array
      var arr=[1,2,3];
      arr.push("Test");
      console.log(arr);
//    2)Pop:Delete value for the last
      
      arr.pop();
      console.log(arr);
 //    3)Shift :Delete value of the first
      var test=[1,2,3,4,5];
      test.shift();
      console.log(test);
// 4)Unshift
      test.unshift([12,"Hello"]);
      console.log(test);

// 5)Map:-Map function using iterate the array and perfrom the task all array value 

     let arr1=[1,2,3,4,5,6,7,8];
     var mul=arr1.map(function(data){
      return (data * 2) ;
     })
     console.log(mul);

// 6)Filter:-filter function using iterate the array and perfrom the all according the condition 

  var arr2=[1,2,3,4,5,56];
  data=arr2.filter(function(num){
    return num > 5;
  })
//   data=arr2.filter((num)=> num > 4);
  console.log(data);

//   7)Reduce:-Reduce  function is used to the arrya to string value
 const arr3=[1,3,5,7,9,8,7];
 const data1=arr3.reduce((arr,curr) => arr + curr ,0);
 console.log(data1);

//  String Function

// 1)trim():-Remove the whitespace of the any string
var test="  What is the Your Name  ";
console.log(test.trim());
// 2)slice:-slice function are used to the extract the portion length - 1

var test1=['mango',2,34];
const arr4=test1.splice(0,6);
console.log(arr4);

// 3)substring:-substring function in string extract the strinf portion for the index -1
var test2="JavaScript";
const data2=test2.substring(1,4);
console.log(data2);
// 4)replace:-replace string method  on the value
var test3="Hello World";
const data3=test3.replace('Hello','JavaScript');
console.log(data3);
// 5) inludes:-In String include function are the check the value present (Direct Value,Index Wise) are not return the boolean value.It have case sensitive and the index wise searchinf have posibile.
var test4="Hello World";
const data4=test4.includes("Hello",0);
console.log(data4);

// Object:-object is the primitive data type collections are data store the kay and value form

var person={
      name:"Faij Ansari",
      age:21,
      address:"Noida"
}
// First method print the all object value in object form
console.log(person);
// Second method print the object value
console.log(person.name+" "+person.age+" "+person.address); 
// Third method fetch data from the object
let name1=person.name;
let age=person.age;
let address=person.address;
console.log("Name="+name1+" "+age+" "+address);

