/**   Boolean Type Annotations   **/

// declare type then assign a value to variable (explicitly specify types)
let boolean1: boolean;
boolean1 = true;

// typescript automatically declares type by assign a value to variable
let boolean2 = false;

//  type annotation for a constant or variable and initialize it in a single statement
const boolean3: boolean = boolean1 && boolean2;
const boolean4: boolean = boolean1 || !boolean2;

let boolean5: boolean;
const isCompleted: number = 1;
boolean5 = isCompleted === 1; // you have to cast it to boolean type.

/*
* Tips:
* Hover mouse cursor on variables or constants to see its type.
* If you reassign a new non-boolean value to the variables you will get an error.
* */
