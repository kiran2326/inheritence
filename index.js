 // Parent object
 function Parent(name) {
    this.name = name;
  }
  
  Parent.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}.`);
  };
  
  // Child object
  function Child(name, age) {
    Parent.call(this, name);
    this.age = age;
  }
  
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
  
  // Creating instances of parent and child objects
  const parent = new Parent("John");
  const child = new Child("Jane", 10);
  
  // Using the methods from parent's prototype in child object
  parent.greet(); 
  child.greet(); 
  
//
const grandfather = {
     Hello : function(){
        console.log("HEY HI")
    },
}
const Father = Object.create(grandfather);
Father.Ho = function(){
console.log("Say hi")
}
const You = Object.create(Father);
You.Hi = function(){
console.log("HI...")
}
You.Hello();
You.Ho();
You.Hi();

//
Array.prototype.calculateSum = function() {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
      }
      return sum;
    } 
    const array1 = [11, 22, 33, 44, 55];
    const array2 = [12, 23, 32, 41, 54]; 
const sum1 = array1.calculateSum();
const sum2 = array2.calculateSum();
console.log(sum1);
console.log(sum2);
//
function getAllPropertyNames(obj) {
    const propertyNames = [];
    
    while (obj !== null) {
      propertyNames.push(...Object.getOwnPropertyNames(obj));
      obj = Object.getPrototypeOf(obj);
    }
    
    return propertyNames;
  }
  // Example object
  const person = {
    name: "John",
    age: 30
  };
  
  // Inherited object
  const employee = Object.create(person);
  employee.salary = 5000;
  
  // Retrieving all property names
  const propertyNames = getAllPropertyNames(employee);
  
  console.log(propertyNames);
  
  

