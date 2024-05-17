// Functions
function add(a: number, b: number): number {
    return a + b;
}

add(3, 7);

function echo(message: string): void {
    console.log(message.toUpperCase());
}

echo('Hello, World');

// Function Types
let sum: (a: number, b: number) => number =
    function (x, y) {
        return x + y;
    };

sum(3, 5);

// Optional Parameters
function multiply(a: number, b: number, c?: number): number {

    if ( typeof c !== 'undefined' ) {
        return a * b * c;
    }
    return a * b;
}

multiply(1, 2, 3);
multiply(1, 2);

// Default Parameters
function applyDiscount(price: number, discount: number = 0.05): number {
    return price * ( 1 - discount );
}

console.log(applyDiscount(100)); // 95

// Rest Parameters
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60