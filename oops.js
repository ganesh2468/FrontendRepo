/*class Student
{
    constructor(name,age,grade)
    {
        this.name=name;
        this.age=age;
        this.grade=grade;
    }
    study=()=>
    {
        console.log("Studying");
    }
}

class StudyingStudent extends Student
{
    constructor(name,age,grade,stream)
    {
        super(name,age,grade);
        this.stream=stream;
    }
    study=()=>
    {
        console.log("Child class");
    }
}

const objectOne=new StudyingStudent("a",22,"A","com");
const objectTwo=new Student("b",22,"A")
console.log(objectTwo.name);
console.log(objectOne.age);
console.log(objectOne.grade);
console.log(objectOne.stream);
console.log(objectOne.study());
*/


//Abstraction
/*
class Employee
{
    constructor(name,age,basicSalary)
    {
        this.name=name;
        this.age=age;
        this.basicSalary=basicSalary;
        const bonus=10000;//so this can't be changed from outside ,if this.bonus then it can be changed from outside
        let finalSal=()=>{
            let finalSalary=0;
            finalSalary=basicSalary+bonus;
            console.log(finalSalary);
        }
        this.displayInfo=()=>{
            console.log(this.name+this.age);
            finalSal();
        }
    }
}
emp=new Employee("a",22,50000);
emp.displayInfo();
*/


//Encapsulation
/*
class Person{
    constructor()
    {
        let name;
        let age;
    }
    getName=()=>{return this.name}
    setName=(name)=>{this.name=name}

    getAge=()=>{return this.age}
    setAge=(age)=>{this.age=age}
}
personOne=new Person();
personOne.setName("ABC");
console.log(personOne.getName());
personOne.setAge(24);
console.log(personOne.getAge());
*/
/*
function Employee(name,age,salary)
{
    this.name=name;
    this.age=age;
    this.salary=salary;
}
const emp=new Employee("Saikumar",22,50000);
console.log(emp.name);
console.log(emp.age);
console.log(emp.salary);
*/


//Inheritance and method overriding
/*class Student
{

    constructor(name,age,grade)
    {
        this.name=name;
        this.age=age;
        this.grade=grade;
    }
     study=()=>
    {
        console.log("Studying")
    }
}

class StudyingStudent extends Student
{
    constructor(name,age,grade,stream)
    {
        super(name,age,grade);
        this.stream=stream;
    }
    study=()=>{
        console.log("Studying from child class");
    }
}





const objectOne=new StudyingStudent("Ritika",24,"A","Medical");
console.log(objectOne.name);
console.log(objectOne.age);
console.log(objectOne.grade);
console.log(objectOne.stream)
objectOne.study();
*/

//Abstraction
/*class Employee
{
    constructor(name,age,basicSalary)
    {
        this.name=name;
        this.age=age;
        this.basicSalary=basicSalary;
        let bonus=2000;
         let finalSal=()=>{
            let finalSalary=0;
            finalSalary=basicSalary+bonus;
            console.log(finalSalary);
        }
    
    this.displayInfo=()=>{
        console.log("Name of the Employee is "+this.name+" age of employee is "+this.age);
        finalSal();    
    }
}
}
 emp=new Employee("Ritika",24,5000);
emp.displayInfo();
*/

//Encapsulation

/*class Person
{
    constructor()
    {
        let name;
        let age;
    }
    getName=()=>{return this.name}
    setName=(name)=>{this.name=name}

    getAge=()=>{return this.age}
    setAge=(age)=>{this.age=age}
}
personOne=new Person();
personOne.setName("ABC");
console.log(personOne.getName());
personOne.setAge(24);
console.log(personOne.getAge());
*/


//constructor function
/*function Employee(name,age,salary)
{
    this.name=name;
    this.age=age;
    this.salary=salary;
}

const emp=new Employee("SaiKumar",20,50000);
console.log(emp.name);
console.log(emp.age);
console.log(emp.salary);
*/