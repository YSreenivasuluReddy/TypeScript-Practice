class Employee {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    display(): void {
        console.log(this.id, this.name);
    }
}

let emp = new Employee(101, "Sreenu Reddy");
emp.display();

//here constructor is initialized an object when obj is created 

class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number
    ) {}

    display(): void {
        console.log(this.id, this.name, this.price);
    }
}

let p = new Product(1, "Laptop", 50000);
p.display();

//here i used 3 modifiers
//such as private,public,protected
class Employees {
    public name: string = "Sreenu Reddy";
    private salary: number = 35000;
    protected department: string = "IT";

    displaySalary(): void {
        console.log(this.salary);
    }

    displayDepartment(): void {
        console.log(this.department);
    }
}

let emp1 = new Employees();

console.log(emp1.name);  // Allowed
emp1.displaySalary();    // Allowed
emp1.displayDepartment();
//console.log(emp1.salary); // Error: private
//Property 'salary' is private and only accessible within class 'Employees'.
//console.log(emp1.department); // Error: protected
//Property 'department' is protected and only accessible within class 'Employees' and its subclasses.

//if you want print the protected value,we have 2 ways
// 1.create a method inside a class.
//2.create a child a class to inherit and display the value.

class Manager extends Employees {
    displayDepartment(): void {
        console.log(this.department);
    }
}

let manager = new Manager();

manager.displayDepartment();