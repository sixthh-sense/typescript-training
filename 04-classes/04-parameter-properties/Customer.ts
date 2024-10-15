class Customer {

    constructor(private _firstName: string, private _lastName: string) {
    }

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    set lastName(value: string) {
        this._lastName = value;
    }
}

let myCustomer = new Customer("Martin", "Dixon");

myCustomer.firstName = "Susan";
myCustomer.lastName = "Bones";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);