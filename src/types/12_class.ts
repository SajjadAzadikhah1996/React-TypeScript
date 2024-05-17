class Person {
    protected readonly ssn: string;
    private readonly firstName: string;
    private readonly lastName: string;

    static age: number = 0;

    constructor(ssn: string, firstName: string, lastName: string, age: number) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;

        Person.age = age;
    }

    public getFullName(): string {
        return `${ this.firstName } ${ this.lastName }`;
    }

    public setFullName(newName: string): void {
        this.ssn = newName; //error
    }
}

let person = new Person('153-07-3130', 'John', 'Doe', 20);
console.log(person.getFullName());
person.setFullName('JaneDoe');
console.log(Person.age);
