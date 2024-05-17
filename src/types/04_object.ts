/**   Object Type Annotations   **/

// declare type then assign values to variable (explicitly specify types)
let object1: object;
object1 = {};

// typescript automatically declares type by assign values
let object2 = {
    isCompleted: true,
    statusText: 'OK',
    statusCode: 200
};

//  type annotation for a constant or variable and initialize it in a single statement
const object3: {
    firstName: string,
    age: number
} = {
    firstName: 'John Doe',
    age: 32
};

// reusable type
type Object4 = {
    firstName: string,
    age: number
}

const object4: Object4 = {
    firstName: 'John Doe',
    age: 32
};

/*
* Tips:
* Hover mouse cursor on variables or constants to see its type.
* If you reassign a new primitive type value(non-object) to the variables you will get an error.
*
* The following are primitive types in TypeScript:
* number
* bigint
* string
* boolean
* null
* undefined
* symbol
* */

