let arr = ["Sreenu",34,25.44];
// console.log(arr);

//here i want to add value at the end,for that i use push().
arr.push("Mango");
console.log(arr);

//here i want to add value at the begining,for that i use unshift().
arr.unshift("Apple");
// console.log(arr);

//here i want to add value at specific index,for that i use splice(index,deletecount,item).
arr.splice(1,0,"Vennala");

arr.reverse();
//arr.findIndex(item => item === "Mango");

//console.log(arr.findIndex(item => item === "Sreenu"));

arr.includes("Mango");

console.log(arr.findIndex(item => item === "Sreenu"));
console.log(arr.includes("Mango"));

//it remove the index of 1 with one value.
arr.splice(1,1);
//it remove the index of 1 to index-1.
arr.splice(1,2);