/**   Array Type Annotations   **/

// declare type then assign a value to variable (explicitly specify types)
    // restrict type of array elements
let array1: string[];
array1 = [ 'true', '1', 'Hello' ];
let array2: number[];
array2 = [ 14.3, 1 ];

// restrict equivalent types
let array3: ( boolean | object )[];
array3 = [ true, { name: 'JohnDoe' }, false ];

// typescript automatically declares type by assign a value to variable
let array4 = [ 3, 'test', true ];
array4[ 0 ] = false; // note that it still works

//  type annotation for a constant or variable and initialize it in a single statement
const array5: string[] = [ 'JahnDoe', 'JaneDoe' ];

/*
* Tips:
* Hover mouse cursor on variables or constants to see its type.
* If you reassign a new primitive type value(non-array) to the variables you will get an error.
* */
