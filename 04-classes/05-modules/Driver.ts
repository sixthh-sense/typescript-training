import { Customer } from "./Customer";

let myCustomer = new Customer("Martin", "Dixon");

myCustomer.firstName = "Susan";
myCustomer.lastName = "Bones";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);