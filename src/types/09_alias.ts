// Type aliases allow you to create a new name for an existing type.
type AlphaNumeric = string | number;

function add(value1: AlphaNumeric, value2: AlphaNumeric) {
    if ( typeof value1 === 'number' && typeof value2 === 'number' )
        return value1 + value2;
    else if ( typeof value1 === 'string' && typeof value2 === 'string' )
        return value1.concat(value2);
    throw new Error('Parameters must be numbers or strings');
}

add(3, 6);
add('John', 'Doe');