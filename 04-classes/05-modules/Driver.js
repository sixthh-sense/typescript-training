"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var myCustomer = new Customer_1.Customer("Martin", "Dixon");
myCustomer.firstName = "Susan";
myCustomer.lastName = "Bones";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
