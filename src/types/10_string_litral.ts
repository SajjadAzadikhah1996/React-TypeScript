// The string literal types allow you to define a type that accepts only one specified string literal.

type Color = 'RED' | 'GREEN' | 'BLUE';

function func(color: Color) {
    return color;
}

console.log(func('GREEN'));