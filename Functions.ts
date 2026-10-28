//Functions perform reusable operations.
function add(a:number,b:number): number {
    return a+b;
}
console.log(add(2,3));

//traditional function
function GetDetails(){
    let name:string = "Sreenu Reddy";
    let Age:number = 23;
    console.log(`${name} age is ${Age}`)
}
GetDetails();

//Arrow function
let getdetails = (a:number,b:number):number => a*b;
console.log(getdetails(2,3));

//optional parameter
function greet(name: string, city?: string): string {
    return city
        ? `Hello ${name} from ${city}`
        : `Hello ${name}`;
}

console.log(greet("Reddy"));
console.log(greet("Reddy", "Nellore"));