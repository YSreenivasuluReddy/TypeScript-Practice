export {};

// let a = 10;
// console.log("the value of a is : " + a);

//here we wil discuss about the defference  between the let and const variables.

// let res = "Sreenu";
// res = "Reddy";
// console.log("the value of res is : " + res);

// const keyword
//const res1 = "Sreenu";
// res1 = "Reddy"; // This would cause an error,
// because we cannot reassign the vaule for the const variable.
//console.log("the value of res1 is : " + res1);

//data types in typescript
// 1.number - represents numeric values 
// ex- 23,56.23
// 2.string - reprsents the string values
// ex-"CSharp","Javascript","Typescript","gwef"
// 3.boolean - represents the boolean values
//ex:- true,false
// 4.any - represents any type of value
//ex:- 23,"Sreenu",true
// 5.null : represents the null value

//number type
//let nu : number = 23;//here i declare data type;
//nu = "Sreenu"; //invalid.
// nu = 23.56; //valid 23

// console.log("the value of nu is : " + nu,typeof nu);

// console.log();

//string type

// let course : string = "Dot Net Full Stack Developer"; 
// console.log("the value of course is : " + course,typeof course);
// console.log();
// course.toUpperCase();
// console.log("the value of course is : " + course);
// console.log();
// boolean type
// let IsLoggin : boolean = true;
// console.log("the value of IsLoggin is : " + IsLoggin,typeof IsLoggin);
// console.log();
//any type
// let data : any = 23;

// data = "Sreenu";
// console.log(`the value of data is: ${data} and the type of data is : ${typeof data}`);
// console.log();
//union type ->it represnts either the number or string or boolean type of value.
// let value3 : number | string | boolean = 23;
// value3 = "Sreenu";
// value3 = true;
// value3 = null;
// console.log(`the value of value3 is: ${value3} and the type of value3 is : ${typeof value3}`);
// console.log();
//null type
// const pi : null = null;
// console.log(`the value of pi is: ${pi} and the type of pi is : ${typeof pi}`);
// console.log();

// arrys
//it is used to store multiple values of same data type.

//syntax for array;
//let arr1 : datatype[] = [value1,value2,value3,...];

//num array
let marks :number[] = [23,45,56,78,90];
// console.log(typeof marks);

// console.log("======================================")
//method-1 is traditional for loop
// for(let i=0;i<marks.length;i++){
//     console.log(marks[i]);
// }
// console.log("======================================")
//method-2 is for..of loop
//here of is used to get the direct values of an array.
// for(let mark of marks){
//     console.log(mark);
// }
// console.log("======================================")
//method-3 is foreach loop
// marks.forEach(mark => {
//     console.log(mark);
// });
// console.log("======================================")
//if you want to add value at the end of array we use push() method.
// marks.push(100);
// console.log(marks);

//if you want to add value at the first for that we use unshift() method.
marks.unshift(10);
console.log(marks);

//if you remove last index value we use pop() method.
marks.pop();
console.log(marks);

//lets discuss about the tuples.

// tupel is used to store multiple values of different type and it is fixed in size.
//syntax : 
//let variable_name : ["datatype1","dt2",dt3] = [23,"Sreenu",true];

//example
let studentDetails :[number,string,string,string,boolean] = [23,"Sreenu Reddy","Andhra Pradesh","Dot Net",true];
console.log(studentDetails);