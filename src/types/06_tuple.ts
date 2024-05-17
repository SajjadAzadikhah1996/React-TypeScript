/**   Tuple Type Annotations   **/


/*
* A tuple works like an array with some additional considerations:
  1. The number of elements in the tuple is fixed.
  2. The types of elements are known, and need not be the same.
* */

// declare type then assign a value to variable (explicitly specify types)
// restrict length and order types
let tuple1: [ string, number ];
tuple1 = [ 'JaneDoe', 3.1 ];

// restrict length and one of the types
let tuple2: [ string | number, string | number ];
tuple2 = [ 'JaneDoe', 4 ];

//  type annotation for a constant or variable and initialize it in a single statement with optional the tuple element
const tuple3: [ string, number, number? ] = [ 'JohnDoe', 28 ];

/*
* Tips:
* Hover mouse cursor on variables or constants to see its type.
* If you reassign a new primitive type value(non-tuple) to the variables you will get an error.
* */
