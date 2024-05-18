/*
* When to use type:
    Use type when defining an alias for primitive types (string, boolean, number, bigint, symbol, etc)
    Use type when defining tuple types
    Use type when defining function types
    Use type when defining a union
    Use type when trying to overload functions in object types via composition
    Use type when needing to take advantage of mapped types

* When to use interface:
    Use interface for all object types where using type is not required (see above)
    Use interface when you want to take advantage of declaration merging.
 */

/*   Primitive types   */
type Nullish = null | undefined;
type Fruit = 'apple' | 'pear' | 'orange';
type Num = number | bigint;

/*   Tuple types   */
type row = [ colOne: number, colTwo: string ];

/*   Function types   */
// via type
type SumType = (x: number, y: number) => number;

// via interface
interface SumInterface {
    (x: number, y: number): number;
}

/*   Union types   */
type Fruits = 'apple' | 'pear' | 'orange';
type Vegetable = 'broccoli' | 'carrot' | 'lettuce';

// 'apple' | 'pear' | 'orange' | 'broccoli' | 'carrot' | 'lettuce';
type HealthyFoods = Fruits | Vegetable;


interface Guy {
    firstName: string,
    lastName: string,
}

function getFullName(person: Guy) {
    return `${ person.firstName } ${ person.lastName }`;
}

console.log(getFullName({ firstName: 'John', lastName: 'Doe' }));

//==============================================================

interface Json {
    toJSON(): string;

    // toJSON: () => string;
}

class Human implements Json {
    constructor(private firstName: string, private lastName: string) {
    }

    toJSON(): string {
        return JSON.stringify(this);
    }
}

let human1 = new Human('John', 'Doe');
console.log(human1.toJSON());

//============================================================

interface Log extends Json {
    log: () => void;
}

class Human1 implements Log {
    constructor(private firstName: string, private lastName: string) {
    }

    log(): void {
        console.log(this);
    }

    toJSON(): string {
        return JSON.stringify(this);
    }

}

//=============================================================

interface Human2 extends Human {
    alert(): void;
}

// if you don't extend or extend from another class that is not extended from Human class you will get an error.
class Human3 extends Human implements Human2 {
    alert(): void {
        window.alert(this);
    }

    toJSON(): string {
        return JSON.stringify(this);
    }

}