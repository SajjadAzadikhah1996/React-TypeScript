/**   Enum Type Annotations   **/

// An enum is a group of named constant values. Enum stands for enumerated type.

// declare type then assign a value to variable (explicitly specify types)
// restrict length and order types
enum Day {
    'SUN' = 1,
    'MON',
    'THE',
    'WED',
    'THU',
    'FRI',
    'SAT'
}

function getDay(day: Day) {
    return day;
}

console.log(getDay(Day.FRI));
console.log(getDay(3));
